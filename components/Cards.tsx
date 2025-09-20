import React from "react";
import Meta from "antd/es/card/Meta";
import { Card } from "antd";
import {
  CalendarOutlined,
  ClockCircleOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const Cards = ({
  title,
  img,
  date,
  time,
  location,
}: {
  title: any;
  img: any;
  date: any;
  time: any;
  location: any;
}) => {
  return (
    <div className="">
      <Card
        style={{
          backgroundColor: "white",
          boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
          border: "none",
        }}
        cover={
          <img
            className="h-80 w-full object-cover"
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
              <div className="flex flex-col justify-between gap-2">
                <div className="flex flex-row justify-between gap-3">
                  <p className="text-black">
                    <CalendarOutlined className="me-2" />
                    {date}
                  </p>
                  <p className="flex text-black">
                    {time} <ClockCircleOutlined className="ms-2" />
                  </p>
                </div>

                <p className="text-black text-xl font-semibold">{title}</p>
                <p className="text-black ">
                  <EnvironmentOutlined /> {location}
                </p>
              </div>
            </>
          }
        />
      </Card>
    </div>
  );
};

export default Cards;
