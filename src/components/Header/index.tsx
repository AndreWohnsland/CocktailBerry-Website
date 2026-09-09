"use client";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { type AppPathname, Link, usePathname } from "@/i18n/routing";
import LanguageSwitcher from "./LanguageSwitcher";
import menuData from "./menuData";
import ThemeToggler from "./ThemeToggler";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };
  const navbarRef = useRef<HTMLElement | null>(null);
  const navbarToggleRef = useRef<HTMLButtonElement | null>(null);

  // Close the mobile navbar when clicking outside of it
  useEffect(() => {
    if (!navbarOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        navbarRef.current?.contains(target) ||
        navbarToggleRef.current?.contains(target)
      ) {
        return;
      }
      setNavbarOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [navbarOpen]);

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleStickyNavbar = () => {
      setSticky(window.scrollY >= 80);
    };
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();
  const t = useTranslations("header");

  return (
    <header
      className={`header fixed top-0 left-0 z-9999 flex w-full items-center transition-[background-color,box-shadow,backdrop-filter] ${
        sticky
          ? "bg-white/80 shadow-sticky backdrop-blur-sm dark:bg-gray-dark/80 dark:shadow-sticky-dark"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4 xl:mr-12">
            <Link
              href="/"
              className={`header-logo block w-full ${
                sticky ? "py-5 lg:py-2" : "py-8"
              } `}
            >
              <Image
                src="/images/logo/logo-2.svg"
                alt="logo"
                width={140}
                height={30}
                className="w-full dark:hidden"
              />
              <Image
                src="/images/logo/logo.svg"
                alt="logo"
                width={140}
                height={30}
                className="hidden w-full dark:block"
              />
            </Link>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                type="button"
                ref={navbarToggleRef}
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="absolute top-1/2 right-4 block -translate-y-1/2 rounded-lg px-3 py-1.5 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 lg:hidden"
              >
                <span
                  className={`relative my-1.5 block h-0.5 w-7.5 bg-black transition-[top,rotate,opacity] duration-200 dark:bg-white ${
                    navbarOpen ? "top-1.75 rotate-45" : " "
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-7.5 bg-black transition-[top,rotate,opacity] duration-200 dark:bg-white ${
                    navbarOpen ? "opacity-0" : " "
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-7.5 bg-black transition-[top,rotate,opacity] duration-200 dark:bg-white ${
                    navbarOpen ? "-top-2 -rotate-45" : " "
                  }`}
                />
              </button>
              <nav
                ref={navbarRef}
                id="navbarCollapse"
                className={`navbar absolute right-0 z-30 w-62.5 rounded-lg border border-stroke bg-white px-6 py-4 shadow-two transition-[top,opacity,visibility] duration-200 lg:visible lg:static lg:w-auto lg:border-none lg:bg-transparent! lg:p-0 lg:opacity-100 lg:shadow-none dark:border-stroke-dark dark:bg-dark ${
                  navbarOpen
                    ? "visibility top-full opacity-100"
                    : "invisible top-[120%] opacity-0"
                }`}
              >
                <ul className="block lg:flex lg:space-x-12">
                  {menuData(t).map((menuItem, index) => (
                    <li key={menuItem.title} className="group relative">
                      {menuItem.path ? (
                        <Link
                          href={{
                            pathname: menuItem.path,
                            hash: menuItem.hash,
                          }}
                          onClick={() => setNavbarOpen(false)}
                          className={`flex py-2 text-base transition-colors duration-150 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                            usePathName === menuItem.path
                              ? "text-primary dark:text-white"
                              : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                          }`}
                        >
                          {menuItem.title}
                        </Link>
                      ) : (
                        <>
                          {/** biome-ignore lint/a11y/useKeyWithClickEvents: keep */}
                          <p
                            onClick={() => handleSubmenu(index)}
                            className="flex cursor-pointer items-center justify-between py-2 text-base text-dark transition-colors duration-150 group-hover:text-primary lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 dark:text-white/70 dark:group-hover:text-white"
                          >
                            {menuItem.title}
                            <span className="pl-3">
                              <svg
                                aria-hidden="true"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </p>
                          <div
                            className={`submenu relative top-full left-0 rounded-lg bg-white transition-[top,opacity] duration-200 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-62.5 lg:border lg:border-stroke lg:p-4 lg:opacity-0 lg:shadow-two lg:group-hover:visible lg:group-hover:top-full dark:bg-dark lg:dark:border-stroke-dark ${
                              openIndex === index ? "block" : "hidden"
                            }`}
                          >
                            {menuItem.submenu?.map((submenuItem) =>
                              submenuItem.internal ? (
                                <Link
                                  href={{
                                    pathname: submenuItem.path as AppPathname,
                                  }}
                                  key={submenuItem.path}
                                  onClick={() => setNavbarOpen(false)}
                                  className="flex items-center gap-2 rounded py-2.5 text-dark text-sm transition-colors duration-150 hover:text-primary lg:px-3 dark:text-white/70 dark:hover:text-white"
                                >
                                  {submenuItem.icon}
                                  {submenuItem.title}
                                </Link>
                              ) : (
                                <a
                                  href={submenuItem.path}
                                  key={submenuItem.path}
                                  onClick={() => setNavbarOpen(false)}
                                  className="flex items-center gap-2 rounded py-2.5 text-dark text-sm transition-colors duration-150 hover:text-primary lg:px-3 dark:text-white/70 dark:hover:text-white"
                                  target={
                                    submenuItem.newTab ? "_blank" : undefined
                                  }
                                  rel={
                                    submenuItem.newTab
                                      ? "noopener noreferrer"
                                      : undefined
                                  }
                                >
                                  {submenuItem.icon}
                                  {submenuItem.title}
                                </a>
                              ),
                            )}
                          </div>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="flex items-center justify-end gap-2 pr-16 lg:pr-0">
              <a
                href="https://github.com/AndreWohnsland/CocktailBerry"
                className="btn btn-primary mr-1 hidden whitespace-nowrap px-4 py-2 md:inline-flex"
              >
                <GitHubIcon fontSize="small" />
                <span className="hidden xl:inline">Source Code</span>
              </a>
              <LanguageSwitcher />
              <div>
                <ThemeToggler />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
