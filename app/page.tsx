import "@ant-design/v5-patch-for-react-19";
import Navbar from "@/components/homepage/navbars";
import Corousel from "@/components/homepage/corousels";
import Footers from "@/components/homepage/footer";
import CardSlider from "@/components/homepage/profile-slider";
import CurriculumSlider from "@/components/homepage/curriculum-slider";
import Welcome from "@/components/homepage/welcome";
import WhyChooseUs from "@/components/homepage/why-choose";
import Counter from "@/components/homepage/counter";
import Gallerys from "@/components/homepage/gallery";
import CardList from "@/components/homepage/cardlist";
import TestimonialList from "@/components/homepage/testimoniallist";
import Popup from "@/components/homepage/popup";
import Reveal from "@/components/homepage/reveal";
import TopNavbar from "@/components/homepage/top-navbar";
import ProfileCard from "@/components/homepage/profile-card";

export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <main className="App">
      <Reveal>
        <Popup />
      </Reveal>
      <TopNavbar />
      <Navbar />
      <Corousel />
      <Reveal delay={0.1}>
        <Welcome />
      </Reveal>
      <Reveal delay={0.2}>
        <CardSlider />
      </Reveal>
      <Reveal delay={0.3}>
        <WhyChooseUs />
      </Reveal>
      <Reveal delay={0.4}>
        <Counter />
      </Reveal>

      <Reveal delay={0.5}>
        <div>
          <div className="flex pt-20 px-20 flex-col text-center items-center">
            <p className="text-2xl font-bold uppercase">Upcoming Events</p>
            <div className="flex items-center h-[0.2rem] bg-[#691b32] mt-5 w-45"></div>
          </div>
          <CardList slices={6} />
        </div>
      </Reveal>

      <Reveal delay={0.5}>
        <CurriculumSlider />
      </Reveal>
      <Reveal delay={0.6}>
        <Gallerys />
      </Reveal>

      <Reveal delay={0.6}>
        <div>
          <div className="px-15 md:px-20 xl:px-60 bg-gray-100 h-full flex pt-20  flex-col text-center items-center">
            <p className="text-2xl font-bold uppercase">Testimonial</p>
            <div className="flex items-center h-[0.2rem] bg-[#691b32] mt-3 w-35"></div>
            <TestimonialList />
          </div>
        </div>
      </Reveal>

      <Footers />
    </main>
  );
}
