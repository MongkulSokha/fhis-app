import { db } from "@/lib/db";
import { users } from "@/lib/schema";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, password } = await req.json();

  // hash the password before saving
  const passwordHash = await hash(password, 10);

  await db.insert(users).values({
    name,
    email,
    passwordHash,
  });

  return NextResponse.json({ success: true });
}
