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

const ITEMS_PER_PAGE = 7;

const GalleryData = () => {
  const [cards, setCards] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCardData();
      setCards(Array.isArray(data) ? data : []);
    };
    fetchData();
  }, []);

  const handleToggle = async (id: number | string, value: boolean) => {
    await updatePopupVisibility(id, value);
  };

  return (
    <div className="space-y-4">
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Published</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cards.map((card, idx) => (
            <TableRow key={idx}>
              <TableCell>
                <img className="h-40" src={card.img} alt="" />
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
    </div>
  );
};

export default GalleryData;
