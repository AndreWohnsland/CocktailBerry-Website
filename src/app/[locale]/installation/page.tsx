import Breadcrumb from "@/components/Common/Breadcrumb";
import Installation from "@/components/Installation";
import { useTranslations } from "next-intl";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Installation Guide",
  description:
    "Step-by-step installation guide for CocktailBerry cocktail machine software. Easy setup on Raspberry Pi for your DIY cocktail maker. No programming knowledge required.",
  alternates: {
    canonical: "https://cocktailberry.org/installation",
  },
};

export default function InstallationPage() {
  const t = useTranslations("pages.installation");
  
  return (
    <>
      <Breadcrumb
        pageName={t("title")}
        description={t("description")}
      />
      <Installation />
    </>
  );
}
