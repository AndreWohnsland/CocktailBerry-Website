import { getTranslations } from "next-intl/server";
import { buildLocalizedUrl, SITE_URL } from "@/lib/metadata";

const StructuredData = async ({ locale }: { locale: string }) => {
  const t = await getTranslations({ locale, namespace: "structuredData" });
  const homeUrl = buildLocalizedUrl(locale, "/");

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "CocktailBerry",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Linux, Raspberry Pi OS",
    description: t("appDescription"),
    url: homeUrl,
    downloadUrl: "https://github.com/AndreWohnsland/CocktailBerry",
    softwareVersion: "2.0",
    inLanguage: locale,
    author: {
      "@type": "Person",
      name: "Andre Wohnsland",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    keywords: t("keywords"),
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CocktailBerry",
    url: SITE_URL,
    logo: `${SITE_URL}/CocktailBerry.png`,
    description: t("orgDescription"),
    sameAs: [
      "https://github.com/AndreWohnsland/CocktailBerry",
      "https://docs.cocktailberry.org",
    ],
  };

  const howToData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: t("howToName"),
    description: t("howToDescription"),
    inLanguage: locale,
    step: [
      {
        "@type": "HowToStep",
        name: t("step1Name"),
        text: t("step1Text"),
        url: buildLocalizedUrl(locale, "/installation"),
      },
      {
        "@type": "HowToStep",
        name: t("step2Name"),
        text: t("step2Text"),
        url: buildLocalizedUrl(locale, "/installation"),
      },
      {
        "@type": "HowToStep",
        name: t("step3Name"),
        text: t("step3Text"),
        url: "https://docs.cocktailberry.org",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToData) }}
      />
    </>
  );
};

export default StructuredData;
