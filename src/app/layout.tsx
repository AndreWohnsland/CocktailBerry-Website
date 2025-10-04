import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Providers } from "./providers";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://cocktailberry.org"),
  title: {
    default:
      "CocktailBerry - Open Source Cocktail Machine Software and Raspberry Pi Cocktail Maker",
    template: "%s | CocktailBerry",
  },
  description:
    "CocktailBerry: Open source Raspberry Pi cocktail machine software. Build your own DIY cocktail maker and automated bartender.",
  authors: { name: "Andre Wohnsland" },
  creator: "CocktailBerry Team",
  publisher: "CocktailBerry",
  applicationName: "CocktailBerry",
  generator: "Next.js",
  category: "Technology",
  classification: "Open Source Software",
  keywords: [
    "cocktail",
    "cocktailberry",
    "cocktail berry",
    "raspberry pi",
    "raspberry pi cocktail",
    "cocktail pi",
    "cocktail machine",
    "cocktail maker",
    "cocktail robot",
    "automatic cocktail maker",
    "diy cocktail machine",
    "raspberry pi projects",
    "cocktail dispenser",
    "bartender robot",
    "automated bartender",
    "python",
    "diy",
    "open source",
    "single board computer",
    "smart cocktail machine",
    "programmable cocktail maker",
    "bartending machine",
    "cocktail robot",
    "Cocktailmaschine",
    "Cocktail Maschine",
    "Cocktailmaschine Software",
    "Cocktail Roboter",
    "Cocktailmaschine selber bauen",
    "automatische Cocktailmaschine",
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
