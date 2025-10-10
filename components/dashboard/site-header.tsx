"use client";

import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { usePathname } from "next/navigation";
import React from "react";

export function SiteHeader() {
  const pathname = usePathname();

  // Remove leading/trailing slashes, split into segments
  const segments = pathname
    .replace(/^\/+|\/+$/g, "")
    .split("/")
    .filter(Boolean);

  // Map segment to readable label (customize as needed)
  const segmentLabels: Record<string, string> = {
    dashboard: "Dashboard",
    users: "Users",
    adduser: "Add User",
    add: "Add Card",
    testimonial: "Testimonials",
    signup: "Sign Up",
    event: "Events",
    gallery: "Gallery",
    aboutus: "About Us",
    // Add more mappings as needed
  };

  // Build breadcrumb items
  const breadcrumbItems = segments.map((segment, idx) => {
    const href = "/" + segments.slice(0, idx + 1).join("/");
    const isLast = idx === segments.length - 1;
    const label =
      segmentLabels[segment] ||
      segment.charAt(0).toUpperCase() + segment.slice(1);
    return (
      <React.Fragment key={href}>
        <BreadcrumbItem>
          {isLast ? (
            <BreadcrumbPage>{label}</BreadcrumbPage>
          ) : (
            <BreadcrumbLink href={href}>{label}</BreadcrumbLink>
          )}
        </BreadcrumbItem>
        {!isLast && <BreadcrumbSeparator />}
      </React.Fragment>
    );
  });

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbItems.length > 0 ? (
              breadcrumbItems
            ) : (
              <BreadcrumbItem>
                <BreadcrumbPage>Home</BreadcrumbPage>
              </BreadcrumbItem>
            )}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
}
