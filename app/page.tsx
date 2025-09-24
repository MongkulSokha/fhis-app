import "@ant-design/v5-patch-for-react-19";
import Navbar from "@/components/Navbar";
import Corousel from "@/components/Corousel";
import Footers from "@/components/Footers";
import Cards from "@/components/Cards";
import { cardData } from "../lib/data";
import CardSlider from "@/components/CardSlider";
import { Image } from "antd";

export default function Home() {
  return (
    <main className="App">
      <Navbar />
      <Corousel />
      <div>
        <div className="px-20 md:px-20 xl:px-50 flex p-20 flex-col text-center items-center">
          <p className="text-5xl font-semibold pb-5">Welcome to</p>
          <p className="text-5xl font-bold">FORESTHILL INTERNATIONAL SCHOOL</p>
          <div className="flex items-center h-1 bg-red-900 mt-10 w-65"></div>
          <p className="text-2xl pt-9 ">
            Activities of students taking the September Monthly Test for
            National Program in the Academic Year 2022-2023 at Forest Hill
            International School
          </p>
        </div>
      </div>

      <div className="">
        <div className="px-20 md:px-20 xl:px-50 bg-red-900 flex justify-center p-20 flex-col text-center">
          <p className=" text-yellow-600 text-2xl font-semibold">
            SCHOOL MANAGEMENT
          </p>
          <CardSlider />
        </div>
      </div>

      <div className="px-0 md:px-0 xl:px-50">
        <div className=" flex pt-20 px-20 flex-col text-center items-center">
          <p className="text-2xl font-bold uppercase">Why Choose Us</p>
          <div className="flex items-center h-[0.2rem] bg-red-900 mt-5 w-45"></div>
          <p className="text-1xl pt-3 ">
            We offer an affordable, quality education with Trilingual
            Curriculums: English, Khmer and Chinese
          </p>
        </div>
        <div className="flex flex-col px-20 py-10 justify-between gap-5 pb-20 md:flex-row">
          <div className="flex flex-rows items-start shadow-[0_1px_6px_-1px_rgba(0,0,0,0.4)] p-4 rounded-lg py-7">
            <img className="w-23 pe-4" src="/book.svg" alt="" />
            <div>
              <p className="text-black font-semibold">Books & Library</p>
              <p className="text-black text-sm">
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything embarrassing hidden in the middle of
                text
              </p>
            </div>
          </div>
          <div className="flex flex-rows items-start shadow-[0_1px_6px_-1px_rgba(0,0,0,0.4)] p-4 rounded-lg py-7">
            <img className="w-23 pe-4" src="/sports.svg" alt="" />
            <div>
              <p className="text-black font-semibold">Learn Courses Online</p>
              <p className="text-black text-sm">
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything embarrassing hidden in the middle of
                text
              </p>
            </div>
          </div>
          <div className="flex flex-rows items-start shadow-[0_1px_6px_-1px_rgba(0,0,0,0.4)] p-4 rounded-lg py-7">
            <img className="w-23 pe-4" src="/learn.svg" alt="" />
            <div>
              <p className="text-black font-semibold">Sports</p>
              <p className="text-black text-sm">
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything embarrassing hidden in the middle of
                text
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center flex-row md:flex-col text-center">
        <div className="flex relative h-270 md:h-90">
          <img
            className="w-full h-auto object-cover"
            src="/counter_bg.jpeg"
            alt=""
          />
          <div className="flex absolute inset-0 items-center justify-center text-white bg-gray-900 opacity-75 flex-col md:flex-row p-20 justify-between gap-20">
            <div className="flex flex-col px-10">
              <img className="h-30" src="/students.svg" alt="" />
              <p className="font-bold text-2xl">1800+</p>
              <p>Students</p>
            </div>
            <div className="flex flex-col px-10">
              <img className="h-30" src="/course.svg" alt="" />
              <p className="font-bold text-2xl">70</p>
              <p>Courses</p>
            </div>
            <div className="flex flex-col px-10">
              <img className="h-30" src="/teacher.svg" alt="" />
              <p className="font-bold text-2xl">700+</p>
              <p>Certified Teachers</p>
            </div>
            <div className="flex flex-col px-10">
              <img className="h-30" src="/award.svg" alt="" />
              <p className="font-bold text-2xl">1200+</p>
              <p>Winning Award</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex pt-20 px-20 flex-col text-center items-center">
          <p className="text-2xl font-bold uppercase">Upcoming Events</p>
          <div className="flex items-center h-[0.2rem] bg-red-900 mt-5 w-45"></div>
        </div>
      </div>

      <div className="mx-20 md:mx-20 xl:mx-50 my-20 flex justify-between gap-6 md:gap-5 flex-col md:flex-row grid grid-cols-1 md:grid-cols-3">
        {cardData.map((card) => (
          <Cards
            key={card.id}
            title={card.title}
            img={card.img}
            date={card.date}
            time={card.time}
            location={card.location}
          />
        ))}
      </div>

      <div>
        <div className="bg-gray-100 flex justify-center p-20 flex-col text-center h-90">
          <p className=" text-black text-4xl font-semibold">CURRICULUM</p>
        </div>
      </div>

      <div className="">
        <div className="flex pt-20 px-20 flex-col text-center items-center">
          <p className="text-2xl font-bold uppercase">Gallery</p>
          <div className="flex items-center h-[0.2rem] bg-red-900 mt-5 w-45"></div>
        </div>
      </div>

      <div className="mx-20 md:mx-20 xl:mx-50 flex flex-col md:flex-row justify-between gap-2 items-center my-20">
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
                className=" w-auto rounded-lg object-cover"
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
