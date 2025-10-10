import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import ProtectedLayout from "../../ProtectedLayout";
import SliderForm from "@/components/dashboard/form/slider-form";
import { createSlider } from "@/app/action/sliderAction";

export default function AddSliderPage() {
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
                <h1 className="text-2xl font-bold">Add a New Slider</h1>
                <SliderForm createSlider={createSlider} />
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </ProtectedLayout>
  );
}
