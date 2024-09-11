import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import StreakBg from "../Common/StreakBg";
import programImages from "./programImages";
import machineImages from "./machineImages";
import TiltStreakBg from "../Common/TiltStreakBg";

const Impressions = () => {
  return (
    <>
      <section
        id="cocktailberry-ui"
        className="relative z-10 bg-gray-light py-10 dark:bg-bg-color-dark"
      >
        <div className="container">
          <SectionTitle
            title="CocktailBerry User Interface"
            paragraph="There are multiple main pages for you to interact with, especially the two maker views will be the place for your users."
            center
            width="665px"
            mb="2rem"
          />
          <div className="mb-8 flex flex-row flex-wrap justify-center justify-items-center">
            {programImages.map((image, index) => (
              <div
                key={index}
                className="basis-full p-1 lg:basis-1/2 2xl:basis-1/3"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  placeholder="blur"
                  className="rounded-md"
                />
              </div>
            ))}
          </div>
          <StreakBg />
        </div>
      </section>
      <section id="cocktailberry-machines" className="relative z-10 py-10">
        <div className="container">
          <SectionTitle
            title="Machine Examples"
            paragraph="Here's a brief overview of some build and release machines. You might find inspiration to create your own."
            center
            width="665px"
            mb="2rem"
          />
          <div className="mb-8 flex flex-row flex-wrap justify-center justify-items-center">
            {machineImages.map((image, index) => (
              <div
                key={index}
                className="basis-full p-1 lg:basis-1/2 2xl:basis-1/3"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  placeholder="blur"
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
        <TiltStreakBg />
      </section>
    </>
  );
};

export default Impressions;
