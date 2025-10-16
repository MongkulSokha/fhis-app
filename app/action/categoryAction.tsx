"use server";

import { pool } from "@/lib/db";

// Fetch category data
export async function getCategoryData() {
  const [rows] = await pool.query(
    `SELECT id, category_en, cagegory_name, category_ch, is_delete, created_at FROM event_category ORDER BY id ASC`
  );
  return rows as {
    id: number;
    category_en: string;
    cagegory_name: string;
    category_ch: string;
    created_at: string;
    is_delete: boolean;
  }[];
}

// Insert new category
export async function createCategory(formData: FormData) {
  const category_en = formData.get("category_en") as string;
  const cagegory_name = formData.get("cagegory_name") as string;
  const category_ch = formData.get("category_ch") as string;

  await pool.query(
    `
    INSERT INTO event_category (category_en, cagegory_name, category_ch)
    VALUES (?, ?, ?)
  `,
    [category_en, cagegory_name, category_ch]
  );
}

// Update Visibility
export async function updateCategoryVisibility(
  id: number | string,
  is_delete: boolean
) {
  await pool.query(`UPDATE event_category SET is_delete = ? WHERE id = ?`, [
    is_delete ? 1 : 0,
    id,
  ]);
}

// Delete Category
export async function deleteCategoy(id: number) {
  await pool.query(`DELETE FROM event_category WHERE id = ?`, [id]);
  return { success: true };
}
