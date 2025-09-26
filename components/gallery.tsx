"use client";

import React from "react";
import { Image } from "antd";

const Gallerys = () => {
  return (
    <div>
      <div className="flex pt-20 px-20 flex-col text-center items-center">
        <p className="text-2xl font-bold uppercase">Gallery</p>
        <div className="flex items-center h-[0.2rem] bg-red-900 mt-3 w-25"></div>
      </div>
      <div className="mx-20 md:mx-20 xl:mx-60 flex flex-col md:flex-row justify-between gap-2 items-center my-20">
        <div className="flex rounded-lg h-full ">
          <Image
            height={715}
            className="object-cover w-auto rounded-lg"
            src="/promote.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-between gap-1">
          <div className="flex flex-row justify-between gap-2">
            <div>
              <Image
                height={350}
                className=" w-auto rounded-lg object-cover"
                src="/img4.jpg"
                alt=""
              />
            </div>
            <div>
              <Image
                height={350}
                className="h-70 w-auto rounded-lg object-cover"
                src="/img3.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-row justify-between gap-2">
            <div>
              <Image
                height={350}
                className="h-70 w-auto rounded-lg object-cover"
                src="/img4.jpg"
                alt=""
              />
            </div>
            <div>
              <Image
                height={350}
                className="h-70 w-auto rounded-lg object-cover"
                src="/img3.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallerys;
