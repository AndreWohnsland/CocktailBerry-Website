import { notFound } from "next/navigation";

// Unmatched paths under a locale fall through here so the localized
// not-found page renders instead of Next's default one.
export default function CatchAll() {
  notFound();
}
