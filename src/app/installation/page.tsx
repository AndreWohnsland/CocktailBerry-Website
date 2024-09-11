import Breadcrumb from "@/components/Common/Breadcrumb";
import Installation from "@/components/Installation";
import sharedMeta from "../sharedMeta";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Installation | CocktailBerry",
  description:
    "Installation instructions for CocktailBerry. Let's start your cocktail journey!",
  ...sharedMeta,
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
