import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import StructuredData from "@/components/StructuredData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "CocktailBerry - Open Source Cocktail Machine Software | Raspberry Pi Cocktail Maker",
  description:
    "Free open-source software for building custom cocktail machines with Raspberry Pi. CocktailBerry provides automated bartender software for DIY cocktail makers, drink dispensers, and cocktail robots. Perfect for Pi cocktail projects and custom cocktail automation.",
  openGraph: {
    title: "CocktailBerry - Open Source Cocktail Machine Software",
    description:
      "Build your own automated cocktail maker with Raspberry Pi. Free software for custom cocktail machines and DIY bartending automation.",
    type: "website",
    locale: "en_US",
    siteName: "CocktailBerry",
  },
  twitter: {
    card: "summary_large_image",
    title: "CocktailBerry - Open Source Cocktail Machine Software",
    description:
      "Build custom cocktail machines with Raspberry Pi. Free open-source automated bartender software.",
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
