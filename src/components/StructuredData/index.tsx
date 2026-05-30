const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "CocktailBerry",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Linux, Raspberry Pi OS",
    description:
      "Open-source software platform for building custom cocktail machines on Raspberry Pi and other SBCs. Create automated bartending experiences with Python, Qt, and React.",
    url: "https://cocktailberry.org",
    downloadUrl: "https://github.com/AndreWohnsland/CocktailBerry",
    softwareVersion: "2.0",
    author: {
      "@type": "Person",
      name: "Andre Wohnsland",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    keywords:
      "cocktail machine, cocktail maker, raspberry pi, automated bartender, cocktail software, diy cocktail machine, drink dispenser, cocktail automation",
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CocktailBerry",
    url: "https://cocktailberry.org",
    logo: "https://cocktailberry.org/CocktailBerry.png",
    description:
      "Open-source platform for building custom cocktail machines with Raspberry Pi",
    sameAs: [
      "https://github.com/AndreWohnsland/CocktailBerry",
      "https://docs.cocktailberry.org",
    ],
  };

  const howToData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Build a DIY Cocktail Maker with Raspberry Pi",
    description:
      "Learn how to build your own DIY cocktail maker using CocktailBerry software on Raspberry Pi",
    step: [
      {
        "@type": "HowToStep",
        name: "Get Hardware",
        text: "Obtain a Raspberry Pi or other SBC and required components",
        url: "https://cocktailberry.org/installation",
      },
      {
        "@type": "HowToStep",
        name: "Install Software",
        text: "Install CocktailBerry software on your Raspberry Pi",
        url: "https://cocktailberry.org/installation",
      },
      {
        "@type": "HowToStep",
        name: "Configure System",
        text: "Set up your cocktail machine configuration through the interface",
        url: "https://docs.cocktailberry.org",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToData) }}
      />
    </>
  );
};

export default StructuredData;
