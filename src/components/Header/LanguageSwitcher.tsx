"use client";
import { useLocale } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "@/i18n/routing";

const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const close = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setIsOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [isOpen]);

  const languages = [
    { code: "en", label: "English", flag: "🇬🇧" },
    { code: "de", label: "Deutsch", flag: "🇩🇪" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === locale);

  const switchLanguage = (newLocale: string) => {
    router.push(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-lg px-3 py-2 font-medium text-base text-dark transition-colors duration-150 hover:text-primary dark:text-white/70 dark:hover:text-white"
        aria-label="Switch language"
      >
        <span className="text-xl leading-none">{currentLanguage?.flag}</span>
        <span className="hidden w-16 sm:inline">{currentLanguage?.label}</span>
        <svg
          aria-hidden="true"
          className={`h-4 w-4 transition-[rotate] duration-150 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        className={`absolute top-full right-0 mt-2 w-40 overflow-hidden rounded-lg border border-stroke bg-white shadow-two transition-[opacity,translate,visibility] duration-200 dark:border-stroke-dark dark:bg-dark ${
          isOpen ? "visible opacity-100" : "invisible -translate-y-1 opacity-0"
        }`}
      >
        {languages.map((lang) => (
          <button
            type="button"
            key={lang.code}
            onClick={() => switchLanguage(lang.code)}
            className={`flex w-full items-center gap-2 px-4 py-2 text-left text-sm transition-colors duration-150 hover:bg-black/5 dark:hover:bg-white/5 ${
              locale === lang.code ? "font-semibold text-primary" : ""
            }`}
          >
            <span className="text-xl leading-none">{lang.flag}</span>
            <span>{lang.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
