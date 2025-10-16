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
import { getCategoryData } from "@/app/action/categoryAction";

export default function CategoryForm({
  createCategory,
}: {
  createCategory: (formData: FormData) => void;
}) {
  const [category, setCategory] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCategoryData();
      setCategory(Array.isArray(data) ? data : []);
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
          {category.slice(0, 1).map((categories: any) => (
            <div key={categories.id} className="">
              <form action={createCategory} className="space-y-4">
                <Label htmlFor="name">English Name</Label>
                <Input
                  type="text"
                  name="category_en"
                  placeholder="English Name"
                  className="border p-2 w-full"
                />
                <Label htmlFor="name">Khmer Name</Label>
                <Input
                  type="text"
                  name="cagegory_name"
                  placeholder="Khmer Name"
                  className="border p-2 w-full"
                />
                <Label htmlFor="name">Chinese name</Label>
                <Input
                  type="text"
                  name="category_ch"
                  placeholder="Chinese name"
                  className="border p-2 w-full"
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
