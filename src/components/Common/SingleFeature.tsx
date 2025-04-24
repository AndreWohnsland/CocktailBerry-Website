import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph, ressources } = feature;
  return (
    <div className="w-full text-center ">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="flex content-center justify-center">
          <div className="mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
            {icon}
          </div>
        </div>
        <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
        {/* also add some small header if ressources are given */}
        {ressources && <h4 className="text-md mt-4">Ressources:</h4>}
        {/* map the ressources, if there are any, to a list of links below */}
        {ressources && (
          <ul className="mt-1">
            {ressources.map((resource, index) => (
              <li key={index}>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  {resource.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SingleFeature;
