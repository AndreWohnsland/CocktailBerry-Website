import { useTranslations } from "next-intl";
import type { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph, resources } = feature;
  const t = useTranslations("singleFeature");
  return (
    <div className="card flex h-full w-full flex-col p-6">
      <div className="mb-4 flex items-center gap-4">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-[1.75rem] text-primary">
          {icon}
        </div>
        <h3 className="font-display text-black text-xl dark:text-white">
          {title}
        </h3>
      </div>
      <p className="flex-1 text-base text-body-color leading-relaxed dark:text-body-color-dark">
        {paragraph}
      </p>
      {resources && (
        <div className="mt-5 border-stroke border-t pt-4 dark:border-stroke-dark">
          <span className="mb-2 block font-semibold text-body-color text-xs uppercase tracking-wide">
            {t("resources")}
          </span>
          <ul className="flex flex-wrap gap-2">
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
                  className="inline-block rounded-full border border-primary/30 px-3 py-1 text-primary text-sm transition-colors duration-150 hover:bg-primary/10"
                >
                  {resource.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SingleFeature;
