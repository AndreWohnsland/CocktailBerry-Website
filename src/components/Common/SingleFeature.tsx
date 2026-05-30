import { useTranslations } from "next-intl";
import type { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph, resources } = feature;
  const t = useTranslations("singleFeature");
  return (
    <div className="w-full text-center">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="flex content-center justify-center">
          <div className="mb-6 flex h-17.5 w-17.5 items-center justify-center rounded-md bg-primary/10 text-primary">
            {icon}
          </div>
        </div>
        <h3 className="mb-4 font-bold text-black text-xl sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
          {title}
        </h3>
        <p className="pr-[10px] font-medium text-base text-body-color leading-relaxed">
          {paragraph}
        </p>
        {/* also add some small header if resources are given */}
        {resources && <h4 className="mt-4 text-md">{t("resources")}</h4>}
        {/* map the resources, if there are any, to a list of links below */}
        {resources && (
          <ul className="mt-1">
            {resources.map((resource) => (
              <li key={resource.url}>
                <a
                  href={resource.url}
                  target="_blank"
                  rel={
                    resource.sponsored
                      ? "sponsored nofollow noopener noreferrer"
                      : "noopener noreferrer"
                  }
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
