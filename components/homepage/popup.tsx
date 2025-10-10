"use client";

import React, { useEffect, useState } from "react";
import { Image } from "antd";
import { Dialog, DialogContent, DialogOverlay } from "../ui/dialog";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { getPopupData } from "@/app/action/popupAction";
import Link from "next/link";

export default function Popup() {
  const [open, setOpen] = useState(false);
  const [popup, setPopup] = useState<any[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPopupData();
      setPopup(Array.isArray(data) ? data : []);
    };
    fetchData();
  }, []);

  if (!popup || popup.length === 0) return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTitle />
      <DialogDescription />
      <DialogOverlay className="fixed inset-0 bg-black/30 z-40" />
      <DialogContent className="fixed top-1/2 !max-w-200 p-0 m-0 rounded-[0] shadow-[0_1px_6px_-1px_rgba(0,0,0,0.4)]">
        {popup.slice(0, 1).map((popups: any, idx: number) => (
          <div key={idx}>
            <Link href={popups.link}>
              <Image
                preview={false}
                height="100%"
                width="100%"
                className="object-cover"
                src={popups.img}
                alt=""
              />
            </Link>
          </div>
        ))}
      </DialogContent>
    </Dialog>
  );
}
