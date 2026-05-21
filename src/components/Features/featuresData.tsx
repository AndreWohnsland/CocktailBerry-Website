import BatteryChargingFullOutlinedIcon from "@mui/icons-material/BatteryChargingFullOutlined";
import LiquorOutlinedIcon from "@mui/icons-material/LiquorOutlined";
import PaymentIcon from "@mui/icons-material/Payment";
import PersonIcon from "@mui/icons-material/Person";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import SpeedIcon from "@mui/icons-material/Speed";
import TerminalOutlinedIcon from "@mui/icons-material/TerminalOutlined";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
import type { useTranslations } from "next-intl";
import type { Feature } from "@/types/feature";

type Translator = ReturnType<typeof useTranslations>;

const featuresData = (t: Translator): Feature[] => [
  {
    id: 1,
    icon: <SpeedIcon style={{ fontSize: 60 }} />,
    title: t("easySetup.title"),
    paragraph: t("easySetup.description"),
  },
  {
    id: 2,
    icon: <SettingsSuggestIcon style={{ fontSize: 60 }} />,
    title: t("configuration.title"),
    paragraph: t("configuration.description"),
  },
  {
    id: 3,
    icon: <LiquorOutlinedIcon style={{ fontSize: 60 }} />,
    title: t("customCocktails.title"),
    paragraph: t("customCocktails.description"),
  },
  {
    id: 4,
    icon: <TranslateOutlinedIcon style={{ fontSize: 60 }} />,
    title: t("multiLanguage.title"),
    paragraph: t("multiLanguage.description"),
  },
  {
    id: 5,
    icon: <PaymentIcon style={{ fontSize: 60 }} />,
    title: t("payment.title"),
    paragraph: t("payment.description"),
  },
  {
    id: 6,
    icon: <PersonIcon style={{ fontSize: 60 }} />,
    title: t("servicePersonnel.title"),
    paragraph: t("servicePersonnel.description"),
  },
  {
    id: 7,
    icon: <TerminalOutlinedIcon style={{ fontSize: 60 }} />,
    title: t("addOns.title"),
    paragraph: t("addOns.description"),
  },
  {
    id: 8,
    icon: <BatteryChargingFullOutlinedIcon style={{ fontSize: 60 }} />,
    title: t("batteriesIncluded.title"),
    paragraph: t("batteriesIncluded.description"),
  },
];
export default featuresData;
