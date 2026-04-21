// app/api/notify-missing-info/route.ts
// Separat API-route som hanterar email-utskick server-side

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(req: Request) {
  const { question } = await req.json();

  if (!question) {
    return new Response(JSON.stringify({ error: "question is required" }), {
      status: 400,
    });
  }

  const timestamp = new Date().toLocaleString("sv-SE", {
    timeZone: "Europe/Stockholm",
  });

  try {
    await transporter.sendMail({
      from: `"AiSan Chatbot" <${process.env.GMAIL_USER}>`,
      to: process.env.NOTIFY_EMAIL, // sanne@fullstackdeveloper.se
      subject: `AiSan saknar info – uppdatering behövs`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 560px; margin: 0 auto; background: #f9f9f9; border-radius: 12px; overflow: hidden; border: 1px solid #e8e8e8;">
          
          <div style="background: #0f0f0f; padding: 28px 32px;">
            <p style="margin: 0; font-size: 13px; color: #888; letter-spacing: 2px; text-transform: uppercase;">AiSan · AI Assistant</p>
            <h2 style="margin: 8px 0 0; font-size: 22px; color: #ffffff; font-weight: 600;">Kunskapslucka upptäckt</h2>
          </div>

          <div style="padding: 32px;">
            <p style="color: #444; font-size: 15px; margin: 0 0 20px;">Hej Sanne! En besökare ställde en fråga som jag inte kunde besvara. Vänligen uppdatera min information.</p>

            <div style="background: #ffffff; border: 1px solid #e0e0e0; border-left: 4px solid #0f0f0f; border-radius: 6px; padding: 18px 20px; margin: 0 0 24px;">
              <p style="margin: 0 0 6px; font-size: 11px; color: #999; text-transform: uppercase; letter-spacing: 1px;">Frågan som ställdes</p>
              <p style="margin: 0; font-size: 16px; color: #111; font-style: italic;">"${question}"</p>
            </div>

            <p style="color: #999; font-size: 13px; margin: 0;">${timestamp}</p>
          </div>

        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email error:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
