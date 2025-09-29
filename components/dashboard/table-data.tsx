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
import DeleteButton from "../delete-card-button";

const TableData = async () => {
  const cards = await getCardData();

  return (
    <Table className="">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Title</TableHead>
          <TableHead>Image</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Time</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cards.map((card, idx) => (
          <TableRow key={idx}>
            <TableCell className="font-medium">{card.title}</TableCell>
            <TableCell>
              <img className="h-20" src={card.img} alt="" />
            </TableCell>
            <TableCell>{card.date}</TableCell>
            <TableCell>{card.time}</TableCell>
            <TableCell>{card.location}</TableCell>
            <TableCell>
              <DeleteButton cardId={card.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableData;
