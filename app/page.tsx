"use client";

import "@ant-design/v5-patch-for-react-19";
import Navbar from "@/components/navbars";
import Corousel from "@/components/corousels";
import Footers from "@/components/footer";
import Cards from "@/components/event-card";
import { cardData } from "../lib/data";
import CardSlider from "@/components/profile-slider";
import TestimonialCard from "@/components/testimonial-card";
import { testimonialData } from "../lib/testimoial";
import CurriculumSlider from "@/components/curriculum-slider";
import Welcome from "@/components/welcome";
import WhyChooseUs from "@/components/why-choose";
import Counter from "@/components/counter";
import Gallerys from "@/components/gallery";

export default function Home() {
  return (
    <main className="App">
      <Navbar />
      <Corousel />
      <Welcome />
      <CardSlider />
      <WhyChooseUs />
      <Counter />
      {/* Upcoming Events */}
      <div>
        <div className="flex pt-20 px-20 flex-col text-center items-center">
          <p className="text-2xl font-bold uppercase">Upcoming Events</p>
          <div className="flex items-center h-[0.2rem] bg-red-900 mt-5 w-45"></div>
        </div>
        <div className="mx-20 md:mx-20 xl:mx-60 my-20 flex justify-between gap-6 md:gap-5 flex-col md:flex-row grid grid-cols-1 md:grid-cols-3">
          {cardData.slice(0, 6).map((card) => (
            <Cards
              key={card.id}
              title={card.title}
              img={card.img}
              date={card.date}
              time={card.time}
              location={card.location}
            />
          ))}
        </div>
      </div>
      <CurriculumSlider />
      <Gallerys />
      {/* Testimonial */}
      <div>
        <div className="px-20 md:px-20 xl:px-60 bg-gray-100 h-full flex pt-20 px-20 flex-col text-center items-center">
          <p className="text-2xl font-bold uppercase">Testimonial</p>
          <div className="flex items-center h-[0.2rem] bg-red-900 mt-3 w-35"></div>
          <div className="w-full mx-20 md:mx-20 xl:mx-60 my-20 flex  overflow-x-auto justify-between gap-6 md:gap-5">
            {testimonialData.slice(0, 6).map((card) => (
              <TestimonialCard
                key={card.id}
                name={card.name}
                img={card.img}
                position={card.position}
                text={card.text}
              />
            ))}
          </div>
        </div>
      </div>
      <Footers />
    </main>
  );
}
