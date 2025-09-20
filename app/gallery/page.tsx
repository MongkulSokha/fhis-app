import "@ant-design/v5-patch-for-react-19";
import Navbar from "@/components/Navbar";
import Footers from "@/components/Footers";
import { Image } from "antd";

const contentStyle: React.CSSProperties = {
  margin: 0,
  width: "100%",
  objectFit: "cover",
};

export default function Gallery() {
  return (
    <main className="App">
      <Navbar />
      <div className="relative">
        <img style={contentStyle} src="/img1.jpg" alt="" />
        <div className="absolute inset-0 flex items-center justify-center text-white z-20 bg-gradient-to-b from-red-900 to-transparent flex-col p-20">
          <p className="text-5xl font-bold mb-10 uppercase">Gallery</p>
        </div>
      </div>
      <div className="px-10 md:px-10 xl:px-50 flex flex-col md:flex-row justify-between gap-2 items-center py-20">
        <div className="flex rounded-rg h-full">
          <Image
            height={715}
            className="object-cover  w-auto rounded-xl"
            src="/promote.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-between gap-1">
          <div className="flex flex-row justify-between gap-2">
            <div>
              <Image
                height={350}
                className="h-70 w-auto rounded-lg object-cover"
                src="/img4.jpg"
                alt=""
              />
            </div>
            <div>
              <Image
                height={350}
                className="h-70 w-auto rounded-lg object-cover"
                src="/img3.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-row justify-between gap-2">
            <div>
              <Image
                height={350}
                className="h-70 w-auto rounded-lg object-cover"
                src="/img4.jpg"
                alt=""
              />
            </div>
            <div>
              <Image
                height={350}
                className="h-70 w-auto rounded-lg object-cover"
                src="/img3.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Footers />
    </main>
  );
}
