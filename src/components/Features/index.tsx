"use client";
import { useTranslations } from "next-intl";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "../Common/SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  const t = useTranslations("features");

  return (
    <section id="features" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle title={t("title")} paragraph={t("subtitle")} center />

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-14">
          {featuresData(t).map((feature) => (
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
  );
};

export default Features;
