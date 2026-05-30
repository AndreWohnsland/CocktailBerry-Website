import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Hardware from "@/components/Hardware";
import BreadcrumbJsonLd from "@/components/StructuredData/BreadcrumbJsonLd";
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
    title: t("hardware.title"),
    description: t("hardware.description"),
    locale,
    pathname: "/hardware",
  });
}

export default async function HardwarePage({ params }: PageParams) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "pages.hardware" });

  return (
    <>
      <BreadcrumbJsonLd
        locale={locale}
        pathname="/hardware"
        pageName={t("title")}
      />
      <Breadcrumb pageName={t("title")} description={t("description")} />
      <Hardware />
    </>
  );
}
