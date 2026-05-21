import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Imprint from "@/components/Imprint";
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
    title: t("imprint.title"),
    description: t("imprint.description"),
    locale,
    pathname: "/imprint",
  });
}

const ImprintPage = async ({ params }: PageParams) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return <Imprint />;
};

export default ImprintPage;
