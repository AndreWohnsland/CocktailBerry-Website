"use client";
import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";
import StreakBg from "../Common/StreakBg";
import { useTranslations } from "next-intl";

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
    <section className="relative z-10 bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title={t("title")}
          paragraph={t("subtitle")}
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
      <StreakBg />
    </section>
  );
};

export default Testimonials;
