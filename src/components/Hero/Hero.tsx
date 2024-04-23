"use client"
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Dancing_Script } from "next/font/google";
import Image from "next/image";
const dancingScript = Dancing_Script({
  weight: "700",
  subsets: ["latin"],
});
const Hero = () => {
  return (
    <section className="relative h-screen ">
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

      <div className="relative z-20   mx-auto max-w-screen-xl  px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        {/* sm:max-w-lg */}
        <div className="w-full  overflow-hidden text-center ltr:sm:text-left rtl:sm:text-right">
          <motion.h1
            className={`${dancingScript.className}
     text-center font-display text-6xl font-semibold text-[#7c6a467]
      sm:text-6xl lg:text-left my-12 text-white`}
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.65, ease: "easeOut" }}
          >
            Villa Jahawi
          </motion.h1>
          <motion.h2
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.65, ease: "easeOut" }}
            className=" my-4 text-4xl font-extrabold text-center sm:text-5xl  lg:text-left text-white"
          >
            Every Moment feels like the first time
          </motion.h2>

          {/* <p className="mt-4 max-w-lg sm:text-xl/relaxed">
      Every Moment feels like the first time Villa Jahawi
      </p> */}

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.65, ease: "easeOut" }}
            className="mt-8 flex flex-wrap gap-4 text-center  justify-center items-center lg:justify-start"
          >
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.airbnb.com/rooms/1011994449555648498?source_impression_id=p3_1699090362_HCm3Po%2BSP7gkaS%2F6"
              className="block w-3/4 rounded bg-[#4a576E] my-8 px-6 py-4 text-xl sm:px-12 sm:py-4 md:text-2xl font-medium text-white shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Book Now
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;