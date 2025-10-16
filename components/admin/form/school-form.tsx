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
import PublishedCheckbox from "@/components/ui/published-checkbox";

export default function SchoolManagementForm({
  createProfile,
}: {
  createProfile: (formData: FormData) => void;
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
              <form action={createProfile} className="space-y-4">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="border p-2 w-full"
                />

                <Label htmlFor="name">Title</Label>
                <Input
                  type="text"
                  name="title"
                  placeholder="Title"
                  required
                  className="border p-2 w-full"
                />

                <Label htmlFor="name">Email Address</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="border p-2 w-full"
                />

                <div className="w-25 h-25 rounded-full overflow-hidden">
                  <Image
                    preview={false}
                    src="/profile.svg"
                    alt="Mrs. Swe Swe Aung"
                    width={110}
                    height={140}
                    className="object-cover w-full h-full"
                  />
                </div>

                <Label htmlFor="picture">Profile Photo</Label>
                <Input
                  id="picture"
                  type="file"
                  name="img"
                  accept="image/*"
                  className="border w-full"
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
                  Create
                </Button>
              </form>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
