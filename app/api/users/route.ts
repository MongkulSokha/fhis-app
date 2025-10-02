import { NextResponse } from "next/server";
import { getUserData } from "@/app/action/userAction";

export async function GET() {
  const users = await getUserData();
  return NextResponse.json(users);
}
