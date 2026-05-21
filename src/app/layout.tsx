import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/index.css";

const _inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://cocktailberry.org"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
