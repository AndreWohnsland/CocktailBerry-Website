import bottlesPic from "../../../public/images/interface/bottles.png";
import configPic from "../../../public/images/interface/config.png";
import dataPic from "../../../public/images/interface/data.png";
import ingredientPic from "../../../public/images/interface/ingredients.png";
import mainPic from "../../../public/images/interface/main.png";
import optionPic from "../../../public/images/interface/option.png";
import recipePic from "../../../public/images/interface/recipes.png";
import selectionPic from "../../../public/images/interface/selection.png";

// `viewKey` resolves to a localized view label that is interpolated into the
// `interfaceAlt` template at render time (see Impressions/index.tsx).
const programImages = [
  {
    src: mainPic,
    viewKey: "views.main",
  },
  {
    src: selectionPic,
    viewKey: "views.selection",
  },
  {
    src: ingredientPic,
    viewKey: "views.ingredient",
  },
  {
    src: recipePic,
    viewKey: "views.recipe",
  },
  {
    src: bottlesPic,
    viewKey: "views.bottle",
  },
  {
    src: optionPic,
    viewKey: "views.option",
  },
  {
    src: configPic,
    viewKey: "views.config",
  },
  {
    src: dataPic,
    viewKey: "views.data",
  },
].map((image) => ({ ...image, height: 600, width: 1024 }));

export default programImages;
