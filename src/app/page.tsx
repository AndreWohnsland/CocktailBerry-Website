import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "CocktailBerry: Cocktails with Raspberry Pi for your cocktail machine/maker",
  description:
    "Welcome to CocktailBerry! Start your journey of building your own, personal cocktail maker. Use a Raspberry Pi or any other SBC to create a custom cocktail machine.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Testimonials />
    </>
  );
}
