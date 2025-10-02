"use server";

import { neon } from "@neondatabase/serverless";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { put, del } from "@vercel/blob";

const sql = neon(process.env.DATABASE_URL!);

//fetch card data
export async function getTestimonialData() {
  return await sql`SELECT id, name, img, position, text, created_at FROM testimonialdata ORDER BY created_at DESC`;
}

// Insert new cards
export async function createTestimonial(formData: FormData) {
  const name = formData.get("name") as string;
  const imgFile = formData.get("img") as File;
  const position = formData.get("position") as string;
  const text = formData.get("text") as string;

  let imgUrl: string | null = null;

  if (imgFile && imgFile.size > 0) {
    // Upload file to Vercel Blob
    const { url } = await put(
      `testimonials/${Date.now()}-${imgFile.name}`,
      imgFile,
      {
        access: "public", // allows public URL access
      }
    );
    imgUrl = url;
  }

  await sql`
    INSERT INTO testimonialdata (name, img, position, text)
    VALUES (${name}, ${imgUrl}, ${position}, ${text})
  `;

  revalidatePath("/dashboard/testimonial");

  redirect("/dashboard/testimonial");
}

// Delete card
export async function deleteTestimonial(id: number) {
  if (!id) throw new Error("ID is required to delete a testimonial");

  // Get the card first so we know the image path
  const [testimonial] = await sql`
    SELECT img FROM testimonialdata
    WHERE id = ${id};
  `;

  if (!testimonial) throw new Error("Testimonial not found");

  // Delete the image file from Vercel Blob
  if (testimonial.img) {
    try {
      const blobUrl = new URL(testimonial.img);
      const key = blobUrl.pathname.slice(1);
      await del(key);
      console.log(`Deleted blob: ${key}`);
    } catch (err) {
      console.error("Error deleting blob:", err);
    }
  }

  // Delete the card row
  const result = await sql`
    DELETE FROM testimonialdata
    WHERE id = ${id}
    RETURNING *;
  `;

  revalidatePath("/dashboard/testimonial");

  return result;
}
