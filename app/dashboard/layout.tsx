import { AntdRegistry } from "@ant-design/nextjs-registry";
import "@ant-design/v5-patch-for-react-19";
import theme from "@/theme/themeConfig";
import { ConfigProvider } from "antd";
import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { SiteHeader } from "@/components/dashboard/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import TableData from "@/components/dashboard/table-data";
import { Button } from "@/components/ui/button";
import { IconPlus } from "@tabler/icons-react";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <SidebarProvider
        style={
          {
            "--sidebar-width": "calc(var(--spacing) * 72)",
            "--header-height": "calc(var(--spacing) * 12)",
          } as React.CSSProperties
        }
      >
        <AppSidebar variant="inset" />
        <SidebarInset>
          <SiteHeader />
          <ConfigProvider theme={theme}>
            <AntdRegistry>{children}</AntdRegistry>
          </ConfigProvider>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
