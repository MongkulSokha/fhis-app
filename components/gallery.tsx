"use client";

import React from "react";
import { Image } from "antd";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Gallerys = () => {
  const { data: cards, mutate } = useSWR("/api/cards", fetcher);

  if (!cards) return <p>Loading...</p>;

  return (
    <div>
      <div className="flex pt-20 px-20 flex-col text-center items-center">
        <p className="text-2xl font-bold uppercase">Gallery</p>
        <div className="flex items-center h-[0.2rem] bg-red-900 mt-3 w-25"></div>
      </div>

      <div className="mx-20 md:mx-20 xl:mx-60 my-20 grid md:grid-cols-2 gap-2">
        {cards.slice(0, 1).map((card: any, idx: number) => (
          <div key={idx} className="rounded-lg overflow-hidden">
            <Image
              height={800}
              width="100%"
              className="object-cover w-full h-full rounded-lg"
              src={card.img}
              alt=""
            />
          </div>
        ))}

        <div className="grid grid-cols-2 gap-1">
          <Image.PreviewGroup
            preview={{
              onChange: (current, prev) =>
                console.log(`current index: ${current}, prev index: ${prev}`),
            }}
          >
            {cards.slice(1, 5).map((card: any, idx: number) => (
              <div key={idx} className="rounded-lg overflow-hidden ">
                <Image
                  className="object-cover w-full h-full rounded-lg"
                  src={card.img}
                  alt=""
                  height={395}
                  width="100%"
                />
              </div>
            ))}
          </Image.PreviewGroup>
        </div>
      </div>
    </div>
  );
};

export default Gallerys;
