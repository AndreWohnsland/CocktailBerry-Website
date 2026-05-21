"use client";
import { useLocale } from "next-intl";
import { useState } from "react";
import { usePathname, useRouter } from "@/i18n/routing";

const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

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
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-sm px-3 py-2 font-medium text-base text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
        aria-label="Switch language"
      >
        <span className="text-xl">{currentLanguage?.flag}</span>
        <span className="hidden w-16 sm:inline">{currentLanguage?.label}</span>
        <svg
          aria-hidden="true"
          className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-40 rounded-sm bg-white shadow-lg dark:bg-dark">
          {languages.map((lang) => (
            <button
              type="button"
              key={lang.code}
              onClick={() => switchLanguage(lang.code)}
              className={`flex w-full items-center gap-2 px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-800 ${
                locale === lang.code ? "font-semibold text-primary" : ""
              }`}
            >
              <span className="text-xl">{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
