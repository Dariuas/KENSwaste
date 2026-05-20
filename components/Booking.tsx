"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function Booking() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", { hideEventTypeDetails: false });
    })();
  }, []);

  return (
    <section id="booking" className="bg-white py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">
          Schedule a Service
        </h2>
        <p className="text-slate-500 mt-3 mb-8 max-w-xl mx-auto">
          Pick a service and a time that works for you. We&apos;ll confirm your
          appointment within 24 hours.
        </p>
        <button
          data-cal-link="txbmservice"
          className="bg-chartreuse-600 hover:bg-chartreuse-500 text-white font-semibold px-10 py-4 rounded-lg text-lg transition-colors"
        >
          Book a Service
        </button>
        <p className="text-center text-slate-400 text-sm mt-6">
          Prefer to talk?{" "}
          <a href="#contact" className="text-blue-700 hover:underline">
            Call or email us directly.
          </a>
        </p>
      </div>
    </section>
  );
}
