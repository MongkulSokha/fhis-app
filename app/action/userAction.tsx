"use server";

import { pool } from "@/lib/db";
import { revalidatePath } from "next/cache";

//fetch card data
export async function getUserData() {
  const [rows] = await pool.query(`SELECT id, name, email FROM users`);
  return rows as {
    id: number;
    name: string;
    email: string;
  }[];
}

export async function deleteUser(id: number) {
  await pool.query(`DELETE FROM users WHERE id = ?`, [id]);
  return { success: true };
}
