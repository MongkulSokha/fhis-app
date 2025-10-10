"use client";

import * as React from "react";
import { type Icon } from "@tabler/icons-react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { Collapsible } from "../ui/collapsible";
import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function NavSecondary({
  items,
  ...props
}: {
  items: {
    title: string;
    url: string;
    icon?: Icon;
    isActive?: boolean;
    items?: { title: string; url: string; icon?: Icon }[];
  }[];
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  const pathname = usePathname();
  const { state, isMobile } = useSidebar();

  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => {
            // Check if the sidebar is collapsed and not in mobile
            if (state === "collapsed" && !isMobile && item.items?.length) {
              return (
                <SidebarMenuItem key={item.title}>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <SidebarMenuButton tooltip={item.title}>
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent side="right">
                      {item.items.map((SubItem) => {
                        const isActives = pathname === SubItem.url;
                        return (
                          <DropdownMenuItem
                            key={SubItem.title}
                            asChild
                            className={
                              isActives
                                ? "font-bold text-sidebar-accent-foreground"
                                : ""
                            }
                          >
                            <Link
                              href={SubItem.url}
                              prefetch={true}
                              className="flex items-center gap-2"
                            >
                              {SubItem.icon && (
                                <SubItem.icon size={16} strokeWidth={1.8} />
                              )}
                              <span>{SubItem.title}</span>
                            </Link>
                          </DropdownMenuItem>
                        );
                      })}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </SidebarMenuItem>
              );
            }

            // Default (expanded or mobile): keep collapsible behaviour
            return (
              <Collapsible
                key={item.title}
                asChild
                defaultOpen={!item.isActive}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.title}>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map((SubItem) => {
                        const isActives = pathname === SubItem.url;
                        return (
                          <SidebarMenuSubItem key={SubItem.title}>
                            <SidebarMenuSubButton
                              asChild
                              className={
                                isActives
                                  ? "bg-white text-[#570614ff] font-bold cursor-pointer !hover:text-sidebar-primary"
                                  : "hover:bg-background hover:text-sidebar-primary cursor-pointer"
                              }
                            >
                              <Link
                                prefetch={true}
                                href={SubItem.url}
                                className="flex items-center gap-2"
                              >
                                <span className="flex flex-rows items-center gap-2">
                                  {SubItem.icon && (
                                    <SubItem.icon size={16} strokeWidth={1.8} />
                                  )}
                                  {SubItem.title}
                                </span>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        );
                      })}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
