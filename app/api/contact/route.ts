import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, subject, message } = await req.json();

  // כאן מחברים שירות מייל אמיתי (למשל Resend / Nodemailer)
  console.log("New contact form:", { name, subject, message });

  return NextResponse.json({ ok: true });
}