import type { AppPathname } from "@/i18n/routing";

export type MenuLink = {
  id: number;
  title: string;
  newTab: boolean;
};

export type Menu = MenuLink & {
  path?: AppPathname;
  hash?: string;
  submenu?: ExternalMenuLink[];
};

export type ExternalMenuLink = MenuLink & {
  path: string;
};
