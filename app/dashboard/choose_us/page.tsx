import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import TableData from "@/components/dashboard/data-table/event-data";
import { Button } from "@/components/ui/button";
import { IconPlus } from "@tabler/icons-react";
import Link from "next/link";
import ProtectedLayout from "../ProtectedLayout";
import WhyUsData from "@/components/dashboard/data-table/why-us-data";

export const dynamic = "force-dynamic";

export default async function Page() {
  return (
    <ProtectedLayout>
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
                <h1 className="text-2xl font-bold">Why Choose Us Management</h1>
                <Link prefetch={true} href="/dashboard/choose_us/add_choose_us">
                  <Button variant="outline" size="sm">
                    <IconPlus />
                    <span className="hidden lg:inline">Add Card</span>
                  </Button>
                </Link>
                <WhyUsData />
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </ProtectedLayout>
  );
}
