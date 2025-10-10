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
import {
  deleteTestimonial,
  getTestimonialData,
} from "@/app/action/testimonialAction";
import ConfirmDeleteButton from "../../ui/delete-button";
import PublishedCheckbox from "../../ui/published-checkbox";
import { updatePopupVisibility } from "@/app/action/popupAction";
import ActionDropdown from "@/components/ui/action-dropdown";

const TestimonialData = () => {
  const [testimonials, setTestimonials] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTestimonialData();
      setTestimonials(Array.isArray(data) ? data : []);
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
          <TableHead>Name</TableHead>
          <TableHead>Img</TableHead>
          <TableHead>Postiion</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Published</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {testimonials.map((testimonial) => (
          <TableRow key={testimonial.id}>
            <TableCell className="font-medium">{testimonial.name}</TableCell>
            <TableCell>
              <img className="h-20" src={testimonial.img} alt="" />
            </TableCell>
            <TableCell>{testimonial.position}</TableCell>
            <TableCell>
              <div className="line-clamp-1">{testimonial.text}</div>
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
                  await deleteTestimonial(testimonial.id);

                  setTestimonials((prev) =>
                    prev.filter((u) => u.id !== testimonial.id)
                  );
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

export default TestimonialData;
