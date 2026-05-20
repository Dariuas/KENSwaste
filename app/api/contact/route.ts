import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name, phone, email, service,
      // Booking form fields
      delivery_date, pickup_date, quantity, address, tank_type, notes, calendar_link,
      // Quote form fields
      date, message,
    } = body;

    if (!name || !phone || !email || !service) {
      return NextResponse.json(
        { error: "Please fill out all required fields." },
        { status: 400 }
      );
    }

    // Build email body based on which form submitted
    const isBooking = !!address;

    const emailBody = isBooking
      ? [
          `New booking request from the TX BM Rentals website:`,
          ``,
          `Name:          ${name}`,
          `Phone:         ${phone}`,
          `Email:         ${email}`,
          `Service:       ${service}`,
          ``,
          delivery_date ? `Delivery Date: ${delivery_date}` : null,
          pickup_date && pickup_date !== delivery_date ? `Pickup Date:   ${pickup_date}` : null,
          quantity ? `Units:         ${quantity}` : null,
          tank_type ? `Tank Type:     ${tank_type}` : null,
          `Address:       ${address}`,
          notes ? `Notes:         ${notes}` : null,
          ``,
          calendar_link ? `ADD TO GOOGLE CALENDAR: ${calendar_link}` : null,
        ]
          .filter((line) => line !== null)
          .join("\n")
      : [
          `New quote request from the TX BM Rentals website:`,
          ``,
          `Name:    ${name}`,
          `Phone:   ${phone}`,
          `Email:   ${email}`,
          `Service: ${service}`,
          `Date:    ${date || "Not specified"}`,
          ``,
          `Message:`,
          message || "No additional details provided.",
        ].join("\n");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY,
        subject: isBooking
          ? `Booking Request from ${name} — ${service}`
          : `Quote Request from ${name} — ${service}`,
        from_name: name,
        replyto: email,
        message: emailBody,
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
