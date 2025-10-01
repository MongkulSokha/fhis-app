"use client";

import React from "react";
import { Card, Layout, Menu, theme } from "antd";
import { Carousel } from "antd";

const CurriculumFooter: React.FC = () => {
  return (
    <div>
      <div className="h-15 w-80 flex flex-col rounded-sm">
        <Carousel
          className="flex"
          dots={false}
          arrows
          infinite={true}
          draggable={true}
          slidesToScroll={1}
          slidesToShow={6}
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
