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
              <Link href={item.url} className="flex items-center gap-2r">
                <SidebarMenuButton
                  size={"lg"}
                  tooltip={item.title}
                  className={
                    isActive
                      ? "bg-[#570614ff]/20 text-[#570614ff] font-bold cursor-pointer"
                      : "hover:bg-muted hover:text-foreground cursor-pointer"
                  }
                >
                  <div>{item.icon && <item.icon />}</div>
                  <span className="text-base">{item.title}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
