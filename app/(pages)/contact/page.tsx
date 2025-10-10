import "@ant-design/v5-patch-for-react-19";
import Navbar from "@/components/homepage/navbars";
import Footers from "@/components/homepage/footer";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import TopNavbar from "@/components/homepage/top-navbar";
import { Textarea } from "@/components/ui/textarea";
import { IconMail, IconMapPin, IconPhoneCall } from "@tabler/icons-react";

export default function AboutUs() {
  return (
    <main className="App">
      <TopNavbar />
      <Navbar />
      <div className="relative bg-[url(/img1.jpg)]">
        <div className="flex items-center justify-center text-white z-20 bg-gradient-to-b from-[#691b32] to-transparent flex-col p-20">
          <p className="text-4xl font-bold my-10 uppercase">Contact</p>
        </div>
      </div>
      <div className="flex px-10 md:px-10 xl:px-50 flex-col py-10 text-center">
        <p className="text-4xl font-bold mb-5 mt-5">Contact Us</p>
        <p className="text-2xl line-clamp-5">
          Any question or remarks? Just write us a message!
        </p>
      </div>

      <div className=" gap-5 w-100% mx-10 mb-20 p-5 shadow-[0_1px_6px_-1px_rgba(0,0,0,0.4)] sm:mx-50">
        <div className="grid grid-cols-1  md:grid-cols-2 gap-10">
          <div className=" bg-[#691b32] rounded-lg p-10 sm:p-20 text-white">
            <h1 className=" text-2xl font-bold">Contact Information</h1>
            <p>Say something to get in touch!</p>
            <div className="flex flex-col gap-5 pt-20">
              <p className="flex flex-rows gap-5">
                <IconPhoneCall />
                (+855) 17 388 884
              </p>
              <p className="flex flex-rows gap-5 text-sm sm:text-base">
                <IconMail />
                infor@foresthillschool.edu.kh
              </p>
              <div className="flex flex-rows gap-5 text-sm sm:text-base">
                <IconMapPin />
                <p className="w-50 sm:w-full">
                  #50, Street 271 (Opposite to Heng Ly Market), Teuk Thla, Sen
                  Sok, Phnom Penh, Cambodia
                </p>
              </div>
            </div>
          </div>
          <form className="p-2 sm:p-10">
            <FieldGroup>
              <FieldSet>
                <FieldGroup>
                  <div className="grid grid-rows sm:grid-cols-2 gap-5 sm:gap-15">
                    <Field>
                      <FieldLabel>First Name</FieldLabel>
                      <Input placeholder="Date of birth" required />
                    </Field>
                    <Field>
                      <FieldLabel>Last Name</FieldLabel>
                      <Input placeholder="Age" required />
                    </Field>
                  </div>
                  <div className="grid grid-rows sm:grid-cols-2 gap-5 sm:gap-15">
                    <Field>
                      <FieldLabel>Email</FieldLabel>
                      <Input placeholder="Date of birth" required />
                    </Field>
                    <Field>
                      <FieldLabel>Phone Number</FieldLabel>
                      <Input placeholder="Age" required />
                    </Field>
                  </div>
                  <Field>
                    <FieldLabel>Message</FieldLabel>
                    <Textarea
                      className="h-50"
                      placeholder="Write your message.."
                      required
                    />
                  </Field>
                </FieldGroup>
              </FieldSet>
              <Field className="flex justify-end" orientation="horizontal">
                <Button className="bg-[#691b32]" type="submit">
                  Send Message
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </div>
      </div>

      <Footers />
    </main>
  );
}
