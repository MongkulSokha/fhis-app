"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function CardForm({
  createCard,
}: {
  createCard: (formData: FormData) => void;
}) {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardContent>
          <form action={createCard} className="space-y-4">
            <Label htmlFor="title">Title</Label>
            <Input
              type="text"
              name="title"
              placeholder="Title"
              required
              className="border p-2 w-full"
            />
            <Input
              type="text"
              name="img"
              placeholder="Image URL"
              className="border p-2 w-full"
            />
            <Input
              type="date"
              name="date"
              required
              className="border p-2 w-full"
            />
            <Input
              type="text"
              name="location"
              placeholder="Location"
              className="border p-2 w-full"
            />
            <div className="flex space-x-2">
              <div className="flex-1">
                <label className="block text-sm mb-1">Start Time</label>
                <Input
                  type="time"
                  name="startTime"
                  required
                  className="border p-2 w-full"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm mb-1">End Time</label>
                <Input
                  type="time"
                  name="endTime"
                  required
                  className="border p-2 w-full"
                />
              </div>
            </div>
            <Button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Add Card
            </Button>
            <Link href="/dashboard">
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
