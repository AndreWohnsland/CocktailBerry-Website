import { getTranslations } from "next-intl/server";
import { type AppPathname, buildLocalizedUrl } from "@/lib/metadata";

// Emits BreadcrumbList structured data mirroring the visual Breadcrumb
// (Home > pageName) so search results can render a breadcrumb trail.
const BreadcrumbJsonLd = async ({
  locale,
  pathname,
  pageName,
}: {
  locale: string;
  pathname: AppPathname;
  pageName: string;
}) => {
  const t = await getTranslations({ locale, namespace: "breadcrumb" });

  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: t("home"),
        item: buildLocalizedUrl(locale, "/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: pageName,
        item: buildLocalizedUrl(locale, pathname),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default BreadcrumbJsonLd;
