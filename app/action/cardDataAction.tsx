"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { put, del } from "@vercel/blob";
import { pool } from "@/lib/db";

//fetch card data
export async function getCardData() {
  const [rows] = await pool.query(
    `SELECT id, title, img, date, location, time, created_at FROM carddata ORDER BY created_at DESC`
  );
  return rows as {
    id: number;
    name: string;
    img: string;
    date: string;
    location: string;
    time: string;
    created_at: string;
  }[];
}

function formatTime12Hour(time24: string) {
  const [hourStr, minute] = time24.split(":");
  let hour = parseInt(hourStr, 10);
  const ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;
  return `${hour}:${minute} ${ampm}`;
}

// Insert new cards
export async function createCard(formData: FormData) {
  const title = formData.get("title") as string;
  const imgFile = formData.get("img") as File;
  const date = formData.get("date") as string;
  const location = formData.get("location") as string;
  const startTime = formData.get("startTime") as string;
  const endTime = formData.get("endTime") as string;
  const timeFrame = `${formatTime12Hour(startTime)} - ${formatTime12Hour(
    endTime
  )}`;

  let imgUrl: string | null = null;

  if (imgFile && imgFile.size > 0) {
    // Upload file to Vercel Blob
    const { url } = await put(`cards/${Date.now()}-${imgFile.name}`, imgFile, {
      access: "public", // allows public URL access
    });
    imgUrl = url;
  }

  await pool.query(
    "INSERT INTO carddata (title, img, date, location, time) VALUES (?, ?, ?, ?, ?)",
    [title, imgUrl, date, location, timeFrame]
  );

  revalidatePath("/dashboard/events");

  redirect("/dashboard/events");
}

// Delete card
export async function deleteCard(id: number) {
  if (!id) throw new Error("ID is required to delete a card");

  // Fetch the card first
  const [rows] = (await pool.query("SELECT img FROM carddata WHERE id = ?", [
    id,
  ])) as any[];

  const card = rows[0];
  if (!card) throw new Error("Card not found");

  // Delete the image file from Vercel Blob
  if (card.img) {
    try {
      const blobUrl = new URL(card.img);
      const key = blobUrl.pathname.slice(1); // Extract "cards/filename.png"
      await del(key);
      console.log(`Deleted blob: ${key}`);
    } catch (err) {
      console.error("Error deleting blob:", err);
    }
  }

  // Delete the card
  await pool.query(`DELETE FROM carddata WHERE id = ?`, [id]);

  return { success: true };
}
