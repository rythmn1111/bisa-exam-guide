import Link from "next/link";
import { getParts, getBookStats } from "@/lib/content";

export default function HomePage() {
  const parts = getParts();
  const stats = getBookStats();
  let n = 0;

  return (
    <main className="main">
      <div className="page">
        <header className="cover">
          <div className="eyebrow">Goa Institute of Management · BIFS 2026–27</div>
          <h1>Introduction to Python — The Exam Guide</h1>
          <p className="tagline">
            Every question in the course exercise bank, torn down to the pattern behind it,
            generalised to the forms an examiner can ask, and answered with code that has been
            run against the real data files.
          </p>
          <div className="stats">
            <div className="stat">
              <span className="n">{stats.chapters}</span>
              <span className="l">Chapters</span>
            </div>
            <div className="stat">
              <span className="n">{stats.patterns}</span>
              <span className="l">Patterns</span>
            </div>
            <div className="stat">
              <span className="n">{stats.words.toLocaleString("en-IN")}</span>
              <span className="l">Words</span>
            </div>
            <div className="stat">
              <span className="n">58</span>
              <span className="l">Source files</span>
            </div>
          </div>
        </header>

        <section className="prose">
          <h2 id="how-to-use-this-book">How to use this book</h2>
          <ol>
            <li>
              <strong>Read the question, find the pattern.</strong> Paste the exam wording into the
              search box at the top (<code>⌘K</code>). It matches against the{" "}
              <em>exam phrasings</em> recorded for every pattern, not just headings — so
              &ldquo;slice records from 2024-01-10 to 2024-01-20&rdquo; lands on the date-slicing
              pattern directly.
            </li>
            <li>
              <strong>Copy the template, rename the columns.</strong> Every pattern has a
              placeholder template above its worked example. Substitution is mechanical.
            </li>
            <li>
              <strong>Check the Variants table.</strong> It lists what changes in the code when the
              question changes — descending instead of ascending, two keys instead of one, a date
              range instead of a label.
            </li>
            <li>
              <strong>Read the Traps.</strong> These are the marks people actually lose:
              parentheses in filters, <code>loc</code> including the stop label, bin-edge
              conventions, <code>savefig</code> before <code>show</code>.
            </li>
            <li>
              <strong>Sit the mocks.</strong> Part VII has four papers modelled on the real
              question paper, with marking schemes.
            </li>
          </ol>
          <p>
            The <strong>Download PDF</strong> button in the header renders this entire book —
            every chapter, in order — into one printable file you can take offline.
          </p>
        </section>

        <section>
          <h2 className="print-only">Contents</h2>
          {parts.map((part) => (
            <div className="toc-part" key={part.name}>
              <h2>{part.name}</h2>
              <ul className="toc-list">
                {part.chapters.map((ch) => {
                  n += 1;
                  return (
                    <li key={ch.id}>
                      <Link href={`/ch/${ch.id}`}>
                        <span className="n">{String(n).padStart(2, "0")}</span>
                        <span>
                          <span className="t">{ch.title}</span>
                          {ch.blurb ? <span className="b">{ch.blurb}</span> : null}
                          <span className="meta">
                            {ch.patterns.length > 0 ? `${ch.patterns.length} patterns · ` : ""}
                            {ch.minutes} min read
                            {ch.covers.length ? ` · covers ${ch.covers.join("; ")}` : ""}
                          </span>
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
