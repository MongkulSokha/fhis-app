// components/dashboard/ProtectedLayout.tsx
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { getServerSessionSafe } from "@/lib/getServerSession";
import { redirect } from "next/navigation";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

export default async function ProtectedLayout({
  children,
}: ProtectedLayoutProps) {
  const session = await getServerSessionSafe();

  // Redirect to sign in if not logged in
  if (!session) redirect("/signin");

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
}
