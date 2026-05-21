import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Installation from "@/components/Installation";
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
    title: t("installation.title"),
    description: t("installation.description"),
    locale,
    pathname: "/installation",
  });
}

export default async function InstallationPage({ params }: PageParams) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "pages.installation" });

  return (
    <>
      <Breadcrumb pageName={t("title")} description={t("description")} />
      <Installation />
    </>
  );
}
