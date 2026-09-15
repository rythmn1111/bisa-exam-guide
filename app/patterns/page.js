import Link from "next/link";
import { getChapters, getPatternIndex } from "@/lib/content";

export const metadata = {
  title: "Pattern index",
  description: "Every solvable pattern in the book, with the exam wordings that map to it.",
};

export default function PatternsPage() {
  const chapters = getChapters();
  const patterns = getPatternIndex();

  return (
    <main className="main">
      <div className="page">
        <article className="prose">
          <div className="ch-kicker">Reference</div>
          <h1>Pattern index</h1>
          <p className="ch-blurb">
            {patterns.length} patterns across {chapters.length} chapters. Each one lists the exam
            wordings that map to it — scan the quoted phrases, not the titles.
          </p>
        </article>

        {chapters
          .filter((ch) => ch.patterns.length > 0)
          .map((ch) => (
            <div className="pi-group" key={ch.id}>
              <h3>
                <Link href={`/ch/${ch.id}`}>{ch.title}</Link>
              </h3>
              {ch.patterns.map((p) => {
                const heading = ch.headings.find((h) => h.code === p.id);
                const anchor = heading ? heading.id : "";
                return (
                  <Link key={p.id} href={`/ch/${ch.id}${anchor ? `#${anchor}` : ""}`} className="pi-row">
                    <span className="code">{p.id}</span>
                    <span>
                      <span className="t">{p.title}</span>
                      {p.phrasings.length > 0 && (
                        <span className="ph">
                          {p.phrasings.slice(0, 3).map((ph) => `“${ph}”`).join("  ·  ")}
                        </span>
                      )}
                    </span>
                  </Link>
                );
              })}
            </div>
          ))}
      </div>
    </main>
  );
}
