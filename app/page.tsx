"use client";

import "@ant-design/v5-patch-for-react-19";
import Navbar from "@/components/Navbar";
import Corousel from "@/components/Corousel";
import Footers from "@/components/Footers";
import Cards from "@/components/Cards";
import { cardData } from "../lib/data";
import CardSlider from "@/components/CardSlider";
import { Image } from "antd";
import { useEffect, useState } from "react";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonialData } from "../lib/testimoial";
import CurriculumSlider from "@/components/CurriculumSlider";

export default function Home() {
  const [showItems, setShowItems] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setShowItems(true);
      } else {
        setShowItems(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <main className="App">
      <Navbar />
      <Corousel />

      {/* Welcome */}
      <div
        className={`transition-opacity duration-1000 ease-in-out ${
          showItems ? "opacity-100" : "opacity-20"
        }`}
      >
        <div className="px-20 md:px-20 xl:px-50 flex p-20 flex-col text-center items-center ">
          <p className="text-5xl font-semibold pb-5">Welcome to</p>
          <p className="text-5xl font-bold">FORESTHILL INTERNATIONAL SCHOOL</p>
          <div className="flex items-center h-1 bg-red-900 mt-10 w-65"></div>
          <p className="text-2xl pt-9 ">
            Activities of students taking the September Monthly Test for
            National Program in the Academic Year 2022-2023 at Forest Hill
            International School
          </p>
        </div>
      </div>

      {/* School Management */}
      <div className="">
        <div className="px-20 md:px-20 xl:px-60 bg-red-900 flex justify-center p-20 flex-col text-center">
          <p className=" text-yellow-600 text-2xl font-semibold">
            SCHOOL MANAGEMENT
          </p>
          <CardSlider />
        </div>
      </div>

      {/* Why Choose us? */}
      <div className="px-0 md:px-0 xl:px-50">
        <div className=" flex pt-20 px-20 flex-col text-center items-center">
          <p className="text-2xl font-bold uppercase">Why Choose Us</p>
          <div className="flex items-center h-[0.2rem] bg-red-900 mt-5 w-45"></div>
          <p className="text-1xl pt-3 ">
            We offer an affordable, quality education with Trilingual
            Curriculums: English, Khmer and Chinese
          </p>
        </div>
        <div className="flex flex-col px-20 py-10 justify-between gap-5 pb-20 md:flex-row">
          <div className="flex flex-rows items-start shadow-[0_1px_6px_-1px_rgba(0,0,0,0.4)] p-4 rounded-lg py-7 hover:bg-blue-100 border border-white hover:border-blue-300">
            <img className="w-23 pe-4" src="/book.svg" alt="" />
            <div>
              <p className="text-black font-semibold">Books & Library</p>
              <p className="text-black text-sm">
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything embarrassing hidden in the middle of
                text
              </p>
            </div>
          </div>
          <div className="flex flex-rows items-start shadow-[0_1px_6px_-1px_rgba(0,0,0,0.4)] p-4 rounded-lg py-7 hover:bg-blue-100 border border-white hover:border-blue-300">
            <img className="w-23 pe-4" src="/sports.svg" alt="" />
            <div>
              <p className="text-black font-semibold">Learn Courses Online</p>
              <p className="text-black text-sm">
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything embarrassing hidden in the middle of
                text
              </p>
            </div>
          </div>
          <div className="flex flex-rows items-start shadow-[0_1px_6px_-1px_rgba(0,0,0,0.4)] p-4 rounded-lg py-7 hover:bg-blue-100 border border-white hover:border-blue-300">
            <img className="w-23 pe-4" src="/learn.svg" alt="" />
            <div>
              <p className="text-black font-semibold">Sports</p>
              <p className="text-black text-sm">
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything embarrassing hidden in the middle of
                text
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Counter */}
      <div className="flex justify-center flex-row md:flex-col text-center">
        <div className="flex relative h-320 md:h-90">
          <img
            className="w-full h-auto object-cover"
            src="/counter_bg.jpeg"
            alt=""
          />
          <div className="flex absolute inset-0 items-center justify-center text-white bg-gray-900 opacity-75 flex-col md:flex-row p-20 justify-between gap-20 md:gap-20 lg:gap-40">
            <div className="flex flex-col">
              <img className="h-40" src="/students.svg" alt="" />
              <p className="font-bold text-3xl">1800+</p>
              <p>Students</p>
            </div>
            <div className="flex flex-col">
              <img className="h-40" src="/courses.svg" alt="" />
              <p className="font-bold text-3xl">70</p>
              <p>Courses</p>
            </div>
            <div className="flex flex-col">
              <img className="h-40" src="/certified.svg" alt="" />
              <p className="font-bold text-3xl">700+</p>
              <p>Certified Teachers</p>
            </div>
            <div className="flex flex-col">
              <img className="h-40" src="/awards.svg" alt="" />
              <p className="font-bold text-3xl">1200+</p>
              <p>Winning Award</p>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div>
        <div className="flex pt-20 px-20 flex-col text-center items-center">
          <p className="text-2xl font-bold uppercase">Upcoming Events</p>
          <div className="flex items-center h-[0.2rem] bg-red-900 mt-5 w-45"></div>
        </div>
        <div className="mx-20 md:mx-20 xl:mx-60 my-20 flex justify-between gap-6 md:gap-5 flex-col md:flex-row grid grid-cols-1 md:grid-cols-3">
          {cardData.slice(0, 6).map((card) => (
            <Cards
              key={card.id}
              title={card.title}
              img={card.img}
              date={card.date}
              time={card.time}
              location={card.location}
            />
          ))}
        </div>
      </div>

      {/* Curriculum */}
      <div>
        <div className="px-20 md:px-20 xl:px-60 bg-gray-100 h-full flex flex-col text-center pt-20 px-20">
          <p className="text-2xl font-bold uppercase">Curriculum</p>
          <CurriculumSlider />
        </div>
      </div>

      {/* Gallery */}
      <div className="">
        <div className="flex pt-20 px-20 flex-col text-center items-center">
          <p className="text-2xl font-bold uppercase">Gallery</p>
          <div className="flex items-center h-[0.2rem] bg-red-900 mt-3 w-25"></div>
        </div>
        <div className="mx-20 md:mx-20 xl:mx-60 flex flex-col md:flex-row justify-between gap-2 items-center my-20">
          <div className="flex rounded-lg h-full ">
            <Image
              height={715}
              className="object-cover w-auto rounded-lg"
              src="/promote.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-between gap-1">
            <div className="flex flex-row justify-between gap-2">
              <div>
                <Image
                  height={350}
                  className=" w-auto rounded-lg object-cover"
                  src="/img4.jpg"
                  alt=""
                />
              </div>
              <div>
                <Image
                  height={350}
                  className="h-70 w-auto rounded-lg object-cover"
                  src="/img3.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-row justify-between gap-2">
              <div>
                <Image
                  height={350}
                  className="h-70 w-auto rounded-lg object-cover"
                  src="/img4.jpg"
                  alt=""
                />
              </div>
              <div>
                <Image
                  height={350}
                  className="h-70 w-auto rounded-lg object-cover"
                  src="/img3.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div>
        <div className="px-20 md:px-20 xl:px-60 bg-gray-100 h-full flex pt-20 px-20 flex-col text-center items-center">
          <p className="text-2xl font-bold uppercase">Testimonial</p>
          <div className="flex items-center h-[0.2rem] bg-red-900 mt-3 w-35"></div>

          <div className="w-full mx-20 md:mx-20 xl:mx-60 my-20 flex  overflow-x-auto justify-between gap-6 md:gap-5">
            {testimonialData.slice(0, 6).map((card) => (
              <TestimonialCard
                key={card.id}
                name={card.name}
                img={card.img}
                position={card.position}
                text={card.text}
              />
            ))}
          </div>
        </div>
      </div>

      <Footers />
    </main>
  );
}
