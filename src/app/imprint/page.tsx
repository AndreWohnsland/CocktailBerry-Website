import Imprint from "@/components/Imprint";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imprint | CocktailBerry",
  description: "CocktailBerry: Imprint page",
};

const ImprintPage = () => {
  return (
    <>
      <Imprint />
    </>
  );
};

export default ImprintPage;
