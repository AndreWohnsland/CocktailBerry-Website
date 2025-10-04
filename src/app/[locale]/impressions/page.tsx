import Breadcrumb from "@/components/Common/Breadcrumb";
import Impressions from "@/components/Impressions";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cocktail Machine Gallery",
  description:
    "CocktailBerry cocktail machines in action. See custom-built Raspberry Pi cocktail makers and DIY drink dispensers created by our community.",
  alternates: {
    canonical: "https://cocktailberry.org/impressions",
  },
};

export default async function AboutPage() {
  const t = await getTranslations("pages.impressions");
  
  return (
    <>
      <Breadcrumb
        pageName={t("title")}
        description={t("description")}
      />
      <Impressions />
    </>
  );
}
