"use client";

import Link from "next/link";
import Search from "./Search";
import PdfButton from "./PdfButton";

export default function TopBar({ patterns }) {
  return (
    <header className="topbar no-print">
      <Link href="/" className="topbar-brand">
        <span className="mark">BISA</span>
        <span>Exam Guide</span>
        <span className="sub">Python · Pandas · Matplotlib</span>
      </Link>
      <div className="topbar-spacer" />
      <Search patterns={patterns} />
      <Link href="/patterns" className="btn">
        Pattern index
      </Link>
      <Link href="/revision" className="btn">
        Revision
      </Link>
      <PdfButton />
    </header>
  );
}
