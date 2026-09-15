"use client";

import { useState } from "react";

/**
 * Downloads the whole book as one PDF.
 *
 * Primary path: /api/pdf renders the single-page /print route in headless Chrome
 * and streams back a real file. If Chrome is not available on the host we fall
 * back to opening /print and triggering the browser's own print-to-PDF dialog.
 */
export default function PdfButton() {
  const [state, setState] = useState("idle");

  async function download() {
    setState("working");
    try {
      const res = await fetch("/api/pdf", { cache: "no-store" });
      if (!res.ok) throw new Error(`pdf route returned ${res.status}`);
      const blob = await res.blob();
      if (blob.size < 2000) throw new Error("pdf looked empty");

      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "BISA-Exam-Guide.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 10000);
      setState("done");
      setTimeout(() => setState("idle"), 2600);
    } catch (err) {
      console.warn("[pdf] server render failed, falling back to print dialog:", err);
      setState("idle");
      window.open("/print?autoprint=1", "_blank");
    }
  }

  return (
    <button
      className="btn btn-primary"
      onClick={download}
      disabled={state === "working"}
      title="Download the entire book as a single PDF"
    >
      {state === "working" ? (
        <>
          <span className="spin" />
          Building PDF…
        </>
      ) : state === "done" ? (
        <>Saved ✓</>
      ) : (
        <>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 3v12" />
            <path d="m7 11 5 5 5-5" />
            <path d="M4 20h16" />
          </svg>
          Download PDF
        </>
      )}
    </button>
  );
}
