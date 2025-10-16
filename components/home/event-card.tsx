"use client";

import React from "react";
import Meta from "antd/es/card/Meta";
import { Card } from "antd";
import {
  CalendarOutlined,
  ClockCircleOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const Cards = ({
  title,
  img,
  start_date,
  end_date,
  time_event,
  location,
}: {
  title: string;
  img: string;
  start_date: string;
  end_date: string;
  time_event: string;
  location: string;
}) => {
  return (
    <Link href="/">
      <div className="border hover:border-blue-300 rounded transition duration-300 ease-in-out hover:scale-104 cursor-pointer">
        <Card
          style={{
            backgroundColor: "white",
            boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
            border: "none",
          }}
          cover={
            <img
              className="h-60 sm:h-80 w-full object-cover"
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
                    <p className="text-black text-xs sm:text-base">
                      <CalendarOutlined className="me-2" />
                      {`${start_date} - ${end_date}`}
                    </p>
                    <p className="flex text-black text-xs sm:text-base">
                      {time_event} <ClockCircleOutlined className="ms-2" />
                    </p>
                  </div>

                  <p className="text-black text-lg sm:text-xl font-semibold line-clamp-2">
                    {title}
                  </p>
                  <p className="text-[#691b32] font-semibold text-xs sm:text-base">
                    <EnvironmentOutlined /> {location}
                  </p>
                </div>
              </>
            }
          />
        </Card>
      </div>
    </Link>
  );
};

export default Cards;
