import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { IconPlus } from "@tabler/icons-react";
import Link from "next/link";
import ProtectedLayout from "../ProtectedLayout";
import SliderData from "@/components/dashboard/data-table/slider-data";

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
                <h1 className="text-2xl font-bold">Slider Management</h1>
                <Link prefetch={true} href="/dashboard/slider/addslider">
                  <Button variant="outline" size="sm">
                    <IconPlus />
                    <span className="hidden lg:inline">Add Slider</span>
                  </Button>
                </Link>
                <SliderData />
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </ProtectedLayout>
  );
}
