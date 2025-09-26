"use client";

import Image from "next/image";
import React from "react";
import { Affix, Layout, Menu, theme } from "antd";
import type { MenuProps } from "antd";
import { PhoneFilled, MailFilled, DownOutlined } from "@ant-design/icons";
import Link from "next/link";

const { Header } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    label,
    children,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<Link href="/">Home </Link>, "home"),
  getItem(
    <span>
      About us
      <DownOutlined className="px-1" />
    </span>,
    "sub1",
    [
      getItem(
        <span className="focus:text-black hover:text-xl p-2 rounded-1xl">
          <Link href="/aboutus">Vision, Mission and Core Value</Link>
        </span>,
        "about"
      ),
      getItem(
        <span className="hover:text-xl p-2 rounded-1xl">Why Choose FHIS?</span>,
        "why"
      ),
      getItem(
        <span className="hover:text-xl p-2 rounded-1xl">School Policies</span>,
        "policies"
      ),
      getItem(
        <span className="hover:text-2xl p-2 rounded-1xl">
          School Facilities
        </span>,
        "facilities"
      ),
    ]
  ),
  getItem(
    <span>
      News & Events
      <DownOutlined className="px-1" />
    </span>,
    "sub2",
    [
      getItem(
        <span className="focus:text-black hover:text-xl p-2 rounded-1xl">
          <Link href="/event">School Events</Link>
        </span>,
        "event"
      ),
      getItem(
        <span className="focus:text-black hover:text-xl p-2 rounded-1xl">
          <Link href="/gallery">School Activities</Link>
        </span>,
        "activites"
      ),
    ]
  ),
  getItem("Curriculum", "7"),
  getItem("Extracurriculum", "8"),
  getItem("Afterschool Program", "9"),
  getItem("Career", "10"),
  getItem("Admission", "11"),
];

const Navbar: React.FC = () => {
  const [select, setSelect] = React.useState(["3"]);
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  return (
    <Layout>
      <Header
        style={{
          backgroundColor: "#ffffffff",
          display: "flex",
          height: 120,
          alignItems: "center",
        }}
      >
        <div className="flex flex-row items-center mx-0 md:mx-0 xl:mx-50">
          <Link href="/">
            <Image
              style={{ display: "" }}
              src="/fhis-logo.svg"
              alt={""}
              width={150}
              height={160}
            />
          </Link>
          <div className="flex-col">
            <div className="flex-1">
              <p className="text-sm uppercase text-center text-black font-medium pb-2">
                Forest Hill International School
              </p>
            </div>
            <div className="flex mx-10 justify-between gap-2 flex-row flex-1 ">
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
          <div className="flex text-black hidden md:block sm:block">
            <div className="flex flex-col lg:flex-row md:flex-col sm:flex-col ">
              <div className="flex text-black ms-3">
                <div className="h-5">
                  <PhoneFilled />
                </div>
                <p className="px-3 pe-5">(+855) 17 388 884</p>
              </div>
              <div className="flex text-black ">
                <div className="h-5">
                  <MailFilled />
                </div>
                <p className="ps-3">infor@foresthillschool.edu.kh</p>
              </div>
            </div>
          </div>
        </div>
      </Header>

      <Affix offsetTop={0}>
        <Header
          style={{
            backgroundColor: "#570614ff",
            padding: 0,
          }}
        >
          <Header
            className="mx-0 md:mx-0 xl:mx-50"
            style={{
              backgroundColor: "#570614ff",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Menu
              className="uppercase font-medium"
              theme="light"
              onClick={onClick}
              mode="horizontal"
              selectedKeys={select}
              items={items}
              style={{ flex: 1, minWidth: 0 }}
            />
          </Header>
        </Header>
      </Affix>
    </Layout>
  );
};

export default Navbar;
