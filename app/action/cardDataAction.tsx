"use server";

import { neon } from "@neondatabase/serverless";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const sql = neon(process.env.DATABASE_URL!);

//fetch card data
export async function getCardData() {
  return await sql`SELECT id, title, img, date, location, time, created_at FROM carddata ORDER BY created_at DESC`;
}

function formatTime12Hour(time24: string) {
  const [hourStr, minute] = time24.split(":");
  let hour = parseInt(hourStr, 10);
  const ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12; // Convert 0 or 12+ to 12-hour
  return `${hour}:${minute} ${ampm}`;
}

// Insert new cards
export async function createCard(formData: FormData) {
  const title = formData.get("title") as string;
  const img = formData.get("img") as string;
  const date = formData.get("date") as string;
  const location = formData.get("location") as string;
  const startTime = formData.get("startTime") as string;
  const endTime = formData.get("endTime") as string;

  // Convert times to 12-hour format
  const timeFrame = `${formatTime12Hour(startTime)} - ${formatTime12Hour(
    endTime
  )}`;

  await sql`
    INSERT INTO carddata (title, img, date, location, time)
    VALUES (${title}, ${img}, ${date}, ${location}, ${timeFrame})
  `;

  redirect("/dashboard");
}

//Delete card
export async function deleteCard(id: number) {
  if (!id) throw new Error("ID is required to delete a card");

  const result = await sql`
    DELETE FROM carddata
    WHERE id = ${id}
    RETURNING *;
  `;

  revalidatePath("/");

  return result;
}
