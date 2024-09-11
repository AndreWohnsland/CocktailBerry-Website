import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Impressions",
    path: "/impressions",
    newTab: false,
  },
  {
    id: 3,
    title: "Installation",
    path: "/installation",
    newTab: false,
  },
  {
    id: 4,
    title: "Ressources",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Documentation",
        path: "https://cocktailberry.readthedocs.io/",
        newTab: true,
      },
      {
        id: 42,
        title: "GitHub Source Code",
        path: "https://github.com/AndreWohnsland/CocktailBerry",
        newTab: true,
      },
      {
        id: 43,
        title: "CocktailBerry Stats",
        path: "https://stats-cocktailberry.streamlit.app/",
        newTab: true,
      },
    ],
  },
];
export default menuData;
