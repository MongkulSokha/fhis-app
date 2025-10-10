"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { addNavbarItem, getNavbarItems } from "@/app/action/navbarAction";
import Link from "next/link";

interface NavbarItem {
  id: number;
  label: string;
  parent_id: number | null;
}

export default function NavbarForm() {
  const [label, setLabel] = useState("");
  const [href, setHref] = useState("");
  const [parentId, setParentId] = useState<number | null>(null);
  const [order, setOrder] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [menuItems, setMenuItems] = useState<NavbarItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getNavbarItems();
      const flatItems: NavbarItem[] = [];
      const flatten = (nodes: any[]) => {
        nodes.forEach((n) => {
          flatItems.push({ id: n.id, label: n.label, parent_id: n.parent_id });
          if (n.children?.length) flatten(n.children);
        });
      };
      flatten(data);
      setMenuItems(flatItems);
    };
    fetchData();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await addNavbarItem({
      label,
      href,
      parent_id: parentId,
      order,
      is_visible: isVisible,
    });

    setLabel("");
    setHref("");
    setParentId(null);
    setOrder(null);
    setIsVisible(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-md">
      <div>
        <label className="block mb-1 font-medium">Label</label>
        <Input
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Href / Alias</label>
        <Input
          value={href}
          onChange={(e) => setHref(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Parent Menu</label>
        <Select
          onValueChange={(val) =>
            setParentId(val === "null" ? null : Number(val))
          }
          value={parentId !== null ? parentId.toString() : "null"}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select parent menu (optional)" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="null">None</SelectItem>{" "}
            {menuItems.map((item) => (
              <SelectItem key={item.id} value={item.id.toString()}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block mb-1 font-medium">Order</label>
        <Input
          type="number"
          value={order ?? ""}
          onChange={(e) =>
            setOrder(e.target.value ? Number(e.target.value) : null)
          }
        />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          checked={isVisible}
          onCheckedChange={(val) => setIsVisible(Boolean(val))}
        />
        <span>Published</span>
      </div>

      <Button type="submit">Add Menu Item</Button>
      <Link href="/dashboard/menu">
        <Button className="bg-red-600 text-white px-4 py-2 rounded-lg mx-2">
          Cancel
        </Button>
      </Link>
    </form>
  );
}
