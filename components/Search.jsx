"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";

/** Token-overlap scoring: favours hits in the pattern title, then in exam phrasings. */
function score(entry, tokens) {
  const title = entry.title.toLowerCase();
  const chapter = entry.chapterTitle.toLowerCase();
  const phrasings = entry.phrasings.map((p) => p.toLowerCase());
  const code = entry.id.toLowerCase();

  let total = 0;
  for (const t of tokens) {
    let best = 0;
    if (code === t) best = 60;
    else if (code.startsWith(t)) best = 30;
    if (title.includes(t)) best = Math.max(best, title.startsWith(t) ? 22 : 16);
    // A curated pattern beats a section heading on an equal textual match.
    if (entry.kind === "section") best = best * 0.75;
    for (const p of phrasings) {
      if (p.includes(t)) {
        best = Math.max(best, 11);
        break;
      }
    }
    if (chapter.includes(t)) best = Math.max(best, 5);
    if (best === 0) return 0; // every token must land somewhere
    total += best;
  }
  return total;
}

function bestPhrasing(entry, tokens) {
  let winner = entry.phrasings[0] || "";
  let hits = -1;
  for (const p of entry.phrasings) {
    const low = p.toLowerCase();
    const n = tokens.filter((t) => low.includes(t)).length;
    if (n > hits) {
      hits = n;
      winner = p;
    }
  }
  return winner;
}

function Highlight({ text, tokens }) {
  if (!tokens.length || !text) return <>{text}</>;
  const escaped = tokens
    .filter((t) => t.length > 1)
    .map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .sort((a, b) => b.length - a.length);
  if (!escaped.length) return <>{text}</>;
  const parts = text.split(new RegExp(`(${escaped.join("|")})`, "ig"));
  const lower = tokens.map((t) => t.toLowerCase());
  return (
    <>
      {parts.map((part, i) =>
        lower.includes(part.toLowerCase()) ? <mark key={i}>{part}</mark> : <span key={i}>{part}</span>
      )}
    </>
  );
}

export default function Search({ patterns }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [sel, setSel] = useState(0);
  const boxRef = useRef(null);
  const inputRef = useRef(null);
  const router = useRouter();

  const tokens = useMemo(
    () =>
      query
        .toLowerCase()
        .split(/[^a-z0-9_.]+/)
        .filter((t) => t.length > 1 || /\d/.test(t)),
    [query]
  );

  const hits = useMemo(() => {
    if (!tokens.length) return [];
    return patterns
      .map((entry) => ({ entry, s: score(entry, tokens) }))
      .filter((r) => r.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 14)
      .map((r) => r.entry);
  }, [patterns, tokens]);

  useEffect(() => setSel(0), [query]);

  useEffect(() => {
    function onKey(e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
        inputRef.current?.select();
        setOpen(true);
      }
      if (e.key === "Escape") {
        setOpen(false);
        inputRef.current?.blur();
      }
    }
    function onClick(e) {
      if (boxRef.current && !boxRef.current.contains(e.target)) setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  function go(entry) {
    setOpen(false);
    setQuery("");
    router.push(`/ch/${entry.chapterId}#${entry.anchor}`);
  }

  function onInputKey(e) {
    if (!hits.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSel((s) => (s + 1) % hits.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSel((s) => (s - 1 + hits.length) % hits.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      go(hits[sel]);
    }
  }

  return (
    <div className="search-wrap" ref={boxRef}>
      <input
        ref={inputRef}
        className="search-input"
        placeholder="Paste an exam question…"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={onInputKey}
        aria-label="Search patterns by exam wording"
      />
      {!query && <span className="search-kbd">⌘K</span>}
      {open && query.trim().length > 0 && (
        <div className="search-results">
          {hits.length === 0 ? (
            <div className="search-empty">
              No pattern matches those words. Try the key verb only — &ldquo;pivot&rdquo;,
              &ldquo;ffill&rdquo;, &ldquo;cumulative&rdquo;, &ldquo;boxplot&rdquo;,
              &ldquo;default parameter&rdquo;.
            </div>
          ) : (
            hits.map((entry, i) => (
              <a
                key={`${entry.chapterId}-${entry.id}-${i}`}
                href={`/ch/${entry.chapterId}#${entry.anchor}`}
                className={`search-hit${i === sel ? " sel" : ""}`}
                onMouseEnter={() => setSel(i)}
                onClick={(e) => {
                  e.preventDefault();
                  go(entry);
                }}
              >
                <div className="code">{entry.kind === "section" ? "section" : entry.id}</div>
                <div className="t">
                  <Highlight text={entry.title} tokens={tokens} />
                </div>
                {entry.phrasings.length > 0 && (
                  <div className="p">
                    &ldquo;<Highlight text={bestPhrasing(entry, tokens)} tokens={tokens} />&rdquo;
                  </div>
                )}
                <div className="c">{entry.chapterTitle}</div>
              </a>
            ))
          )}
        </div>
      )}
    </div>
  );
}
