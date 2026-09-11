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
      <section id="hardware-intro" className="section relative z-10">
        <div className="container">
          <SectionTitle
            title={t("intro.title")}
            paragraph={t("intro.subtitle")}
          />
          <div className="card mx-auto max-w-200 px-6 py-5 text-center">
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
        className="section relative z-10 bg-gray-light dark:bg-bg-color-dark"
      >
        <div className="container">
          <SectionTitle
            title={t("components.title")}
            paragraph={t("components.subtitle")}
          />
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {hardwareData(t).map((feature) => (
              <div
                key={feature.id}
                className="flex w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
              >
                <SingleFeature feature={feature} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pumps" className="section relative z-10">
        <div className="container">
          <SectionTitle
            title={t("pumps.title")}
            paragraph={t("pumps.subtitle")}
          />
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {pumpData(t).map((feature) => (
              <div
                key={feature.id}
                className="flex w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(40%-0.75rem)]"
              >
                <SingleFeature feature={feature} />
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-200 text-center text-base text-body-color italic leading-relaxed md:text-lg">
            {t("pumps.note")}
          </p>
        </div>
        <TiltStreakBg />
      </section>

      <section
        id="extensions"
        className="section relative z-10 bg-gray-light dark:bg-bg-color-dark"
      >
        <div className="container">
          <div className="mx-auto max-w-200 text-center">
            <div className="mb-6 flex justify-center">
              <div className="flex size-16 items-center justify-center rounded-xl bg-primary/10 text-[2.5rem] text-primary">
                <ExtensionIcon fontSize="inherit" />
              </div>
            </div>
            <SectionTitle
              title={t("extensions.title")}
              paragraph={t("extensions.description")}
              className="mb-0"
            />
          </div>
        </div>
      </section>

      <section id="hardware-cta" className="section relative z-10">
        <div className="container">
          <div className="mx-auto max-w-200 text-center">
            <SectionTitle
              title={t("cta.title")}
              paragraph={t("cta.subtitle")}
            />
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href={{ pathname: "/installation", hash: "prerequisite" }}
                className="btn btn-primary"
              >
                <BuildIcon fontSize="small" />
                {t("cta.install")}
              </Link>
              <a
                href={DOCS_HARDWARE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
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
