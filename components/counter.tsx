"use client";

import React from "react";

const Counter = () => {
  return (
    <div className="flex justify-center flex-row md:flex-col text-center bg-[url(/counter_bg.jpeg)] bg-fixed ">
      <div className="bg-gray-900 opacity-70 w-full">
        <div className="flex h-320 md:h-90  items-center justify-center text-white flex-col md:flex-row p-20 justify-between gap-20 md:gap-20 lg:gap-40">
          <div className="flex flex-col">
            <img className="h-35" src="/students.svg" alt="" />
            <p className="font-bold text-3xl">1800+</p>
            <p>Students</p>
          </div>
          <div className="flex flex-col">
            <img className="h-35" src="/courses.svg" alt="" />
            <p className="font-bold text-3xl">70</p>
            <p>Courses</p>
          </div>
          <div className="flex flex-col">
            <img className="h-35" src="/certified.svg" alt="" />
            <p className="font-bold text-3xl">700+</p>
            <p>Certified Teachers</p>
          </div>
          <div className="flex flex-col">
            <img className="h-35" src="/awards.svg" alt="" />
            <p className="font-bold text-3xl">1200+</p>
            <p>Winning Award</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
