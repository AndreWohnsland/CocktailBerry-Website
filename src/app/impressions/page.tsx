import Breadcrumb from "@/components/Common/Breadcrumb";
import Impressions from "@/components/Impressions";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Cocktail Machine Gallery - CocktailBerry Projects & Examples",
  description:
    "Explore real CocktailBerry cocktail machines in action. See custom-built Raspberry Pi cocktail makers, automated bartenders, and DIY drink dispensers created by our community.",
  alternates: {
    canonical: "https://cocktailberry.org/impressions",
  },
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Impressions"
        description="Here you can find an overview of the program interface, as well as some machines idling or in action."
      />
      <Impressions />
    </>
  );
};

export default AboutPage;
