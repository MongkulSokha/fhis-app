"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { put, del } from "@vercel/blob";
import { pool } from "@/lib/db";

//fetch card data
export async function getSliderData() {
  const [rows] = await pool.query(
    `SELECT id, title, img, text, created_at FROM sliderdata ORDER BY created_at DESC`
  );
  return rows as {
    id: number;
    title: string;
    img: string;
    text: string;
    created_at: string;
  }[];
}

// Insert new cards
export async function createSlider(formData: FormData) {
  const title = formData.get("title") as string;
  const imgFile = formData.get("img") as File;
  const text = formData.get("text") as string;

  let imgUrl: string | null = null;

  if (imgFile && imgFile.size > 0) {
    // Upload file to Vercel Blob
    const { url } = await put(
      `testimonials/${Date.now()}-${imgFile.name}`,
      imgFile,
      {
        access: "public", // allows public URL access
      }
    );
    imgUrl = url;
  }

  await pool.query(
    `
    INSERT INTO sliderdata (title, img, text)
    VALUES (?, ?, ?)
  `,
    [title, imgUrl, text]
  );

  redirect("/dashboard/slider");
}

// Delete card
export async function deleteSlider(id: number) {
  if (!id) throw new Error("ID is required to delete a slider");

  // Get the card first so we know the image path
  const [rows] = (await pool.query("SELECT img FROM sliderdata WHERE id = ?", [
    id,
  ])) as any[];

  if (!rows) throw new Error("Slider not found");

  const slider = rows[0];

  // Delete the image file from Vercel Blob
  if (slider.img) {
    try {
      const blobUrl = new URL(slider.img);
      const key = blobUrl.pathname.slice(1);
      await del(key);
      console.log(`Deleted blob: ${key}`);
    } catch (err) {
      console.error("Error deleting blob:", err);
    }
  }

  // Delete the card row
  await pool.query(`DELETE FROM sliderdata WHERE id = ?`, [id]);

  return { success: true };
}
