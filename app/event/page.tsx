import "@ant-design/v5-patch-for-react-19";
import Navbar from "@/components/Navbar";
import Footers from "@/components/Footers";
import { cardData } from "@/lib/data";
import Cards from "@/components/Cards";

const contentStyle: React.CSSProperties = {
  margin: 0,
  width: "100%",
  objectFit: "cover",
};

export default function Event() {
  return (
    <main className="App">
      <Navbar />
      <div className="relative">
        <img style={contentStyle} src="/img1.jpg" alt="" />
        <div className="absolute inset-0 flex items-center justify-center text-white z-20 bg-gradient-to-b from-red-900 to-transparent flex-col p-20">
          <p className="text-5xl font-bold mb-10 uppercase">School Events</p>
        </div>
      </div>
      <div className="flex m-20 justify-between gap-6 md:gap-5 flex-col md:flex-row grid grid-cols-1 md:grid-cols-3">
        {cardData.map((card) => (
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
      <Footers />
    </main>
  );
}
