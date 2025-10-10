// app/api/cards/route.ts
import { NextResponse } from "next/server";
import { getPopupData } from "@/app/action/popupAction";

export async function GET() {
  try {
    const popup = await getPopupData(); // returns array of rows from MySQL
    return NextResponse.json(popup, { status: 200 });
  } catch (err) {
    console.error("Failed to fetch popup:", err);
    return NextResponse.json(
      { error: "Failed to fetch popup" },
      { status: 500 }
    );
  }
}
