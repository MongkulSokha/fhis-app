"use client";

import Link from "next/link";
import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Textarea } from "../../ui/textarea";

export default function CareerForm({
  createSlider,
}: {
  createSlider: (formData: FormData) => void;
}) {
  const today = new Date().toISOString().split("T")[0];
  const now = new Date();
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
            <Label htmlFor="description">Deadline</Label>
            <Input
              type="date"
              name="date"
              required
              className="border p-2 w-full"
              defaultValue={today}
            />
            <Label htmlFor="description">Description</Label>
            <Textarea
              name="text"
              placeholder="Description"
              className="border p-2 w-full"
            />
            <Button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Add Slider
            </Button>
            <Link href="/dashboard/sliders">
              <Button className="bg-red-600 text-white px-4 py-2 rounded mx-2">
                Cancel
              </Button>
            </Link>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
