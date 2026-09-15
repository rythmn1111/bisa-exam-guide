import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";
import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";

const CONTENT_DIR = path.join(process.cwd(), "content");

const marked = new Marked(
  markedHighlight({
    emptyLangClass: "hljs",
    langPrefix: "hljs language-",
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : "plaintext";
      try {
        return hljs.highlight(code, { language }).value;
      } catch {
        return hljs.highlight(code, { language: "plaintext" }).value;
      }
    },
  }),
  { gfm: true, breaks: false }
);

function slugify(text) {
  return String(text)
    .toLowerCase()
    .replace(/<[^>]*>/g, "")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/** Split `---\nyaml\n---\nbody` into { data, body }. Tolerates a missing block. */
function parseFrontmatter(raw) {
  const text = raw.replace(/^﻿/, "");
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(text);
  if (!match) return { data: {}, body: text };
  let data = {};
  try {
    data = yaml.load(match[1]) || {};
  } catch (err) {
    console.warn("[content] bad frontmatter, ignoring:", err.message);
  }
  return { data, body: match[2] };
}

/**
 * Pull out `## ...` headings so we can build a per-chapter table of contents and
 * give every heading a stable anchor id. Pattern headings look like
 * "## P7.3 — Label-slice rows and columns", so we lift the id out of the text.
 */
function extractHeadings(body) {
  const headings = [];
  const fenceRe = /^\s*(```|~~~)/;
  let inFence = false;
  for (const line of body.split("\n")) {
    if (fenceRe.test(line)) inFence = !inFence;
    if (inFence) continue;
    const m = /^(#{2,3})\s+(.+?)\s*$/.exec(line);
    if (!m) continue;
    const text = m[2].replace(/\s*#+\s*$/, "");
    const code = /^([A-Z]+\d+(?:\.\d+)?)\s*[—–-]\s*(.*)$/.exec(text);
    headings.push({
      level: m[1].length,
      text,
      id: slugify(text),
      code: code ? code[1] : null,
      label: code ? code[2] : text,
    });
  }
  return headings;
}

/** Re-implement marked's heading renderer so ids match extractHeadings(). */
function renderMarkdown(body) {
  const renderer = {
    heading({ tokens, depth }) {
      const text = this.parser.parseInline(tokens);
      const plain = text.replace(/<[^>]*>/g, "");
      const id = slugify(plain);
      return `<h${depth} id="${id}"><a class="anchor" href="#${id}">#</a>${text}</h${depth}>\n`;
    },
    table({ header, rows }) {
      const head = header
        .map((c) => `<th align="${c.align || "left"}">${this.parser.parseInline(c.tokens)}</th>`)
        .join("");
      const body = rows
        .map(
          (row) =>
            `<tr>${row
              .map((c) => `<td align="${c.align || "left"}">${this.parser.parseInline(c.tokens)}</td>`)
              .join("")}</tr>`
        )
        .join("\n");
      return `<div class="table-wrap"><table><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table></div>\n`;
    },
  };
  const instance = new Marked(
    markedHighlight({
      emptyLangClass: "hljs",
      langPrefix: "hljs language-",
      highlight(code, lang) {
        const language = hljs.getLanguage(lang) ? lang : "plaintext";
        try {
          return hljs.highlight(code, { language }).value;
        } catch {
          return hljs.highlight(code, { language: "plaintext" }).value;
        }
      },
    }),
    { gfm: true, breaks: false }
  );
  instance.use({ renderer });
  return instance.parse(body);
}

/**
 * Slice out whole `## Section` blocks from a chapter body, fence-aware.
 * Used to build the revision digest (every cheat sheet and model answer in one
 * printable place) without duplicating that content in the source files.
 */
function extractSections(body, wanted) {
  const lines = body.split("\n");
  const out = [];
  let inFence = false;
  let current = null;

  for (const line of lines) {
    if (/^\s*(```|~~~)/.test(line)) inFence = !inFence;

    if (!inFence) {
      const h = /^##\s+(.+?)\s*$/.exec(line);
      if (h) {
        if (current) out.push(current);
        const title = h[1].replace(/\s*#+\s*$/, "");
        current = wanted.some((w) => w.test(title)) ? { title, lines: [] } : null;
        continue;
      }
      if (/^#\s+/.test(line)) {
        if (current) out.push(current);
        current = null;
        continue;
      }
    }
    if (current) current.lines.push(line);
  }
  if (current) out.push(current);

  return out
    .map((s) => ({ title: s.title, body: s.lines.join("\n").trim() }))
    .filter((s) => s.body.length > 0);
}

let cache = null;
let rawCache = new Map();

export function getChapters() {
  if (cache && process.env.NODE_ENV === "production") return cache;

  if (!fs.existsSync(CONTENT_DIR)) return [];

  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md") && !f.startsWith("_"));

  const chapters = files.flatMap((file) => {
    let raw;
    try {
      raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
    } catch (e) {
      // A half-written file should not take the whole book down.
      console.warn(`[content] skipping ${file}: ${e.message}`);
      return [];
    }
    const { data, body } = parseFrontmatter(raw);
    const id = data.id || file.replace(/\.md$/, "");
    const headings = extractHeadings(body);
    const words = body.split(/\s+/).filter(Boolean).length;
    rawCache.set(id, body); // kept for the revision digest and function index
    return [{
      id,
      slug: id,
      file,
      title: data.title || id,
      part: data.part || "Appendix",
      blurb: data.blurb || "",
      order: typeof data.order === "number" ? data.order : 9999,
      covers: Array.isArray(data.covers) ? data.covers : [],
      datafiles: Array.isArray(data.datafiles) ? data.datafiles : [],
      patterns: (Array.isArray(data.patterns) ? data.patterns : []).map((p) => ({
        id: p?.id ? String(p.id) : "",
        title: p?.title ? String(p.title) : "",
        phrasings: Array.isArray(p?.phrasings) ? p.phrasings.map(String) : [],
      })),
      headings,
      words,
      minutes: Math.max(1, Math.round(words / 220)),
      html: renderMarkdown(body),
    }];
  });

  chapters.sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
  cache = chapters;
  return chapters;
}

export function getChapter(slug) {
  return getChapters().find((c) => c.slug === slug) || null;
}

/** Chapters grouped into book parts, in reading order. */
export function getParts() {
  const parts = [];
  for (const ch of getChapters()) {
    let part = parts.find((p) => p.name === ch.part);
    if (!part) {
      part = { name: ch.part, chapters: [] };
      parts.push(part);
    }
    part.chapters.push(ch);
  }
  return parts;
}

/**
 * Flat, searchable list of every pattern in the book. This is what the reader
 * actually uses in the exam: match the question's wording, jump to the pattern.
 */
export function getPatternIndex() {
  const out = [];
  for (const ch of getChapters()) {
    const byCode = new Map(ch.headings.filter((h) => h.code).map((h) => [h.code, h.id]));
    for (const p of ch.patterns) {
      out.push({
        ...p,
        anchor: byCode.get(p.id) || slugify(`${p.id} — ${p.title}`),
        chapterId: ch.id,
        chapterTitle: ch.title,
        part: ch.part,
      });
    }
  }
  return out;
}

/**
 * The revision digest: every cheat sheet, decision table and model written
 * answer in the book, pulled into one place for the night before the exam.
 */
const DIGEST_GROUPS = [
  {
    key: "cheatsheets",
    heading: "Cheat sheets",
    note: "The end-of-chapter summaries, back to back. If you print one thing, print this.",
    match: [/^Chapter cheat sheet$/i, /^Exam script$/i, /^Derived-column formula sheet$/i],
  },
  {
    key: "decisions",
    heading: "Decision tables",
    note: "Question wording on the left, the exact call on the right.",
    match: [
      /verb\s*(→|->)\s*code/i,
      /decision tree/i,
      /which chart/i,
      /^Chapter map$/i,
      /question-spotting/i,
      /phrase\s*(→|->)\s*code/i,
    ],
  },
  {
    key: "written",
    heading: "Model written answers",
    note: "The discussion questions carry marks of their own. These are ready to reproduce.",
    match: [/^Write-up answers$/i, /mark-saving/i, /^When you are stuck$/i, /sanity check/i],
  },
];

export function getDigest() {
  const chapters = getChapters();
  return DIGEST_GROUPS.map((group) => ({
    key: group.key,
    heading: group.heading,
    note: group.note,
    items: chapters.flatMap((ch) => {
      const body = rawCache.get(ch.id) || "";
      return extractSections(body, group.match).map((s) => ({
        chapterId: ch.id,
        chapterTitle: ch.title,
        title: s.title,
        html: renderMarkdown(s.body),
      }));
    }),
  })).filter((g) => g.items.length > 0);
}

/**
 * The functions the course actually examines — the lecture hands out a table of
 * 42 DataFrame methods, and the exercises add the plotting and time-series ones.
 * Grouped so the index reads like a reference card.
 */
const FUNCTION_GROUPS = [
  {
    group: "Reading and writing",
    fns: ["pd.read_csv", "pd.read_excel", "to_csv", "to_excel", "pd.ExcelWriter", "pd.Series", "pd.DataFrame"],
  },
  {
    group: "Inspecting",
    fns: ["head", "tail", "shape", "columns", "index", "info", "describe", "dtypes", "memory_usage", "select_dtypes", "sample", "nunique", "unique", "value_counts", "count"],
  },
  {
    group: "Missing data",
    fns: ["isna", "isnull", "notna", "notnull", "fillna", "dropna", "ffill", "bfill", "duplicated", "drop_duplicates", "na_values"],
  },
  {
    group: "Selecting and ordering",
    fns: ["loc", "iloc", "isin", "set_index", "reset_index", "sort_values", "sort_index", "nlargest", "nsmallest", "rename", "drop", "astype", "replace"],
  },
  {
    group: "Aggregating and reshaping",
    fns: ["groupby", "agg", "pivot_table", "pivot", "melt", "pd.crosstab", "transform", "apply", "map", "mean", "median", "std", "var", "min", "max", "sum", "corr", "mode", "quantile", "idxmax", "idxmin", "size", "round"],
  },
  {
    group: "Binning and dates",
    fns: ["pd.cut", "pd.qcut", "pd.to_datetime", "dt.year", "dt.month", "dayfirst"],
  },
  {
    group: "Time series",
    fns: ["shift", "diff", "pct_change", "cumsum", "cumprod", "rolling", "expanding"],
  },
  {
    group: "Combining",
    fns: ["pd.concat", "merge", "join", "ignore_index", "indicator", "suffixes"],
  },
  {
    group: "Plotting",
    fns: ["plt.hist", "plt.bar", "plt.barh", "plt.scatter", "plt.boxplot", "plt.pie", "plt.plot", "plt.subplot", "plt.subplots", "plt.figure", "plt.savefig", "plt.tight_layout", "plt.legend", "plt.grid", "plt.text", "plt.annotate", "plt.xticks", "plt.colorbar", "df.plot", "df.hist"],
  },
  {
    group: "Core Python",
    fns: ["input", "enumerate", "zip", "range", "len", "append", "strip", "title", "lower", "split", "join", "any", "sorted", "return", "def", "docstring", "f-string"],
  },
];

export function getFunctionIndex() {
  const chapters = getChapters();

  return FUNCTION_GROUPS.map((g) => ({
    group: g.group,
    fns: g.fns
      .map((fn) => {
        // Match the bare method name so `df.head(5)` and `.head()` both count.
        const bare = fn.replace(/^(pd|plt|df|dt)\./, "").replace(/[()]/g, "");
        const re = new RegExp(`[.\\s\`(\\[]${bare.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "g");
        const hits = chapters
          .map((ch) => {
            const body = rawCache.get(ch.id) || "";
            return { ch, n: (body.match(re) || []).length };
          })
          .filter((h) => h.n > 0)
          .sort((a, b) => b.n - a.n);
        return {
          fn,
          total: hits.reduce((n, h) => n + h.n, 0),
          chapters: hits.slice(0, 3).map((h) => ({ id: h.ch.id, title: h.ch.title, n: h.n })),
        };
      })
      .filter((f) => f.chapters.length > 0),
  })).filter((g) => g.fns.length > 0);
}

/**
 * What the search box queries: every pattern, plus the named sections that are
 * not patterns (worked cases, full solutions, decision tables). Patterns rank
 * above sections because their `phrasings` are curated exam wordings.
 */
const GENERIC_SECTIONS = /^(chapter map|setup|setup and base paths|chapter cheat sheet)$/i;

export function getSearchIndex() {
  const entries = getPatternIndex().map((p) => ({ ...p, kind: "pattern" }));

  for (const ch of getChapters()) {
    const codes = new Set(ch.patterns.map((p) => p.id));
    for (const h of ch.headings) {
      if (h.level !== 2) continue;
      if (h.code && codes.has(h.code)) continue; // already indexed as a pattern
      if (GENERIC_SECTIONS.test(h.text.trim())) continue;
      entries.push({
        kind: "section",
        id: "§",
        title: h.text,
        phrasings: [],
        anchor: h.id,
        chapterId: ch.id,
        chapterTitle: ch.title,
        part: ch.part,
      });
    }
  }
  return entries;
}

export function getBookStats() {
  const chapters = getChapters();
  return {
    chapters: chapters.length,
    patterns: chapters.reduce((n, c) => n + c.patterns.length, 0),
    words: chapters.reduce((n, c) => n + c.words, 0),
    minutes: chapters.reduce((n, c) => n + c.minutes, 0),
  };
}

export { slugify };
