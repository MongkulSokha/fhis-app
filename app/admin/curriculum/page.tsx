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
import WhyUsData from "@/components/admin/data-table/why-us-data";
import WhyUsForm from "@/components/admin/form/why-use-form";
import { createCard } from "@/app/action/eventAction";
import SchoolManagementData from "@/components/admin/data-table/school-data";
import SchoolManagementForm from "@/components/admin/form/school-form";
import CurriculumData from "@/components/admin/data-table/curriculum-data";
import CurriculumForm from "@/components/admin/form/curriculum-form";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
                  <h1 className="text-2xl font-bold">Curriculum Management</h1>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        className="flex items-center gap-2"
                        variant="outline"
                        size="sm"
                      >
                        <IconPlus />
                        <span className="hidden lg:inline">Add Curriculum</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="w-[90vw] sm:w-[25vw] !max-w-none overflow-auto">
                      <DialogTitle />
                      <div className="flex flex-1 flex-col">
                        <div className="@container/main flex flex-1 flex-col gap-2">
                          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 p-5">
                            <h1 className="text-2xl font-bold">
                              Add Curriculum
                            </h1>
                            <CurriculumForm createCurriculum={createCard} />
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                <CurriculumData />
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </ProtectedLayout>
  );
}
