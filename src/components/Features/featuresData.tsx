import { Feature } from "@/types/feature";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import SpeedIcon from "@mui/icons-material/Speed";
import LiquorOutlinedIcon from "@mui/icons-material/LiquorOutlined";
import BatteryChargingFullOutlinedIcon from "@mui/icons-material/BatteryChargingFullOutlined";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
import TerminalOutlinedIcon from "@mui/icons-material/TerminalOutlined";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <SpeedIcon style={{ fontSize: 60 }} />,
    title: "Easy to Set-Up",
    paragraph:
      "On a fresh Raspberry Pi, one command is all you need. The tool will make the rest for you. Lay back, grab a drink, and come back to a fully functional cocktail maker.",
  },
  {
    id: 2,
    icon: <SettingsSuggestIcon style={{ fontSize: 60 }} />,
    title: "Configuration over the App",
    paragraph:
      "Once installed, just run the software and go to the settings. Here you can configure everything to your liking and the state of your machine.",
  },
  {
    id: 3,
    icon: <LiquorOutlinedIcon style={{ fontSize: 60 }} />,
    title: "Customize your Cocktails",
    paragraph:
      "You can manage change, add or delete all the cocktail data over the app. This includes ingredients and recipes, things to add via hand and pumping order.",
  },
  {
    id: 4,
    icon: <TranslateOutlinedIcon style={{ fontSize: 60 }} />,
    title: "Multi Language Support",
    paragraph:
      "The app is available in multiple languages. You can easily switch between them in the settings. If you want to, you can even provide translation for your language.",
  },
  {
    id: 5,
    icon: <TerminalOutlinedIcon style={{ fontSize: 60 }} />,
    title: "Supports Add-Ons",
    paragraph:
      "Missing some custom feature? Just add it! The software is designed to be easily extendable. You can add your own features and even share them with the community.",
  },
  {
    id: 6,
    icon: <BatteryChargingFullOutlinedIcon style={{ fontSize: 60 }} />,
    title: "Batteries Included",
    paragraph:
      "Many additional nice things to have: Custom app themes, cleaning program, data visualization and export, LED + NFC support, option to send data to webhooks and more.",
  },
];
export default featuresData;
