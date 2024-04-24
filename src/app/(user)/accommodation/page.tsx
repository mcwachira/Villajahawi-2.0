'use client'
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { MdOutlineBedroomParent } from "react-icons/md";
import { GiBathtub } from "react-icons/gi";

import Link from "next/link";
import { AiOutlineArrowDown } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";

import { accommodationData } from "@/src/data/accomodationData";
// import SingleAccommodation from "../../components/SingleAccommodation";
import clsx from "clsx";
import { useTheme } from "next-themes";
import Container from "@/src/components/ui/Container";
import SingleAccommodation from "@/src/app/(user)/accommodation/components/SIngleAccommodation"

const Accommodation = () => {
  console.log(accommodationData)

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <div className=" dark:bg-dark  light:bg-white">
        <section className="relative h-screen mb-20 ">
          <div className="absolute inset-0 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l">
            <Image
              src="/assets/images/jahawi-images/front-2.webp"
              alt="background image"
              className="object-cover object-center"
              fill
              sizes="100vw"
              priority
            />
          </div>

          <div className="z-20  flex flex-col xl:flex-row w-full items-center h-full justify-end    xl:w-2/3  text-white">
            <div className="mb-2 text-4xl lg:text-6xl justify-end md:mb-24 mx-14 items-center text-center lg:text-left font-bold tracking-tight flex flex-col w-full  xl8:w-1/2">
              <span className=" my-4 text-center">
                Designed to take advantage of
              </span>

              <span className="">The sunny costal climate</span>
            </div>
            <div className="w-full px-6 text-center  mb-12 md:mb-24 ml-auto text-white md:px-12">
              <button
                href="#section1"
                scroll={false}
                className="bg-white opacity-60"
              >
                <AiOutlineArrowDown size={60} color="#111" />
              </button>
            </div>
          </div>

          {/* <!-- Jumbotron --> */}
        </section>

        <Container>
          <h2 className="text-center font-bold text-5xl lg:text-6xl py-18 mb-8">
            Our Rooms
          </h2>
        </Container>

        {accommodationData.map((room) => (
          <SingleAccommodation key={room.id} room={room} />
        ))}
      </div>
    </motion.div>
  );
};

export default Accommodation;
//
// export const getStaticProps = async () => {
//   return {
//     props: {
//       rooms: accommodationData,
//     },
//   };
// };


