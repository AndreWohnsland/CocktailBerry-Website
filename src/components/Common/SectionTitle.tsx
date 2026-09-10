const SectionTitle = ({
  title,
  paragraph,
  className = "mb-12",
}: {
  title: string;
  paragraph: string;
  className?: string;
}) => {
  return (
    <div className={`mx-auto max-w-3xl text-center ${className}`}>
      <h2 className="mb-4 text-balance font-bold font-display text-3xl text-black leading-tight! sm:text-4xl md:text-[45px] dark:text-white">
        {title}
      </h2>
      <p className="text-pretty text-base text-body-color leading-relaxed! md:text-lg dark:text-body-color-dark">
        {paragraph}
      </p>
    </div>
  );
};

export default SectionTitle;
