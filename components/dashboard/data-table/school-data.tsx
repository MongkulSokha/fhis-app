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
import { updatePopupVisibility } from "@/app/action/popupAction";
import PublishedCheckbox from "../../ui/published-checkbox";

const SchoolManagementData = () => {
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
          <TableHead>Full Name</TableHead>
          <TableHead>Profile Photo</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Published</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user, idx) => (
          <TableRow key={idx}>
            <TableCell>Mrs. Swe Swe Aung</TableCell>
            <TableCell>
              <div className="w-25 h-25 rounded-full overflow-hidden">
                <Image
                  preview={false}
                  src="/profile.svg"
                  alt="Mrs. Swe Swe Aung"
                  width={110}
                  height={140}
                  className="object-cover w-full h-full"
                />
              </div>
            </TableCell>
            <TableCell>School Principal</TableCell>
            <TableCell>principal.fhis@foresthillschoool.edu.kh</TableCell>
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

export default SchoolManagementData;
