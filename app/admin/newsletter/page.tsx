import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { IconFileExport, IconPlus } from "@tabler/icons-react";
import ProtectedLayout from "../ProtectedLayout";
import NewsletterData from "@/components/admin/data-table/newsletter-data";
import { Input } from "antd";
import { Label } from "@radix-ui/react-label";

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
          <div className="flex flex-1 flex-col mx-5">
            <div className="@container/main flex flex-1 flex-col gap-2">
              <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 p-5">
                <h1 className="text-2xl font-bold">Newsletter</h1>
                <div className="flex flex-col sm:flex-row gap-3 items-center w-full sm:w-fit shadow-[0_1px_4px_-1px_rgba(0,0,0,0.5)] p-2 px-4 rounded-md text-sm">
                  <div className="flex gap-4 items-center">
                    <Label htmlFor="start">Start Date</Label>
                    <Input
                      type="date"
                      name="date"
                      required
                      className="!w-50 !bg-white !border !border-gray-300 !text-gray-500 !text-sm"
                    />
                  </div>
                  <div className="flex gap-4 items-center">
                    <Label htmlFor="start">End Date</Label>
                    <Input
                      type="date"
                      name="date"
                      required
                      className="!w-50 !bg-white !border !border-gray-300 !text-gray-500 !text-sm"
                    />
                  </div>
                  <Button variant="outline" size="sm">
                    <IconFileExport />
                    <span className="hidden lg:inline">Export Excel</span>
                  </Button>
                </div>
                <NewsletterData />
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </ProtectedLayout>
  );
}
