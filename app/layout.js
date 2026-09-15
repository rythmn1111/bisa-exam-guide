import "./globals.css";
import "highlight.js/styles/atom-one-dark.css";
import { getParts, getSearchIndex } from "@/lib/content";
import TopBar from "@/components/TopBar";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: {
    default: "BISA Exam Guide — Python, Pandas & Matplotlib",
    template: "%s · BISA Exam Guide",
  },
  description:
    "A pattern-by-pattern exam guide built from the BIFS / Introduction to Python exercise bank: every question torn down to its core, generalised, and answered with verified code.",
};

export default function RootLayout({ children }) {
  const parts = getParts();
  const patterns = getSearchIndex();

  const nav = parts.map((p) => ({
    name: p.name,
    chapters: p.chapters.map((c) => ({ id: c.id, title: c.title })),
  }));

  return (
    <html lang="en">
      <body>
        <TopBar patterns={patterns} />
        <div className="shell">
          <Sidebar nav={nav} />
          {children}
        </div>
      </body>
    </html>
  );
}
