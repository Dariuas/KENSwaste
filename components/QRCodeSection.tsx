"use client";

import QRCode from "react-qr-code";

const bookingUrl = `${
  process.env.NEXT_PUBLIC_SITE_URL || "https://kenswaste.com"
}/#booking`;

export default function QRCodeSection() {
  return (
    <section className="bg-blue-950 py-20 px-4 text-white text-center">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-bold mb-3">Book From Your Phone</h2>
        <p className="text-blue-200 mb-8 max-w-xs mx-auto">
          Scan the QR code to open our booking calendar — no searching required.
        </p>

        <div className="inline-block bg-white p-5 rounded-2xl shadow-xl">
          <QRCode value={bookingUrl} size={200} />
        </div>

        <p className="text-blue-400 text-xs mt-6 break-all">{bookingUrl}</p>
      </div>
    </section>
  );
}
