"use server";

import { neon } from "@neondatabase/serverless";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { writeFile } from "fs/promises";
import path from "path";
import fs from "fs/promises";

const sql = neon(process.env.DATABASE_URL!);

//fetch card data
export async function getCardData() {
  return await sql`SELECT id, title, img, date, location, time, created_at FROM carddata ORDER BY created_at DESC`;
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
  const file = formData.get("img") as File | null;
  const date = formData.get("date") as string;
  const location = formData.get("location") as string;
  const startTime = formData.get("startTime") as string;
  const endTime = formData.get("endTime") as string;
  const timeFrame = `${formatTime12Hour(startTime)} - ${formatTime12Hour(
    endTime
  )}`;

  let imgPath = null;

  if (file) {
    // Save file to /public/uploads
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const fileName = `${Date.now()}-${file.name}`;
    const filePath = path.join(process.cwd(), "public", "uploads", fileName);

    await writeFile(filePath, buffer);
    imgPath = `/uploads/${fileName}`;
  }

  await sql`
    INSERT INTO carddata (title, img, date, location, time)
    VALUES (${title}, ${imgPath}, ${date}, ${location}, ${timeFrame})
  `;

  redirect("/dashboard");
}

//Delete card
export async function deleteCard(id: number) {
  if (!id) throw new Error("ID is required to delete a card");

  // Get the card first so we know the image path
  const [card] = await sql`
    SELECT img FROM carddata
    WHERE id = ${id};
  `;

  if (!card) throw new Error("Card not found");

  // Delete the image file from /public if it exists
  if (card.img) {
    const imgPath = path.join(process.cwd(), "public", "uploads", card.img);
    try {
      await fs.unlink(imgPath);
      console.log(`Deleted file: ${imgPath}`);
    } catch (err: any) {
      if (err.code !== "ENOENT") {
        console.error("Error deleting file:", err);
      }
    }
  }

  // Delete the card row
  const result = await sql`
    DELETE FROM carddata
    WHERE id = ${id}
    RETURNING *;
  `;

  revalidatePath("/");

  return result;
}
