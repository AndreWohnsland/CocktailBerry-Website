import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "de"],

  // Used when no locale matches
  defaultLocale: "en",

  // Automatically detect the user's locale
  localeDetection: true,

  // Localize static route segments
  pathnames: {
    "/": "/",
    "/impressions": {
      de: "/eindruecke",
    },
    "/installation": {
      de: "/installation",
    },
    "/imprint": {
      de: "/impressum",
    },
  },

  // Always prefix routes with the locale
  localePrefix: "always",
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);

export type AppPathname = keyof typeof routing.pathnames;
