import Breadcrumb from "@/components/Common/Breadcrumb";
import Installation from "@/components/Installation";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Installation Guide",
  description:
    "Step-by-step installation guide for CocktailBerry cocktail machine software. Easy setup on Raspberry Pi for your DIY cocktail maker. No programming knowledge required.",
  alternates: {
    canonical: "https://cocktailberry.org/installation",
  },
};

export default async function InstallationPage() {
  const t = await getTranslations("pages.installation");
  
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
