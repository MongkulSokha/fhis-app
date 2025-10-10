// lib/getServerSession.ts
import { getServerSession as nextGetServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

/**
 * Safely get the server-side session
 * Returns null if session is invalid or JWT decryption fails
 */
export async function getServerSessionSafe() {
  try {
    const session = await nextGetServerSession(authOptions);
    return session ?? null;
  } catch (err) {
    console.error("⚠️ Failed to get session:", err);
    return null;
  }
}
