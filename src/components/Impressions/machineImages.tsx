import alcoholFactory from "../../../public/images/machines/alcohol_factory.jpg";
import bart from "../../../public/images/machines/bart.jpg";
import cb2go from "../../../public/images/machines/cb2go.jpg";
import cbmk2 from "../../../public/images/machines/cbmk2.jpg";
import cbmk3 from "../../../public/images/machines/cbmk3.jpg";
import cbmk4 from "../../../public/images/machines/cbmk4.jpg";

// all images are 1000x750px

// `name` is interpolated into the localized `machineAlt` template at render
// time (see Impressions/index.tsx); the names are community machine names and
// stay untranslated.
const machineImages = [
  {
    src: alcoholFactory,
    name: "Alcohol Factory",
  },
  {
    src: bart,
    name: "Bart",
  },
  {
    src: cb2go,
    name: "CB2Go",
  },
  {
    src: cbmk2,
    name: "CBMK2",
  },
  {
    src: cbmk3,
    name: "CBMK3",
  },
    {
    src: cbmk4,
    name: "CBMK4",
  },
].map((image) => ({ ...image, height: 1000, width: 750 }));

export default machineImages;
