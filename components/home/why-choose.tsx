"use client";

import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="px-0 md:px-0 xl:px-45">
      <div className=" flex pt-20 px-15 flex-col text-center items-center">
        <p className="text-2xl font-bold uppercase">Why Choose Us</p>
        <div className="flex items-center h-[0.2rem] bg-[#691b32] mt-5 w-45"></div>
        <p className="text-1xl pt-3 ">
          We offer an affordable, quality education with Trilingual Curriculums:
          English, Khmer and Chinese
        </p>
      </div>
      <div className="flex flex-col px-15 py-10 justify-between gap-5 pb-20 md:flex-row">
        <div className="flex flex-rows items-start shadow-[0_1px_6px_-1px_rgba(0,0,0,0.4)] p-4 rounded-lg py-7 hover:bg-blue-100 border border-white hover:border-blue-300 transition-transform duration-300 ease-in-out hover:translate-y-1">
          <img
            className="w-23 px-4 lg:px-8 lg:w-45 md:px-4 md:w-23"
            src="/book.svg"
            alt=""
          />
          <div className="pe-5">
            <p className="text-black font-semibold text-lg lg:text-xl md:text-lg pb-1">
              Books & Library
            </p>
            <p className="text-black text-sm lg:text-base md:text-sm text-justify">
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn't anything bad hidden in the middle of text
            </p>
          </div>
        </div>
        <div className="flex flex-rows items-start shadow-[0_1px_6px_-1px_rgba(0,0,0,0.4)] p-4 rounded-lg py-7 hover:bg-blue-100 border border-white hover:border-blue-300 transition-transform duration-300 ease-in-out hover:translate-y-1">
          <img
            className="w-23 px-4 lg:px-8 lg:w-45 md:px-4 md:w-23"
            src="/learn.svg"
            alt=""
          />
          <div className="pe-5">
            <p className="text-black font-semibold text-lg lg:text-xl md:text-lg pb-1">
              Learn Courses Online
            </p>
            <p className="text-black text-sm lg:text-base md:text-sm text-justify">
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn't anything bad hidden in the middle of text
            </p>
          </div>
        </div>
        <div className="flex flex-rows items-start shadow-[0_1px_6px_-1px_rgba(0,0,0,0.4)] p-4 rounded-lg py-7 hover:bg-blue-100 border border-white hover:border-blue-300 transition-transform duration-300 ease-in-out hover:translate-y-1">
          <img
            className="w-23 px-4 lg:px-8 lg:w-45 md:px-4 md:w-23"
            src="/sports.svg"
            alt=""
          />
          <div className="pe-5">
            <p className="text-black font-semibold text-lg lg:text-xl md:text-lg pb-1">
              Sports
            </p>
            <p className="text-black text-sm lg:text-base md:text-sm text-justify">
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn't anything bad hidden in the middle of text
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
