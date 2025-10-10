import "@ant-design/v5-patch-for-react-19";
import Navbar from "@/components/navbars";
import Footers from "@/components/footer";
import ActivitiesGallery from "@/components/activities-gallery";
import TopNavbar from "@/components/top-navbar";

export default function Gallery() {
  return (
    <main className="App">
      <TopNavbar />
      <Navbar />
      <div className="relative bg-[url(/img1.jpg)]">
        <div className="flex items-center justify-center text-white z-20 bg-gradient-to-b from-[#691b32] to-transparent flex-col p-20">
          <p className="text-4xl font-bold my-10 uppercase">
            School Activities
          </p>
        </div>
      </div>
      <ActivitiesGallery />
      <Footers />
    </main>
  );
}
