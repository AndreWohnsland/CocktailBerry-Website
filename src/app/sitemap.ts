import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { type AppPathname, buildLocalizedUrl } from "@/lib/metadata";

// Bump when page content changes meaningfully. A stable date is a more
// honest lastmod signal than `new Date()`, which marks every page as edited
// on every build.
const LAST_MODIFIED = new Date("2026-05-30");

type ChangeFrequency = MetadataRoute.Sitemap[number]["changeFrequency"];

const PAGES: {
  pathname: AppPathname;
  priority: number;
  changeFrequency: ChangeFrequency;
}[] = [
  { pathname: "/", priority: 1, changeFrequency: "monthly" },
  { pathname: "/hardware", priority: 0.9, changeFrequency: "monthly" },
  { pathname: "/impressions", priority: 0.8, changeFrequency: "weekly" },
  { pathname: "/installation", priority: 0.8, changeFrequency: "monthly" },
  { pathname: "/imprint", priority: 0.5, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  // Per-page hreflang alternates: each entry lists every localized variant
  // plus x-default, so the alternates are identical across all locale URLs.
  const buildAlternates = (pathname: AppPathname) => {
    const languages: Record<string, string> = Object.fromEntries(
      routing.locales.map((locale) => [
        locale,
        buildLocalizedUrl(locale, pathname),
      ]),
    );
    languages["x-default"] = buildLocalizedUrl(routing.defaultLocale, pathname);
    return languages;
  };

  return routing.locales.flatMap((locale) =>
    PAGES.map(({ pathname, priority, changeFrequency }) => ({
      url: buildLocalizedUrl(locale, pathname),
      lastModified: LAST_MODIFIED,
      changeFrequency,
      priority,
      alternates: { languages: buildAlternates(pathname) },
    })),
  );
}
