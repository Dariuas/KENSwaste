import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, phone, email, service, date, message } = await req.json();

    if (!name || !phone || !email || !service) {
      return NextResponse.json(
        { error: "Please fill out all required fields." },
        { status: 400 }
      );
    }

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY,
        subject: `Quote Request from ${name} — ${service}`,
        from_name: name,
        replyto: email,
        name,
        phone,
        email,
        service,
        date: date || "Not specified",
        message: message || "No additional details provided.",
      }),
    });

    const data = await res.json();

    if (!data.success) {
      throw new Error(data.message || "Web3Forms submission failed");
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send your request. Please call us directly." },
      { status: 500 }
    );
  }
}
