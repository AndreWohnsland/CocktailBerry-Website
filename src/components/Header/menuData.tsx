import { Menu } from "@/types/menu";

const menuData = (t: any): Menu[] => [
  {
    id: 1,
    title: t("menu.home"),
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: t("menu.impressions"),
    path: "/impressions",
    newTab: false,
  },
  {
    id: 3,
    title: t("menu.installation"),
    path: "/installation",
    newTab: false,
  },
  {
    id: 4,
    title: t("menu.resources"),
    newTab: false,
    submenu: [
      {
        id: 41,
        title: t("menu.documentation"),
        path: "https://cocktailberry.readthedocs.io/",
        newTab: true,
      },
      {
        id: 42,
        title: t("menu.githubSource"),
        path: "https://github.com/AndreWohnsland/CocktailBerry",
        newTab: true,
      },
      {
        id: 43,
        title: t("menu.cocktailStats"),
        path: "https://stats-cocktailberry.streamlit.app/",
        newTab: true,
      },
      {
        id: 44,
        title: t("menu.demoApp"),
        path: "https://demo.cocktailberry.org",
        newTab: true,
      },
    ],
  },
];
export default menuData;
