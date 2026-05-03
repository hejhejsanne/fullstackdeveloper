import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");

  if (!code) {
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_BASE_URL}?cv_error=true`,
    );
  }

  // 1. Byt kod mot access token
  const tokenRes = await fetch(
    "https://www.linkedin.com/oauth/v2/accessToken",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri: process.env.LINKEDIN_REDIRECT_URI!,
        client_id: process.env.LINKEDIN_CLIENT_ID!,
        client_secret: process.env.LINKEDIN_CLIENT_SECRET!,
      }),
    },
  );

  const { access_token } = await tokenRes.json();

  // 2. Hämta profil
  const profileRes = await fetch("https://api.linkedin.com/v2/userinfo", {
    headers: { Authorization: `Bearer ${access_token}` },
  });

  const profile = await profileRes.json();

  // 3. Anropa din befintliga cv-download route
  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cv-download`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: profile.name,
      email: profile.email,
      headline: profile.headline,
      picture: profile.picture,
    }),
  });

  // 4. Redirecta till sida med nedladdning
  return NextResponse.redirect(
    `${process.env.NEXT_PUBLIC_BASE_URL}?cv_download=true`,
  );
}
