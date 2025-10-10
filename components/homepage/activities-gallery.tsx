"use client";

import React from "react";
import { Image } from "antd";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ActivitiesGallery = () => {
  const { data: cards, mutate } = useSWR("/api/cards", fetcher);

  if (!cards) return <p>Loading...</p>;

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 gap-2 mx-20 md:mx-20 xl:mx-60 my-20">
        <Image.PreviewGroup
          preview={{
            onChange: (current, prev) =>
              console.log(`current index: ${current}, prev index: ${prev}`),
          }}
        >
          {cards.map((card: any, idx: number) => (
            <div
              key={idx}
              className="rounded-lg overflow-hidden w-full h-80 lg:h-120 md:h-80"
            >
              <Image
                className="object-cover w-full h-full rounded-lg"
                src={card.img}
                alt=""
                height="100%"
                width="100%"
              />
            </div>
          ))}
        </Image.PreviewGroup>
      </div>
    </div>
  );
};

export default ActivitiesGallery;
