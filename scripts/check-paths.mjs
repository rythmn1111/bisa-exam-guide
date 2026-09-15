#!/usr/bin/env bun
/**
 * Every code block in this book is meant to be copy-pasteable, so a wrong data
 * path is a real defect. This resolves every Exercises/... path and every
 * sheet_name= referenced in the content and checks it actually exists.
 *
 * Usage: bun run scripts/check-paths.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const ROOT = path.resolve(import.meta.dir, "..");
const CONTENT = path.join(ROOT, "content");
const EXERCISES = path.resolve(ROOT, "..", "Exercises");

if (!fs.existsSync(EXERCISES)) {
  console.error(`Cannot find ${EXERCISES}`);
  process.exit(1);
}

// ---- every real file, indexed by basename and by suffix ----
const realFiles = [];
(function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith(".")) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else realFiles.push(full);
  }
})(EXERCISES);

const byBasename = new Map();
for (const f of realFiles) {
  const b = path.basename(f);
  if (!byBasename.has(b)) byBasename.set(b, []);
  byBasename.get(b).push(f);
}

// ---- sheet names per workbook (via python, which is already installed) ----
const sheetsOf = new Map();
function getSheets(file) {
  if (sheetsOf.has(file)) return sheetsOf.get(file);
  let names = [];
  try {
    const out = execFileSync(
      "python3",
      ["-c", "import sys,pandas as pd;print('\\n'.join(pd.ExcelFile(sys.argv[1]).sheet_names))", file],
      { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }
    );
    names = out.split("\n").map((s) => s.trim()).filter(Boolean);
  } catch {
    names = [];
  }
  sheetsOf.set(file, names);
  return names;
}

let bad = 0;
let checkedPaths = 0;
let checkedSheets = 0;

for (const file of fs.readdirSync(CONTENT).filter((f) => f.endsWith(".md")).sort()) {
  const raw = fs.readFileSync(path.join(CONTENT, file), "utf8");
  const problems = [];

  // --- data file references: any quoted string containing a known data extension ---
  for (const m of raw.matchAll(/["']([^"'\n]*\.(?:csv|tsv|xlsx|xls|ipynb))["']/g)) {
    const ref = m[1];
    // Skip things the reader is told to CREATE, and generic placeholders.
    if (/^(output|out|multi_sheet|data_out|summary|FILE|f|filename|workbook|my|new)/i.test(path.basename(ref))) continue;
    if (/[A-Z_]{3,}\.(csv|xlsx)/.test(path.basename(ref))) continue; // FILE.csv style
    if (ref.includes("C:/") || ref.includes("C:\\") || ref.startsWith("/Users/")) continue; // path-syntax examples
    if (ref.startsWith("/private/tmp") || ref.startsWith("/tmp")) continue; // scratch

    const base = path.basename(ref);
    if (!byBasename.has(base)) {
      // Only complain if it looks like it was meant to be a course file.
      if (ref.includes("Exercises/") || ref.includes("BASE")) problems.push(`unknown data file: ${ref}`);
      continue;
    }
    checkedPaths++;

    // If an absolute path is given, it must resolve.
    if (ref.startsWith("/") && !fs.existsSync(ref)) problems.push(`path does not exist: ${ref}`);

    // If a BASE-relative suffix is given, some real file must end with it.
    const rel = ref.replace(/^.*Exercises\//, "");
    if (rel !== ref && !realFiles.some((f) => f.endsWith("/" + rel))) {
      problems.push(`no file ends with Exercises/${rel}`);
    }
  }

  // --- sheet_name="X" must exist in some workbook this chapter uses ---
  const workbooks = new Set();
  for (const m of raw.matchAll(/([^"'\n]*\.xlsx)/g)) {
    const base = path.basename(m[1]);
    for (const f of byBasename.get(base) || []) workbooks.add(f);
  }
  const available = new Set();
  for (const wb of workbooks) for (const s of getSheets(wb)) available.add(s);

  if (available.size > 0) {
    // Only READS must name a real sheet — `to_excel`/`ExcelWriter` create new ones.
    // Placeholders (SHEET, S, X, S1) are part of the templates, not references.
    const isPlaceholder = (s) =>
      s.length <= 2 ||
      /^[A-Z][A-Z0-9_ ]*$/.test(s) || // SHEET, SHEET_NAME
      /^Sheet\d*$/.test(s); // Excel's own default names, used illustratively
    const lines = raw.split("\n");

    for (let i = 0; i < lines.length; i++) {
      const call = /read_excel\s*\(([^)]*)\)/.exec(lines[i]);
      if (!call) continue;
      const m = /sheet_name\s*=\s*["']([^"']+)["']/.exec(call[1]);
      if (!m) continue;
      const sheet = m[1];
      if (isPlaceholder(sheet)) continue;

      // Files the chapter itself wrote earlier (an OUT/temp dir) legitimately
      // contain sheets that do not exist in the course workbooks.
      if (/\b(OUT|TMP|SCRATCH|out_dir)\b/.test(call[1])) continue;

      // Blocks that deliberately demonstrate a failure.
      if (/#.*\b(WRONG|wrong|error|fails|instead of|deliberate)\b/.test(lines[i])) continue;

      checkedSheets++;
      if (!available.has(sheet)) {
        problems.push(`read_excel(sheet_name="${sheet}") not found in this chapter's workbooks (line ${i + 1})`);
      }
    }
  }

  const unique = [...new Set(problems)];
  if (unique.length) {
    bad += unique.length;
    console.log(`  ${file}`);
    for (const p of unique) console.log(`    - ${p}`);
  } else {
    console.log(`  ok  ${file}`);
  }
}

console.log(
  `\n${checkedPaths} file references and ${checkedSheets} sheet names checked against ${realFiles.length} real files · ${bad} problems`
);
process.exit(bad > 0 ? 1 : 0);
