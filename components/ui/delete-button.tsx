"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface ConfirmDeleteButtonProps {
  onConfirm: () => Promise<void> | void;
  buttonLabel?: string;
  title?: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: "default" | "outline" | "secondary" | "destructive";
  className?: string;
}

const ConfirmDeleteButton: React.FC<ConfirmDeleteButtonProps> = ({
  onConfirm,
  buttonLabel = "Delete",
  title = "Are you sure?",
  description = "This action cannot be undone.",
  confirmLabel = "Delete",
  cancelLabel = "Cancel",
  variant = "outline",
  className = "bg-red-600 text-white px-4 py-2 rounded h-5",
}) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  async function fetchData() {
    const res = await fetch("/api/navbar");
    setData(await res.json());
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleConfirm = async () => {
    setLoading(true);
    try {
      await onConfirm();
      fetchData();
    } catch (err) {
      console.error("Action failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={variant} className={className}>
          {buttonLabel}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{cancelLabel}</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleConfirm}
            disabled={loading}
            className="bg-red-500 hover:bg-red-800 text-white"
          >
            {loading ? "Processing..." : confirmLabel}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmDeleteButton;
