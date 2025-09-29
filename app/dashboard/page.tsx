import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { SiteHeader } from "@/components/dashboard/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { createCard, getCardData } from "../action/cardDataAction";
import TableData from "@/components/dashboard/table-data";
import { Button } from "@/components/ui/button";
import { IconPlus } from "@tabler/icons-react";
import Link from "next/link";

export default async function Page() {
  const cards = await getCardData();

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <SidebarInset>
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 p-5">
              <Link href="/dashboard/add">
                <Button variant="outline" size="sm">
                  <IconPlus />
                  <span className="hidden lg:inline">Add Card</span>
                </Button>
              </Link>
              <TableData />
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
