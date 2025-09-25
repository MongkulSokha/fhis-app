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
      <div className="flex">
        <img className="px-2" src="/hsk.svg" alt="" />
      </div>
      <div className="flex">
        <img className="px-2" src="/hsk.svg" alt="" />
      </div>
      <div className="flex">
        <img className="px-2" src="/hsk.svg" alt="" />
      </div>
      <div className="flex">
        <img className="px-2" src="/hsk.svg" alt="" />
      </div>
      <div className="flex">
        <img className="px-2" src="/hsk.svg" alt="" />
      </div>
      <div className="flex">
        <img className="px-2" src="/hsk.svg" alt="" />
      </div>
      <div className="flex">
        <img className="px-2" src="/hsk.svg" alt="" />
      </div>
      <div className="flex">
        <img className="px-2" src="/hsk.svg" alt="" />
      </div>
    </Carousel>
  );
};

export default CurriculumSlider;
