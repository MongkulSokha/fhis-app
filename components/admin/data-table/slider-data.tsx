"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import React, { useEffect, useState } from "react";
import { deleteSlider, getSliderData } from "@/app/action/sliderAction";
import ConfirmDeleteButton from "../../ui/delete-button";
import PublishedCheckbox from "../../ui/published-checkbox";
import { updatePopupVisibility } from "@/app/action/popupAction";
import ActionDropdown from "@/components/ui/action-dropdown";

const SliderData = () => {
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
          <TableHead className="w-[100px]">Title</TableHead>
          <TableHead>Image</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Published</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sliders.map((slider, idx) => (
          <TableRow key={idx}>
            <TableCell className="font-medium">{slider.title}</TableCell>
            <TableCell>
              <img className="h-20 w-60" src={slider.img} alt="" />
            </TableCell>

            <TableCell>
              <div className="w-70 line-clamp-1">{slider.text}</div>
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
};

export default SliderData;
