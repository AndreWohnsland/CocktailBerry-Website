import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://cocktailberry.org";

  const locales = ["en", "de"];
  const pages = ["", "/impressions", "/installation", "/imprint"];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    pages.forEach((page) => {
      const url = `${baseUrl}/${locale}${page}`;
      const priority = page === "" ? 1 : page === "/imprint" ? 0.5 : 0.8;
      const changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] =
        page === "/impressions"
          ? "weekly"
          : page === "/imprint"
            ? "yearly"
            : "monthly";

      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency,
        priority,
      });
    });
  });

  return sitemapEntries;
}
