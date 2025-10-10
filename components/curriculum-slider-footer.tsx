"use client";

import React from "react";
import { Carousel } from "antd";

const CurriculumFooter: React.FC = () => {
  const responsiveSettings = [
    {
      breakpoint: 1024, // For screens smaller than 1024px
      settings: {
        slidesToShow: 4,
      },
    },

    {
      breakpoint: 480, // For screens smaller than 480px (mobile)
      settings: {
        slidesToShow: 4,
      },
    },
  ];
  return (
    <div>
      <div className="h-15 w-65 md:w-60 sm:w-80 flex flex-col rounded-sm">
        <Carousel
          className="flex"
          dots={false}
          arrows
          infinite={true}
          draggable={true}
          slidesToScroll={1}
          slidesToShow={4}
          responsive={responsiveSettings}
        >
          <div>
            <img className="p-1 w-50" src="/hsk.svg" alt="" />
          </div>
          <div>
            <img className="p-1 w-50" src="/hsk.svg" alt="" />
          </div>
          <div>
            <img className="p-1 w-50" src="/hsk.svg" alt="" />
          </div>
          <div>
            <img className="p-1 w-50" src="/hsk.svg" alt="" />
          </div>
          <div>
            <img className="p-1 w-50" src="/hsk.svg" alt="" />
          </div>
          <div>
            <img className="p-1 w-50" src="/hsk.svg" alt="" />
          </div>
          <div>
            <img className="p-1 w-50" src="/hsk.svg" alt="" />
          </div>
          <div>
            <img className="p-1 w-50" src="/hsk.svg" alt="" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default CurriculumFooter;
