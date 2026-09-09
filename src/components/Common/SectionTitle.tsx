const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "4rem",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <div
      className={`w-full ${center ? "mx-auto text-center" : ""}`}
      style={{ maxWidth: width, marginBottom: mb }}
    >
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
