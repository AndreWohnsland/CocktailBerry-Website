import BarChartIcon from "@mui/icons-material/BarChart";
import GitHubIcon from "@mui/icons-material/GitHub";
import HandymanIcon from "@mui/icons-material/Handyman";
import MemoryIcon from "@mui/icons-material/Memory";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import type { useTranslations } from "next-intl";
import type { Menu } from "@/types/menu";

type Translator = ReturnType<typeof useTranslations>;

const menuData = (t: Translator): Menu[] => [
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
        id: 40,
        title: t("menu.hardware"),
        path: "/hardware",
        internal: true,
        newTab: false,
        icon: <HandymanIcon fontSize="small" />,
      },
      {
        id: 41,
        title: t("menu.softwareDocs"),
        path: "https://docs.cocktailberry.org/",
        newTab: true,
        icon: <MenuBookIcon fontSize="small" />,
      },
      {
        id: 42,
        title: t("menu.hardwareDocs"),
        path: "https://hardware.cocktailberry.org/",
        newTab: true,
        icon: <MemoryIcon fontSize="small" />,
      },
      {
        id: 43,
        title: t("menu.githubSource"),
        path: "https://github.com/AndreWohnsland/CocktailBerry",
        newTab: true,
        icon: <GitHubIcon fontSize="small" />,
      },
      {
        id: 44,
        title: t("menu.cocktailStats"),
        path: "https://stats-cocktailberry.streamlit.app/",
        newTab: true,
        icon: <BarChartIcon fontSize="small" />,
      },
      {
        id: 45,
        title: t("menu.demoApp"),
        path: "https://demo.cocktailberry.org",
        newTab: true,
        icon: <PlayCircleIcon fontSize="small" />,
      },
    ],
  },
];
export default menuData;
