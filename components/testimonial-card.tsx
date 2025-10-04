"use client";

import React from "react";
import Meta from "antd/es/card/Meta";
import { Card } from "antd";

const contentStyle: React.CSSProperties = {
  backgroundColor: "white",
  boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
  border: "none",
};

const TestimonialCard = ({
  name,
  img,
  position,
  text,
}: {
  name: any;
  img: any;
  position: any;
  text: any;
}) => {
  return (
    <div className="border hover:border-blue-300 rounded transition duration-300 ease-in-out hover:scale-103 cursor-pointer">
      <Card
        style={contentStyle}
        cover={
          <img
            className="h-40 object-cover"
            draggable={false}
            alt="example"
            src={img}
          />
        }
      >
        <Meta
          className="w-62 sm:w-79"
          description={
            <>
              <div className="flex flex-col justify-between text-start">
                <p className="text-black text-xl font-semibold capitalize">
                  {name}
                </p>
                <p className="text-[#691b32] font-semibold">{position}</p>
                <p className="text-black text-sm">{text}</p>
              </div>
            </>
          }
        />
      </Card>
    </div>
  );
};

export default TestimonialCard;
