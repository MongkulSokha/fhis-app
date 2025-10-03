import "@ant-design/v5-patch-for-react-19";
import Navbar from "@/components/navbars";
import Footers from "@/components/footer";
import CardList from "@/components/cardlist";

const contentStyle: React.CSSProperties = {
  margin: 0,
  width: "100%",
  objectFit: "cover",
};

export default async function Event() {
  return (
    <main className="App">
      <Navbar />
      <div className="relative bg-[url(/img1.jpg)]">
        <div className="flex items-center justify-center text-white z-20 bg-gradient-to-b from-red-900 to-transparent flex-col p-20">
          <p className="text-4xl font-bold my-10 uppercase">School Events</p>
        </div>
      </div>
      <CardList slices={100} />
      <Footers />
    </main>
  );
}
