import { NextResponse } from "next/server";
import { getTestimonialData } from "@/app/action/testimonialAction";

export async function GET() {
  const testimonials = await getTestimonialData();
  return NextResponse.json(testimonials);
}
