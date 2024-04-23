"use client"
import clsx from "clsx";
import React, { useEffect, useState } from "react";

import roomImage1 from "/public/assets/images/jahawi-images/room-1.webp";
import roomImage2 from "/public/assets/images/jahawi-images/room-2.webp";
import roomImage3 from "/public/assets/images/jahawi-images/room-3.webp";
import roomImage4 from "/public/assets/images/jahawi-images/room-4.webp";
import roomImage5 from "/public/assets/images/jahawi-images/room-5.webp";

import * as Yup from "yup";

import { Formik, Form } from "formik";

import "react-datepicker/dist/react-datepicker.css";

import Image from "next/image";
import { MdOutlineBedroomParent } from "react-icons/md";
import { GiBathtub } from "react-icons/gi";
import "swiper/css";
import "swiper/css/autoplay";
import Container from "@/src/components/ui/Container";
import { useTheme } from "next-themes";
import Link from "next/link";
import FormikControl from "./FormComponents/FormikControl";

const Rooms = () => {
  const roomsData = [
    {
      imageSrc: roomImage1,
      title: "Single's Room",
      beds: 1,
      bathrooms: 1,
    },
    {
      imageSrc: roomImage2,
      title: "Friends Room ",
      beds: 2,
      bathrooms: 1,
    },
    {
      imageSrc: roomImage3,
      title: "Family Room  ",
      beds: 3,
      bathrooms: 1,
    },
    {
      imageSrc: roomImage4,
      title: "Couples Room",
      beds: 1,
      bathrooms: 1,
    },
    {
      imageSrc: roomImage5,
      title: "2 beds",
      beds: 2,
      bathrooms: 2,
    },
  ];

  const { theme, setTheme } = useTheme();

  let roomsCount = parseFloat(roomsData.length);

  let [Index, setIndex] = useState(1);

  let [carouselProgress, setCarouselProgress] = useState(15);

  useEffect(() => {
    let screenWidth = window.innerWidth;
    if (screenWidth >= 1138) {
      setCarouselProgress(((Index + 3) / roomsCount) * 100);
    }
  }, [Index, roomsCount]);

  const [showModal, setShowModal] = useState(false);
  // console.log(room);
  const childrenOptions = [
    { key: "one", value: 1 },
    { key: "two", value: 2 },
    { key: "three", value: 3 },
    { key: "four", value: 4 },
    { key: "five", value: 5 },
  ];
  const adultOptions = [
    { key: "one", value: 1 },
    { key: "two", value: 2 },
    { key: "three", value: 3 },
    { key: "four", value: 4 },
    { key: "five", value: 5 },
  ];

  const roomTypeOptions = [
    { key: "one", value: "One Bed" },
    { key: "two", value: "Two Bed" },
    { key: "three", value: "Three Bed" },
    { key: "four", value: "Four Bed" },
  ];

  const nightsOptions = [
    { key: "one", value: 1 },
    { key: "two", value: 2 },
    { key: "three", value: 3 },
    { key: "four", value: 4 },
    { key: "five", value: 5 },
  ];
  const initialValues = {
    email: "",
    name: "",
    phoneNumber: "",
    roomType: "one",
    bookingDate: null,
    nights: "one",
    adults: "one",
    children: "one",
    message: "",
  };

  const [message, setMessage] = useState(""); // This will be used to show a message if the submission is successful
  const [submitted, setSubmitted] = useState(false);
  console.log(submitted);

  // const [startDate, setStartDate] = useState(new Date());

  const validationSchema = Yup.object().shape({
    name: Yup.string().max(255).required("You must Enter your Name"),
    email: Yup.string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required"),
    phoneNumber: Yup.string()
      .max(20)
      .required(
        "Your mobile phone number must begin with a '+', followed by your country code then actual number e.g +254123456789"
      ),
    subject: Yup.string().max(255).required("You must Enter the subject "),
    bookingDate: Yup.date().required("Required").nullable(),
    nights: Yup.string().required("Required"),
    adults: Yup.string().required("Required"),
    children: Yup.string().required("Required"),
    message: Yup.string().trim().required("Message is required"),
  });

  const onSubmit = async (values) => {
    setMessage("Form submitted");
    setSubmitted(true);
    console.log(values);

    const {
      email,
      name,
      phoneNumber,
      subject,
      roomType,
      bookingDate,
      nights,
      adults,
      children,
      message,
    } = values;
    const res = await fetch("/api/SendBookingMail", {
      body: JSON.stringify({
        email,
        name,
        subject,
        phoneNumber,
        roomType,
        bookingDate: bookingDate?.split("T", 1)[0],
        nights,
        adults,
        children,
        message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    setShowModal(!showModal);
  };

  return (
    <>
      <section
        className={clsx(
          "relative overflow-hidden pt-20 lg:pt-[120px] pb-10 lg:pb-20 h-full  border-b  border-slate-200/80",
          theme === "dark" ? "bg-[#041434]" : "bg-[#F3F4F6]"
        )}
      >
        <h2 className="font-display  text-center text-4xl font-semibold text-slate-900 sm:text-5xl">
          Our Beautiful Rooms
        </h2>


        <div className="py-2 grid justify-center md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-16 lg:gap-8 my-12 mx-6 ">
          {roomsData.map((room, roomIndex) => (
            <div
              key={roomIndex}
              className={clsx(
                "h-full w-full lg:w-3/4 rounded-xl p-6  overflow-hidden shadow-lg hover:shadow-xl",
                theme === "dark" ? "bg-[#F3F4F6]" : "bg-[#F3F4F6]"
              )}
            >
              <Image
                className=" h-auto w-full rounded-md object-cover bg-slate-100 transition duration-300 group-hover:scale-105"
                src={room.imageSrc}
                width={600}
                height={400}
                placeholder="blur"
                quality={100}
                // sizes="(max-width: 768px) 100vw, 33vw"
                alt="Property Image"
              />
              <div className="px-6 py-4">
                <div className="my-8">
                  <h2 className="text-center  text-2xl font-bold text-gray-900">
                    {room.title}
                  </h2>
                  <div className="flex items-center">
                    {/* <div className="flex gap-0.5">
                      {[...Array(5)].map((i, n) => (
                        <svg
                          key={`room-${roomIndex}-star-${n}`}
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
                    </div> */}
                  </div>
                </div>
                <div className="flex flex-col 2xl:flex-row items-center space-y-12 2xl:space-y-0  2xl:space-x-8 justify-between">
                  <div className="flex flex-col items-center">
                    <MdOutlineBedroomParent size={40} color={"black"} />
                    <p className="ml-3 text-2xl  font-medium text-gray-700">
                      {room.beds} Beds
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <GiBathtub size={40} color={"black"} />
                    <p className="ml-3 text-2xl   font-medium text-gray-700">
                      {room.bathrooms}{" "}
                      {room.bathrooms === 1 ? "Bathroom" : "Bathrooms"}
                    </p>
                  </div>
                </div>
                <div className=" my-16 flex flex-col space-y-8 2xl:flex-row justify-between items-center 2xl:space-x-8 2xl:space-y-0">
                  <Link
                    href="/accommodation"
                    className="relative rounded-md  inline-flex items-center justify-start py-2 px-6 text-2xl border-2 border-[#4a576E]  text-black overflow-hidden transition-all  bg-white  hover:bg-white group"
                  >
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#4a576E] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-center text-xl text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                      Explore
                    </span>
                  </Link>

                  {showModal ? (
                    <>
                      <div className="flex justify-center items-center overflow-x-hidden w-full h-full fixed inset-0 z-50 top-0 right-0 left-0 bottom-0 bg-black  outline-none focus:outline-none">
                        <div className="relative h-52  w-full my-6 mx-auto max-w-3xl">
                          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            <div className="flex items-center justify-between p-5 border-b border-4 text-center border-solid border-gray-300 rounded-t ">
                              <h3 className="text-4xl !text-center font-semibold">
                                Enquire Now
                              </h3>
                              <button
                                className="bg-transparent border-0 text-black float-right"
                                onClick={() => setShowModal(false)}
                              >
                                <span className="text-black opacity-7 h-12 w-12 text-4xl block bg-gray-400 py-0 rounded-full">
                                  x
                                </span>
                              </button>
                            </div>
                            <div className="relative p-6 flex-auto">
                              <div className="w-full">
                                <Formik
                                  initialValues={initialValues}
                                  onSubmit={onSubmit}
                                  validationSchema={validationSchema}
                                >
                                  {(formik) => {
                                    return (
                                      <Form>
                                        <FormikControl
                                          control="input"
                                          type="name"
                                          label="Name"
                                          name="name"
                                        />
                                        <FormikControl
                                          control="input"
                                          type="email"
                                          label="Email"
                                          name="email"
                                        />

                                        <FormikControl
                                          control="input"
                                          type="phoneNumber"
                                          label="Phone Number"
                                          name="phoneNumber"
                                        />

                                        <FormikControl
                                          control="input"
                                          type="subject"
                                          label="Subject"
                                          name="subject"
                                        />
                                        <div className="flex flex-col lg:flex-row space-x-4 justify-between items-center">
                                          <FormikControl
                                            control="select"
                                            type="adults"
                                            label="Adults"
                                            name="adults"
                                            options={adultOptions}
                                          />
                                          <FormikControl
                                            control="select"
                                            type="children"
                                            label="Children"
                                            name="children"
                                            options={childrenOptions}
                                          />

                                          <FormikControl
                                            control="select"
                                            type="roomType"
                                            label="RoomType"
                                            name="roomType"
                                            options={roomTypeOptions}
                                          />
                                        </div>
                                        <div className="my-12 w-full">
                                          <FormikControl
                                            control="date"
                                            label="Check In Date"
                                            name="bookingDate"
                                            options={roomTypeOptions}
                                          />
                                        </div>

                                        <FormikControl
                                          control="select"
                                          type="nights"
                                          label="Number of Nights"
                                          name="nights"
                                          options={nightsOptions}
                                        />
                                        <FormikControl
                                          control="textarea"
                                          type="message"
                                          label="Message"
                                          name="message"
                                        />

                                        <div className="flex items-center space-x-4 justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                          <button
                                            className="text-[#041413] background-transparent font-bold uppercase px-8 py-6 text-xl outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                          >
                                            Close
                                          </button>
                                          <button
                                            className={clsx(
                                              "w-1/2 p-3 text-black transition border rounded border-primary  hover:bg-opacity-90",
                                              theme === "dark"
                                                ? "bg-[#041434] text-white"
                                                : "bg-[#F3F4F6] text-black"
                                            )}
                                            type="submit"
                                            disabled={
                                              !formik.isValid &&
                                              !formik.isSubmitting &&
                                              !formik.dirty
                                            }
                                            // onClick={() => setShowModal(false)}
                                          >
                                            Submit
                                          </button>
                                        </div>
                                      </Form>
                                    );
                                  }}
                                </Formik>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : null}

                  <button
                    type="button"
                    onClick={() => setShowModal(true)}
                    className="relative rounded-md  inline-flex items-center justify-start py-2 px-6 text-2xl border-2 border-[#4a576E]  text-black overflow-hidden transition-all  bg-white  hover:bg-white group"
                  >
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#4a576E] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-center text-xl text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                      Book Now
                    </span>
                  </button>

                  {/* <Link
                    href="#_"
                    className="relative rounded-md  inline-flex items-center justify-start py-2 px-6 text-2xl border-2 border-[#4a576E]  text-black overflow-hidden transition-all  bg-white  hover:bg-white group"
                  >
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#4a576E] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-center text-xl text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                      Book Now
                    </span>
                  </Link> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Rooms;
