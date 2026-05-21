import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Impressions from "@/components/Impressions";
import { createLocalizedMetadata } from "@/lib/metadata";

type PageParams = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });

  return createLocalizedMetadata({
    title: t("impressions.title"),
    description: t("impressions.description"),
    locale,
    pathname: "/impressions",
  });
}

export default async function AboutPage({ params }: PageParams) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "pages.impressions" });

  return (
    <>
      <Breadcrumb pageName={t("title")} description={t("description")} />
      <Impressions />
    </>
  );
}
