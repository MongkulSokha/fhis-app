"use client";

import Cards from "./event-card";

export default function CardList({ cards }: { cards: any[] }) {
  return (
    <div className="mx-20 md:mx-20 xl:mx-60 my-20 flex justify-between gap-6 md:gap-5 flex-col md:flex-row grid grid-cols-1 md:grid-cols-3 ">
      {cards.slice(0, 6).map((card, idx) => (
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
