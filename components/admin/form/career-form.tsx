"use client";

import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import QuillEditor from "@/components/ui/quill-editor";
import PublishedCheckbox from "@/components/ui/published-checkbox";
import { updatePopupVisibility } from "@/app/action/popupAction";

export default function CareerForm({
  createCareer,
}: {
  createCareer: (formData: FormData) => void;
}) {
  const today = new Date().toISOString().split("T")[0];
  const now = new Date();

  const handleToggle = async (id: number | string, value: boolean) => {
    await updatePopupVisibility(id, value);
  };

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardContent>
          <form action={createCareer} className="space-y-4">
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
            <QuillEditor />
            <PublishedCheckbox
              id=""
              initialValue={true}
              onToggle={handleToggle}
              label="Published"
            />
            <Button
              type="submit"
              className="hover:bg-blue-800 cursor-pointer bg-blue-500 text-white px-4 py-2 rounded"
            >
              Create
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
