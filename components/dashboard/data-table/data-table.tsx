"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Column<T> {
  key: keyof T | string; // allows both object keys and computed columns
  label: string;
  render?: (row: T) => React.ReactNode; // custom renderer
  className?: string;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  caption?: string;
  actions?: (row: T) => React.ReactNode;
  emptyMessage?: string;
}

function DataTable<T>({
  data,
  columns,
  caption,
  actions,
  emptyMessage = "No data available",
}: DataTableProps<T>) {
  return (
    <Table>
      {caption && <caption className="text-left">{caption}</caption>}

      <TableHeader>
        <TableRow>
          {columns.map((col, idx) => (
            <TableHead key={idx} className={col.className}>
              {col.label}
            </TableHead>
          ))}
          {actions && <TableHead>Actions</TableHead>}
        </TableRow>
      </TableHeader>

      <TableBody>
        {data.length === 0 ? (
          <TableRow>
            <TableCell
              colSpan={columns.length + (actions ? 1 : 0)}
              className="text-center py-4 text-gray-500"
            >
              {emptyMessage}
            </TableCell>
          </TableRow>
        ) : (
          data.map((row, idx) => (
            <TableRow key={idx}>
              {columns.map((col, cidx) => {
                const value = (row as any)[col.key];

                const isImageColumn =
                  col.key.toString().toLowerCase().includes("img") ||
                  col.key.toString().toLowerCase().includes("image") ||
                  (typeof value === "string" &&
                    (value.endsWith(".png") ||
                      value.endsWith(".jpg") ||
                      value.endsWith(".jpeg") ||
                      value.endsWith(".gif") ||
                      value.startsWith("/")));

                return (
                  <TableCell key={cidx}>
                    {col.render ? (
                      col.render(row)
                    ) : isImageColumn ? (
                      <img
                        src={value}
                        alt={col.label}
                        className="w-20 h-20 object-cover rounded-md border"
                      />
                    ) : (
                      value
                    )}
                  </TableCell>
                );
              })}
              {actions && <TableCell>{actions(row)}</TableCell>}
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}

export default DataTable;
