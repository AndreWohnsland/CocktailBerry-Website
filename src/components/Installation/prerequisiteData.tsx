import { Feature } from "@/types/feature";
import MemoryIcon from "@mui/icons-material/Memory";
import TerminalIcon from "@mui/icons-material/Terminal";
import DownloadIcon from "@mui/icons-material/Download";

const prerequisiteData: Feature[] = [
  {
    id: 1,
    icon: <MemoryIcon style={{ fontSize: 60 }} />,
    title: "Get your Hardware",
    paragraph:
      "You will need a Raspberry Pi 3b+/4 or similar, a power supply, a SD card (+ reader) and a mouse/keyboard.",
    ressources: [
      {
        name: "Complete Hardware List",
        url: "https://docs.cocktailberry.org/hardware/",
      },
    ],
  },
  {
    id: 2,
    icon: <DownloadIcon style={{ fontSize: 60 }} />,
    title: "Prepare your Hardware",
    paragraph:
      "Install the operating system on the SD card, insert the card into the device, supply power and power it up.",
    ressources: [
      {
        name: "Raspberry Pi OS installation",
        url: "https://www.raspberrypi.com/software/",
      },
    ],
  },
  {
    id: 3,
    icon: <TerminalIcon style={{ fontSize: 60 }} />,
    title: "Open a Terminal",
    paragraph:
      "When booted up, open a terminal of your choice. You can use the built-in terminal or connect via SSH.",
    ressources: [
      {
        name: "Using the terminal",
        url: "https://projects.raspberrypi.org/en/projects/raspberry-pi-using/8",
      },
    ],
  },
];
export default prerequisiteData;
