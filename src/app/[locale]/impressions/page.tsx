import Breadcrumb from "@/components/Common/Breadcrumb";
import Impressions from "@/components/Impressions";
import { useTranslations } from "next-intl";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cocktail Machine Gallery",
  description:
    "CocktailBerry cocktail machines in action. See custom-built Raspberry Pi cocktail makers and DIY drink dispensers created by our community.",
  alternates: {
    canonical: "https://cocktailberry.org/impressions",
  },
};

export default function AboutPage() {
  const t = useTranslations("pages.impressions");
  
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
