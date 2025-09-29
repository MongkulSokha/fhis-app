import "@ant-design/v5-patch-for-react-19";
import Navbar from "@/components/navbars";
import Footers from "@/components/footer";
import { cardData } from "@/lib/data";
import Cards from "@/components/event-card";
import CardList from "@/components/cardlist";
import { getCardData } from "../action/cardDataAction";

const contentStyle: React.CSSProperties = {
  margin: 0,
  width: "100%",
  objectFit: "cover",
};

export default async function Event() {
  const cards = await getCardData();
  return (
    <main className="App">
      <Navbar />
      <div className="relative">
        <img style={contentStyle} src="/img1.jpg" alt="" />
        <div className="absolute inset-0 flex items-center justify-center text-white z-20 bg-gradient-to-b from-red-900 to-transparent flex-col p-20">
          <p className="text-5xl font-bold mb-10 uppercase">School Events</p>
        </div>
      </div>
      <CardList cards={cards} />
      <Footers />
    </main>
  );
}
