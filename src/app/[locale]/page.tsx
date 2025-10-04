import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import StructuredData from "@/components/StructuredData";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CocktailBerry - Open Source Cocktail Machine Software",
  description:
    "Build your own automated cocktail machine with the CocktailBerry software! Use a Raspberry Pi or any other SBC to create a custom cocktail maker.",
  openGraph: {
    title: "CocktailBerry - Open Source Cocktail Machine Software",
    description:
      "Build your own automated cocktail machine with the CocktailBerry software! Open source Raspberry Pi cocktail maker platform.",
    type: "website",
    locale: "en_US",
    siteName: "CocktailBerry",
  },
  twitter: {
    card: "summary_large_image",
    title: "CocktailBerry - Open Source Cocktail Machine Software",
    description:
      "Build your own automated cocktail machine with the CocktailBerry software! Open source Raspberry Pi cocktail maker platform.",
  },
  alternates: {
    canonical: "https://cocktailberry.org",
  },
};

export default function Home() {
  return (
    <>
      <StructuredData />
      <ScrollUp />
      <Hero />
      <Features />
      <Testimonials />
    </>
  );
}
