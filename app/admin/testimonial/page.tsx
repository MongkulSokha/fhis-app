import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { IconPlus } from "@tabler/icons-react";
import Link from "next/link";
import ProtectedLayout from "../ProtectedLayout";
import TestimonialData from "@/components/admin/data-table/testimonial-data";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { createCard } from "@/app/action/eventAction";
import CareerForm from "@/components/admin/form/career-form";
import TestimonialForm from "@/components/admin/form/testimonial-form";
import { createTestimonial } from "@/app/action/testimonialAction";

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
                  <h1 className="text-2xl font-bold">Testimonials</h1>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        className="flex items-center gap-2"
                        variant="outline"
                        size="sm"
                      >
                        <IconPlus />
                        <span className="hidden lg:inline">
                          Add Testimonial
                        </span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="w-[90vw] sm:w-[50vw] !max-w-none overflow-auto">
                      <DialogTitle>Create Testimonial</DialogTitle>
                      <TestimonialForm createTestimonial={createTestimonial} />
                    </DialogContent>
                  </Dialog>
                </div>
                <TestimonialData />
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </ProtectedLayout>
  );
}
