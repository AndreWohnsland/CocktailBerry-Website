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
        className="section relative z-10 bg-gray-light dark:bg-bg-color-dark"
      >
        <div className="container">
          <SectionTitle title={t("ui.title")} paragraph={t("ui.subtitle")} />
          <div className="mb-8 flex flex-wrap justify-center gap-4 md:gap-6">
            {programImages.map((image) => (
              <div
                key={image.viewKey}
                className="w-full lg:w-[calc(50%-0.75rem)] 2xl:w-[calc(33.333%-1rem)]"
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
      <section id="cocktailberry-machines" className="section relative z-10">
        <div className="container">
          <SectionTitle
            title={t("machines.title")}
            paragraph={t("machines.subtitle")}
          />
          <div className="mb-8 flex flex-wrap justify-center gap-4 md:gap-6">
            {machineImages.map((image) => (
              <div
                key={image.name}
                className="w-full lg:w-[calc(50%-0.75rem)] 2xl:w-[calc(33.333%-1rem)]"
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
