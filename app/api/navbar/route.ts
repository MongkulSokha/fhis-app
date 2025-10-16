// app/api/cards/route.ts
import { NextResponse } from "next/server";
import { getNavbarItems } from "@/app/action/menuAction";

export async function GET() {
  try {
    const navbar = await getNavbarItems(); // returns array of rows from MySQL
    return NextResponse.json(navbar, { status: 200 });
  } catch (err) {
    console.error("Failed to fetch navbar:", err);
    return NextResponse.json(
      { error: "Failed to fetch navbar" },
      { status: 500 }
    );
  }
}
