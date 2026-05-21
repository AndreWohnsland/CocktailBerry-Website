import DownloadIcon from "@mui/icons-material/Download";
import MemoryIcon from "@mui/icons-material/Memory";
import TerminalIcon from "@mui/icons-material/Terminal";
import type { useTranslations } from "next-intl";
import type { Feature } from "@/types/feature";

type Translator = ReturnType<typeof useTranslations>;

const prerequisiteData = (t: Translator): Feature[] => [
  {
    id: 1,
    icon: <MemoryIcon style={{ fontSize: 60 }} />,
    title: t("prerequisites.hardware.title"),
    paragraph: t("prerequisites.hardware.description"),
    resources: [
      {
        name: t("prerequisites.hardware.resource"),
        url: "https://docs.cocktailberry.org/hardware/",
      },
    ],
  },
  {
    id: 2,
    icon: <DownloadIcon style={{ fontSize: 60 }} />,
    title: t("prerequisites.prepare.title"),
    paragraph: t("prerequisites.prepare.description"),
    resources: [
      {
        name: t("prerequisites.prepare.resource"),
        url: "https://www.raspberrypi.com/software/",
      },
    ],
  },
  {
    id: 3,
    icon: <TerminalIcon style={{ fontSize: 60 }} />,
    title: t("prerequisites.terminal.title"),
    paragraph: t("prerequisites.terminal.description"),
    resources: [
      {
        name: t("prerequisites.terminal.resource"),
        url: "https://projects.raspberrypi.org/en/projects/raspberry-pi-using/8",
      },
    ],
  },
];
export default prerequisiteData;
