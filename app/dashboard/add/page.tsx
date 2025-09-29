import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { createCard } from "@/app/action/cardDataAction";
import CardForm from "@/components/dashboard/card-form";

export default function AddCardPage() {
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
              <h1 className="text-2xl font-bold">Add a New Card</h1>
              <CardForm createCard={createCard} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
