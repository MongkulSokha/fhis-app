"use client";

import { getCardData } from "@/app/action/cardDataAction";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import React, { useEffect, useState } from "react";
import DeleteButton from "../ui/delete-card-button";
import { Button } from "../ui/button";

const ITEMS_PER_PAGE = 7;

const TableData = () => {
  const [cards, setCards] = useState<any[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCardData();
      setCards(data);
    };
    fetchData();
  }, []);

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedCards = cards.slice(startIndex, endIndex);

  const totalPages = Math.ceil(cards.length / ITEMS_PER_PAGE);

  return (
    <div className="space-y-4">
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
          {paginatedCards.map((card, idx) => (
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
      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
        >
          Previous
        </Button>

        <span>
          Page {page} of {totalPages}
        </span>

        <Button
          variant="outline"
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default TableData;
