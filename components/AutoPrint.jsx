"use client";

import { useEffect } from "react";

/**
 * Opens the browser print dialog when /print?autoprint=1 is visited.
 * Reads location directly rather than useSearchParams() so the print route can
 * still be statically rendered.
 */
export default function AutoPrint() {
  useEffect(() => {
    if (!new URLSearchParams(window.location.search).has("autoprint")) return;
    const id = setTimeout(() => window.print(), 900);
    return () => clearTimeout(id);
  }, []);

  return null;
}
