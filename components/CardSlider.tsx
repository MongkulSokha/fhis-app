"use client";

import React from "react";
import { Card, Layout, Menu, theme } from "antd";
import { Carousel } from "antd";

const { Content } = Layout;

const cardCorousel: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <Content className="">
      <Carousel
        className="flex"
        dots={false}
        arrows
        infinite={true}
        draggable={true}
      >
        <div className=" flex">
          <div className="flex justify-center gap-5 p-8">
            <img className="overflow-clip" src="/profile.svg" alt="" />
            <img className="overflow-clip" src="/profile.svg" alt="" />
            <img className="overflow-clip" src="/profile.svg" alt="" />
            <img className="overflow-clip" src="/profile.svg" alt="" />
            <img className="overflow-clip" src="/profile.svg" alt="" />
          </div>
        </div>
      </Carousel>
    </Content>
  );
};

export default cardCorousel;
