import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "@/lib/schema"; // 👈 import schema

const sql = neon(process.env.DATABASE_URL!);

// Pass schema into drizzle so TS knows about tables
export const db = drizzle(sql, { schema });
