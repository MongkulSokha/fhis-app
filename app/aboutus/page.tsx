import "@ant-design/v5-patch-for-react-19";
import Navbar from "@/components/Navbar";
import Footers from "@/components/Footers";

const contentStyle: React.CSSProperties = {
  margin: 0,
  width: "100%",
  objectFit: "cover",
};

export default function AboutUs() {
  return (
    <main className="App">
      <Navbar />
      <div className="relative">
        <img style={contentStyle} src="/img1.jpg" alt="" />
        <div className="absolute inset-0 flex items-center justify-center text-white z-20 bg-gradient-to-b from-red-900 to-transparent flex-col p-20">
          <p className="text-5xl font-bold mb-10 uppercase">About Us</p>
        </div>
      </div>
      <div className="flex m-20">
        <div className="flex item-center w-250 h-100 rounded-2xl overflow-hidden">
          <img className="w-auto h-full object-cover " src="/img1.jpg" alt="" />
        </div>
        <div className="mx-10">
          <p className="text-4xl font-bold mb-5">About Us</p>
          <p className="text-2xl line-clamp-5">
            "The education of even a small child, therefore, does not aim at
            preparing him for school, but for life."
          </p>
        </div>
      </div>
      <Footers />
    </main>
  );
}
