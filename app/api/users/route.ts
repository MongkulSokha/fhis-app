// app/api/cards/route.ts
import { NextResponse } from "next/server";
import { getUserData } from "@/app/action/userAction";

export async function GET() {
  try {
    const users = await getUserData(); // returns array of rows from MySQL
    return NextResponse.json(users, { status: 200 });
  } catch (err) {
    console.error("Failed to fetch users:", err);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}
