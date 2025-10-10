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
import { Button } from "../../ui/button";
import {
  deleteNavbarItem,
  getNavbarVisibleItems,
  updateNavbarVisibility,
} from "@/app/action/navbarAction";
import ConfirmDeleteButton from "../../ui/delete-button";
import PublishedCheckbox from "../../ui/published-checkbox";
import ActionDropdown from "@/components/ui/action-dropdown";

const ITEMS_PER_PAGE = 15;

const flattenMenuTree = (nodes: any[], parentLabel: string | null = null) => {
  let flat: any[] = [];
  nodes.forEach((node) => {
    flat.push({
      ...node,
      parentLabel,
    });
    if (node.children?.length) {
      flat = flat.concat(flattenMenuTree(node.children, node.label));
    }
  });
  return flat;
};

const MenuData = () => {
  const [cards, setCards] = useState<any[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getNavbarVisibleItems();
      if (Array.isArray(data)) {
        const flatData = flattenMenuTree(data);
        setCards(flatData);
      } else {
        setCards([]);
      }
    };
    fetchData();
  }, []);

  const handleToggle = async (id: number | string, value: boolean) => {
    await updateNavbarVisibility(id, value);
  };

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedCards = cards.slice(startIndex, endIndex);

  const totalPages = Math.ceil(cards.length / ITEMS_PER_PAGE);

  return (
    <div className="space-y-4">
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] ">Menu</TableHead>
            <TableHead>Alias</TableHead>
            <TableHead>Parent Menu</TableHead>
            <TableHead>Published</TableHead>
            <TableHead>Order</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {paginatedCards.map((card, idx) => (
            <TableRow
              key={idx}
              // className="odd:bg-white even:bg-gray-50"
            >
              <TableCell className="font-medium">
                <p className="line-clamp-[1]">{card.label}</p>
              </TableCell>
              <TableCell>
                <p className="line-clamp-[1]">{card.href}</p>
              </TableCell>
              <TableCell>{card.parentLabel || "-"}</TableCell>
              <TableCell>
                <PublishedCheckbox
                  id={card.id}
                  initialValue={card.is_visible}
                  onToggle={handleToggle}
                  label=""
                />
              </TableCell>
              <TableCell>
                <p className="line-clamp-[1]">{card.order}</p>
              </TableCell>
              <TableCell>
                {/* <ConfirmDeleteButton
                  onConfirm={async () => {
                    const res = await deleteNavbarItem(card.id);

                    setCards((prev) =>
                      prev.filter((item) => item.id !== card.id)
                    );
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

export default MenuData;
