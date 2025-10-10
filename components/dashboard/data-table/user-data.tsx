"use client";

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
import { deleteUser, getUserData } from "@/app/action/userAction";
import ConfirmDeleteButton from "../../ui/delete-button";

const UserData = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserData();
      setUsers(Array.isArray(data) ? data : []);
    };
    fetchData();
  }, []);

  return (
    <Table className="">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Email</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user, idx) => (
          <TableRow key={idx}>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>
              <ConfirmDeleteButton
                onConfirm={async () => {
                  try {
                    await deleteUser(user.id); // wait for deletion to complete
                    // update local state by removing deleted user
                    setUsers((prev) => prev.filter((u) => u.id !== user.id));
                  } catch (error) {
                    console.error("Failed to delete user:", error);
                  }
                }}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UserData;
