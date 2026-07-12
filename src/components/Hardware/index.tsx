"use client";
import BuildIcon from "@mui/icons-material/Build";
import ExtensionIcon from "@mui/icons-material/Extension";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "../Common/SingleFeature";
import TiltStreakBg from "../Common/TiltStreakBg";
import hardwareData from "./hardwareData";
import pumpData from "./pumpData";

const DOCS_HARDWARE_URL = "https://docs.cocktailberry.org/hardware/";
const HARDWARE_DOCS_URL = "https://hardware.cocktailberry.org/";

const Hardware = () => {
  const t = useTranslations("hardware");

  return (
    <>
      <section id="hardware-intro" className="relative z-10 pt-4 pb-6">
        <div className="container">
          <SectionTitle
            title={t("intro.title")}
            paragraph={t("intro.subtitle")}
            center
            width="800px"
            mb="2rem"
          />
          <div className="mx-auto max-w-[800px] rounded-md bg-primary/5 px-6 py-5 text-center">
            <p className="text-base text-body-color leading-relaxed md:text-lg">
              {t("docsCallout")}{" "}
              <a
                href={DOCS_HARDWARE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                {t("docsLink")}
              </a>
              .
            </p>
            <p className="mt-3 text-base text-body-color leading-relaxed md:text-lg">
              {t("officialCallout")}{" "}
              <a
                href={HARDWARE_DOCS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                {t("officialLink")}
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section
        id="components"
        className="relative z-10 bg-gray-light py-12 dark:bg-bg-color-dark"
      >
        <div className="container">
          <SectionTitle
            title={t("components.title")}
            paragraph={t("components.subtitle")}
            center
            width="665px"
            mb="3rem"
          />
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-14">
            {hardwareData(t).map((feature) => (
              <div
                key={feature.id}
                className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)]"
              >
                <SingleFeature feature={feature} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pumps" className="relative z-10 py-12">
        <div className="container">
          <SectionTitle
            title={t("pumps.title")}
            paragraph={t("pumps.subtitle")}
            center
            width="800px"
            mb="3rem"
          />
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-14">
            {pumpData(t).map((feature) => (
              <div
                key={feature.id}
                className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(40%-1rem)]"
              >
                <SingleFeature feature={feature} />
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-[800px] text-center text-base text-body-color italic leading-relaxed md:text-lg">
            {t("pumps.note")}
          </p>
        </div>
        <TiltStreakBg />
      </section>

      <section
        id="extensions"
        className="relative z-10 bg-gray-light py-12 dark:bg-bg-color-dark"
      >
        <div className="container">
          <div className="mx-auto max-w-[800px] text-center">
            <div className="mb-6 flex justify-center">
              <div className="flex h-17.5 w-17.5 items-center justify-center rounded-md bg-primary/10 text-primary">
                <ExtensionIcon style={{ fontSize: 60 }} />
              </div>
            </div>
            <h2 className="!leading-tight mb-4 font-bold text-3xl text-black sm:text-4xl dark:text-white">
              {t("extensions.title")}
            </h2>
            <p className="!leading-relaxed text-base text-body-color md:text-lg">
              {t("extensions.description")}
            </p>
          </div>
        </div>
      </section>

      <section id="hardware-cta" className="relative z-10 py-16">
        <div className="container">
          <div className="mx-auto max-w-[800px] text-center">
            <h2 className="!leading-tight mb-4 font-bold text-3xl text-black sm:text-4xl dark:text-white">
              {t("cta.title")}
            </h2>
            <p className="!leading-relaxed mb-10 text-base text-body-color md:text-lg">
              {t("cta.subtitle")}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href={{ pathname: "/installation", hash: "prerequisite" }}
                className="inline-flex items-center gap-2 rounded-sm bg-brand px-6 py-4 font-semibold text-base text-white duration-300 ease-in-out hover:bg-brand/80"
              >
                <BuildIcon fontSize="small" />
                {t("cta.install")}
              </Link>
              <a
                href={DOCS_HARDWARE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm bg-secondary px-6 py-4 font-semibold text-base text-white duration-300 ease-in-out hover:bg-secondary/80"
              >
                <MenuBookIcon fontSize="small" />
                {t("cta.docs")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hardware;
