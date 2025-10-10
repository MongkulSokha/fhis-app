"use client";

import React, { FormEvent, useState } from "react";
import { Card, CardContent } from "../../ui/card";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import Link from "next/link";
import {
  Select,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { Textarea } from "../../ui/textarea";
import { SelectContent } from "@radix-ui/react-select";

export interface Field {
  name: string;
  label: string;
  type:
    | "text"
    | "email"
    | "password"
    | "number"
    | "textarea"
    | "select"
    | "file";
  placeholder?: string;
  options?: { label: string; value: string }[];
  required?: boolean;
}

interface DynamicFormProps {
  title?: string;
  fields: Field[];
  action: (formData: FormData) => Promise<void> | void;
  initialValues?: Record<string, string>;
  buttonText?: string;
}

const DynamicForm: React.FC<DynamicFormProps> = ({
  title,
  fields,
  initialValues = {},
  action,
  buttonText = "Submit",
}) => {
  const [formData, setFormData] = useState<Record<string, string>>(() => {
    const defaults: Record<string, string> = {};
    fields.forEach((f) => {
      defaults[f.name] = initialValues[f.name] || "";
    });
    return defaults;
  });

  return (
    <form>
      <div className="flex flex-col gap-6">
        <Card>
          <CardContent>
            <form action={action} className="space-y-4">
              {fields.map((field) => (
                <div>
                  <Label className="pb-2" htmlFor={field.name}>
                    {field.label}
                  </Label>

                  {field.type === "text" ? (
                    <Input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      placeholder={field.placeholder}
                      required={field.required}
                      className="border p-2 w-full"
                    />
                  ) : field.type === "select" ? (
                    <Select
                      name={field.name}
                      value={formData[field.name]}
                      required={field.required}
                    >
                      <SelectTrigger>
                        <SelectValue>{field.name}</SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {field.options?.map((opt) => (
                            <SelectItem value={opt.value}>
                              {opt.value}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  ) : field.type === "textarea" ? (
                    <Textarea
                      name={field.name}
                      value={formData[field.name]}
                      placeholder={field.placeholder}
                      required={field.required}
                      className="border p-2 w-full"
                    />
                  ) : (
                    <Input
                      id={field.name}
                      type="file"
                      name={field.name}
                      accept="image/*"
                      className="border w-full"
                    />
                  )}
                </div>
              ))}

              <Button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                {buttonText}
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
    </form>
  );
};

export default DynamicForm;
