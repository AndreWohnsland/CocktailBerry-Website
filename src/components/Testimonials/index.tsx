import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";
import StreakBg from "../Common/StreakBg";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Thomas",
    designation: "Builder of a Machine",
    content:
      "A few inputs and the code was running! I was totally amazed, especially by the extent of the software and the clean, well-designed interface.",
    star: 5,
  },
  {
    id: 2,
    name: "Adnan",
    designation: "Builder of multiple Machines",
    content:
      "I've tried a few cocktail software programs, and I have to say, yours is the one that's the best structured.",
    star: 5,
  },
  {
    id: 3,
    name: "Marvin",
    designation: "User of the Software",
    content:
      "It's great to see how much effort you put in, and that it's not a project that gets abandoned after just one or two updates.",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="relative z-10 bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="What Our Users Say"
          paragraph="CocktailBerry especially brings joy to people who just want to build, but not program. In case you want to program, add-ons also provide an easy way to extend the functionality."
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
