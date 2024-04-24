"use client"
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Container from "@/src/components/ui/Container";
import clsx from "clsx";
import darkLogo from '/public/assets/images/logos/web/png/color-logo-no-background.png'
import lightLogo from '/public/assets/images/logos/web/png/color-logo-background.png'

import { useTheme } from "next-themes";
import { GoLocation } from "react-icons/go";

const Footer = () => {
  const { theme, setTheme } = useTheme();

  return (
    <footer
      className={clsx(
        "overflow-hidden bg-slate-900 pb-8 pt-20 sm:pb-12 sm:pt-24 lg:pt-32",
        theme === "light" ? "!bg-[#F3F4F6]" : "!bg-[#041434]"
      )}
    >
      <div className="flex flex-col lg:flex-row mx-auto w-full px-4 pb-6 pt-16 sm:px-6 lg:px-8">
        <Container>
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex justify-center text-teal-600 sm:justify-start">
              <Link
                href="/"
                aria-label="Home"
                className="flex flex-shrink-0 items-center"
              >
                {theme === "dark" ? (
                  <Image
                    src={darkLogo}
                    alt=""
                    width={100}
                    height={100}
                    className="h-18 w-auto sm:h-16  lg:h-16"
                  />
                ) : (
                  <Image
                    src={lightLogo}
                    alt=""
                    width={100}
                    height={100}
                    className="h-18 w-auto sm:h-16  lg:h-16"
                  />
                )}
              </Link>
            </div>

            <p className="mt-4 max-w-1/2 text-center text-2xl leading-relaxed  sm:text-left lg:mt-0">
              Every Moment feels like the first time
            </p>
          </div>

          <div className="max-w-full ">
            <div className=" ml-auto w-full m-12 md:mt-16 grid aut-cols-max auto-rows-max grid-cols-1 gap-4 border-t border-gray-100 pt-16 lg:grid-cols-2 md:gap-2 ">
              <div className="text-center text-lg md:text-2xl space-y-4  sm:text-left ">
                <h2>Villa Jahawi</h2>
                <h3>Diani Beach Road 80401</h3>
                <h3>Diani, Kenya</h3>

                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://maps.app.goo.gl/6iNbE3gy3AMDmdZZ8"
                  className=" ml-auto mr-auto flex items-center text-lg md:text-2xl "
                >
                  Locate us
                  <GoLocation size={30} className="ml-2" />
                </Link>
              </div>
              <div className="max-w-full   mt-8 md:mt-0 grid grid-cols-1 gap-4   lg:grid-cols-3 ">
                <div className="text-lg md:text-2xl  w-full text-center sm:text-left">
                  <h2 className="text-3xl font-semibold ">About Us</h2>

                  <ul className="mt-8 text-lg md:text-2xl  space-y-4">
                    <li>
                      <Link
                        className="transition hover:text-gray-700/75"
                        href="/"
                      >
                        Home
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="transition hover:text-gray-700/75"
                        href="/accommodation"
                      >
                        Accommodation
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="transition hover:text-gray-700/75"
                        href="/"
                      >
                        Facilities
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="transition hover:text-gray-700/75"
                        href="/blog"
                      >
                        Blog
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="transition hover:text-gray-700/75"
                        href="/contact"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="text-center w-full sm:text-left">
                  <h2 className="text-3xl font-semibold ">Gallery</h2>

                  <ul className="mt-8 text-lg md:text-2xl  space-y-4">
                    <li>
                      <Link
                        className=" transition hover:text-gray-700/75"
                        href="/gallery"
                      >
                        Gallery
                      </Link>
                    </li>

                    <li>
                      <Link
                        className=" transition hover:text-gray-700/75"
                        href="/contact"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="text-center sm:text-left">
                  <h2 className="text-3xl font-semibold ">Helpful Links</h2>

                  <ul className="mt-8 text-lg md:text-2xl  space-y-4">
                    <li>
                      <Link
                        className=" transition hover:text-gray-700/75"
                        href="/"
                      >
                        FAQs
                      </Link>
                    </li>

                    <li>
                      <Link
                        className=" transition hover:text-gray-700/75"
                        href="/"
                      >
                        Support
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-gray-100 pt-6 sm:flex sm:items-center sm:justify-between">
            <p className="text-center text-lg md:text-2xl   sm:text-left">
              Copyright &copy; 2022. All rights reserved.
            </p>

            <ul className="mt-4 flex justify-center gap-6 sm:mt-0 sm:justify-start">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61552855440458"
                  rel="noreferrer"
                  target="_blank"
                  className=" transition hover:text-teal-700/75"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-12 w-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/villajahawi/"
                  rel="noreferrer"
                  target="_blank"
                  className=" transition hover:text-teal-700/75"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-12 w-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;