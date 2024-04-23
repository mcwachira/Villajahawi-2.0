"use client"
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "@/src/components/ui/Container";
import { FaWifi, FaParking } from "react-icons/fa";
import { FaPersonSwimming } from "react-icons/fa6";
import { MdLocalLaundryService } from "react-icons/md";
import { HiLightBulb } from "react-icons/hi";
import { TbMassage } from "react-icons/tb";
import { clsx } from "clsx";
import { useTheme } from "next-themes";

const Facilities = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={clsx(
        "  border-b  border-slate-200/80 w-full",
        theme === "dark" ? "bg-dark" : "bg-light"
      )}
    >
      <Container>
        <h2 className="text-center text-4xl md:text-6xl py-16 md:py-24">
          Our Amenities
        </h2>

        <p className="text-center text-xl  md:text-3xl">
          Our villa provides the perfect blend of modern convenience and
          luxurious living. It's a retreat where you can unwind, entertain, and
          make lasting memories.
        </p>
        <motion.div className="py-2 grid aut-cols-max auto-rows-max justify-center md:grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8 my-12 ">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.65, ease: "easeOut" }}
            className={clsx(
              "flex flex-col items-center justify-center px-10 py-10 md:px-16 md:py-16",
              theme === "dark" ? " bg-[#fafafa]" : "bg-[#e5dada]"
            )}
          >
            <FaPersonSwimming size={60} color="#4a576E" />

            <h2 className="text-2xl text-[#4a576E] my-4 leading-1">Jacuzzi</h2>
          </motion.div>

          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.65, ease: "easeOut" }}
            className={clsx(
              "flex flex-col items-center justify-center px-10 py-10 md:px-16 md:py-16",
              theme === "dark" ? " bg-[#fafafa]" : "bg-[#e5dada]"
            )}
          >
            <FaWifi size={60} color="#4a576E" />

            <h2 className="text-2xl text-[#4a576E] my-4 leading-1">Wifi</h2>
          </motion.div>

          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ opacity: 1 }}
            className={clsx(
              "flex flex-col items-center justify-center px-10 py-10 md:px-16 md:py-16",
              theme === "dark" ? " bg-[#fafafa]" : "bg-[#e5dada]"
            )}
          >
            <FaParking size={60} color="#4a576E" />

            <h2 className="text-2xl text-[#4a576E] my-4 leading-1">Parking</h2>
          </motion.div>
        </motion.div>

        <div className="py-2 grid aut-cols-max auto-rows-max justify-center  md:grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8 my-12 ">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ opacity: 1 }}
            className={clsx(
              "flex flex-col items-center justify-center px-10 py-10 md:px-16 md:py-16",
              theme === "dark" ? " bg-[#fafafa]" : "bg-[#e5dada]"
            )}
          >
            <MdLocalLaundryService size={60} color="#4a576E" />

            <h2 className="text-2xl text-[#4a576E] my-4 leading-1">Laundry</h2>
          </motion.div>

          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ opacity: 1 }}
            className={clsx(
              "flex flex-col items-center justify-center px-10 py-10 md:px-16 md:py-16",
              theme === "dark" ? " bg-[#fafafa]" : "bg-[#e5dada]"
            )}
          >
            <HiLightBulb size={60} color="#4a576E" />

            <h2 className="text-2xl text-[#4a576E] my-4 leading-1">
              24/7 Light
            </h2>
          </motion.div>

          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ opacity: 1 }}
            className={clsx(
              "flex flex-col items-center justify-center px-10 py-10 md:px-16 md:py-16",
              theme === "dark" ? " bg-[#fafafa]" : "bg-[#e5dada]"
            )}
          >
            <TbMassage size={60} color="#4a576E" />

            <h2 className="text-2xl text-[#4a576E] my-4 leading-1">
              Massage & Spa
            </h2>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default Facilities;
