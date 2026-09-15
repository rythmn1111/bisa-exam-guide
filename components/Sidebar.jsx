"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar({ nav }) {
  const pathname = usePathname();
  let n = 0;

  return (
    <nav className="sidebar no-print" aria-label="Contents">
      <Link href="/" className={pathname === "/" ? "active" : ""}>
        Cover &amp; contents
      </Link>
      <Link href="/patterns" className={pathname === "/patterns" ? "active" : ""}>
        Pattern index
      </Link>
      <Link href="/functions" className={pathname === "/functions" ? "active" : ""}>
        Function index
      </Link>
      {nav.map((part) => (
        <div key={part.name}>
          <div className="sidebar-part">{part.name}</div>
          {part.chapters.map((ch) => {
            n += 1;
            const href = `/ch/${ch.id}`;
            return (
              <Link key={ch.id} href={href} className={pathname === href ? "active" : ""}>
                <span className="num">{String(n).padStart(2, "0")}</span>
                {ch.title}
              </Link>
            );
          })}
        </div>
      ))}
      <div className="sidebar-part">Exam room</div>
      <Link href="/revision" className={pathname === "/revision" ? "active" : ""}>
        Revision digest
      </Link>
      <Link href="/print" className={pathname === "/print" ? "active" : ""}>
        Whole book (one page)
      </Link>
    </nav>
  );
}
