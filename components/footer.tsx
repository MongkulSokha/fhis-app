"use client";

import React from "react";
import { Button, Input, Layout, Menu, Space, theme } from "antd";
import Link from "next/link";
import Image from "next/image";
import CurriculumFooter from "./curriculum-slider-footer";

const { Footer } = Layout;

const Footers: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Footer
        className="bottom-0 flex p-20 flex-col"
        style={{
          backgroundColor: "#570614ff",
          textAlign: "center",
          alignContent: "center",
          justifyContent: "center",
          flexGrow: 1,
        }}
      >
        <div className="flex flex-col  justify-center md:flex-row gap-5 md:gap-10 lg-gap-10 xl:gap-20 2xl:gap-60 px-5 md:px-">
          <div>
            <div className="flex">
              <Link href="/">
                <Image
                  src="/fhis-logo-white.svg"
                  alt={""}
                  width={160}
                  height={160}
                />
              </Link>
            </div>
            <p className="flex text-start w-70 md:w-40 lg:w-50 sm:w-80 text-base md:text- lg:text-base">
              #50, Street 271 (Opposite to Heng Ly Market), Teuk Thla, Sen Sok,
              Phnom Penh, Cambodia
            </p>
          </div>
          <div className="flex flex-col pt-5">
            <div className="flex flex-col text-start pb-5">
              <p className="text-sm pb-2 font-medium">TRILNGUAL CURRICULUM</p>
              <img className="w-40" src="/flags.svg" alt="" />
            </div>
            <div className="pb-5">
              <CurriculumFooter />
            </div>
            <div className="flex flex-col text-start">
              <p className="whitespace-nowrap">Tel: (+855) 17 388 884</p>
              <p className="whitespace-nowrap">
                Email: infor@foresthillschool.edu.kh
              </p>
            </div>
          </div>
          <div className="flex flex-col pt-5">
            <div className="flex flex-col text-start pb-10 gap-1">
              <p>Subscribe Newsletter</p>
              <p className="text-sm pb-2">
                Please subscribe our website to get school information
              </p>
              <Space.Compact style={{ width: "100%" }}>
                <Input
                  style={{
                    backgroundColor: "#ffffffff",
                  }}
                  placeholder="Email Address"
                  defaultValue=""
                />
                <Button>Subscribe</Button>
              </Space.Compact>
            </div>
            <div className="flex-col bg-white p-1 rounded-sm content-center">
              <div className="flex-1">
                <p className="text-xs uppercase text-center text-black font-medium pb-2">
                  Forest Hill International School
                </p>
              </div>
              <div className="flex mx-5 content-center gap-2 flex-row">
                <Link
                  target="_blank"
                  href="https://www.facebook.com/ForestHillInternational"
                >
                  <img
                    className="transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
                    src="/facebook.svg"
                    alt="facebook-icon"
                  />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.youtube.com/channel/UC1dse898ZKr3kLSQvQp4MRg"
                >
                  <img
                    className="transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
                    src="/youtube.svg"
                    alt="youtube-icon"
                  />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/company/forest-hill-international-school/about//"
                >
                  <img
                    className="transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
                    src="/linkedin.svg"
                    alt="linkedin-icon"
                  />
                </Link>
                <Link target="_blank" href="https://t.me/+tTWr_iK8qT8zZjZl">
                  <img
                    className="transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
                    src="/telegram.svg"
                    alt="telegram-icon"
                  />
                </Link>
                <Link
                  target="_blank"
                  href="https://instagram.com/foresthillinternational?igshid=MzRlODBiNWFlZA=="
                >
                  <img
                    className="transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
                    src="/instagram.svg"
                    alt="instagram-icon"
                  />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.tiktok.com/@foresthillinternational?is_from_webapp=1&sender_device=pc"
                >
                  <img
                    className="transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
                    src="/tiktok.svg"
                    alt="tiktok-icon"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="px-10 md:px-10 xl:px-60">
          <div className="flex items-center h-[0.005rem] bg-gray-400 mt-10 w-full "></div>
          <p className="mt-10 mb-5">
            Copyright © {new Date().getFullYear()} Forest Hill International
            School. All rights reserved.
          </p>
        </div>
      </Footer>
    </Layout>
  );
};

export default Footers;
