"use client";
import { Snippet } from "@nextui-org/snippet";
import { useTranslations } from "next-intl";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "../Common/SingleFeature";
import TiltStreakBg from "../Common/TiltStreakBg";
import prerequisiteData from "./prerequisiteData";

const Installation = () => {
  const t = useTranslations("installation");

  return (
    <>
      <section
        id="prerequisite"
        className="relative z-10 bg-gray-light py-10 dark:bg-bg-color-dark"
      >
        <div className="container">
          <SectionTitle
            title={t("prerequisites.title")}
            paragraph={t("prerequisites.subtitle")}
            center
            width="665px"
          />
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-14">
            {prerequisiteData(t).map((feature) => (
              <div
                key={feature.id}
                className="w-full lg:w-[calc(50%-1rem)] 2xl:w-[calc(33.333%-1.334rem)]"
              >
                <SingleFeature feature={feature} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="steps" className="relative z-10 py-10">
        <div className="container">
          <SectionTitle
            title={t("steps.title")}
            paragraph={t("steps.subtitle")}
            center
            width="800px"
            mb="3rem"
          />
          <div className="snippet-container mx-auto my-12 w-full text-center">
            <Snippet style={{ maxWidth: "100%" }}>
              wget -O -
              https://raw.githubusercontent.com/AndreWohnsland/CocktailBerry/master/scripts/all_in_one.sh
              | bash
            </Snippet>
          </div>
          <TiltStreakBg />
        </div>
        <div
          className="mx-auto w-full px-4 text-center"
          style={{ maxWidth: "800px" }}
        >
          <p className="!leading-relaxed text-base text-body-color md:text-lg">
            {t("steps.afterInstall")}{" "}
            <a
              href="https://docs.cocktailberry.org/installation/"
              className="text-primary underline"
            >
              {t("steps.inDocs")}
            </a>
            .
          </p>
          <p className="!leading-relaxed pt-8 text-base text-body-color md:text-lg">
            {t("steps.startProgram")}
          </p>
        </div>
        <div className="snippet-container mx-auto my-12 w-full text-center">
          <Snippet style={{ maxWidth: "100%" }}>
            cd ~ && bash launcher.sh
          </Snippet>
        </div>
        <div
          className="mx-auto w-full px-4 text-center"
          style={{ maxWidth: "800px" }}
        >
          <p className="!leading-relaxed text-base text-body-color md:text-lg">
            {t("steps.setupInstructions")}{" "}
            <a
              href="https://docs.cocktailberry.org/setup/"
              className="text-primary underline"
            >
              {t("steps.officialDocs")}
            </a>{" "}
            {t("steps.forThat")}
          </p>
          <p className="!leading-relaxed pt-8 text-base text-body-color md:text-lg">
            {t("steps.allSetUp")}
          </p>
        </div>
      </section>
    </>
  );
};

export default Installation;
