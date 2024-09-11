import Breadcrumb from "@/components/Common/Breadcrumb";
import Impressions from "@/components/Impressions";
import sharedMeta from "../sharedMeta";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressions | CocktailBerry",
  description:
    "Have some insights about CocktailBerry: How does the program look like? What machines are build?",
  ...sharedMeta,
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
