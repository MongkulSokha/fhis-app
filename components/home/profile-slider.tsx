"use client";

import React from "react";
import { Card, Layout, Menu, theme } from "antd";
import { Carousel } from "antd";
import ProfileCard from "./profile-card";

const cardCorousel: React.FC = () => {
  const responsiveSettings = [
    {
      breakpoint: 1200, // <1200px
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1024, // <1024px
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768, // tablet
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480, // mobile
      settings: {
        slidesToShow: 2,
      },
    },
  ];

  return (
    <section className="bg-[#691b32] py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <p className="text-yellow-600 text-xl sm:text-2xl font-semibold mb-6">
          SCHOOL MANAGEMENT
        </p>
        <div className="">
          <Carousel
            autoplay
            className="mx-auto"
            dots={false}
            arrows
            infinite={true}
            draggable={true}
            slidesToScroll={1}
            slidesToShow={6}
            responsive={responsiveSettings}
          >
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default cardCorousel;
