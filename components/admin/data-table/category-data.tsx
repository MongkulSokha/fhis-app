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
import PublishedCheckbox from "../../ui/published-checkbox";
import ActionDropdown from "@/components/ui/action-dropdown";
import {
  deleteCategoy,
  getCategoryData,
  updateCategoryVisibility,
} from "@/app/action/categoryAction";
import useSWR from "swr";

const fetcher = async () => await getCategoryData();

const CategoryData = () => {
  const { data: category, mutate } = useSWR("category", fetcher);

  const handleToggle = async (id: number | string, value: boolean) => {
    await updateCategoryVisibility(id, value);
  };

  return (
    <Table className="">
      <TableHeader>
        <TableRow>
          <TableHead>Name En</TableHead>
          <TableHead>Name Kh</TableHead>
          <TableHead>Name Ch</TableHead>
          <TableHead>UnPublished</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {(category ?? []).map((categories, idx) => (
          <TableRow key={idx}>
            <TableCell>{categories.category_en}</TableCell>
            <TableCell>{categories.cagegory_name}</TableCell>
            <TableCell>{categories.category_ch || "-"}</TableCell>
            <TableCell>
              <PublishedCheckbox
                id={categories.id}
                initialValue={categories.is_delete}
                onToggle={handleToggle}
                label=""
              />
            </TableCell>
            <TableCell>
              <ActionDropdown
                onConfirmDelete={async () => {
                  const res = await deleteCategoy(categories.id);
                  mutate();
                }}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CategoryData;
