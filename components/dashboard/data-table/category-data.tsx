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
import ActionDropdown from "@/components/ui/action-dropdown";

const CategoryData = () => {
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
          <TableHead>Name</TableHead>
          <TableHead>Published</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user, idx) => (
          <TableRow key={idx}>
            <TableCell>School Events</TableCell>
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
  );
};

export default CategoryData;
