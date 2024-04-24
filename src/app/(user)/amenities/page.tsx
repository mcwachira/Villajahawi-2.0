"use client"
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Dancing_Script } from "next/font/google";
import Container  from "@/src/components/ui/Container";
import clsx from "clsx";
import "@/src/app/styles/swiper-styles.module.css";
const dancingScript = Dancing_Script({
  weight: "700",
  subsets: ["latin"],
});

// Import Swiper
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useTheme } from "next-themes";
import Image from "next/image";

const Amenities = () => {
  const { theme, setTheme } = useTheme();
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <div
        className={clsx(
          "h-full",
          theme === "dark" ? "bg-dark" : "bg-light"
        )}
      >
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
                  className="block w-3/4 rounded bg-[#4a576E] my-8 px-6 py-4 text-xl sm:px-8 sm:py-4 md:text-2xl font-medium text-white shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                >
                  Book Now
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        <Container>
          {/* main area  */}
          <div className="mt-20 space-y-6">
            <Container>
              <h2 className="relative text-6xl text-center overflow-visible w-auto mt-0 mr-auto mb-6 pr-2 justify-start items-start text-gray-500 capitalize font-semibold  ">
                {" "}
                Amenities
              </h2>

              <h3 className="relative overflow-visible w-auto mt-0 mr-auto mb-0 pr-2 justify-start items-start text-[#4a576E] text-4xl text-center capitalize font-semibold  ">
                Making Your Stay Comfortable & Care Free
              </h3>

              <p className="text-2xl text-center mt-4 leading-normal w-full">
                At Villa Jahawi, you will find all the facilities necessary to
                make your stay as comfortable and as carefree as possible. Our
                team of staff, renowned for offering exemplary service, is there
                for you and will make every effort to ensure you have an
                exceptional and unforgettable holiday!
              </p>
            </Container>
          </div>
        </Container>

        <div className=" mt-20 ">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper h-[64rem] w-screen  "
          >
            <SwiperSlide className="  bg-[url(/assets/images/jahawi-images/drone-photos/1.webp)] bg-cover bg-center bg-no-repeat  swiper-slide  "></SwiperSlide>
            <SwiperSlide className=" bg-[url(/assets/images/jahawi-images/drone-photos/2.webp)] bg-cover bg-center bg-no-repeat  swiper-slide  "></SwiperSlide>
            <SwiperSlide className=" bg-[url(/assets/images/jahawi-images/drone-photos/3.webp)] bg-cover bg-center bg-no-repeat  swiper-slide  "></SwiperSlide>
            <SwiperSlide className=" bg-[url(/assets/images/jahawi-images/drone-photos/4.webp)] bg-cover bg-center bg-no-repeat  swiper-slide  "></SwiperSlide>
            <SwiperSlide className=" bg-[url(/assets/images/jahawi-images/drone-photos/5.webp)] bg-cover bg-center bg-no-repeat  swiper-slide  "></SwiperSlide>
          </Swiper>
        </div>

        {/* pool area  */}

        <div className="mt-20 space-y-6">
          <Container>
            <h2 className="relative text-4xl text-center overflow-visible w-auto mt-0 mr-auto mb-6 pr-2 justify-start items-start text-gray-500 capitalize font-semibold  ">
              {" "}
              Jacuzzi
            </h2>

            <h3 className="relative overflow-visible w-auto mt-0 mr-auto mb-0 pr-2 justify-start items-start text-[#4a576E] text-4xl lg:text-6xl text-center capitalize font-semibold  ">
              Ideal Space for Relaxation
            </h3>

            <p className="text-2xl text-center mt-4">
              The main leisure jacuzzi offers the ideal space for sunbathing,
              relaxation and leisure.
            </p>
          </Container>
        </div>

        <div className=" mt-20 mb-20">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper h-[64rem] w-screen  "
          >
            <SwiperSlide className="swiper-slide">
              <div className="w-full max-w-xs">
                <Image
                  alt="responsive_image"
                  src="/assets/images/jahawi-images/drone-photos/5.webp"
                  // sizes="100vw"
                  // sizes="(min-width: 808px) 50vw, 100vw"
                  fill
                  priority="blur"
                />
              </div>

              <Image
                src="/assets/images/jahawi-images/drone-photos/5.webp"
                alt="background image"
                // className="object-cover object-center"
                fill
                // sizes="100vw"
                priority
              />
            </SwiperSlide>
            <SwiperSlide className=" swiper-slide  ">
              <Image
                src="/assets/images/jahawi-images/drone-photos/pool-2.webp"
                alt="background image"
                // className="object-cover object-center"
                fill
                // sizes="100vw"
                priority
              />
            </SwiperSlide>
            <SwiperSlide className=" swiper-slide  ">
              <Image
                src="/assets/images/jahawi-images/drone-photos/pool-3.webp"
                alt="background image"
                // className="object-cover object-center"
                fill
                // sizes="100vw"
                priority
              />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide  ">
              <Image
                src="/assets/images/jahawi-images/drone-photos/cool-pool.webp"
                alt="background image"
                // className="object-cover object-center"
                fill
                // sizes="100vw"
                priority
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Kitchen area  */}
        <div className="mt-20 space-y-6">
          <Container>
            <h2 className="relative text-4xl text-center overflow-visible w-auto mt-0 mr-auto mb-6 pr-2 justify-start items-start text-gray-500 capitalize font-semibold  ">
              {" "}
              Kitchen
            </h2>

            <h3
              className="relative overflow-visible w-auto mt-0 mr-auto mb-0 pr-2 justify-start items-start text-[#4a576E]
            text-4xl lg:text-6xl text-center capitalize font-semibold  "
            >
              Ideal Space for Cooking and preparing your meals
            </h3>

            <p className="text-2xl text-center mt-4">
              The villa's kitchen is a home away from home, allowing guests to
              take control of their dining experience and prepare their meals to
              their liking.
            </p>
          </Container>
        </div>

        <div className=" mt-20 mb-20">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper h-[64rem] w-screen  "
          >
            <SwiperSlide className="swiper-slide  ">
              <Image
                src="/assets/images/jahawi-images/drone-photos/cool-pool.webp"
                alt="background image"
                // className="object-cover "
                fill
                sizes="100vw"
                priority
              />
            </SwiperSlide>
            <SwiperSlide className=" bg-[url(/assets/images/jahawi-images/kitchen/kitchen-2.webp)] bg-cover bg-center bg-no-repeat  swiper-slide  "></SwiperSlide>
            <SwiperSlide className=" bg-[url(/assets/images/jahawi-images/kitchen/kitchen-3.webp)] bg-cover bg-center bg-no-repeat  swiper-slide  "></SwiperSlide>
            <SwiperSlide className=" bg-[url(/assets/images/jahawi-images/kitchen/kitchen-4.webp)] bg-cover bg-center bg-no-repeat  swiper-slide  "></SwiperSlide>
            <SwiperSlide className=" bg-[url(/assets/images/jahawi-images/kitchen/kitchen-5.webp)] bg-cover bg-center bg-no-repeat  swiper-slide  "></SwiperSlide>
          </Swiper>
        </div>

        {/* sitting area  */}
        <div className="mt-20 space-y-6">
          <Container>
            <h2 className="relative text-4xl text-center overflow-visible w-auto mt-0 mr-auto mb-6 pr-2 justify-start items-start text-gray-500 capitalize font-semibold  ">
              {" "}
              Lounge
            </h2>

            <h3
              className="relative overflow-visible w-auto mt-0 mr-auto mb-0 pr-2 justify-start items-start text-[#4a576E]
             text-4xl lg:text-6xl text-center capitalize font-semibold  "
            >
              Ideal Space for relaxing
            </h3>

            <p className="text-2xl text-center mt-4">
              Whether you want to kick back and watch a movie or simply unwind,
              our villa's lounge is the perfect retreat for relaxation and
              entertainment.
            </p>
          </Container>
        </div>

        <div className=" mt-20 ">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper h-[64rem] w-screen  "
          >
            <SwiperSlide className="  bg-[url(/assets/images/jahawi-images/sitting/sitting-1.webp)] bg-cover bg-center bg-no-repeat  swiper-slide  "></SwiperSlide>
            <SwiperSlide className=" bg-[url(/assets/images/jahawi-images/sitting/sitting-2.webp)] bg-cover bg-center bg-no-repeat  swiper-slide  "></SwiperSlide>
            <SwiperSlide className=" bg-[url(/assets/images/jahawi-images/sitting/sitting-3.webp)] bg-cover bg-center bg-no-repeat  swiper-slide  "></SwiperSlide>
            <SwiperSlide className=" bg-[url(/assets/images/jahawi-images/sitting/sitting-4.webp)] bg-cover bg-center bg-no-repeat  swiper-slide  "></SwiperSlide>
            <SwiperSlide className=" bg-[url(/assets/images/jahawi-images/sitting/sitting-5.webp)] bg-cover bg-center bg-no-repeat  swiper-slide  "></SwiperSlide>
          </Swiper>
        </div>

        <div className="mt-20 space-y-6">
          <Container>
            <h2 className="relative text-4xl text-center overflow-visible w-auto mt-0 mr-auto mb-6 pr-2 justify-start items-start text-gray-500 capitalize font-semibold  ">
              {" "}
              Porch
            </h2>

            <h3
              className="relative overflow-visible w-auto mt-0 mr-auto mb-0 pr-2 justify-start items-start text-[#4a576E]
           text-4xl lg:text-6xl text-center capitalize font-semibold  "
            >
              Ideal Space for Having a meal
            </h3>

            <p className="text-2xl text-center mt-4">
              The porch is adorned with a rustic wooden table and chairs, all
              weathered to perfection, providing a delightful setting for
              breakfasts, brunches, or evening dinners.
            </p>
          </Container>
        </div>

        <div className=" mt-20 ">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper h-[64rem] w-screen  "
          >
            <SwiperSlide className="  bg-[url(/assets/images/jahawi-images/veranda/veranda-1.webp)] bg-cover bg-center bg-no-repeat  swiper-slide  "></SwiperSlide>
            <SwiperSlide className=" bg-[url(/assets/images/jahawi-images/veranda/veranda-2.webp)] bg-cover bg-center bg-no-repeat  swiper-slide  "></SwiperSlide>
            <SwiperSlide className=" bg-[url(/assets/images/jahawi-images/veranda/veranda-3.webp)] bg-cover bg-center bg-no-repeat  swiper-slide  "></SwiperSlide>
            <SwiperSlide className=" bg-[url(/assets/images/jahawi-images/veranda/veranda-4.webp)] bg-cover bg-center bg-no-repeat  swiper-slide  "></SwiperSlide>
            <SwiperSlide className=" bg-[url(/assets/images/jahawi-images/veranda/sitting-5.webp)] bg-cover bg-center bg-no-repeat  swiper-slide  "></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </motion.div>
  );
};

export default Amenities;
