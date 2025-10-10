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
import { Textarea } from "../../ui/textarea";
import { Label } from "@/components/ui/label";
import { Image } from "antd";
import QuillEditor from "@/components/ui/quill-editor";
import CancelButton from "@/components/ui/cancel-button";

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
        <Label className="pb-3" htmlFor="picture">
          Label
        </Label>
        <Input
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          required
        />
      </div>

      <div>
        <Label className="pb-3" htmlFor="picture">
          Href / Alias
        </Label>
        <Input
          value={href}
          onChange={(e) => setHref(e.target.value)}
          required
        />
      </div>

      <div>
        <Label className="pb-3" htmlFor="picture">
          Parent Menu
        </Label>
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

      <Label htmlFor="picture">Content</Label>
      <QuillEditor />

      <Label htmlFor="picture">Feature Image</Label>
      <Image
        className="pb-2 rounded-2xl object-cover"
        preview={false}
        height={300}
        src="/img1.jpg"
      />
      <Input
        id="picture"
        type="file"
        name="img"
        accept="image/*"
        className="border w-full"
      />
      <Label htmlFor="title">Title</Label>
      <Input
        type="text"
        name="title"
        placeholder="Title"
        className="border w-full"
      />

      <div>
        <Label className="pb-3" htmlFor="picture">
          Order
        </Label>
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

      <Button
        type="submit"
        className="hover:bg-blue-800 cursor-pointer bg-blue-500 text-white px-4 py-2 rounded"
      >
        Create
      </Button>
      <CancelButton />
    </form>
  );
}
