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
import { createCard } from "@/app/action/cardDataAction";
import GalleryData from "@/components/dashboard/data-table/gallery-data";
import GalleryForm from "@/components/dashboard/form/gallery-form";

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
                  <h1 className="text-2xl font-bold">Gallery Management</h1>
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button
                        className="flex items-center gap-2"
                        variant="outline"
                        size="sm"
                      >
                        <IconPlus />
                        <span className="hidden lg:inline">Add Gallery</span>
                      </Button>
                    </SheetTrigger>
                    <SheetContent>
                      <SheetTitle />
                      <div className="flex flex-1 flex-col">
                        <div className="@container/main flex flex-1 flex-col gap-2">
                          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 p-5">
                            <h1 className="text-2xl font-bold">Add Photo</h1>
                            <GalleryForm createGallery={createCard} />
                          </div>
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
                <GalleryData />
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </ProtectedLayout>
  );
}
