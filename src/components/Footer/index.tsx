"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer className="relative z-10 bg-white pt-10 md:pt-12 lg:pt-14 dark:bg-gray-dark">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
            <div className="mb-6 max-w-[360px] lg:mb-10">
              <Link href="/" className="mb-2 inline-block">
                <Image
                  src="/images/logo/logo-2.svg"
                  alt="logo"
                  className="w-full dark:hidden"
                  width={140}
                  height={30}
                />
                <Image
                  src="/images/logo/logo.svg"
                  alt="logo"
                  className="hidden w-full dark:block"
                  width={140}
                  height={30}
                />
              </Link>
              <p className="mb-9 text-base text-body-color leading-relaxed dark:text-body-color-dark">
                {t("description")}
              </p>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-8 lg:mb-12">
              <h2 className="mb-6 font-bold text-black text-xl dark:text-white">
                {t("usefulLinks")}
              </h2>
              <ul>
                <li>
                  <a
                    href="https://docs.cocktailberry.org/"
                    className="mb-1 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    {t("documentation")}
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/AndreWohnsland/CocktailBerry"
                    className="mb-1 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    {t("githubSource")}
                  </a>
                </li>
                <li>
                  <a
                    href="https://stats-cocktailberry.streamlit.app/"
                    className="mb-1 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    {t("cocktailStats")}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-8 lg:mb-12">
              <h2 className="mb-6 font-bold text-black text-xl dark:text-white">
                {t("terms")}
              </h2>
              <ul>
                <li>
                  <Link
                    href="/imprint"
                    className="mb-1 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    {t("imprint")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div className="mb-8 lg:mb-12">
              <h2 className="mb-6 font-bold text-black text-xl dark:text-white">
                {t("supportHelp")}
              </h2>
              <ul>
                <li>
                  <a
                    href="https://docs.cocktailberry.org/faq/"
                    className="mb-1 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    {t("faq")}
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/AndreWohnsland/CocktailBerry/issues/new/choose"
                    className="mb-1 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    {t("openGithubIssue")}
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/AndreWohnsland/CocktailBerry/discussions/new/choose"
                    className="mb-1 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    {t("askDiscussions")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
      </div>
    </footer>
  );
};

export default Footer;
