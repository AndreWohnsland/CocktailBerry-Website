import mainPic from "../../../public/images/interface/main.png";
import selectionPic from "../../../public/images/interface/selection.png";
import ingredientPic from "../../../public/images/interface/ingredients.png";
import recipePic from "../../../public/images/interface/recipes.png";
import bottlesPic from "../../../public/images/interface/bottles.png";
import optionPic from "../../../public/images/interface/option.png";
import configPic from "../../../public/images/interface/config.png";
import dataPic from "../../../public/images/interface/data.png";

const programImages = [
  {
    src: mainPic,
    alt: "Main view",
  },
  {
    src: selectionPic,
    alt: "Selection view",
  },
  {
    src: ingredientPic,
    alt: "Ingredient view",
  },
  {
    src: recipePic,
    alt: "Recipe view",
  },
  {
    src: bottlesPic,
    alt: "Bottle view",
  },
  {
    src: optionPic,
    alt: "Option view",
  },
  {
    src: configPic,
    alt: "Config view",
  },
  {
    src: dataPic,
    alt: "Data view",
  },
].map((image) => ({ ...image, height: 600, width: 1024 }));

export default programImages;
