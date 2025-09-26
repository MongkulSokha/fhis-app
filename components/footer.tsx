"use client";

import React from "react";
import { Button, Input, Layout, Menu, Space, theme } from "antd";
import Link from "next/link";
import Image from "next/image";

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
        <div className="flex flex-col md:flex-row gap-20 md:gap-50 px-10 md:px-10 xl:px-60">
          <div>
            <div className="flex ">
              <Link href="/">
                <Image
                  src="/fhis-logo-white.svg"
                  alt={""}
                  width={160}
                  height={160}
                />
              </Link>
            </div>
            <p className="flex text-start">
              #50, Street 271 (Opposite to Heng Ly Market), Teuk Thla, Sen Sok,
              Phnom Penh, Cambodia
            </p>
          </div>
          <div className="flex flex-col pt-5">
            <div className="flex flex-col text-start pb-15">
              <p className="text-sm pb-2 font-medium">TRILNGUAL CURRICULUM</p>
              <img className="w-50" src="/flags.svg" alt="" />
            </div>
            <div className="flex flex-col text-start">
              <p>Contact</p>
              <p>Tel: (+855) 17 388 884</p>
            </div>
          </div>
          <div className="flex flex-col pt-5">
            <div className="flex flex-col text-start pb-10 gap-2">
              <p>Subscribe Newsletter</p>
              <p className="text-xs">
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
            <div className="flex flex-col text-start">
              <p>Email</p>
              <p>infor@foresthillschool.edu.kh</p>
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
