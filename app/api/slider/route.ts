// app/api/cards/route.ts
import { NextResponse } from "next/server";
import { getSliderData } from "@/app/action/sliderAction";

export async function GET() {
  try {
    const slider = await getSliderData(); // returns array of rows from MySQL
    return NextResponse.json(slider, { status: 200 });
  } catch (err) {
    console.error("Failed to fetch slider:", err);
    return NextResponse.json(
      { error: "Failed to fetch slider" },
      { status: 500 }
    );
  }
}
