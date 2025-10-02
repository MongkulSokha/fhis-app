import { deleteCard, getCardData } from "@/app/action/cardDataAction";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import React from "react";
import DeleteButton from "../ui/delete-card-button";
import { getTestimonialData } from "@/app/action/testimonialAction";
import DeleteTestimonialButton from "../ui/delete-testimonial-button";

const TestimonialData = async () => {
  const testmonials = await getTestimonialData();

  return (
    <Table className="">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Img</TableHead>
          <TableHead>Postiion</TableHead>
          <TableHead>Text</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {testmonials.map((testmonial, idx) => (
          <TableRow key={idx}>
            <TableCell className="font-medium">{testmonial.name}</TableCell>
            <TableCell>
              <img className="h-20" src={testmonial.img} alt="" />
            </TableCell>
            <TableCell>{testmonial.position}</TableCell>
            <TableCell>
              <div className="w-20 line-clamp-1">{testmonial.text}</div>
            </TableCell>
            <TableCell>
              <DeleteTestimonialButton testimonialId={testmonial.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TestimonialData;
