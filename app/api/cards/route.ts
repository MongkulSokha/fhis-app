import { NextResponse } from "next/server";
import { getCardData } from "@/app/action/cardDataAction";

export async function GET() {
  const cards = await getCardData();
  return NextResponse.json(cards);
}
