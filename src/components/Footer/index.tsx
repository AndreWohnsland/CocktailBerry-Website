"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-white pt-10 dark:bg-gray-dark md:pt-12 lg:pt-14">
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
                <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Start the journey of building your own, personal cocktail
                  maker.
                </p>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-8 lg:mb-12">
                <h2 className="mb-6 text-xl font-bold text-black dark:text-white">
                  Useful Links
                </h2>
                <ul>
                  <li>
                    <Link
                      href="https://docs.cocktailberry.org/"
                      className="mb-1 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://github.com/AndreWohnsland/CocktailBerry"
                      className="mb-1 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      GitHub Source Code
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://stats-cocktailberry.streamlit.app/"
                      className="mb-1 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Cocktail Stats
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-8 lg:mb-12">
                <h2 className="mb-6 text-xl font-bold text-black dark:text-white">
                  Terms
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/imprint"
                      className="mb-1 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Imprint
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-8 lg:mb-12">
                <h2 className="mb-6 text-xl font-bold text-black dark:text-white">
                  Support & Help
                </h2>
                <ul>
                  <li>
                    <Link
                      href="https://docs.cocktailberry.org/faq/"
                      className="mb-1 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://github.com/AndreWohnsland/CocktailBerry/issues/new/choose"
                      className="mb-1 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Open GitHub Issue
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://github.com/AndreWohnsland/CocktailBerry/discussions/new/choose"
                      className="mb-1 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Ask in Discussions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
