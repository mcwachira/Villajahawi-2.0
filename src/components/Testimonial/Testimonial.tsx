"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

import avatarImage1 from "/public/assets/images/avatars/avatar-1.png";
import avatarImage2 from "/public/assets/images/avatars/avatar-2.png";
import avatarImage3 from "/public/assets/images/avatars/avatar-3.png";
import avatarImage4 from "/public/assets/images/avatars/avatar-4.png";
import avatarImage5 from "/public/assets/images/avatars/avatar-5.png";

// Import Swiper
import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Container from "@/src/components/ui/Container";
import { useTheme } from "next-themes";
import { clsx } from "clsx";

const testimonials = [
  {
    headline:
      "“ A perfect blend of comfort and convenience, just 10 minutes from Diani's beach”",
    content:
      "Had a fantastic time at Villa Jahawi! The short distance to the beach was a game-changer for us. The villa itself is charming and has everything you need.A great spot for a relaxed holiday in Diani. ",
    author: {
      name: "Katy Jackson",
      role: "Guest",
      image: avatarImage1,
    },
  },
  {
    headline:
      "“Just a hop, skip, and a jump to Diani's beach – Villa Jahawi is the perfect spot!”",
    content:
      "Villa Jahawi is a gem! Its location is ideal, just 10 minutes from the beach. The villa's simplicity and comfort made our stay delightful. Great value for a tranquil retreat near the beautiful Diani coastline.",
    author: {
      name: "Sean Murphy",
      role: "Guest",
      image: avatarImage2,
    },
  },
  {
    headline:
      "“Unwind in style at Villa Jahawi, with Diani's sandy shores only 10 minutes away”",
    content:
      "Villa Jahawi offers a great escape near Diani's beautiful beaches. The villa's proximity to the shore is a big plus. Clean, comfortable, and welcoming—our stay was wonderful. Will definitely be coming back",
    author: {
      name: "Elaine Foster",
      role: "Guest",
      image: avatarImage3,
    },
  },
  {
    headline:
      "“Villa Jahawi: 10 minutes to blissful beach days and cozy nights”",
    content:
      "Our stay at Villa Jahawi was fantastic! The villa's location, just a short 10-minute drive from the beach, was super convenient. The serene atmosphere and cozy rooms made it a perfect retreat. Highly recommended for a relaxing getaway!",
    author: {
      name: "Jeff Bick",
      role: "Guest",
      image: avatarImage4,
    },
  },
  {
    headline: "“Seriously awesome!”",
    content:
      "The peaceful ambiance and well-maintained villa made our getaway truly enjoyable. A great option for those looking for a more private retreat",
    author: {
      name: "Jason Cosmo",
      role: "Guest",
      image: avatarImage5,
    },
  },
  {
    headline: "“Seaside simplicity at Villa Jahaw”",
    content:
      "Perfect getaway at Villa Jahawi! The quick 10-minute trip to the beach made it easy to enjoy the sun and surf. The villa is comfortable, clean, and a great place to unwind",
    author: {
      name: "Katy Jackson",
      role: "Guest",
      image: avatarImage1,
    },
  },
  {
    headline: "“I highly recommend them”",
    content:
      "Villa Jahawi provided the ultimate getaway. Just a quick 10-minute drive to the beach, we enjoyed the best of both worlds. The villa's charm and comfort made our stay truly special.",
    author: {
      name: "Sean Murphy",
      role: "Guest",
      image: avatarImage2,
    },
  },
  {
    headline: "“I’m so lucky I found the villa!”",
    content:
      "Villa Jahawi is a wonderful retreat just 10 minutes from Diani's beach. The villa's comfort and style provided the perfect backdrop for a memorable vacation. We loved every minute of our stay.",
    author: {
      name: "Elaine Foster",
      role: "Guest",
      image: avatarImage3,
    },
  },
  {
    headline: "“I’m really impressed with the quality of the place”",
    content:
      "The villa's design and amenities are excellent. Our stay was relaxing, and we enjoyed every moment of it",
    author: {
      name: "Jeff Bick",
      role: "Guest",
      image: avatarImage4,
    },
  },
  {
    headline: "“Seriously awesome!”",
    content:
      "The quick 10-minute drive to Diani's beach allowed us to soak up the sun effortlessly. The villa's comfort and style made it a perfect home away from home.",
    author: {
      name: "Jason Cosmo",
      role: "Guest",
      image: avatarImage5,
    },
  },
];

const Testimonial = () => {
  let testimonialsCount = parseFloat(testimonials.length);

  let [swiperIndex, setSwiperIndex] = useState(1);

  let [carouselProgress, setCarouselProgress] = useState(15);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    let screenWidth = window.innerWidth;
    if (screenWidth >= 1138) {
      setCarouselProgress(((swiperIndex + 3) / testimonialsCount) * 100);
    }
  }, [swiperIndex, testimonialsCount]);

  return (
    <section
      className={clsx(
        "relative overflow-hidden 0 py-20 sm:py-24 lg:pt-32 border-b  border-slate-200/80 ",
        theme === "dark" ? "bg-dark" : "bg-light"
      )}
    >
      <Container className="relative">
        <div className="mx-auto grid max-w-xl gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-2xl md:text-4xl font-semibold dark:text-dark light:text-light">
              Here’s what past Guests are saying about our villa
            </h2>
            <div className="mt-10 hidden h-[10px] w-full rounded-full bg-gray-300 lg:mt-16 lg:block">
              <div
                className="h-full rounded-full bg-gray-500 duration-200"
                style={{ width: `${carouselProgress}%` }}
              ></div>
            </div>
          </div>
          <div className="lg:ml-auto lg:max-w-sm">
            <p className="text-lg dark:text-dark light:text-light">
              Our villa itself has received high praise for its comfort,
              cleanliness, and welcoming atmosphere, making it the ideal retreat
              for a seaside escape.
            </p>
            <div className="mt-14 flex gap-2.5 lg:mt-12">
              <button className="carousel-prev inline-flex h-12 w-12 items-center justify-center rounded-full text-black bg-white shadow-sm shadow-sky-200/75 ring-1 ring-slate-200/60 duration-200 hover:bg-sky-50/50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-6 w-6 text-sky-700/70"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button className="carousel-next inline-flex h-12 w-12 items-center justify-center rounded-full  text-black bg-white shadow-sm shadow-sky-200/75 ring-1 ring-slate-200/60 duration-200 hover:bg-sky-50/50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-6 w-6 text-sky-700/70"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Container>
      <div className="relative mt-8 lg:mt-24">
        <Container className="relative">
          <Swiper
            modules={[Navigation]}
            navigation={{ nextEl: ".carousel-next", prevEl: ".carousel-prev" }}
            scrollbar={{ draggable: true }}
            spaceBetween={0}
            slidesPerView="auto"
            grabCursor={true}
            loop={false}
            centeredSlides={false}
            initialSlide={0}
            onSlideChange={(swiper) => setSwiperIndex(swiper.activeIndex)}
            className="!overflow-visible"
          >
            <div className="flex w-full">
              {testimonials.map((testimonial, testimonialIndex) => (
                <SwiperSlide
                  key={`testimonial-${testimonialIndex}`}
                  className="swiper-slide !h-auto !w-auto shrink-0 border-b border-l border-t border-slate-200 p-10 shadow-sm shadow-sky-100/50 first:rounded-l-2xl last:rounded-r-2xl last:border-r"
                >
                  <div className="flex h-full w-full max-w-[272px] flex-1 flex-col">
                    <div className="flex-1">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((i, n) => (
                          <svg
                            key={`testimonial-${testimonialIndex}-star-${n}`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5 text-red-700"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ))}
                      </div>
                      <h4 className="mt-7 font-display text-xl md:text-3xl font-medium dark:text-dark light:text-light">
                        {testimonial.headline}
                      </h4>
                      <p className="mt-3 text-xl leading-7 dark:text-dark light:text-light">
                        {testimonial.content}
                      </p>
                    </div>
                    <div>
                      <hr className="my-6 h-px w-full bg-slate-200" />
                      <div className="flex items-center justify-between">
                        <div className="">
                          <p className="font-display text-lg font-medium dark:text-dark light:text-light">
                            {testimonial.author.name}
                          </p>
                          <p className="mt-1.5 text-md dark:text-dark light:text-light">
                            {testimonial.author.role}
                          </p>
                        </div>
                        <Image
                          src={testimonial.author.image}
                          alt={testimonial.author.name}
                          className="h-14 w-14 rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </Container>
      </div>
    </section>
  );
};

export default Testimonial;
