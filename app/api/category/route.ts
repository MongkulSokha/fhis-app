// app/api/cards/route.ts
import { NextResponse } from "next/server";
import { getCategoryData } from "@/app/action/categoryAction";

export async function GET() {
  try {
    const category = await getCategoryData(); // returns array of rows from MySQL
    return NextResponse.json(category, { status: 200 });
  } catch (err) {
    console.error("Failed to fetch category", err);
    return NextResponse.json(
      { error: "Failed to fetch category" },
      { status: 500 }
    );
  }
}
