"use client";

import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="px-0 md:px-0 xl:px-50">
      <div className=" flex pt-20 px-20 flex-col text-center items-center">
        <p className="text-2xl font-bold uppercase">Why Choose Us</p>
        <div className="flex items-center h-[0.2rem] bg-red-900 mt-5 w-45"></div>
        <p className="text-1xl pt-3 ">
          We offer an affordable, quality education with Trilingual Curriculums:
          English, Khmer and Chinese
        </p>
      </div>
      <div className="flex flex-col px-20 py-10 justify-between gap-5 pb-20 md:flex-row">
        <div className="flex flex-rows items-start shadow-[0_1px_6px_-1px_rgba(0,0,0,0.4)] p-4 rounded-lg py-7 hover:bg-blue-100 border border-white hover:border-blue-300 transition-transform duration-300 ease-in-out hover:translate-y-1">
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
        <div className="flex flex-rows items-start shadow-[0_1px_6px_-1px_rgba(0,0,0,0.4)] p-4 rounded-lg py-7 hover:bg-blue-100 border border-white hover:border-blue-300 transition-transform duration-300 ease-in-out hover:translate-y-1">
          <img className="w-23 pe-4" src="/learn.svg" alt="" />
          <div>
            <p className="text-black font-semibold">Learn Courses Online</p>
            <p className="text-black text-sm">
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn't anything embarrassing hidden in the middle of
              text
            </p>
          </div>
        </div>
        <div className="flex flex-rows items-start shadow-[0_1px_6px_-1px_rgba(0,0,0,0.4)] p-4 rounded-lg py-7 hover:bg-blue-100 border border-white hover:border-blue-300 transition-transform duration-300 ease-in-out hover:translate-y-1">
          <img className="w-23 pe-4" src="/sports.svg" alt="" />
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
  );
};

export default WhyChooseUs;
