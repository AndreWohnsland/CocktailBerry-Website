"use client";
import { useTranslations } from "next-intl";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "../Common/SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  const t = useTranslations("features");

  return (
    <section id="features" className="section-lg">
      <div className="container">
        <SectionTitle title={t("title")} paragraph={t("subtitle")} />

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {featuresData(t).map((feature) => (
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
  );
};

export default Features;
