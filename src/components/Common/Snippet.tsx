"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

interface SnippetProps {
  children: React.ReactNode;
  className?: string;
}

const stringifyChildren = (children: React.ReactNode): string => {
  if (typeof children === "string") return children;
  if (typeof children === "number") return String(children);
  if (Array.isArray(children)) return children.map(stringifyChildren).join("");
  return "";
};

const iconBase =
  "h-4 w-4 transition-[opacity,scale,filter] duration-200 ease-[cubic-bezier(0.2,0,0,1)]";
const shown = "scale-100 opacity-100 blur-none";
const hidden = "scale-25 opacity-0 blur-xs";

// Both icons stay mounted so the swap can cross-fade instead of snapping.
const CopyIcon = ({ copied }: { copied: boolean }) => (
  <span className="relative block h-4 w-4">
    <svg
      aria-hidden="true"
      className={`${iconBase} ${copied ? hidden : shown}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <rect height="13" rx="2" ry="2" width="13" x="9" y="9" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
    <svg
      aria-hidden="true"
      className={`absolute inset-0 ${iconBase} ${copied ? shown : hidden}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const Snippet = ({ children, className = "" }: SnippetProps) => {
  const t = useTranslations("snippet");
  const [copied, setCopied] = useState(false);
  const text = stringifyChildren(children).trim();
  const label = copied ? t("copied") : t("copy");

  const handleCopy = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // noop
    }
    button.blur();
  };

  return (
    <div
      className={`inline-flex max-w-full items-center gap-3 rounded-lg border border-stroke bg-gray-light px-4 py-2 text-start font-mono text-sm dark:border-stroke-dark dark:bg-dark ${className}`}
    >
      <span className="text-secondary">$</span>
      <pre className="m-0 min-w-0 flex-1 truncate bg-transparent p-0 text-body-color dark:text-body-color-dark">
        {text}
      </pre>
      <span className="group relative shrink-0">
        <button
          aria-label={label}
          className="cursor-pointer rounded p-1 text-body-color transition-colors hover:bg-black/5 hover:text-primary dark:text-body-color-dark dark:hover:bg-white/5"
          onClick={handleCopy}
          type="button"
        >
          <CopyIcon copied={copied} />
        </button>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-e-0 -top-9 whitespace-nowrap rounded bg-gray-light px-2 py-1 font-sans text-dark text-xs opacity-0 shadow-md transition-opacity duration-150 group-focus-within:opacity-100 group-hover:opacity-100 dark:bg-dark dark:text-white"
        >
          {label}
        </span>
      </span>
    </div>
  );
};

export default Snippet;
