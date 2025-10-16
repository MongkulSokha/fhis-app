"use client";

import useSWR from "swr";
import TestimonialCard from "./testimonial-card";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function TestimonialList() {
  const { data: testimonials, mutate } = useSWR("/api/testimonials", fetcher);

  if (!testimonials) return null;

  return (
    <div className="w-full h-min mx-5 md:mx-20 xl:mx-60 my-20 flex !overflow-x-visible overflow-y-auto gap-7">
      {testimonials.map((testimonials: any, idx: number) => (
        <TestimonialCard
          key={idx}
          name={testimonials.name}
          img={testimonials.img}
          youtube_link={testimonials.youtube_link}
          by_position={testimonials.by_position}
          content={testimonials.content}
        />
      ))}
      {testimonials.map((testimonials: any, idx: number) => (
        <TestimonialCard
          key={idx}
          name={testimonials.name}
          img={testimonials.img}
          youtube_link={testimonials.youtube_link}
          by_position={testimonials.by_position}
          content={testimonials.content}
        />
      ))}
    </div>
  );
}
