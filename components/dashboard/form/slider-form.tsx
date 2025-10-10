"use client";

import Link from "next/link";
import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";

export default function SliderForm({
  createSlider,
}: {
  createSlider: (formData: FormData) => void;
}) {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardContent>
          <form action={createSlider} className="space-y-4">
            <Label htmlFor="title">Title</Label>
            <Input
              type="text"
              name="title"
              placeholder="Title"
              required
              className="border p-2 w-full"
            />
            <Label htmlFor="picture">Picture</Label>
            <Input
              id="picture"
              type="file"
              name="img"
              accept="image/*"
              className="border w-full"
            />
            <Label htmlFor="description">Description</Label>
            <Input
              type="text"
              name="text"
              placeholder="Description"
              className="border p-2 w-full"
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
