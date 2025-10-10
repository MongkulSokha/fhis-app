"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Image } from "antd";

import React, { useEffect, useState } from "react";
import { getUserData } from "@/app/action/userAction";
import { Button } from "../../ui/button";
import PublishedCheckbox from "../../ui/published-checkbox";
import { updatePopupVisibility } from "@/app/action/popupAction";

const WhyUsData = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserData();
      setUsers(Array.isArray(data) ? data : []);
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
          <TableHead>Icon</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Published</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user, idx) => (
          <TableRow key={idx}>
            <TableCell>Books & Library</TableCell>
            <TableCell>
              <img src="/book.svg" alt="" />
            </TableCell>
            <TableCell>
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn't anything bad hidden in the middle of text
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
              <Button className="bg-red-600 text-white px-4 py-2 rounded h-5">
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default WhyUsData;
