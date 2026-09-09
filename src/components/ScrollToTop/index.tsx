"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed right-8 bottom-8 z-99 transition-[opacity,translate,visibility] duration-200 ${
        isVisible ? "visible opacity-100" : "invisible translate-y-1 opacity-0"
      }`}
    >
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: keep */}
      {/* biome-ignore lint/a11y/noStaticElementInteractions: keep */}
      {/* biome-ignore lint/a11y/useAriaPropsSupportedByRole: keep */}
      <div
        onClick={scrollToTop}
        aria-label="scroll to top"
        className="btn btn-primary size-11 cursor-pointer rounded-full p-0"
      >
        <span className="mt-1.5 h-3 w-3 rotate-45 border-white border-t border-l"></span>
      </div>
    </div>
  );
}
