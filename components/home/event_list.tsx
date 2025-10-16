"use client";

import useSWR from "swr";
import Cards from "./event-card";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function CardList({ slices }: { slices: number }) {
  const { data: cards, mutate } = useSWR("/api/cards", fetcher);

  if (!cards) return <p>Loading...</p>;

  return (
    <div className="mx-15 md:mx-20 xl:mx-60 my-20 grid grid-cols-1 md:grid-cols-3 gap-4">
      {cards.slice(0, slices).map((card: any, idx: number) => (
        <Cards
          key={idx}
          title={card.title}
          img={card.img}
          start_date={card.start_date}
          end_date={card.end_date}
          time_event={card.time_event}
          location={card.location}
        />
      ))}
    </div>
  );
}
