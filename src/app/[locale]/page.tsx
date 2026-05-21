import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import StructuredData from "@/components/StructuredData";
import Testimonials from "@/components/Testimonials";
import { createLocalizedMetadata } from "@/lib/metadata";

type PageParams = {
  params: Promise<{ locale: string }>;
};

const getOpenGraphLocale = (locale: string) =>
  locale === "de" ? "de_DE" : "en_US";

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });

  const title = t("home.title");
  const description = t("home.description");

  return createLocalizedMetadata({
    title,
    description,
    locale,
    pathname: "/",
    openGraph: {
      type: "website",
      locale: getOpenGraphLocale(locale),
    },
  });
}

export default async function Home({ params }: PageParams) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <StructuredData />
      <ScrollUp />
      <Hero />
      <Features />
      <Testimonials />
    </>
  );
}
