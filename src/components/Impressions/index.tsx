"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import SectionTitle from "../Common/SectionTitle";
import StreakBg from "../Common/StreakBg";
import TiltStreakBg from "../Common/TiltStreakBg";
import machineImages from "./machineImages";
import programImages from "./programImages";

const Impressions = () => {
  const t = useTranslations("impressions");

  return (
    <>
      <section
        id="cocktailberry-ui"
        className="relative z-10 bg-gray-light py-10 dark:bg-bg-color-dark"
      >
        <div className="container">
          <SectionTitle
            title={t("ui.title")}
            paragraph={t("ui.subtitle")}
            center
            width="665px"
            mb="2rem"
          />
          <div className="mb-8 flex flex-row flex-wrap justify-center justify-items-center">
            {programImages.map((image) => (
              <div
                key={image.viewKey}
                className="basis-full p-1 lg:basis-1/2 2xl:basis-1/3"
              >
                <Image
                  src={image.src}
                  alt={t("interfaceAlt", { view: t(image.viewKey) })}
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
            title={t("machines.title")}
            paragraph={t("machines.subtitle")}
            center
            width="665px"
            mb="2rem"
          />
          <div className="mb-8 flex flex-row flex-wrap justify-center justify-items-center">
            {machineImages.map((image) => (
              <div
                key={image.name}
                className="basis-full p-1 lg:basis-1/2 2xl:basis-1/3"
              >
                <Image
                  src={image.src}
                  alt={t("machineAlt", { name: image.name })}
                  placeholder="blur"
                  className="rounded-lg outline-1 outline-black/10 -outline-offset-1 dark:outline-white/10"
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
