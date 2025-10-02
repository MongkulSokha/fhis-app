"use client";

import useSWR from "swr";
import TestimonialCard from "./testimonial-card";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function TestimonialList() {
  const { data: testimonials, mutate } = useSWR("/api/testimonials", fetcher);

  if (!testimonials) return <p>Loading...</p>;

  return (
    <div className="p-5 w-full mx-20 md:mx-20 xl:mx-60 my-20 flex overflow-x-auto justify-between gap-6 md:gap-5">
      {testimonials.map((testimonials: any, idx: number) => (
        <TestimonialCard
          key={idx}
          name={testimonials.name}
          img={testimonials.img}
          position={testimonials.position}
          text={testimonials.text}
        />
      ))}
    </div>
  );
}
