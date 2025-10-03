"use client";

import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { Image } from "antd";
import { Dialog, DialogContent, DialogOverlay } from "./ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Popup() {
  const { data: cards, mutate } = useSWR("/api/cards", fetcher);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!cards) return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTitle />
      <DialogOverlay className="fixed inset-0 bg-black/30 z-40" />
      <DialogContent className="fixed top-1/2 !max-w-200 p-0 m-0 rounded-[0] shadow-[0_1px_6px_-1px_rgba(0,0,0,0.4)]">
        {cards.slice(0, 1).map((card: any, idx: number) => (
          <div key={idx}>
            <Image
              preview={false}
              height="100%"
              width="100%"
              className="object-cover"
              src={card.img}
              alt=""
            />
          </div>
        ))}
      </DialogContent>
    </Dialog>
  );
}
