import "@ant-design/v5-patch-for-react-19";
import Navbar from "@/components/home/navbars";
import Footers from "@/components/home/footer";
import CardList from "@/components/home/event_list";
import TopNavbar from "@/components/home/top-navbar";

const contentStyle: React.CSSProperties = {
  margin: 0,
  width: "100%",
  objectFit: "cover",
};

export default async function Event() {
  return (
    <main className="App">
      <TopNavbar />
      <Navbar />
      <div className="relative bg-[url(/img1.jpg)]">
        <div className="flex items-center justify-center text-white z-20 bg-gradient-to-b from-[#691b32] to-transparent flex-col p-20">
          <p className="text-4xl font-bold my-10 uppercase">School Events</p>
        </div>
      </div>
      <CardList slices={100} />
      <Footers />
    </main>
  );
}
