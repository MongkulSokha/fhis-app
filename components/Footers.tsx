"use client";

import React from "react";
import { Layout, Menu, theme } from "antd";
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
        className="bottom-0 flex p-20 flex-col text-center items-center"
        style={{
          backgroundColor: "#570614ff",
          textAlign: "center",
          alignContent: "center",
          justifyContent: "center",
          flexGrow: 1,
        }}
      >
        <div className="flex flex-col md:flex-row justify-between gap-20 items-center md:gap-50">
          <div className="flex ">
            <Link href="/">
              <Image
                src="/fhis-logo-white.svg"
                alt={""}
                width={170}
                height={180}
              />
            </Link>
          </div>
          <div className="flex flex-col text-start">
            <p>Contact</p>
            <p>Tel: (+855) 17 388 884</p>
          </div>
          <div className="flex flex-col text-start">
            <p>Email</p>
            <p>infor@foresthillschool.edu.kh</p>
          </div>
        </div>
        <div className="flex items-center h-[0.003rem] bg-gray-400 mt-10 w-full"></div>
        <p className="mt-10 mb-5">
          Copyright © {new Date().getFullYear()} Forest Hill International
          School. All rights reserved.
        </p>
      </Footer>
    </Layout>
  );
};

export default Footers;
