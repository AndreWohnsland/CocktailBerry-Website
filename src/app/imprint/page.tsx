import Imprint from "@/components/Imprint";
import sharedMeta from "../sharedMeta";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imprint | CocktailBerry",
  description: "CocktailBerry: Imprint page",
  ...sharedMeta,
};

const ImprintPage = () => {
  return (
    <>
      <Imprint />
    </>
  );
};

export default ImprintPage;
