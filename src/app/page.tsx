import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CocktailBerry: Cocktails with Raspberry Pi",
  description:
    "Welcome to CocktailBerry, start your journey of building your own, personal cocktail maker.",
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
