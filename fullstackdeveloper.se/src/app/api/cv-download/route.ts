// src/app/api/cv-download/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { Redis } from "@upstash/redis";

const resend = new Resend(process.env.RESEND_API_KEY);
const redis = Redis.fromEnv();

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 },
      );
    }

    // Increment counter in Redis
    const totalDownloads = await redis.incr("cv-download-count");

    await resend.emails.send({
      from: "CV Download <onboarding@resend.dev>",
      to: process.env.NOTIFY_EMAIL!,
      subject: `CV downloaded by ${email}`,
      html: `
        <p>Someone just downloaded your CV from your portfolio.</p>
        <p><strong>Their email:</strong> ${email}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString("sv-SE", { timeZone: "Europe/Stockholm" })}</p>
        <p><strong>Total downloads:</strong> ${totalDownloads}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("CV download error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 },
    );
  }
}
