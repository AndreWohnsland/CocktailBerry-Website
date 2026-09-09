import type { Testimonial } from "@/types/testimonial";

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { name, content, designation } = testimonial;

  return (
    <figure className="card flex h-full w-full flex-col p-8">
      <blockquote className="flex-1 text-base text-black leading-relaxed dark:text-white">
        “{content}”
      </blockquote>
      <figcaption className="mt-6 border-stroke border-t pt-5 dark:border-stroke-dark">
        <div className="font-semibold text-black dark:text-white">{name}</div>
        <div className="text-body-color text-sm">{designation}</div>
      </figcaption>
    </figure>
  );
};

export default SingleTestimonial;
