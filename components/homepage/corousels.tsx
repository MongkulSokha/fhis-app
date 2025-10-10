"use client";

import React from "react";
import { Layout, Menu, theme } from "antd";
import { Carousel } from "antd";
import useSWR from "swr";

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

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Corousel: React.FC = () => {
  const { data: sliders, mutate } = useSWR("/api/slider", fetcher);

  if (!sliders) return null;

  return (
    <Content className="relative " style={{ padding: "0" }}>
      <Carousel autoplay arrows infinite={true}>
        {sliders.map((slider: any, idx: number) => (
          <div className="relative ">
            <img style={contentStyle} src={slider.img} alt="" />
            <div className="absolute inset-0 flex items-start justify-center text-white z-20 bg-gradient-to-r from-[#691b32] to-transparent flex-col p-20">
              <p className="text-5xl md:text-6xl font-bold mb-10 mx-0 md:mx-0 xl:mx-50">
                {slider.title}
              </p>
              <p className="text-2xl line-clamp-5 mx-0 md:mx-0 xl:mx-50">
                {slider.text}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </Content>
  );
};

export default Corousel;
