import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY || "");

  try {
    const { name, phone, email, service, date, message } = await req.json();

    if (!name || !phone || !email || !service) {
      return NextResponse.json(
        { error: "Please fill out all required fields." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      // TODO: replace with your verified Resend domain address once set up
      from: "TX BM Rentals and Septic Pump Website <onboarding@resend.dev>",
      // TODO: replace with your actual business email
      to: ["info@kenswaste.com"],
      replyTo: email,
      subject: `Quote Request from ${name} — ${service}`,
      text: `
New quote request from the TX BM Rentals and Septic Pump website:

Name:     ${name}
Phone:    ${phone}
Email:    ${email}
Service:  ${service}
Date:     ${date || "Not specified"}

Message:
${message || "No additional details provided."}
      `.trim(),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send your request. Please call us directly." },
      { status: 500 }
    );
  }
}
