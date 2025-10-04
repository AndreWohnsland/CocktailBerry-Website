import Breadcrumb from "@/components/Common/Breadcrumb";
import Installation from "@/components/Installation";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Installation Guide",
  description:
    "Step-by-step installation guide for CocktailBerry cocktail machine software. Easy setup on Raspberry Pi for your DIY cocktail maker. No programming knowledge required.",
  alternates: {
    canonical: "https://cocktailberry.org/installation",
  },
};

const InstallationPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Installation"
        description="CocktailBerry was designed to work even if you do not have programming knowledge at all. You just need to type a command in a window."
      />
      <Installation />
    </>
  );
};

export default InstallationPage;
