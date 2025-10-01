import "@ant-design/v5-patch-for-react-19";
import Navbar from "@/components/navbars";
import Footers from "@/components/footer";

const contentStyle: React.CSSProperties = {
  margin: 0,
  width: "100%",
  objectFit: "cover",
};

export default function AboutUs() {
  return (
    <main className="App">
      <Navbar />
      <div className="relative bg-[url(/img1.jpg)]">
        <div className="flex items-center justify-center text-white z-20 bg-gradient-to-b from-red-900 to-transparent flex-col p-20">
          <p className="text-4xl font-bold my-10 uppercase">About Us</p>
        </div>
      </div>
      <div className="flex px-10 md:px-10 xl:px-50 flex-col md:flex-row py-10">
        <div className="flex item-center w-full h-100 rounded-2xl overflow-hidden me-10">
          <img className="w-auto h-full object-cover " src="/img1.jpg" alt="" />
        </div>
        <div className="">
          <p className="text-4xl font-bold mb-5 mt-5">About Us</p>
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
