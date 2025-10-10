import "@ant-design/v5-patch-for-react-19";
import Navbar from "@/components/navbars";
import Footers from "@/components/footer";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Checkbox } from "antd";
import { Button } from "@/components/ui/button";
import TopNavbar from "@/components/top-navbar";

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
          <p className="text-4xl font-bold my-10 uppercase">Inquires</p>
        </div>
      </div>
      <div className="flex px-10 md:px-10 xl:px-50 flex-col py-10 text-center">
        <p className="text-4xl font-bold mb-5 mt-5">Inquires</p>
        <p className="text-2xl line-clamp-5">
          Submit your contact information if you are interested in certain
          programs
        </p>
      </div>

      <div className="w-100% mx-10 mb-20 p-10 shadow-[0_1px_6px_-1px_rgba(0,0,0,0.4)]  sm:mx-50">
        <form>
          <FieldGroup>
            <FieldSet>
              <FieldLegend></FieldLegend>
              <FieldGroup>
                <div className="grid grid-rows sm:grid-cols-3 gap-4">
                  <Field>
                    <FieldLabel>Student's Name</FieldLabel>
                    <Input placeholder="Name" required />
                  </Field>

                  <div className="flex flex-rows gap-5 items-baseline-last ">
                    <FieldLabel>Sex:</FieldLabel>
                    <div className="flex flex-rows gap-5">
                      <Checkbox />
                      <FieldLabel>Male</FieldLabel>
                    </div>
                    <div className="flex flex-rows gap-5">
                      <Checkbox />
                      <FieldLabel>Female</FieldLabel>
                    </div>
                  </div>
                </div>
                <div className="grid grid-rows sm:grid-cols-3 gap-5 sm:gap-15">
                  <Field>
                    <FieldLabel>Date of birth</FieldLabel>
                    <Input placeholder="Date of birth" required />
                  </Field>
                  <Field>
                    <FieldLabel>Age</FieldLabel>
                    <Input placeholder="Age" required />
                  </Field>
                  <Field>
                    <FieldLabel>Address</FieldLabel>
                    <Input placeholder="Address" required />
                  </Field>
                </div>
                <div className="grid grid-rows sm:grid-cols-3 gap-5 sm:gap-15">
                  <Field>
                    <FieldLabel>Father's Name</FieldLabel>
                    <Input placeholder="Father's Name" required />
                  </Field>
                  <Field>
                    <FieldLabel>Telephone</FieldLabel>
                    <Input placeholder="Telephone" required />
                  </Field>
                  <Field>
                    <FieldLabel>Email</FieldLabel>
                    <Input placeholder="Email" required />
                  </Field>
                </div>
                <div className="grid grid-rows sm:grid-cols-3 gap-5 sm:gap-15">
                  <Field>
                    <FieldLabel>Monter's Name</FieldLabel>
                    <Input placeholder="Monter's Name" required />
                  </Field>
                  <Field>
                    <FieldLabel>Telephone</FieldLabel>
                    <Input placeholder="Telephone" required />
                  </Field>
                  <Field>
                    <FieldLabel>Email</FieldLabel>
                    <Input placeholder="Email" required />
                  </Field>
                </div>
                <div className="grid grid-rows sm:grid-cols-3 gap-5 sm:gap-15">
                  <Field>
                    <FieldLabel>Current school/Institution</FieldLabel>
                    <Input placeholder="Current school/Institution" required />
                  </Field>
                  <Field>
                    <FieldLabel>Academy Qualifications</FieldLabel>
                    <Input placeholder="Academy Qualifications" required />
                  </Field>
                  <Field>
                    <FieldLabel>Other (Please specify)</FieldLabel>
                    <Input placeholder="Other" required />
                  </Field>
                </div>
                <div className="grid grid-rows sm:grid-cols-3 gap-5 sm:gap-15">
                  <Field>
                    <FieldLabel>Interests</FieldLabel>
                    <Input placeholder="Interests" required />
                  </Field>
                  <Field>
                    <FieldLabel>How do you know us?</FieldLabel>
                    <Input placeholder="How do you know us?" required />
                  </Field>
                  <Field>
                    <FieldLabel>Other (Please specify)</FieldLabel>
                    <Input placeholder="Other" required />
                  </Field>
                </div>
              </FieldGroup>
            </FieldSet>
            <Field className="flex justify-end" orientation="horizontal">
              <Button className="bg-[#691b32]" type="submit">
                Submit Now
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </div>

      <Footers />
    </main>
  );
}
