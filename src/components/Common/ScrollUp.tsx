"use client";

import { useEffect } from "react";

export default function ScrollUp() {
  // Braced body on purpose: an implicit return would hand scrollTo's return
  // value to React as the effect cleanup, crashing on unmount in browsers
  // where scrollTo is monkey-patched (extensions, AV injection).
  useEffect(() => {
    window.document.scrollingElement?.scrollTo(0, 0);
  }, []);

  return null;
}
