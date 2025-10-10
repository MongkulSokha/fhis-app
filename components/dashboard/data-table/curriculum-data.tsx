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
import { getUserData } from "@/app/action/userAction";
import { Button } from "../../ui/button";
import { updatePopupVisibility } from "@/app/action/popupAction";
import PublishedCheckbox from "../../ui/published-checkbox";
import ActionDropdown from "@/components/ui/action-dropdown";

const CurriculumData = () => {
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
          <TableHead>Icon</TableHead>
          <TableHead>Published</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user, idx) => (
          <TableRow key={idx}>
            <TableCell>HSK</TableCell>
            <TableCell>
              {" "}
              <img className="h-20" src="/hsk.jpg" alt="" />
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
  );
};

export default CurriculumData;
