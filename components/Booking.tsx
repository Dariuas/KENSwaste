"use client";

import Cal from "@calcom/embed-react";

export default function Booking() {
  return (
    <section id="booking" className="bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">
            Schedule a Service
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">
            Select a service below and pick a date that works for you.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
          <Cal
            calLink="txbmservice"
            style={{ width: "100%", height: "700px" }}
            config={{ layout: "month_view" }}
          />
        </div>

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
