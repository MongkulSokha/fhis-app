import React from "react";
import Meta from "antd/es/card/Meta";
import { Card } from "antd";

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
    <div className="">
      <Card
        style={{
          backgroundColor: "white",
          boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
          border: "none",
          width: 350,
        }}
        cover={
          <img
            className="h-40 w-full object-cover"
            draggable={false}
            alt="example"
            src={img}
          />
        }
      >
        <Meta
          className=""
          description={
            <>
              <div className="flex flex-col justify-between text-start">
                <p className="text-black text-xl font-semibold capitalize">
                  {name}
                </p>
                <p className="text-red-900 font-semibold">{position}</p>
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
