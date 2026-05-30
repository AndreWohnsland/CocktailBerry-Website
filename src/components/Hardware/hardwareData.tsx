import CableIcon from "@mui/icons-material/Cable";
import ContactlessIcon from "@mui/icons-material/Contactless";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import MemoryIcon from "@mui/icons-material/Memory";
import PowerIcon from "@mui/icons-material/Power";
import SdCardIcon from "@mui/icons-material/SdCard";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import WavesIcon from "@mui/icons-material/Waves";
import type { useTranslations } from "next-intl";
import type { Feature } from "@/types/feature";

type Translator = ReturnType<typeof useTranslations>;

const iconStyle = { fontSize: 60 };

// Product links are CocktailBerry's own affiliate links from the hardware docs
// (https://docs.cocktailberry.org/hardware/) and are marked as sponsored.
// `name` values are product names and stay untranslated; titles/descriptions
// come from the message files.
const hardwareData = (t: Translator): Feature[] => [
  {
    id: 1,
    icon: <MemoryIcon style={iconStyle} />,
    title: t("components.pi.title"),
    paragraph: t("components.pi.description"),
    resources: [
      {
        name: "Raspberry Pi 3B+",
        url: "https://amzn.to/48bhCBc",
        sponsored: true,
      },
      {
        name: "Raspberry Pi 4",
        url: "https://amzn.to/4pqSH3v",
        sponsored: true,
      },
      {
        name: "Raspberry Pi 5",
        url: "https://amzn.to/4i9h2IG",
        sponsored: true,
      },
    ],
  },
  {
    id: 2,
    icon: <TouchAppIcon style={iconStyle} />,
    title: t("components.display.title"),
    paragraph: t("components.display.description"),
    resources: [
      {
        name: '5" Touchscreen',
        url: "https://amzn.to/3K6Ntei",
        sponsored: true,
      },
      {
        name: '7" Touchscreen',
        url: "https://amzn.to/49sKlnn",
        sponsored: true,
      },
      {
        name: "Official Touchscreen",
        url: "https://amzn.to/4pnDPmj",
        sponsored: true,
      },
    ],
  },
  {
    id: 3,
    icon: <SdCardIcon style={iconStyle} />,
    title: t("components.sdCard.title"),
    paragraph: t("components.sdCard.description"),
    resources: [
      {
        name: "Micro SD Card (16–32 GB)",
        url: "https://amzn.to/3JY3Dqn",
        sponsored: true,
      },
    ],
  },
  {
    id: 4,
    icon: <DeveloperBoardIcon style={iconStyle} />,
    title: t("components.controller.title"),
    paragraph: t("components.controller.description"),
    resources: [
      {
        name: "8-Channel Relay Board",
        url: "https://amzn.to/49ya120",
        sponsored: true,
      },
      {
        name: "Motor Shield (AZDelivery)",
        url: "https://amzn.to/3SbQiOE",
        sponsored: true,
      },
      {
        name: "Motor Shield (Adafruit)",
        url: "https://amzn.to/4vE6uaf",
        sponsored: true,
      },
    ],
  },
  {
    id: 5,
    icon: <PowerIcon style={iconStyle} />,
    title: t("components.power.title"),
    paragraph: t("components.power.description"),
    resources: [
      {
        name: "Pi Power Supply",
        url: "https://amzn.to/48axtjp",
        sponsored: true,
      },
      {
        name: "Pump Power Supply",
        url: "https://amzn.to/49w0fgP",
        sponsored: true,
      },
      {
        name: "Voltage Converter",
        url: "https://amzn.to/4qT18oW",
        sponsored: true,
      },
    ],
  },
  {
    id: 6,
    icon: <WavesIcon style={iconStyle} />,
    title: t("components.tubing.title"),
    paragraph: t("components.tubing.description"),
    resources: [
      {
        name: "Food-Safe Tubing (5–10 m)",
        url: "https://amzn.to/4ppufj3",
        sponsored: true,
      },
    ],
  },
  {
    id: 7,
    icon: <CableIcon style={iconStyle} />,
    title: t("components.wiring.title"),
    paragraph: t("components.wiring.description"),
    resources: [
      {
        name: "Jumper Wires (F-F)",
        url: "https://amzn.to/47TY7yc",
        sponsored: true,
      },
      { name: "HDMI Cable", url: "https://amzn.to/4ra7Wzo", sponsored: true },
      { name: "USB Cable", url: "https://amzn.to/48n4NF7", sponsored: true },
    ],
  },
  {
    id: 8,
    icon: <ContactlessIcon style={iconStyle} />,
    title: t("components.payment.title"),
    paragraph: t("components.payment.description"),
    resources: [
      {
        name: "USB RFID Reader",
        url: "https://amzn.to/4p75hVZ",
        sponsored: true,
      },
      {
        name: "NFC Tags (MIFARE)",
        url: "https://amzn.to/43ZPcsC",
        sponsored: true,
      },
    ],
  },
];

export default hardwareData;
