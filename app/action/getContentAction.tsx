"use server";

import { pool } from "@/lib/db";
import { RowDataPacket } from "mysql2";

// Define a TypeScript interface for your content row
interface Content extends RowDataPacket {
  id: number;
  title: string;
  title_kh: string | null;
  title_ch: string | null;
  alias: string;
  content: string | null;
  content_kh: string | null;
  content_ch: string | null;
  feature_img: string | null;
  banner: string | null;
  created_at: string;
}

export async function getContentAction(alias: string) {
  try {
    const [rows] = await pool.query<Content[]>(
      `SELECT
        id,
        title,
        title_kh,
        title_ch,
        alias,
        content,
        content_kh,
        content_ch,
        feature_img,
        banner,
        created_at
       FROM menu
       WHERE alias = ?
         AND published = 1
         AND is_delete = 0
       LIMIT 1`,
      [alias]
    );

    return rows.length > 0 ? rows[0] : null;
  } catch (error) {
    console.error("Error fetching content:", error);
    return null;
  }
}
