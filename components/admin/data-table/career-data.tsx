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
import { updatePopupVisibility } from "@/app/action/popupAction";
import ActionDropdown from "@/components/ui/action-dropdown";

type Carrer = {
  id: number;
  title: string;
  img: string;
  deadline: string;
  details: string;
};

export default function CareerTable() {
  const [sliders, setSliders] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSliderData();
      setSliders(Array.isArray(data) ? data : []);
    };
    fetchData();
  }, []);

  const handleToggle = async (id: number | string, value: boolean) => {
    await updatePopupVisibility(id, value);
  };

  return (
    <Table className="">
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Image</TableHead>
          <TableHead>Deadline</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Published</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sliders.map((slider, idx) => (
          <TableRow key={idx}>
            <TableCell className="font-medium">{slider.title}</TableCell>
            <TableCell>
              <img className="h-20" src={slider.img} alt="" />
            </TableCell>
            <TableCell>
              <div className="line-clamp-1">14 Feb, 2025</div>
            </TableCell>
            <TableCell>
              <div className="line-clamp-1">{slider.text}</div>
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
              {/* <ConfirmDeleteButton
                onConfirm={async () => {
                  const res = await deleteSlider(slider.id);

                  setSliders((prev) => prev.filter((u) => u.id !== slider.id));
                }}
              /> */}
              <ActionDropdown />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
