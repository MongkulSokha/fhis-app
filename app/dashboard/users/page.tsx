import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { createCard } from "@/app/action/cardDataAction";
import CardForm from "@/components/dashboard/card-form";
import UserData from "@/components/dashboard/user-data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IconPlus } from "@tabler/icons-react";
import ProtectedLayout from "../ProtectedLayout";

export const dynamic = "force-dynamic";

export default function UserPage() {
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
                <h1 className="text-2xl font-bold">User Data</h1>
                <Link href="/dashboard/users/adduser">
                  <Button variant="outline" size="sm">
                    <IconPlus />
                    <span className="hidden lg:inline">Add User</span>
                  </Button>
                </Link>
                <UserData />
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </ProtectedLayout>
  );
}
