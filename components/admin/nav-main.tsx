"use client";

import { IconBoxPadding, type Icon } from "@tabler/icons-react";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: Icon;
  }[];
}) {
  const pathname = usePathname();
  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => {
          const isActive = pathname === item.url;
          return (
            <SidebarMenuItem key={item.title}>
              <Link
                prefetch={true}
                href={item.url}
                className="flex items-center gap-2r"
              >
                <SidebarMenuButton
                  tooltip={item.title}
                  className={
                    isActive
                      ? "bg-white text-[#570614ff] font-bold cursor-pointer hover:text-sidebar-primary"
                      : "hover:bg-background hover:text-sidebar-primary cursor-pointer"
                  }
                >
                  {item.icon && <item.icon />}
                  {item.title}
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
