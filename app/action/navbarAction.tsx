"use server";

import { pool } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getNavbarItems() {
  const [rows] = await pool.query(
    `SELECT id, label, href,  \`order\`, is_visible, parent_id FROM navbar WHERE is_visible = 1 ORDER BY parent_id, \`order\` IS NULL, \`order\`, id`
  );
  const data = rows as {
    id: number;
    label: string;
    href: string;
    order: number | null;
    is_visible: boolean | null;
    parent_id: number | null;
  }[];

  const map = new Map<number, any>();
  const tree: any[] = [];

  data.forEach((item) => {
    const newItem = { ...item, children: [] };
    map.set(item.id, newItem);
    if (item.parent_id === null) {
      tree.push(newItem);
    } else {
      map.get(item.parent_id)?.children.push(newItem);
    }
  });

  return tree;
}

export async function getNavbarVisibleItems() {
  const [rows] = await pool.query(
    `SELECT id, label, href,  \`order\`, is_visible, parent_id FROM navbar ORDER BY parent_id, \`order\` IS NULL, \`order\`, id`
  );
  const data = rows as {
    id: number;
    label: string;
    href: string;
    order: number | null;
    is_visible: boolean | null;
    parent_id: number | null;
  }[];

  const map = new Map<number, any>();
  const tree: any[] = [];

  data.forEach((item) => {
    const newItem = { ...item, children: [] };
    map.set(item.id, newItem);
    if (item.parent_id === null) {
      tree.push(newItem);
    } else {
      map.get(item.parent_id)?.children.push(newItem);
    }
  });

  return tree;
}

export async function addNavbarItem({
  label,
  href,
  parent_id,
  order,
  is_visible,
}: {
  label: string;
  href: string;
  parent_id: number | null;
  order: number | null;
  is_visible: boolean;
}) {
  if (!label || !href) {
    throw new Error("Label and Href are required");
  }

  const [result] = await pool.query(
    `INSERT INTO navbar (label, href, parent_id, \`order\`, is_visible) VALUES (?, ?, ?, ?, ?)`,
    [label, href, parent_id ?? null, order ?? null, is_visible ? 1 : 0]
  );

  redirect("/dashboard/menu");

  // return { success: true, id: (result as any).insertId };
}

export async function deleteNavbarItem(
  id: number
): Promise<{ success: boolean }> {
  if (!id) throw new Error("ID is required to delete a navbar item");
  await pool.query("DELETE FROM navbar WHERE id = ?", [id]);

  revalidatePath("/dashboard/menu");
  return { success: false };
}

export async function updateNavbarVisibility(
  id: number | string,
  is_visible: boolean
) {
  await pool.query(`UPDATE navbar SET is_visible = ? WHERE id = ?`, [
    is_visible ? 1 : 0,
    id,
  ]);
}
