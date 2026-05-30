import type { Metadata } from "next";
import { getPathname, routing } from "@/i18n/routing";

export const SITE_URL = "https://cocktailberry.org";
export type AppPathname = keyof typeof routing.pathnames;
const DEFAULT_PATHNAME: AppPathname = "/";

interface LocalizedMetadataParams {
  title: string;
  description: string;
  locale: string;
  pathname?: AppPathname;
  siteName?: string;
  openGraph?: Metadata["openGraph"];
  twitter?: Metadata["twitter"];
}

export const buildLocalizedUrl = (
  locale: string,
  pathname: AppPathname,
): string => {
  const localizedPath = getPathname({ href: pathname, locale });
  return `${SITE_URL}${localizedPath === "/" ? "" : localizedPath}`;
};

export function createLocalizedMetadata({
  title,
  description,
  locale,
  pathname = "/",
  siteName = "CocktailBerry",
  openGraph,
  twitter,
}: LocalizedMetadataParams): Metadata {
  const normalizedPathname = pathname ?? DEFAULT_PATHNAME;
  const canonicalUrl = buildLocalizedUrl(locale, normalizedPathname);

  const languages: Record<string, string> = Object.fromEntries(
    routing.locales.map((loc) => {
      const url = buildLocalizedUrl(loc, normalizedPathname);
      return [loc, url];
    }),
  );
  // Tell search engines which URL to serve when no language matches.
  languages["x-default"] = buildLocalizedUrl(
    routing.defaultLocale,
    normalizedPathname,
  );

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName,
      ...openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...twitter,
    },
  };
}
