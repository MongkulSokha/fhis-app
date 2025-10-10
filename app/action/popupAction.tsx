"use server";

import { pool } from "@/lib/db";
import { put } from "@vercel/blob";

export async function getPopupData() {
  const [rows] = await pool.query(
    `SELECT id, img, link, published FROM popupdata WHERE published = 1`
  );
  return rows as {
    id: number;
    img: string;
    link: string | null;
    published: boolean | null;
  }[];
}

export async function getVisiblePopupData() {
  const [rows] = await pool.query(
    `SELECT id, img, link, published FROM popupdata`
  );
  return rows as {
    id: number;
    img: string;
    link: string | null;
    published: boolean | null;
  }[];
}

export async function createPopup(formData: FormData) {
  const imgFile = formData.get("img") as File;
  const link = formData.get("link") as String;
  const published = formData.get("published") as String;

  let imgUrl: string | null = null;

  if (imgFile && imgFile.size > 0) {
    const { url } = await put(`popups/${Date.now()}-${imgFile.name}`, imgFile, {
      access: "public",
    });
    imgUrl = url;
  }

  await pool.query(`DELETE FROM popupdata`);

  await pool.query(
    `INSERT INTO popupdata (img, link, published) VALUE (?, ?, ?)`,
    [imgUrl, link, published ? 1 : 0]
  );
}

export async function updatePopupVisibility(
  id: number | string,
  published: boolean
) {
  try {
    await pool.query("UPDATE popupdata SET published = ? WHERE id = ?", [
      published,
      id,
    ]);
    return { success: true };
  } catch (error) {
    console.error("Error updating visibility:", error);
    return { success: false };
  }
}
