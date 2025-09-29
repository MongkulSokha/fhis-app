import type { Metadata } from "next";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "@ant-design/v5-patch-for-react-19";
import theme from "@/theme/themeConfig";
import { ConfigProvider } from "antd";

export const metadata: Metadata = {
  title: "Forest Hill International School",
  description:
    "Forest Hill International School was founded by Oknha Pech Bolen on the concept of 'one district, one school'.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ConfigProvider theme={theme}>
          <AntdRegistry>{children}</AntdRegistry>
        </ConfigProvider>
      </body>
    </html>
  );
}
