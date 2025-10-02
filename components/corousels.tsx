"use client";

import React from "react";
import { Layout, Menu, theme } from "antd";
import { Carousel } from "antd";

const { Content } = Layout;

const contentStyle: React.CSSProperties = {
  margin: 0,
  width: "100%",
  objectFit: "cover",
  height: 700,
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  alignContent: "center",
  alignItems: "center",
  justifyContent: "center",
  background: "#364d79",
  display: "block",
};

const Corousel: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <Content className="relative " style={{ padding: "0" }}>
      <Carousel autoplay arrows infinite={true}>
        <div className="relative ">
          <img style={contentStyle} src="/img1.jpg" alt="" />
          <div className="absolute inset-0 flex items-start justify-center text-white z-20 bg-gradient-to-r from-red-900 to-transparent flex-col p-20">
<<<<<<< HEAD
            <p className="text-5xl md:text-6xl font-bold mb-10 mx-0 md:mx-0 xl:mx-50">
=======
            <p className="text-4xl sm:text-6xl font-bold mb-10 mx-0 md:mx-0 xl:mx-50">
>>>>>>> 909b6b98180c9d898148fc4f4dad70785696c7dd
              Forest Hill International School
            </p>
            <p className="text-2xl line-clamp-5 mx-0 md:mx-0 xl:mx-50">
              "The education of even a small child, therefore, does not aim at
              preparing him for school, but for life."
            </p>
          </div>
        </div>
        <div className="relative">
          <img style={contentStyle} src="/img2.jpg" alt="" />
          <div className="absolute inset-0 flex items-start justify-center text-white z-20 bg-gradient-to-r from-red-900 to-transparent flex-col p-20">
<<<<<<< HEAD
            <p className="text-5xl md:text-6xl font-bold mb-10 mx-0 md:mx-0 xl:mx-50">
=======
            <p className="text-4xl sm:text-6xl font-bold mb-10 mx-0 md:mx-0 xl:mx-50">
>>>>>>> 909b6b98180c9d898148fc4f4dad70785696c7dd
              International Early Year Curriculum
            </p>
            <p className="text-2xl line-clamp-5 mx-0 md:mx-0 xl:mx-50">
              Cambridge Early Year Curriculum to Cambridge Upper Secondary
              Curriculum
            </p>
          </div>
        </div>
        <div className="relative">
          <img style={contentStyle} src="/Halloween.png" alt="" />
          <div className="absolute inset-0 flex items-start justify-center text-white z-20 bg-gradient-to-r from-red-900 to-transparent flex-col p-20">
<<<<<<< HEAD
            <p className="text-5xl md:text-6xl font-bold mb-10 mx-0 md:mx-0 xl:mx-50">
=======
            <p className="text-4xl sm:text-6xl font-bold mb-10 mx-0 md:mx-0 xl:mx-50">
>>>>>>> 909b6b98180c9d898148fc4f4dad70785696c7dd
              Halloween Event
            </p>
            <p className="text-2xl line-clamp-5 mx-0 md:mx-0 xl:mx-50">
              Students wore different costumes, and they were selected for the
              best costume awards and performance awards.
            </p>
          </div>
        </div>
      </Carousel>
    </Content>
  );
};

export default Corousel;
