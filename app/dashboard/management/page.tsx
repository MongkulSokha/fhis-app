import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { IconPlus } from "@tabler/icons-react";
import ProtectedLayout from "../ProtectedLayout";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import WhyUsData from "@/components/dashboard/data-table/why-us-data";
import WhyUsForm from "@/components/dashboard/form/why-use-form";
import { createCard } from "@/app/action/cardDataAction";
import SchoolManagementData from "@/components/dashboard/data-table/school-data";
import SchoolManagementForm from "@/components/dashboard/form/school-form";

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
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-bold">School Management</h1>
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button
                        className="flex items-center gap-2"
                        variant="outline"
                        size="sm"
                      >
                        <IconPlus />
                        <span className="hidden lg:inline">Add Profile</span>
                      </Button>
                    </SheetTrigger>
                    <SheetContent>
                      <SheetTitle />
                      <div className="flex flex-1 flex-col">
                        <div className="@container/main flex flex-1 flex-col gap-2">
                          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 p-5">
                            <h1 className="text-2xl font-bold">Add Profile</h1>
                            <SchoolManagementForm createProfile={createCard} />
                          </div>
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
                <SchoolManagementData />
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </ProtectedLayout>
  );
}
