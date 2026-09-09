import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { routing } from "@/i18n/routing";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://cocktailberry.org"),
  title: {
    default: "CocktailBerry - Open Source Cocktail Machine Software & Hardware",
    template: "%s | CocktailBerry",
  },
  description:
    "CocktailBerry: Free open-source software and hardware for Raspberry Pi cocktail machines. Build your own DIY cocktail maker or automated cocktail machine.",
  authors: { name: "Andre Wohnsland" },
  creator: "CocktailBerry Team",
  publisher: "CocktailBerry",
  applicationName: "CocktailBerry",
  generator: "Next.js",
  category: "Technology",
  classification: "Open Source Software and Hardware",
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
        alt: "CocktailBerry - Open Source Cocktail Machine Software and Hardware",
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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!(routing.locales as readonly string[]).includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages({ locale });

  return (
    <html suppressHydrationWarning lang={locale} data-scroll-behavior="smooth">
      <head />
      <body
        className={`bg-[#FCFCFC] antialiased dark:bg-black ${inter.className}`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
