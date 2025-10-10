"use client";

import React, { useEffect, useState } from "react";
import { Affix, Drawer, Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import Link from "next/link";

const { Header } = Layout;

const buildMenuItems = (items: any[]): MenuProps["items"] =>
  items.map((item) => {
    const hasChildren = item.children && item.children.length > 0;
    const label = hasChildren ? (
      <span>
        {item.label} <DownOutlined style={{ fontSize: 10, marginLeft: 4 }} />
      </span>
    ) : (
      <Link href={item.href || "#"}>{item.label}</Link>
    );

    return {
      key: item.label.toLowerCase().replace(/\s+/g, "-"),
      label,
      children: hasChildren ? buildMenuItems(item.children) : undefined,
    };
  });

const Navbar: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuProps["items"]>([]);

  const [selectedKeys, setSelectedKeys] = React.useState(["3"]);

  const [drawerVisible, setDrawerVisible] = useState(false);

  useEffect(() => {
    fetch("/api/navbar")
      .then((res) => res.json())
      .then((data) => setMenuItems(buildMenuItems(data)))
      .catch(console.error);
  }, []);

  return (
    <Layout>
      <Affix offsetTop={0}>
        <Header
          style={{
            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#691b32",
            padding: 0,
          }}
        >
          <div className=" hidden sm:block">
            <Header
              className="mx-0 md:mx-0 xl:mx-35"
              style={{
                backgroundColor: "#691b32",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Menu
                className="uppercase font-medium"
                theme="light"
                mode="horizontal"
                selectedKeys={selectedKeys}
                expandIcon={({ isOpen }) => (
                  <DownOutlined style={{ fontSize: 0 }} />
                )}
                items={menuItems}
                style={{
                  flex: 1,
                  minWidth: 0,
                  fontSize: 14,
                  gap: 0,
                }}
              />
            </Header>
          </div>

          <div className="flex justify-end pe-5 md:hidden text-2xl pt-4">
            <button onClick={() => setDrawerVisible(true)}>
              {" "}
              {<MenuOutlined />}{" "}
            </button>
          </div>

          <div className="block md:hidden">
            <Drawer
              width={320}
              onClose={() => setDrawerVisible(false)}
              open={drawerVisible}
              placement="right"
            >
              <Menu
                className="!bg-[#691b32]"
                theme="light"
                expandIcon={({ isOpen }) => (
                  <DownOutlined style={{ fontSize: 0 }} />
                )}
                mode="inline"
                selectedKeys={selectedKeys}
                items={menuItems}
              />
            </Drawer>
          </div>
        </Header>
      </Affix>
    </Layout>
  );
};

export default Navbar;
