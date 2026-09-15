import Link from "next/link";
import { getFunctionIndex } from "@/lib/content";

export const metadata = {
  title: "Function index",
  description:
    "Every function the course examines, and the chapter that teaches it. For when you remember the name but not the arguments.",
};

export default function FunctionsPage() {
  const groups = getFunctionIndex();
  const total = groups.reduce((n, g) => n + g.fns.length, 0);

  return (
    <main className="main">
      <div className="page">
        <article className="prose">
          <div className="ch-kicker">Reference</div>
          <h1>Function index</h1>
          <p className="ch-blurb">
            {total} functions, grouped by job. The lecture handout lists 42 DataFrame methods as
            examinable and the exercises add the plotting and time-series ones — this is all of
            them, each pointing at the chapter that uses it most.
          </p>
        </article>

        {groups.map((g) => (
          <section key={g.group} className="prose">
            <h2 id={g.group.toLowerCase().replace(/\s+/g, "-")}>{g.group}</h2>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th style={{ width: "24%" }}>Function</th>
                    <th>Taught in</th>
                    <th style={{ width: "12%" }}>Mentions</th>
                  </tr>
                </thead>
                <tbody>
                  {g.fns.map((f) => (
                    <tr key={f.fn}>
                      <td>
                        <code>{f.fn}</code>
                      </td>
                      <td>
                        {f.chapters.map((c, i) => (
                          <span key={c.id}>
                            {i > 0 ? ", " : ""}
                            <Link href={`/ch/${c.id}`}>{c.title}</Link>
                          </span>
                        ))}
                      </td>
                      <td>{f.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
