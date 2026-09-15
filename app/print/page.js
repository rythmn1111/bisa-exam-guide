import { getChapters, getParts, getBookStats, getDigest } from "@/lib/content";
import AutoPrint from "@/components/AutoPrint";

export const metadata = {
  title: "Whole book",
  robots: { index: false },
};

/**
 * The entire book on one page, ordered, with print CSS applied.
 * /api/pdf renders this route in headless Chrome; humans can also open it and
 * use their browser's print dialog (?autoprint=1 opens the dialog for them).
 */
export default function PrintPage() {
  const chapters = getChapters();
  const parts = getParts();
  const stats = getBookStats();
  const printed = new Date().toISOString().slice(0, 10);
  let n = 0;

  return (
    <main className="main">
      <AutoPrint />
      <div className="page">
        {/* ---- title page ---- */}
        <section className="prose" style={{ textAlign: "center", paddingTop: "22mm" }}>
          <div className="ch-kicker">Goa Institute of Management · BIFS 2026–27</div>
          <h1 style={{ fontSize: "30pt", marginBottom: "6pt" }}>
            Introduction to Python
            <br />
            The Exam Guide
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#4a4a52", maxWidth: "30em", margin: "0 auto 14pt" }}>
            Pandas · Matplotlib · Core Python. Every exercise in the course bank, reduced to
            reusable patterns and verified code.
          </p>
          <p style={{ fontSize: "0.85rem", color: "#7c7c88" }}>
            {stats.chapters} chapters · {stats.patterns} patterns · {stats.words.toLocaleString("en-IN")} words
            <br />
            Compiled {printed}
          </p>
        </section>

        {/* ---- contents ---- */}
        <section className="prose" style={{ breakBefore: "page", pageBreakBefore: "always" }}>
          <h1>Contents</h1>
          {parts.map((part) => (
            <div key={part.name}>
              <h3>{part.name}</h3>
              <ul>
                {part.chapters.map((ch) => {
                  n += 1;
                  return (
                    <li key={ch.id}>
                      <strong>
                        {String(n).padStart(2, "0")}. {ch.title}
                      </strong>
                      {ch.blurb ? ` — ${ch.blurb}` : ""}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </section>

        {/* ---- chapters ---- */}
        {chapters.map((ch, i) => (
          <section
            key={ch.id}
            className="prose"
            style={{ breakBefore: "page", pageBreakBefore: "always" }}
          >
            <div className="ch-kicker">
              {ch.part} · Chapter {String(i + 1).padStart(2, "0")}
            </div>
            <h1 id={`chapter-${ch.id}`}>{ch.title}</h1>
            {ch.blurb ? <p className="ch-blurb">{ch.blurb}</p> : null}
            {ch.covers.length > 0 && (
              <div className="ch-meta">
                {ch.covers.map((c) => (
                  <span className="chip" key={c}>
                    {c}
                  </span>
                ))}
              </div>
            )}
            <div dangerouslySetInnerHTML={{ __html: ch.html }} />
          </section>
        ))}

        {/* ---- appendix A: revision digest ---- */}
        {getDigest().map((group, gi) => (
          <section
            key={group.key}
            className="prose"
            style={{ breakBefore: "page", pageBreakBefore: "always" }}
          >
            {gi === 0 && (
              <>
                <div className="ch-kicker">Appendix A</div>
                <h1>Revision digest</h1>
                <p className="ch-blurb">
                  Every cheat sheet, decision table and model written answer from the chapters
                  above, collected for the last pass before the exam.
                </p>
              </>
            )}
            <h2>{group.heading}</h2>
            <p>{group.note}</p>
            {group.items.map((item, i) => (
              <div key={`${item.chapterId}-${i}`}>
                <h3>
                  {item.chapterTitle} — {item.title}
                </h3>
                <div dangerouslySetInnerHTML={{ __html: item.html }} />
              </div>
            ))}
          </section>
        ))}

        {/* ---- pattern index ---- */}
        <section className="prose" style={{ breakBefore: "page", pageBreakBefore: "always" }}>
          <div className="ch-kicker">Appendix B</div>
          <h1>Pattern index</h1>
          <p>Match the exam wording, then turn to the pattern.</p>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Pattern</th>
                  <th>Solves</th>
                  <th>Typical wording</th>
                </tr>
              </thead>
              <tbody>
                {chapters.flatMap((ch) =>
                  ch.patterns.map((p) => (
                    <tr key={`${ch.id}-${p.id}`}>
                      <td>
                        <code>{p.id}</code>
                      </td>
                      <td>{p.title}</td>
                      <td>{p.phrasings[0] ? `“${p.phrasings[0]}”` : ""}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
