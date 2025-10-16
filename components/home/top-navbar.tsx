"use client";

import Image from "next/image";
import React from "react";
import { Dropdown, Space } from "antd";
import type { MenuProps } from "antd";
import { PhoneFilled, MailFilled, DownOutlined } from "@ant-design/icons";
import Link from "next/link";

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

const TopNavbar: React.FC = () => {
  return (
    <div className="bg-white h-25 sm:h-30 flex px-6 md:px-15 xl:px-50">
      <div className="flex items-center justify-between  w-full">
        <div className="flex gap-0 lg:gap-20 items-center">
          <Link href="/">
            <img
              src="/fhis-logo.svg"
              alt="FHIS Logo"
              width={140}
              height={160}
            />
          </Link>
          <div className="flex-col">
            <p className="text-xs uppercase text-center text-black font-medium pb-3">
              Forest Hill International School
            </p>
            <div className="flex mx-5 gap-2">
              <div className="flex mx-1 justify-between gap-1 flex-row ">
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
            <div className="flex items-center whitespace-nowrap text-base">
              <PhoneFilled />
              <p className="px-3">(+855) 17 388 884</p>
            </div>
            <div className="flex items-center whitespace-nowrap text-base">
              <MailFilled />
              <p className="ps-3">infor@foresthillschool.edu.kh</p>
            </div>
          </div>

          <div className="hidden md:block me-5">
            <Dropdown menu={{ items }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <img src="/uk-flag.svg" alt="" width={30} />
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
