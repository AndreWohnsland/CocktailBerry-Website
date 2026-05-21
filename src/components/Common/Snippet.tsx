"use client";

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

const CopyIcon = ({ copied }: { copied: boolean }) => (
  <svg
    aria-hidden="true"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    {copied ? (
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    ) : (
      <>
        <rect height="13" rx="2" ry="2" width="13" x="9" y="9" />
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
      </>
    )}
  </svg>
);

const Snippet = ({ children, className = "" }: SnippetProps) => {
  const [copied, setCopied] = useState(false);
  const text = stringifyChildren(children).trim();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // noop
    }
  };

  return (
    <div
      className={`inline-flex max-w-full items-center gap-3 rounded-lg border border-stroke bg-gray-light px-4 py-2 text-left font-mono text-sm dark:border-stroke-dark dark:bg-dark ${className}`}
    >
      <span className="text-secondary">$</span>
      <pre className="m-0 flex-1 overflow-x-auto whitespace-pre-wrap break-all bg-transparent p-0 text-body-color dark:text-body-color-dark">
        {text}
      </pre>
      <button
        aria-label={copied ? "Copied" : "Copy to clipboard"}
        className="shrink-0 rounded p-1 text-body-color transition hover:bg-black/5 hover:text-primary dark:text-body-color-dark dark:hover:bg-white/5"
        onClick={handleCopy}
        type="button"
      >
        <CopyIcon copied={copied} />
      </button>
    </div>
  );
};

export default Snippet;
