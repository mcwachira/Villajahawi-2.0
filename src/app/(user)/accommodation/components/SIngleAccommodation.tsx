"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsPeopleFill } from "react-icons/bs";
import  Container  from "@/src/components/ui/Container";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useTheme } from "next-themes";
import { MdOutlineBedroomParent } from "react-icons/md";
import { GiBathtub } from "react-icons/gi";

const SingleAccommodation = ({ room }) => {
  const { theme, setTheme } = useTheme();
  console.log(room);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <div
        className={clsx(
          "pb-20 w-full grid  md:grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-2 ",
          theme === "dark" ? "bg-dark" : "bg-light"
        )}
        id="#section1"
      >
        <div className="mt-20 lg:mx-auto w-full">
          <Container>
            <div className="flex flex-col w-full ">
              <h2
                className={clsx(
                  "relative overflow-visible w-auto mt-0 mr-auto mb-6 pr-2 justify-center items-start  text-4xl text-center lg:text-left capitalize font-semibold  ",
                  theme === "dark" ? "text-dark" : "text-light"
                )}
              >
                {" "}
                {room?.title}
              </h2>

              <h2
                className={clsx(
                  "relative overflow-visible w-auto mt-0 mr-auto mb-4 pr-2 justify-start items-start text-3xl lg:text-5xl text-center lg:text-left capitalize font-semibold  ",
                  theme === "dark" ? "text-white" : "text-gray-500"
                )}
              >
                {room?.subTitle}
              </h2>

              <p className=" text-xl lg:text-2xl  leading-loose tracking-wide my-2">
                {room?.description}
              </p>

              <div className="mt-6">
                <div className=" w-full  xl:w-2/3 my-8 flex flex-col  md:flex-row justify-between items-center lg:space-x-12">
                  <div className="w-full flex flex-col space-y-4 items-center ">
                    <BsPeopleFill size={50} />
                    <p className=" text-xl md:text-3xl  font-medium ">
                      {room?.numberOfPeople} people
                    </p>
                  </div>

                  <div className="w-full flex flex-col space-y-4 items-center ">
                    <MdOutlineBedroomParent size={50} />
                    <p className=" text-xl md:text-3xl  font-medium ">
                      {room?.numberOfBeds === 1 ? "1 Bed" : "Beds"}
                    </p>
                  </div>

                  <div className="w-full flex flex-col space-y-4 items-center ">
                    <GiBathtub size={50} />
                    <p className="w-full text-xl md:text-3xl  font-medium ">
                      {room.numberOfBathrooms === 1
                        ? "1 Bathroom"
                        : "Bathrooms"}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="w-full  md:w-2/3 my-8 flex flex-col justify-between items-center md:space-x-12
    "
              >
                <div className="flex justify-between items-center space-x-12 my-8">
                  <Link
                    href={`/accommodation/[id]`}
                    as={`/accommodation/${room.id}`}
                    aria-label="Single Project"
                    passHref
                    className="relative rounded-md  inline-flex items-center justify-start py-2 px-6 text-3xl border-4 border-[#4a576E]  text-black overflow-hidden transition-all  bg-white  hover:bg-white group"
                  >
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#4a576E] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-center lg:text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                      Explore
                    </span>
                  </Link>

                  <Link
                    href="#"
                    className="relative rounded-md  inline-flex items-center justify-start py-2 px-6 text-3xl border-4 border-[#4a576E]  text-black overflow-hidden transition-all  bg-white  hover:bg-white group"
                  >
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#4a576E] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-center lg:text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                      Enquire
                    </span>
                  </Link>
                </div>

                <Link
                  href="#"
                  className="w-3/4 relative rounded-md  inline-flex items-center justify-start py-2 px-6 text-3xl border-4 border-[#4a576E]  text-black overflow-hidden transition-all  bg-white  hover:bg-white group"
                >
                  <span className="w-full h-52 rounded rotate-[-40deg] bg-[#4a576E] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-5 ml-5 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span className="relative w-full text-center text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                    Book{" "}
                  </span>
                </Link>
              </div>
            </div>
          </Container>
        </div>

        <div className="relative  mx:auto my-auto md:w-full order-first lg:order-last ">
          <Container>
            <Image
              src={room?.image}
              loading="lazy"
              alt="room image"
              className="relative z-10 shadow-lg object-cover rounded-lg"
              width="716"
              height="517"
            />
          </Container>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleAccommodation;
