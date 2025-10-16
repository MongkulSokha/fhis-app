"use client";

import { deleteCard, getCardData } from "@/app/action/eventAction";
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
import { Button } from "../../ui/button";
import ConfirmDeleteButton from "../../ui/delete-button";
import PublishedCheckbox from "../../ui/published-checkbox";
import { updatePopupVisibility } from "@/app/action/popupAction";
import ActionDropdown from "@/components/ui/action-dropdown";

const ITEMS_PER_PAGE = 10;

const TableData = () => {
  const [cards, setCards] = useState<any[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCardData();
      setCards(Array.isArray(data) ? data : []);
    };
    fetchData();
  }, []);

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedCards = cards.slice(startIndex, endIndex);

  const totalPages = Math.ceil(cards.length / ITEMS_PER_PAGE);

  const handleToggle = async (id: number | string, value: boolean) => {
    await updatePopupVisibility(id, value);
  };

  return (
    <div className="space-y-4">
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] ">Title</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Published</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedCards.map((card, idx) => (
            <TableRow key={idx}>
              <TableCell className="font-medium">
                <p className="line-clamp-[1] w-120">{card.title}</p>
              </TableCell>
              <TableCell>
                <img
                  className="w-20"
                  draggable={false}
                  alt="example"
                  src={`../${card.img}`}
                />
              </TableCell>
              <TableCell>{card.category_en || "-"}</TableCell>
              <TableCell>{`${card.start_date} - ${card.end_date}`}</TableCell>
              <TableCell>{card.time_event}</TableCell>
              <TableCell>
                <p className="line-clamp-[1]">{card.location}</p>
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
                    const res = await deleteCard(card.id);

                    setCards((prev) => prev.filter((u) => u.id !== card.id));
                  }}
                /> */}

                <ActionDropdown />
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
