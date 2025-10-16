// components/admin/CareerTable.tsx
"use client";

import React, { useEffect, useState } from "react";
import ConfirmDeleteButton from "@/components/ui/delete-button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { deleteSlider, getSliderData } from "@/app/action/sliderAction";
import PublishedCheckbox from "../../ui/published-checkbox";
import { updateNavbarVisibility } from "@/app/action/menuAction";
import ActionDropdown from "@/components/ui/action-dropdown";

export default function CounterTable() {
  const [sliders, setSliders] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSliderData();
      setSliders(Array.isArray(data) ? data : []);
    };
    fetchData();
  }, []);

  const handleToggle = async (id: number | string, value: boolean) => {
    await updateNavbarVisibility(id, value);
  };

  return (
    <Table className="">
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Icon</TableHead>
          <TableHead>Number</TableHead>
          <TableHead>Published</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sliders.map((slider, idx) => (
          <TableRow key={idx}>
            <TableCell className="font-medium">Students</TableCell>
            <TableCell>
              <img className="h-30 bg-gray-300" src="/students.svg" alt="" />
            </TableCell>
            <TableCell>
              <div className="line-clamp-1">1800+</div>
            </TableCell>
            <TableCell>
              <PublishedCheckbox
                id=""
                initialValue={true}
                onToggle={handleToggle}
                label=""
              />
            </TableCell>
            <TableCell>
              <ActionDropdown />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
