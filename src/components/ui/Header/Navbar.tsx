"use client";
import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";
import { Menu, Popover, Transition, Disclosure } from "@headlessui/react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import Container from "@/src/components/ui/Container";
import { Button } from "@/src/components/ui/Button"
import { ThemeToggle } from "@/src/components/theme-toggle"
import darkLogo from '/public/assets/images/logos/web/png/color-logo-no-background.png'
import lightLogo from '/public/assets/images/logos/web/png/color-logo-background.png'


const links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Accommodation",
    href: "/accommodation",
  },
  {
    label: "Amenities",
    href: "/amenities",
  },

  {
    label: "Blog",
    href: "/articles",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  //console.log(theme);

  const pathname = usePathname();

  const [sticky, setSticky] = useState(false);

  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const linkVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  }, []);
  function MenuIcon({ open }: { open: boolean }) {
    return (
      <span className="relative h-3.5 w-4 transform transition duration-500 ease-in-out">
        <span
          className={clsx(
            "absolute block h-0.5 rotate-0 transform rounded-full",
            "bg-primary text-primary-foreground",
            "opacity-100 transition-all duration-300 ease-in-out group-hover:bg-slate-900",
            open ? "top-1.5 left-1/2 w-0" : "top-0 left-0 w-full"
          )}
        />
        <span
          className={clsx(
            "absolute left-0 top-1.5 block h-0.5 w-full transform rounded-full",
            "bg-primary text-primary-foreground",
            "opacity-100 transition-all duration-300 ease-in-out group-hover:bg-slate-900",
            open ? "rotate-45" : "rotate-0"
          )}
        />
        <span
          className={clsx(
            "absolute left-0 top-1.5 block h-0.5 w-full transform rounded-full",
            "bg-primary text-primary-foreground",
            "opacity-100 transition-all duration-300 ease-in-out group-hover:bg-slate-900",
            open ? "-rotate-45" : "rotate-0"
          )}
        />
        <span
          className={clsx(
            "absolute block h-0.5 rotate-0 transform rounded-full",
            "bg-primary text-primary-foreground",
            "opacity-100 transition-all duration-300 ease-in-out group-hover:bg-slate-900",
            open ? "top-1.5 left-1/2 w-0" : "left-0 top-3 w-full"
          )}
        />
      </span>
    );
  }

  function MobileNav() {
    return (
      <Popover>
        <Popover.Button
          className="group relative z-50 flex cursor-pointer items-center justify-center rounded-full bg-slate-100/80 p-3 shadow-sm shadow-sky-100/50 ring-1 ring-slate-900/5 transition duration-300 ease-in-out hover:bg-slate-200/60 focus:outline-none xl:hidden  "
          aria-label="Toggle Navigation"
        >
          {({ open }) => <MenuIcon open={open} />}
        </Popover.Button>
        <Transition.Root>
          <Transition.Child
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-150 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Popover.Overlay className="fixed inset-0 z-20 bg-slate-900 bg-opacity-50" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="duration-300 ease-out"
            enterFrom="opacity-0 scale-90"
            enterTo="opacity-100 scale-100 "
            leave="duration-200 ease-in"
            leaveFrom="opacity-100 scale-100 "
            leaveTo="opacity-0 scale-90"
          >
            <Popover.Panel
              as="div"
              className={clsx(
                "absolute inset-x-0 top-full z-30 mt-4 origin-top overflow-hidden rounded-2xl bg-slate-50 px-6 py-7 shadow-xl shadow-sky-100/40 ring-1 ring-slate-900/5",
                "bg-background text-foreground"
              )}
            >
              <div className="space-y-4">
                {/* <motion.div
                  className="flex flex-col space-y-4"
                  variants={AnimationContainer}
                > */}
                {links?.map((link) => (
                  <Link
                    key={`${link?.label}-mobile`}
                    href={link?.href}
                    className="block text-2xl font-semibold text-slate-700 duration-200 hover:text-slate-900"
                    // variants={Item}
                  >
                    {link.label}
                  </Link>
                ))}
                <ThemeToggle/>
                {/* </motion.div> */}
              </div>
            </Popover.Panel>
          </Transition.Child>
        </Transition.Root>
      </Popover>
    );
  }

  // sticky ? "!fixed !z-[9999] !bg-light !bg-opacity-100 shadow-sticky backdrop-blur-sm !transition dark:!bg-[#121212] dark:!bg-opacity-20":""
  return (
    <header
      className={clsx(
        "h-24 border-b  w-full  border-slate-200/80 ",
        sticky ? "!fixed !z-[9999]  shadow-sticky backdrop-blur-sm" : ""
      )}
    >
      {/* absolute */}
      <Container className="flex h-full w-full items-center">
        <nav className="relative z-50 flex w-full items-center justify-between">
          <div className="flex shrink-0 items-center">
            <Link
              href="/"
              aria-label="Home"
              className="flex flex-shrink-0 items-center"
            >
              {theme === "dark" ? (
                <Image
                  src={darkLogo}
                  alt="dark mode logo"

                  className="h-10 w-auto sm:h-12 md:hidden lg:block lg:h-14"
                />
              ) : (
                <Image
                  src={lightLogo}
                  alt="light mode logo"

                  className="h-10 w-auto sm:h-12 md:hidden lg:block lg:h-14"
                />
              )}
         
              {/* <Image
                        src={logoIcon}
                        alt=""
                        className="hidden h-8 w-auto md:block lg:hidden"
                      /> */}
            </Link>
          </div>
          <div className="hidden items-center lg:flex md:space-x-6 lg:space-x-8">
            {links?.map((link) => (
              <Link
                key={`${link.label}-desktop`}
                href={link?.href}
                className={clsx(
                  'relative duration-200 text-lg after:absolute after:left-1/2 after:-bottom-2.5 after:h-0.5 after:w-4 after:-translate-x-1/2 after:rounded-full after:bg-slate-900 after:opacity-0 after:content-[""]',
                  pathname === link.href
                    ? "font-semibold bg-background text-foreground after:opacity-100"
                    : "font-medium text-slate-700 hover:text-foreground hover:after:opacity-25"
                )}
              >
                {link.label}
              </Link>
            ))}

            <ThemeToggle/>
          </div>
          <div className="flex items-center">
            <Button href="#" className='bg-[#7c6a46] '>
              Book now
            </Button>
            <div className="ml-4 lg:hidden">
              <MobileNav />
            </div>
          </div>
        </nav>
      </Container>
    </header>
);
};

export default Navbar;
