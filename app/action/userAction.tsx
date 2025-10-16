"use server";

import { pool } from "@/lib/db";

//Fetch User Data
export async function getUserData() {
  const [rows] = await pool.query(`SELECT id, name, email, profile FROM users`);
  return rows as {
    id: number;
    profile: string;
    name: string;
    email: string;
  }[];
}

//Detete User
export async function deleteUser(id: number) {
  await pool.query(`DELETE FROM users WHERE id = ?`, [id]);
  return { success: true };
}
