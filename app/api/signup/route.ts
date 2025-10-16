import { db } from "@/lib/db";
import { users } from "@/lib/schema";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await hash(password, 10);

    // Insert new user
    await db.insert(users).values({
      name,
      email,
      password: hashedPassword,
      profile: null,
      is_supperadmin: 0,
      email_verified_at: null,
      remember_token: null,
      created_at: new Date(),
      updated_at: new Date(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
