import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { IconPlus } from "@tabler/icons-react";
import ProtectedLayout from "../ProtectedLayout";
import MenuData from "@/components/admin/data-table/menu-table";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import NavbarForm from "@/components/admin/form/menu-form";

export const dynamic = "force-dynamic";

export default async function MenuPage() {
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
          <div className="flex flex-1 flex-co mx-5">
            <div className="@container/main flex flex-1 flex-col gap-2">
              <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 p-5">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-bold">Menu Management</h1>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        className="flex items-center gap-2"
                        variant="outline"
                        size="sm"
                      >
                        <IconPlus />
                        <span className="hidden lg:inline">Add Menu</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent
                      preventCloseOnInteractOutside={true}
                      className="w-[90vw] sm:w-[50vw] h-[80vh] !max-w-none overflow-auto"
                    >
                      <DialogTitle>Create Menu</DialogTitle>
                      <NavbarForm />
                    </DialogContent>
                  </Dialog>
                </div>
                <MenuData />
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </ProtectedLayout>
  );
}
