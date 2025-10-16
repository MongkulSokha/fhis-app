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
import ActionDropdown from "@/components/ui/action-dropdown";
import useSWR from "swr";

const fetcher = async () => await getUserData();

const UserData = () => {
  const { data: users, mutate } = useSWR("users", fetcher);

  React.useEffect(() => {
    const handler = () => {
      // revalidate SWR cache when users change
      mutate();
    };
    if (typeof window !== "undefined") {
      window.addEventListener("users:refresh", handler);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("users:refresh", handler);
      }
    };
  }, [mutate]);

  return (
    <Table className="">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Email</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {(users ?? []).map((user, idx) => (
          <TableRow key={idx}>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>
              <ActionDropdown
                onConfirmDelete={async () => {
                  const res = await deleteUser(user.id);
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

export default UserData;
