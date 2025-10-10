// app/api/cards/route.ts
import { NextResponse } from "next/server";
import { getTestimonialData } from "@/app/action/testimonialAction";

export async function GET() {
  try {
    const testimonials = await getTestimonialData(); // returns array of rows from MySQL
    return NextResponse.json(testimonials, { status: 200 });
  } catch (err) {
    console.error("Failed to fetch testimonials:", err);
    return NextResponse.json(
      { error: "Failed to fetch testimonials" },
      { status: 500 }
    );
  }
}
