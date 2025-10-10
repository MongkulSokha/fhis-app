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
    { title: "Menu", url: "/dashboard/menu", icon: IconMenu },
    { title: "Events", url: "/dashboard/events", icon: IconCalendarEvent },
    {
      title: "Testimonial",
      url: "/dashboard/testimonial",
      icon: IconUserShare,
    },
    { title: "Career", url: "/dashboard/career", icon: IconBriefcase },
    { title: "Newsletter", url: "/dashboard/newsletter", icon: IconMail },
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
          url: "/dashboard/slider",
          icon: IconSlideshow,
        },
        {
          title: "Popup",
          url: "/dashboard/popup",
          icon: IconUpload,
        },
        {
          title: "Curriculum Carousel",
          url: "/dashboard/curriculum",
          icon: IconSchool,
        },
        {
          title: "School Management",
          url: "/dashboard/management",
          icon: IconUsers,
        },
        {
          title: "Why Choose Us",
          url: "/dashboard/choose_us",
          icon: IconStar,
        },
        {
          title: "Counter",
          url: "/dashboard/counter",
          icon: IconNumber,
        },
        {
          title: "Gallery Category",
          url: "/dashboard/category",
          icon: IconCategory,
        },
        {
          title: "Gallery",
          url: "/dashboard/gallery",
          icon: IconBrandAppgallery,
        },
        {
          title: "Users",
          url: "/dashboard/users",
          icon: IconUserCircle,
        },
        {
          title: "Configuration",
          url: "/dashboard/configuration",
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
              <Link href="/">
                <img className="!size-5" src="/fhis-logo-white.svg" alt="" />
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
