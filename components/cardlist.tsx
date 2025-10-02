"use client";

import useSWR from "swr";
import Cards from "./event-card";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function CardList() {
  const { data: cards, mutate } = useSWR("/api/cards", fetcher);

  if (!cards) return <p>Loading...</p>;

  return (
    <div className="mx-15 md:mx-20 xl:mx-60 my-20 grid grid-cols-1 md:grid-cols-3 gap-4">
      {cards.slice(0, 6).map((card: any, idx: number) => (
        <Cards
          key={idx}
          title={card.title}
          img={card.img}
          date={card.date}
          time={card.time}
          location={card.location}
        />
      ))}
    </div>
  );
}
