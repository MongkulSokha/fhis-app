import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { DataTable } from "@/components/dashboard/data-table";
import { SiteHeader } from "@/components/dashboard/site-header";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/dashboard/ui/sidebar";
import { redirect } from "next/navigation";

import data from "./data.json";

export default async function Page() {
  // const session = await auth();

  // if!session?.user?.id) redirect(url:"/login");

  return (
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
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <DataTable data={data} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
function auth() {
  throw new Error("Function not implemented.");
}
