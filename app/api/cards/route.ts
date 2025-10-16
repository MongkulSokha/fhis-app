// app/api/cards/route.ts
import { NextResponse } from "next/server";
import { getCardData } from "@/app/action/eventAction";

export async function GET() {
  try {
    const cards = await getCardData(); // returns array of rows from MySQL
    return NextResponse.json(cards, { status: 200 });
  } catch (err) {
    console.error("Failed to fetch cards:", err);
    return NextResponse.json(
      { error: "Failed to fetch cards" },
      { status: 500 }
    );
  }
}
