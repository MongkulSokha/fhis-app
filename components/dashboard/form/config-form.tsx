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

export default function ConfigForm({
  createPopup,
}: {
  createPopup: (formData: FormData) => void;
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
    <div className="flex flex-col gap-6 ">
      <Card>
        <CardContent>
          {popup.slice(0, 1).map((popups: any) => (
            <div key={popups.id} className="p-5">
              <form action="" className="space-y-4">
                <Label htmlFor="address">Address</Label>
                <Input
                  type="text"
                  name="address"
                  placeholder="Address"
                  className="border p-2 w-full"
                />

                <Label htmlFor="phonenumber">Phone Number</Label>
                <Input
                  type="text"
                  name="phonenumber"
                  placeholder="Phone Number"
                  className="border p-2 w-full"
                />

                <Label htmlFor="email">Email</Label>
                <Input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="border p-2 w-full"
                />

                <Label htmlFor="facebook">Facebook</Label>
                <Input
                  type="url"
                  name="facebook"
                  placeholder="Facebook Link"
                  className="border p-2 w-full"
                />

                <Label htmlFor="youtube">Youtube</Label>
                <Input
                  type="url"
                  name="youtube"
                  placeholder="Youtube Link"
                  className="border p-2 w-full"
                />

                <Label htmlFor="linkedin">Linkedin</Label>
                <Input
                  type="url"
                  name="linkedin"
                  placeholder="Linkedin Link"
                  className="border p-2 w-full"
                />

                <Label htmlFor="telegram">Telegram</Label>
                <Input
                  type="url"
                  name="telegram"
                  placeholder="Telegram Link"
                  className="border p-2 w-full"
                />

                <Label htmlFor="instagram<">Instagram</Label>
                <Input
                  type="url"
                  name="instagram<"
                  placeholder="Instagram< Link"
                  className="border p-2 w-full"
                />

                <Label htmlFor="tiktok">Tiktok</Label>
                <Input
                  type="url"
                  name="tiktok"
                  placeholder="Tiktok Link"
                  className="border p-2 w-full"
                />

                <Label htmlFor="copyright">Footer Copyright</Label>
                <Input
                  type="text"
                  name="copyright"
                  placeholder="Copyright"
                  className="border p-2 w-full"
                />

                <Label htmlFor="welcome">Welcome</Label>
                <Input
                  type="text"
                  name="welcomek"
                  placeholder="Welcome Text"
                  className="border p-2 w-full"
                />

                <Image
                  className="border border-gray-400 rounded-md"
                  preview={false}
                  height={200}
                  src="/fhis-logo.svg"
                />
                <Input
                  id="picture"
                  type="file"
                  name="logo"
                  accept="image/*"
                  className="border w-full"
                />

                <Button type="submit" className="bg-[#691b32]">
                  Save Change
                </Button>
              </form>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
