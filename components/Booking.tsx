"use client";

import { getCalApi } from "@calcom/embed-react";

async function openBooking() {
  const cal = await getCalApi();
  cal("modal", { calLink: "txbmservice" });
}

const services = [
  {
    icon: "🚽",
    name: "Party Rentals",
    description:
      "Portable toilets, holding tanks, and hand washing stations for events, construction sites, and more.",
  },
  {
    icon: "🚛",
    name: "Septic Care",
    description:
      "Professional pump-outs for septic tanks, holding tanks, and RVs — fast and reliable.",
  },
];

export default function Booking() {
  return (
    <section id="booking" className="bg-slate-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">
            Schedule a Service
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">
            Pick a service below and choose a time that works for you. We&apos;ll
            confirm your appointment within 24 hours.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.name}
              className="bg-white rounded-2xl border border-slate-200 p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl border border-slate-200 mb-4">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{s.name}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {s.description}
              </p>
              <button
                onClick={openBooking}
                className="w-full bg-chartreuse-600 hover:bg-chartreuse-500 text-white font-semibold py-3 rounded-lg transition-colors"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-400 text-sm mt-8">
          Prefer to call?{" "}
          <a
            href="tel:+15124129489"
            className="text-blue-700 hover:underline font-medium"
          >
            (512) 412-9489
          </a>
        </p>
      </div>
    </section>
  );
}
