"use client";

import Link from "next/link";
import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Textarea } from "../../ui/textarea";
import PublishedCheckbox from "@/components/ui/published-checkbox";
import { updatePopupVisibility } from "@/app/action/popupAction";

export default function CounterForm({
  createCounter,
}: {
  createCounter: (formData: FormData) => void;
}) {
  const handleToggle = async (id: number | string, value: boolean) => {
    await updatePopupVisibility(id, value);
  };

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardContent>
          <form action={createCounter} className="space-y-4">
            <Label htmlFor="name">Title</Label>
            <Input
              type="text"
              name="title"
              placeholder="Name"
              required
              className="border p-2 w-full"
            />
            <Label htmlFor="picture">Icon</Label>
            <Input
              id="picture"
              type="file"
              name="img"
              accept="image/*"
              className="border w-full"
            />
            <Label htmlFor="name">Number</Label>
            <Input
              type="text"
              name="number"
              placeholder="Number"
              className="border p-2 w-full"
            />
            <PublishedCheckbox
              id=""
              initialValue={true}
              onToggle={handleToggle}
              label="Published"
            />
            <Button
              type="submit"
              className="bg-[#691b32] text-white px-4 py-2 rounded"
            >
              Create
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
