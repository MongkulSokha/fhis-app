"use server";

import { neon } from "@neondatabase/serverless";
import { revalidatePath } from "next/cache";

const sql = neon(process.env.DATABASE_URL!);

//fetch card data
export async function getUserData() {
  return await sql`SELECT id, name, email FROM users`;
}

export async function deleteUser(id: number) {
  if (!id) throw new Error("ID is required to delete a card");

  // Delete the card row
  const result = await sql`
    DELETE FROM users
    WHERE id = ${id}
    RETURNING *;
  `;

  revalidatePath("/dashboard");

  return result;
}
