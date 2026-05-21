"use client";
import { useTranslations } from "next-intl";
import type { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import StreakBg from "../Common/StreakBg";
import SingleTestimonial from "./SingleTestimonial";

const Testimonials = () => {
  const t = useTranslations("testimonials");

  const testimonialData: Testimonial[] = [
    {
      id: 1,
      name: t("thomas.name"),
      designation: t("thomas.designation"),
      content: t("thomas.content"),
      star: 5,
    },
    {
      id: 2,
      name: t("adnan.name"),
      designation: t("adnan.designation"),
      content: t("adnan.content"),
      star: 5,
    },
    {
      id: 3,
      name: t("marvin.name"),
      designation: t("marvin.designation"),
      content: t("marvin.content"),
      star: 5,
    },
  ];

  return (
    <section className="relative z-10 bg-gray-light py-16 md:py-20 lg:py-28 dark:bg-bg-color-dark">
      <div className="container">
        <SectionTitle title={t("title")} paragraph={t("subtitle")} center />

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-10">
          {testimonialData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)]"
            >
              <SingleTestimonial testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
      <StreakBg />
    </section>
  );
};

export default Testimonials;
