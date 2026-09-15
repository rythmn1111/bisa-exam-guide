import Link from "next/link";
import { getDigest } from "@/lib/content";
import AutoPrint from "@/components/AutoPrint";

export const metadata = {
  title: "Revision digest",
  description:
    "Every cheat sheet, decision table and model written answer in the book, collected for the night before the exam.",
};

export default function RevisionPage() {
  const groups = getDigest();
  const count = groups.reduce((n, g) => n + g.items.length, 0);

  return (
    <main className="main">
      <AutoPrint />
      <div className="page">
        <article className="prose">
          <div className="ch-kicker">Part VII · Exam Room</div>
          <h1>Revision digest</h1>
          <p className="ch-blurb">
            {count} sections pulled out of the chapters: every cheat sheet, every question-wording
            decision table, and every model written answer. Nothing new here — this is the book
            with the explanations removed, for the last pass before the exam.
          </p>
          <div className="ch-meta">
            <span className="chip solid">{count} sections</span>
            <span className="chip">
              <a href="/revision?autoprint=1" className="no-print">
                Print just this
              </a>
            </span>
          </div>
        </article>

        {groups.map((group) => (
          <section key={group.key} className="prose">
            <h2 id={group.key}>{group.heading}</h2>
            <p>{group.note}</p>
            {group.items.map((item, i) => (
              <div key={`${item.chapterId}-${i}`} style={{ marginTop: "1.8em" }}>
                <h3 id={`${group.key}-${item.chapterId}-${i}`}>
                  <Link href={`/ch/${item.chapterId}`} style={{ color: "inherit", textDecoration: "none" }}>
                    {item.chapterTitle}
                  </Link>
                  <span
                    style={{
                      fontFamily: "var(--sans)",
                      fontSize: "11.5px",
                      fontWeight: 400,
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                      color: "var(--ink-faint)",
                      marginLeft: "10px",
                    }}
                  >
                    {item.title}
                  </span>
                </h3>
                <div dangerouslySetInnerHTML={{ __html: item.html }} />
              </div>
            ))}
          </section>
        ))}
      </div>
    </main>
  );
}
