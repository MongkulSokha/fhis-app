"use client";

import { useState, useTransition } from "react";
import { Checkbox } from "./checkbox";

type PublishedCheckboxProps = {
  id: number | string;
  initialValue: boolean;
  onToggle: (id: number | string, value: boolean) => Promise<void> | void;
  label?: string;
};

export default function PublishedCheckbox({
  id,
  initialValue,
  onToggle,
  label = "Published",
}: PublishedCheckboxProps) {
  const [checked, setChecked] = useState(initialValue);
  const [isPending, startTransition] = useTransition();

  const handleChange = (value: boolean) => {
    setChecked(value); // instant feedback
    startTransition(async () => {
      try {
        await onToggle(id, value); // delegate update logic to parent
      } catch (error) {
        console.error("Failed to update published state:", error);
        setChecked(!value); // rollback on error
      }
    });
  };

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        className={` data-[state=checked]:bg-blue-600 data-[state=checked]:text-white data-[state=checked]:border-none`}
        checked={!!checked}
        onCheckedChange={handleChange}
        disabled={isPending}
      />
      <span className={isPending ? "opacity-50" : ""}>{label}</span>
    </div>
  );
}
