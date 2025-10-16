"use client";

import React from "react";
import Meta from "antd/es/card/Meta";
import { Card } from "antd";

const contentStyle: React.CSSProperties = {
  backgroundColor: "white",
  boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
  border: "none",
};

const getYouTubeEmbedUrl = (url: string): string | null => {
  if (!url) return null;
  const regExp =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^\s&]+)/;
  const match = url.match(regExp);
  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
};
const TestimonialCard = ({
  name,
  img,
  by_position,
  youtube_link,
  content,
}: {
  name: string;
  img: string;
  youtube_link?: string;
  by_position: string;
  content: string;
}) => {
  const youtubeEmbedUrl = getYouTubeEmbedUrl(youtube_link || "");

  return (
    <div className="border hover:border-blue-300 rounded transition duration-300 ease-in-out hover:scale-103 cursor-pointer h-fit">
      <Card
        className="h-fit"
        style={contentStyle}
        cover={
          youtubeEmbedUrl ? (
            <div className="relative w-full h-50">
              <iframe
                className="w-full h-full rounded-t"
                src={youtubeEmbedUrl}
                title={name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <img
              className="h-50 w-full object-cover rounded-t"
              draggable={false}
              alt={name}
              src={img}
            />
          )
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
                <p className="text-[#691b32] font-semibold">{by_position}</p>
                <p className="text-black text-sm line-clamp-3">{content}</p>
              </div>
            </>
          }
        />
      </Card>
    </div>
  );
};

export default TestimonialCard;
