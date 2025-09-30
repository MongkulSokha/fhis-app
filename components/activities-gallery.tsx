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
      <div className="grid grid-cols-3 gap-1 mx-20 md:mx-20 xl:mx-60 my-20">
        <Image.PreviewGroup
          preview={{
            onChange: (current, prev) =>
              console.log(`current index: ${current}, prev index: ${prev}`),
          }}
        >
          {cards.map((card: any, idx: number) => (
            <div key={idx} className="rounded-lg overflow-hidden ">
              <Image
                className="object-cover w-full h-full rounded-lg"
                src={card.img}
                alt=""
                height={440}
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
