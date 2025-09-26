"use client";

import React from "react";
import { Card, Layout, Menu, theme } from "antd";
import { Carousel } from "antd";

const CurriculumSlider: React.FC = () => {
  const responsiveSettings = [
    {
      breakpoint: 1024, // For screens smaller than 1024px
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 600, // For screens smaller than 600px
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480, // For screens smaller than 480px (mobile)
      settings: {
        slidesToShow: 1,
      },
    },
  ];
  return (
    <div>
      <div className="px-20 md:px-20 xl:px-60 bg-gray-100 h-full flex flex-col text-center pt-20 px-20">
        <p className="text-2xl font-bold uppercase">Curriculum</p>
        <Carousel
          className="flex p-10"
          dots={false}
          arrows
          infinite={true}
          draggable={true}
          slidesToScroll={1}
          slidesToShow={6}
          responsive={responsiveSettings}
        >
          <div className="py-5 transition duration-300 ease-in-out hover:scale-105">
            <img className="px-2" src="/hsk.svg" alt="" />
          </div>
          <div className="py-5 transition duration-300 ease-in-out hover:scale-105">
            <img className="px-2" src="/hsk.svg" alt="" />
          </div>
          <div className="py-5 transition duration-300 ease-in-out hover:scale-105">
            <img className="px-2" src="/hsk.svg" alt="" />
          </div>
          <div className="py-5 transition duration-300 ease-in-out hover:scale-105">
            <img className="px-2" src="/hsk.svg" alt="" />
          </div>
          <div className="py-5 transition duration-300 ease-in-out hover:scale-105">
            <img className="px-2" src="/hsk.svg" alt="" />
          </div>
          <div className="py-5 transition duration-300 ease-in-out hover:scale-105">
            <img className="px-2" src="/hsk.svg" alt="" />
          </div>
          <div className="py-5 transition duration-300 ease-in-out hover:scale-105">
            <img className="px-2" src="/hsk.svg" alt="" />
          </div>
          <div className="py-5 transition duration-300 ease-in-out hover:scale-105">
            <img className="px-2" src="/hsk.svg" alt="" />
          </div>
          <div className="py-5 transition duration-300 ease-in-out hover:scale-105">
            <img className="px-2" src="/hsk.svg" alt="" />
          </div>
          <div className="py-5 transition duration-300 ease-in-out hover:scale-105">
            <img className="px-2" src="/hsk.svg" alt="" />
          </div>
          <div className="py-5 transition duration-300 ease-in-out hover:scale-105">
            <img className="px-2" src="/hsk.svg" alt="" />
          </div>
          <div className="py-5 transition duration-300 ease-in-out hover:scale-105">
            <img className="px-2" src="/hsk.svg" alt="" />
          </div>
          <div className="py-5 transition duration-300 ease-in-out hover:scale-105">
            <img className="px-2" src="/hsk.svg" alt="" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default CurriculumSlider;
