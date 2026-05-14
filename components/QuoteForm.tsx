"use client";

import { useState } from "react";

const SERVICE_OPTIONS = [
  "Portable Toilet Rental (48 hr — $150)",
  "Holding Tank Rental (monthly — $275)",
  "Hand Washing Station (48 hr — $120)",
  "Septic Pump Out (up to 1,500 gal — $400)",
  "Holding Tank Pump Out (up to 300 gal — $150)",
  "RV Pump Out (up to 60 gal — $150)",
  "Multiple services / not sure yet",
];

type Status = "idle" | "loading" | "success" | "error";

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const get = (name: string) =>
      (form.elements.namedItem(name) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement).value;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: get("name"),
          phone: get("phone"),
          email: get("email"),
          service: get("service"),
          date: get("date"),
          message: get("message"),
        }),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const body = await res.json();
        setErrorMsg(body.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again or call us directly.");
      setStatus("error");
    }
  }

  return (
    <section id="quote" className="bg-slate-50 py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">
            Request a Quote
          </h2>
          <p className="text-slate-500 mt-3">
            Not ready to book? Send us your details and we&apos;ll follow up
            with a custom quote — usually within a few hours.
          </p>
        </div>

        {status === "success" ? (
          <div className="bg-chartreuse-50 border border-chartreuse-200 rounded-xl p-10 text-center">
            <div className="text-5xl mb-4">&#10003;</div>
            <h3 className="text-xl font-bold text-chartreuse-800">
              Request Received!
            </h3>
            <p className="text-chartreuse-700 mt-2">
              We&apos;ll be in touch within 24 hours.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl border border-slate-200 p-8 flex flex-col gap-5 shadow-sm"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <label className="flex flex-col gap-1">
                <span className="text-sm font-medium text-slate-700">
                  Your Name *
                </span>
                <input
                  name="name"
                  required
                  type="text"
                  placeholder="John Smith"
                  className="border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-chartreuse-500"
                />
              </label>

              <label className="flex flex-col gap-1">
                <span className="text-sm font-medium text-slate-700">
                  Phone Number *
                </span>
                <input
                  name="phone"
                  required
                  type="tel"
                  placeholder="(512) 000-0000"
                  className="border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-chartreuse-500"
                />
              </label>
            </div>

            <label className="flex flex-col gap-1">
              <span className="text-sm font-medium text-slate-700">
                Email Address *
              </span>
              <input
                name="email"
                required
                type="email"
                placeholder="you@example.com"
                className="border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-chartreuse-500"
              />
            </label>

            <label className="flex flex-col gap-1">
              <span className="text-sm font-medium text-slate-700">
                Service Needed *
              </span>
              <select
                name="service"
                required
                defaultValue=""
                className="border border-slate-300 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-chartreuse-500"
              >
                <option value="" disabled>
                  Select a service...
                </option>
                {SERVICE_OPTIONS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-1">
              <span className="text-sm font-medium text-slate-700">
                Date Needed
              </span>
              <input
                name="date"
                type="date"
                className="border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-chartreuse-500"
              />
            </label>

            <label className="flex flex-col gap-1">
              <span className="text-sm font-medium text-slate-700">
                Additional Details
              </span>
              <textarea
                name="message"
                rows={4}
                placeholder="Event size, location, any special requirements..."
                className="border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-chartreuse-500 resize-y"
              />
            </label>

            {status === "error" && (
              <p className="text-red-600 text-sm">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-chartreuse-600 hover:bg-chartreuse-500 disabled:opacity-60 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              {status === "loading" ? "Sending..." : "Send Request"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
