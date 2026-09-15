import Link from "next/link";
import { notFound } from "next/navigation";
import { getChapter, getChapters } from "@/lib/content";

export function generateStaticParams() {
  return getChapters().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const ch = getChapter(slug);
  if (!ch) return { title: "Not found" };
  return { title: ch.title, description: ch.blurb };
}

export default async function ChapterPage({ params }) {
  const { slug } = await params;
  const chapters = getChapters();
  const idx = chapters.findIndex((c) => c.slug === slug);
  if (idx === -1) notFound();

  const ch = chapters[idx];
  const prev = chapters[idx - 1] || null;
  const next = chapters[idx + 1] || null;
  const toc = ch.headings.filter((h) => h.level === 2);

  return (
    <>
      <main className="main">
        <div className="page">
          <article className="prose">
            <div className="ch-kicker">
              {ch.part} · Chapter {String(idx + 1).padStart(2, "0")}
            </div>
            <h1>{ch.title}</h1>
            {ch.blurb ? <p className="ch-blurb">{ch.blurb}</p> : null}
            <div className="ch-meta">
              {ch.patterns.length > 0 && (
                <span className="chip solid">{ch.patterns.length} patterns</span>
              )}
              <span className="chip">{ch.minutes} min</span>
              {ch.covers.map((c) => (
                <span className="chip" key={c}>
                  {c}
                </span>
              ))}
            </div>
            <div dangerouslySetInnerHTML={{ __html: ch.html }} />
          </article>

          <nav className="chapter-nav no-print">
            {prev ? (
              <Link href={`/ch/${prev.slug}`} className="prev">
                <span className="dir">Previous</span>
                <span className="ttl">{prev.title}</span>
              </Link>
            ) : (
              <Link href="/" className="prev">
                <span className="dir">Back</span>
                <span className="ttl">Contents</span>
              </Link>
            )}
            {next ? (
              <Link href={`/ch/${next.slug}`} className="next">
                <span className="dir">Next</span>
                <span className="ttl">{next.title}</span>
              </Link>
            ) : (
              <Link href="/patterns" className="next">
                <span className="dir">Next</span>
                <span className="ttl">Pattern index</span>
              </Link>
            )}
          </nav>
        </div>
      </main>

      {toc.length > 1 && (
        <aside className="pagetoc no-print">
          <h4>On this page</h4>
          {ch.headings
            .filter((h) => h.level <= 3)
            .map((h) => (
              <a key={h.id} href={`#${h.id}`} className={h.level === 3 ? "lvl3" : ""}>
                {h.code ? `${h.code} · ${h.label}` : h.text}
              </a>
            ))}
        </aside>
      )}
    </>
  );
}
