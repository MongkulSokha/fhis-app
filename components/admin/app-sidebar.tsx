"use client";

import * as React from "react";
import Link from "next/link";
import {
  IconBrandAppgallery,
  IconBriefcase,
  IconCalendarEvent,
  IconCategory,
  IconDashboard,
  IconMail,
  IconMenu,
  IconNumber,
  IconSchool,
  IconSettings,
  IconSettings2,
  IconSlideshow,
  IconStar,
  IconUpload,
  IconUserCircle,
  IconUsers,
  IconUserShare,
} from "@tabler/icons-react";
import { NavMain } from "@/components/admin/nav-main";
import { NavSecondary } from "@/components/admin/nav-secondary";
import { NavUser } from "@/components/admin/nav-user";
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
    { title: "Dashboard", url: "/admin", icon: IconDashboard },
    { title: "Menu", url: "/admin/menu", icon: IconMenu },
    { title: "Events", url: "/admin/events", icon: IconCalendarEvent },
    {
      title: "Event Category",
      url: "/admin/category",
      icon: IconCategory,
    },
    {
      title: "Testimonial",
      url: "/admin/testimonial",
      icon: IconUserShare,
    },
    { title: "Career", url: "/admin/career", icon: IconBriefcase },
    { title: "Newsletter", url: "/admin/newsletter", icon: IconMail },
  ];

  const navSecondary = [
    {
      title: "Setting",
      url: "#",
      icon: IconSettings,
      isActive: true,
      items: [
        {
          title: "Slider",
          url: "/admin/slider",
          icon: IconSlideshow,
        },
        {
          title: "Popup",
          url: "/admin/popup",
          icon: IconUpload,
        },
        {
          title: "Curriculum Carousel",
          url: "/admin/curriculum",
          icon: IconSchool,
        },
        {
          title: "School Management",
          url: "/admin/management",
          icon: IconUsers,
        },
        {
          title: "Why Choose Us",
          url: "/admin/choose_us",
          icon: IconStar,
        },
        {
          title: "Counter",
          url: "/admin/counter",
          icon: IconNumber,
        },

        {
          title: "Users",
          url: "/admin/users",
          icon: IconUserCircle,
        },
        {
          title: "Configuration",
          url: "/admin/configuration",
          icon: IconSettings2,
        },
      ],
    },
  ];

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5 "
            >
              <Link className="flex flex-col h-42" href="/">
                <img className="!size-30" src="/fhis-logo-white.svg" alt="" />
                <span className="text-base font-medium">
                  Forest Hill International School
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={navMain} />
        <NavSecondary items={navSecondary} />
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
