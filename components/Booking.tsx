"use client";

import { InlineWidget } from "react-calendly";

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || "";

export default function Booking() {
  return (
    <section id="booking" className="bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">
            Schedule a Service
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">
            Pick a date and time below. We&apos;ll confirm your appointment
            within 24 hours.
          </p>
        </div>

        {CALENDLY_URL ? (
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <InlineWidget
              url={CALENDLY_URL}
              styles={{ height: "700px", minWidth: "320px" }}
            />
          </div>
        ) : (
          <div className="rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 p-16 text-center">
            <p className="text-slate-500 text-lg font-medium mb-2">
              Online booking coming soon!
            </p>
            <p className="text-slate-400 text-sm mb-6">
              In the meantime, call or email us to schedule your service.
            </p>
            <a
              href="#contact"
              className="inline-block bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Contact Us to Book
            </a>
          </div>
        )}

        <p className="text-center text-slate-400 text-sm mt-4">
          Prefer to talk?{" "}
          <a href="#contact" className="text-blue-700 hover:underline">
            Call or email us directly.
          </a>
        </p>
      </div>
    </section>
  );
}
