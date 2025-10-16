"use server";

import { pool } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getNavbarItems() {
  const [rows] = await pool.query(
    `SELECT id, title, alias,  \`order\`, published, parent_menu, created_at FROM menu WHERE published = 1 ORDER BY created_at`
  );
  const data = rows as {
    id: number;
    title: string;
    alias: string;
    order: number | null;
    published: boolean | null;
    parent_menu: number | null;
    created_at: string;
  }[];

  const map = new Map<number, any>();
  const tree: any[] = [];

  data.forEach((item) => {
    const newItem = { ...item, children: [] };
    map.set(item.id, newItem);
    if (!item.parent_menu) {
      tree.push(newItem);
    } else {
      map.get(item.parent_menu)?.children.push(newItem);
    }
  });

  return tree;
}

export async function getNavbarVisibleItems() {
  const [rows] = await pool.query(
    `SELECT
        m.id,
        m.title,
        m.alias,
        m.\`order\`,
        m.published,
        m.parent_menu,
        m.menu_type_id,
        mt.name as menu_type_name,
        m.created_at
    FROM menu m
    LEFT JOIN menu_type mt ON m.menu_type_id = mt.id
    ORDER BY m.created_at`
  );

  const data = rows as {
    id: number;
    title: string;
    alias: string;
    order: number | null;
    published: boolean | null;
    parent_menu: number | null;
    menu_type_id: number | null;
    menu_type_name: string | null;
    created_at: string;
  }[];

  const map = new Map<number, any>();
  const tree: any[] = [];

  data.forEach((item) => {
    const newItem = { ...item, children: [] };
    map.set(item.id, newItem);
    if (!item.parent_menu) {
      tree.push(newItem);
    } else {
      map.get(item.parent_menu)?.children.push(newItem);
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

  redirect("/admin/menu");

  // return { success: true, id: (result as any).insertId };
}

export async function deleteNavbarItem(
  id: number
): Promise<{ success: boolean }> {
  if (!id) throw new Error("ID is required to delete a navbar item");
  await pool.query("DELETE FROM navbar WHERE id = ?", [id]);

  revalidatePath("/admin/menu");
  return { success: false };
}

export async function updateNavbarVisibility(
  id: number | string,
  published: boolean
) {
  await pool.query(`UPDATE menu SET published = ? WHERE id = ?`, [
    published ? 1 : 0,
    id,
  ]);
}
