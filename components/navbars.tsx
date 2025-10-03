"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Affix, Drawer, Dropdown, Layout, Menu, Space } from "antd";
import type { MenuProps } from "antd";
import {
  PhoneFilled,
  MailFilled,
  DownOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const { Header } = Layout;

type MenuItem = Required<
  NonNullable<Parameters<typeof Menu>[0]["items"]>
>[number];

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

const item: MenuItem[] = [
  getItem(<Link href="/">Home</Link>, "home"),

  getItem(
    <span>
      About us <DownOutlined style={{ fontSize: 12, marginLeft: 4 }} />
    </span>,
    "sub1",
    [
      getItem(
        <Link href="/aboutus">Vision, Mission and Core Value</Link>,
        "about"
      ),
      getItem("Why Choose FHIS?", "why"),
      getItem("School Policies", "policies"),
      getItem("School Facilities", "facilities"),
    ]
  ),

  getItem(
    <span>
      Accreditation <DownOutlined style={{ fontSize: 12 }} />
    </span>,
    "sub2",
    [
      getItem("IEYC", "ieyc"),
      getItem("IPC", "ipc"),
      getItem("Cambridge", "cambridge"),
      getItem("MoEYS", "moeys"),
    ]
  ),

  getItem(
    <span>
      Curriculum <DownOutlined style={{ fontSize: 12 }} />{" "}
    </span>,
    "curriculum",
    [
      getItem(
        <span>
          National Program <DownOutlined style={{ fontSize: 12 }} />
        </span>,
        "national",
        [getItem("Khmer", "khmer")]
      ),
      getItem("IEYP", "ieyp"),
      getItem("IPP & ISP", "ippisp"),
    ]
  ),
  getItem("Extracurriculum", "extra"),
  getItem("Afterschool Program", "afterschool"),
  getItem("Career", "career"),
  getItem("Admission", "admission"),
  getItem(
    <span>
      News & Events <DownOutlined style={{ fontSize: 12 }} />
    </span>,
    "sub3",
    [
      getItem(<Link href="/event">School Events</Link>, "event"),
      getItem(<Link href="/gallery">School Activities</Link>, "activites"),
    ]
  ),
  getItem("Inquiries", "inquiries"),
  getItem("Contact", "contact"),
  getItem("Quick Link", "quicklink"),
];

const items: MenuProps["items"] = [
  {
    key: "1",
    icon: <Image src="/cambodia-flag.svg" alt="" width={50} height={50} />,
  },
  {
    key: "2",
    icon: <Image src="/china-flag.svg" alt="" width={50} height={50} />,
  },
];

const Navbar: React.FC = () => {
  const [select, setSelect] = React.useState(["3"]);
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onCloseDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <Layout>
      <div className="bg-white h-25 sm:h-30 flex px-6 md:px-15 xl:px-50">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/fhis-logo.svg"
                alt="FHIS Logo"
                width={150}
                height={160}
              />
            </Link>
            <div className="flex-col">
              <p className="text-xs uppercase text-center text-black font-medium pb-3">
                Forest Hill International School
              </p>
              <div className="flex mx-5 gap-2">
                <div className="flex mx-5 justify-between gap-2 flex-row ">
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

          <div className="flex items-center gap-6">
            <div className="hidden md:flex flex-col xl:flex-row lg:flex-col gap-6 text-black">
              <div className="flex items-center whitespace-nowrap">
                <PhoneFilled />
                <p className="px-3">(+855) 17 388 884</p>
              </div>
              <div className="flex items-center whitespace-nowrap">
                <MailFilled />
                <p className="ps-3">infor@foresthillschool.edu.kh</p>
              </div>
            </div>

            <div className="hidden md:block me-5">
              <Dropdown menu={{ items }}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <Image src="/uk-flag.svg" alt="" width={30} height={30} />
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>

      <Affix offsetTop={0}>
        <Header
          style={{
            backgroundColor: "#570614ff",
            padding: 0,
          }}
        >
          <div className=" hidden sm:block">
            <div className="!flex !justify-center">
              <Header
                className="mx-0 md:mx-0 xl:mx-35"
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
                  expandIcon={({ isOpen }) => (
                    <DownOutlined style={{ fontSize: 0 }} />
                  )}
                  items={item}
                  style={{
                    flex: 1,
                    minWidth: 0,
                    fontSize: 15,
                    gap: 0,
                  }}
                />
              </Header>
            </div>
          </div>

          <div className="flex justify-end pe-5 block md:hidden text-2xl pt-4">
            <button onClick={showDrawer}> {<MenuOutlined />} </button>
          </div>

          <Drawer
            className="bg-white selected:text-red-900"
            onClose={onCloseDrawer}
            open={drawerVisible}
            placement="right"
          >
            <Menu
              expandIcon={({ isOpen }) => (
                <DownOutlined style={{ fontSize: 0 }} />
              )}
              mode="inline"
              items={item}
            />
          </Drawer>
        </Header>
      </Affix>
    </Layout>
  );
};

export default Navbar;
