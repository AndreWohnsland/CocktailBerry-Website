import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://cocktailberry.org"),
  authors: { name: "Andre Wohnsland" },
  creator: "CocktailBerry Team",
  applicationName: "CocktailBerry",
  title: {
    default: "CocktailBerry - Open Source Cocktail Machine Software for Raspberry Pi",
    template: "%s | CocktailBerry",
  },
  description:
    "Free open-source cocktail machine software for Raspberry Pi. Build custom automated cocktail makers and DIY drink dispensers. Complete solution for cocktail automation.",
  keywords: [
    // Core terms
    "cocktail",
    "cocktailberry",
    "cocktail berry",
    "raspberry pi",
    "cocktail machine",
    "cocktail maker",
    "python",
    "diy",
    "open source",
    // Software related
    "cocktail machine software",
    "cocktail maker software",
    "automatic cocktail maker",
    "automated bartender",
    "cocktail dispenser",
    "drink machine",
    "pi cocktail",
    "raspberry pi cocktail",
    "raspberry pi bartender",
    // Custom/DIY related
    "custom cocktail machine",
    "custom cocktail maker",
    "diy cocktail machine",
    "diy bartender",
    "build cocktail machine",
    "homemade cocktail machine",
    // German keywords
    "Cocktailmaschine",
    "Cocktailmaker",
    "Cocktail Maschine",
    "Cocktailmaschine Software",
    "Cocktail Roboter",
    "Cocktailmaschine selber bauen",
    "automatische Cocktailmaschine",
    "Raspberry Pi Cocktail",
    // Technology stack
    "Qt",
    "React",
    "Python cocktail",
    // Use cases
    "cocktail automation",
    "bartending machine",
    "drink dispenser machine",
    "cocktail robot",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cocktailberry.org",
    siteName: "CocktailBerry",
    images: [
      {
        url: "https://cocktailberry.org/CocktailBerry.png",
        width: 1200,
        height: 630,
        alt: "CocktailBerry - Open Source Cocktail Machine Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@cocktailberry",
    creator: "@AndreWohnsland",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
