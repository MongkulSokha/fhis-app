import "@ant-design/v5-patch-for-react-19";
import Navbar from "@/components/navbars";
import Corousel from "@/components/corousels";
import Footers from "@/components/footer";
import CardSlider from "@/components/profile-slider";
import CurriculumSlider from "@/components/curriculum-slider";
import Welcome from "@/components/welcome";
import WhyChooseUs from "@/components/why-choose";
import Counter from "@/components/counter";
import Gallerys from "@/components/gallery";
import CardList from "@/components/cardlist";
import TestimonialList from "@/components/testimoniallist";

export const dynamic = "force-dynamic"; // important!

export default async function Home() {
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
        <CardList />
      </div>
      <CurriculumSlider />
      <Gallerys />
      {/* Testimonial */}
      <div>
        <div className="px-20 md:px-20 xl:px-60 bg-gray-100 h-full flex pt-20  flex-col text-center items-center">
          <p className="text-2xl font-bold uppercase">Testimonial</p>
          <div className="flex items-center h-[0.2rem] bg-red-900 mt-3 w-35"></div>
          <TestimonialList />
        </div>
      </div>
      <Footers />
    </main>
  );
}
