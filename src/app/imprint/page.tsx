import Imprint from "@/components/Imprint";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imprint",
  description: "Legal information and contact details for CocktailBerry - Open source cocktail machine software.",
  alternates: {
    canonical: "https://cocktailberry.org/imprint",
  },
};

const ImprintPage = () => {
  return (
    <>
      <Imprint />
    </>
  );
};

export default ImprintPage;
