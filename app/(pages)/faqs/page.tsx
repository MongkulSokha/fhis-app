import "@ant-design/v5-patch-for-react-19";
import Navbar from "@/components/home/navbars";
import Footers from "@/components/home/footer";
import { Button } from "@/components/ui/button";
import TopNavbar from "@/components/home/top-navbar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { ChevronsUpDown } from "lucide-react";

const contentStyle: React.CSSProperties = {
  margin: 0,
  width: "100%",
  objectFit: "cover",
};

export default function AboutUs() {
  return (
    <main className="App">
      <TopNavbar />
      <Navbar />
      <div className="relative bg-[url(/img1.jpg)]">
        <div className="flex items-center justify-center text-white z-20 bg-gradient-to-b from-[#691b32] to-transparent flex-col p-20">
          <p className="text-4xl font-bold my-10 uppercase">FAQ</p>
        </div>
      </div>
      <div className="flex px-10 md:px-10 xl:px-50 flex-col py-10 text-center">
        <p className="text-4xl font-bold mb-5 mt-5">Frequent Asked Questions</p>
        <p className="text-2xl line-clamp-5">
          Questions you might asked about us
        </p>
      </div>
      <div className="w-100% flex flex-col px-10 sm:px-50 py-10 bg-[#691b32] mb-10">
        <div className="flex flex-col w-full gap-3">
          <Collapsible className="w-full">
            <CollapsibleTrigger className="w-full" asChild>
              <Button className="w-full text-base bg-gray-200 text-black justify-between px-5 sm:px-20 hover:bg-white whitespace-normal h-auto py-3 text-left">
                <span className="">Who we are?</span>
                <ChevronsUpDown />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="rounded-lg bg-gray-200 border py-3 px-5">
                Forest Hill International School and Montessori Day Care,
                Appletree International School, and Leaderland English Academy
                using the Royal Government of Cambodia's curriculum and English
                education.
              </div>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="w-full">
            <CollapsibleTrigger className="w-full" asChild>
              <Button className="w-full text-base bg-gray-200 text-black justify-between hover:bg-white whitespace-normal h-auto py-3 text-left">
                <span className="break-words text-left">
                  How do I know whether I am registered for a training course?
                </span>
                <ChevronsUpDown />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="rounded-lg bg-gray-200 border py-3 px-5">
                You will receive confirmation of your course registration by
                email. Your registration is only complete with this written
                confirmation and/or confirmation call from our team.
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>

      <Footers />
    </main>
  );
}
