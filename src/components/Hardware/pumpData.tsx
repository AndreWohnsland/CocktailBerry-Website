import OpacityIcon from "@mui/icons-material/Opacity";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import type { useTranslations } from "next-intl";
import type { Feature } from "@/types/feature";

type Translator = ReturnType<typeof useTranslations>;

const iconStyle = { fontSize: 60 };

// Supported pump types. Product links are CocktailBerry's own affiliate links
// from the hardware docs and are marked as sponsored.
const pumpData = (t: Translator): Feature[] => [
  {
    id: 1,
    icon: <WaterDropIcon style={iconStyle} />,
    title: t("pumps.membrane.title"),
    paragraph: t("pumps.membrane.description"),
    resources: [
      {
        name: "Membrane Pump",
        url: "https://amzn.to/4ocmw6S",
        sponsored: true,
      },
      {
        name: "Membrane Pump (alt.)",
        url: "https://amzn.to/4a6PfXl",
        sponsored: true,
      },
    ],
  },
  {
    id: 2,
    icon: <OpacityIcon style={iconStyle} />,
    title: t("pumps.peristaltic.title"),
    paragraph: t("pumps.peristaltic.description"),
    resources: [
      {
        name: "Peristaltic Pump",
        url: "https://amzn.to/3LSyTrh",
        sponsored: true,
      },
    ],
  },
];

export default pumpData;
