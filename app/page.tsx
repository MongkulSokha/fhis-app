import "@ant-design/v5-patch-for-react-19";
import Navbar from "@/components/home/navbars";
import Corousel from "@/components/home/corousels";
import Footers from "@/components/home/footer";
import CardSlider from "@/components/home/profile-slider";
import CurriculumSlider from "@/components/home/curriculum-slider";
import Welcome from "@/components/home/welcome";
import WhyChooseUs from "@/components/home/why-choose";
import Counter from "@/components/home/counter";
import Gallerys from "@/components/home/gallery";
import CardList from "@/components/home/event_list";
import TestimonialList from "@/components/home/testimoniallist";
import Popup from "@/components/home/popup";
import Reveal from "@/components/home/reveal";
import TopNavbar from "@/components/home/top-navbar";
import ProfileCard from "@/components/home/profile-card";

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
