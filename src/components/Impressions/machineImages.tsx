import alcoholFactory from "../../../public/images/machines/alcohol_factory.jpg";
import bart from "../../../public/images/machines/bart.jpg";
import cb2go from "../../../public/images/machines/cb2go.jpg";
import cbmk2 from "../../../public/images/machines/cbmk2.jpg";
import cbmk3 from "../../../public/images/machines/cbmk3.jpg";

// all images are 1000x750px

const machineImages = [
  {
    src: alcoholFactory,
    alt: "Alcohol Factory",
  },
  {
    src: bart,
    alt: "Bart",
  },
  {
    src: cb2go,
    alt: "CB2Go",
  },
  {
    src: cbmk2,
    alt: "CBMK2",
  },
  {
    src: cbmk3,
    alt: "CBMK3",
  },
].map((image) => ({ ...image, height: 1000, width: 750 }));

export default machineImages;
