"use client";

import * as React from "react";
import Link from "next/link";
import {
  IconDashboard,
  IconSearch,
  IconSettings,
  IconUserCircle,
  IconUserShare,
} from "@tabler/icons-react";
import { NavMain } from "@/components/dashboard/nav-main";
import { NavSecondary } from "@/components/dashboard/nav-secondary";
import { NavUser } from "@/components/dashboard/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [user, setUser] = React.useState<any>(null);

  React.useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch("/api/users");
        const data = await res.json();

        setUser(data[0]);
      } catch (err) {
        console.error("Failed to load user", err);
      }
    }
    fetchUser();
  }, []);

  const navMain = [
    { title: "Dashboard", url: "/dashboard", icon: IconDashboard },
    { title: "Users", url: "/dashboard/users", icon: IconUserCircle },
    {
      title: "Testimonial",
      url: "/dashboard/testimonial",
      icon: IconUserShare,
    },
  ];

  const navSecondary = [
    { title: "Settings", url: "", icon: IconSettings },
    { title: "Search", url: "", icon: IconSearch },
  ];

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link href="/">
                <img className="!size-5" src="/fhis-logo.svg" alt="" />
                <span className="text-base font-semibold">
                  Forest Hill International School
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={navMain} />
        <NavSecondary items={navSecondary} className="mt-auto" />
      </SidebarContent>

      <SidebarFooter>
        {user ? (
          <NavUser user={user} />
        ) : (
          <p className="p-4 text-sm text-gray-500">Loading user...</p>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
