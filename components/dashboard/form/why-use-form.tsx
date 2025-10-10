"use client";

import Link from "next/link";
import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Textarea } from "../../ui/textarea";

export default function WhyUsForm({
  createCard,
}: {
  createCard: (formData: FormData) => void;
}) {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardContent>
          <form action={createCard} className="space-y-4">
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
            <Label htmlFor="name">Description</Label>
            <Textarea
              name="text"
              placeholder="Description"
              className="border p-2 w-full"
            />
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
