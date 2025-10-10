"use client";

import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Image } from "antd";
import { useEffect, useState } from "react";
import {
  getVisiblePopupData,
  updatePopupVisibility,
} from "@/app/action/popupAction";
import PublishedCheckbox from "../../ui/published-checkbox";

export default function CategoryForm({
  createCategory,
}: {
  createCategory: (formData: FormData) => void;
}) {
  const [popup, setPopup] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getVisiblePopupData();
      setPopup(Array.isArray(data) ? data : []);
    };
    fetchData();
  }, []);

  const handleToggle = async (id: number | string, value: boolean) => {
    await updatePopupVisibility(id, value);
  };

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardContent>
          {popup.slice(0, 1).map((popups: any) => (
            <div key={popups.id} className="">
              <form action={createCategory} className="space-y-4">
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="border p-2 w-full"
                />
                <PublishedCheckbox
                  id={popups.id}
                  initialValue={popups.published}
                  onToggle={handleToggle}
                  label="Published"
                />

                <Button
                  type="submit"
                  className="bg-[#691b32] text-white px-4 py-2 rounded"
                >
                  Add
                </Button>
              </form>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
