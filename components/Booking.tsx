"use client";

import { useState } from "react";

type ServiceType = "rental" | "septic" | null;
type TankType = "septic" | "holding" | "rv";
type Step = 1 | 2 | 3;

interface FormData {
  service_type: ServiceType;
  delivery_date: string;
  pickup_date: string;
  quantity: string;
  service_date: string;
  tank_type: TankType | "";
  address: string;
  notes: string;
  name: string;
  phone: string;
  email: string;
}

const QUANTITY_OPTIONS = ["1", "2", "3", "4+"];
const TANK_OPTIONS: { value: TankType; label: string }[] = [
  { value: "septic", label: "Septic Tank" },
  { value: "holding", label: "Holding Tank" },
  { value: "rv", label: "RV / Camper" },
];

const inputClass =
  "w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-chartreuse-500 text-sm";
const labelClass = "block text-sm font-medium text-slate-700 mb-1";

export default function Booking() {
  const [step, setStep] = useState<Step>(1);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState<FormData>({
    service_type: null,
    delivery_date: "",
    pickup_date: "",
    quantity: "1",
    service_date: "",
    tank_type: "",
    address: "",
    notes: "",
    name: "",
    phone: "",
    email: "",
  });

  function set<K extends keyof FormData>(key: K, value: FormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function step2Valid() {
    if (form.service_type === "rental") {
      return form.delivery_date && form.pickup_date && form.address;
    }
    return form.service_date && form.address;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    const serviceLabel =
      form.service_type === "rental" ? "Portable Toilet Rental" : "Septic Pumping";

    const deliveryDate = form.service_type === "rental" ? form.delivery_date : form.service_date;
    const pickupDate = form.service_type === "rental" ? form.pickup_date : form.service_date;

    const calDates =
      deliveryDate && pickupDate
        ? `${deliveryDate.replace(/-/g, "")}/${pickupDate.replace(/-/g, "")}`
        : deliveryDate
        ? `${deliveryDate.replace(/-/g, "")}`
        : "";

    const calDetails = encodeURIComponent(
      [
        `Service: ${serviceLabel}`,
        form.service_type === "rental"
          ? `Units: ${form.quantity}`
          : `Tank type: ${form.tank_type || "Not specified"}`,
        `Customer: ${form.name}`,
        `Phone: ${form.phone}`,
        `Email: ${form.email}`,
        form.notes ? `Notes: ${form.notes}` : "",
      ]
        .filter(Boolean)
        .join("\n")
    );

    const calTitle = encodeURIComponent(`TX BM — ${serviceLabel} — ${form.name}`);
    const calLocation = encodeURIComponent(form.address);
    const calLink = calDates
      ? `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${calTitle}&dates=${calDates}&details=${calDetails}&location=${calLocation}`
      : "";

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          service: serviceLabel,
          service_type: form.service_type,
          delivery_date: deliveryDate || "Not specified",
          pickup_date: pickupDate || "Not specified",
          quantity: form.service_type === "rental" ? form.quantity : undefined,
          tank_type: form.service_type === "septic" ? form.tank_type : undefined,
          address: form.address,
          notes: form.notes,
          calendar_link: calLink,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <section id="booking" className="bg-slate-50 py-20 px-4">
        <div className="max-w-lg mx-auto text-center">
          <div className="w-16 h-16 bg-chartreuse-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
            ✓
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Booking Request Sent!</h2>
          <p className="text-slate-500">
            We&apos;ll confirm within 24 hours. Watch for a call or text from us at{" "}
            <a href="tel:+15124129489" className="text-blue-700 hover:underline">
              (512) 412-9489
            </a>
            .
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="bg-slate-50 py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">Schedule a Service</h2>
          <p className="text-slate-500 mt-3">
            Fill out the form below and we&apos;ll confirm your booking within 24 hours.
          </p>
        </div>

        {/* Step indicators */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {([1, 2, 3] as Step[]).map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                  step >= s
                    ? "bg-chartreuse-600 text-white"
                    : "bg-slate-200 text-slate-400"
                }`}
              >
                {s}
              </div>
              {s < 3 && <div className={`w-10 h-0.5 ${step > s ? "bg-chartreuse-600" : "bg-slate-200"}`} />}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
          {/* Step 1: Service Type */}
          {step === 1 && (
            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-6">What service do you need?</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { value: "rental" as const, icon: "🚽", label: "Portable Toilet Rental", desc: "Drop-off for events, construction sites, and residential use" },
                  { value: "septic" as const, icon: "🚛", label: "Septic Pumping", desc: "Pump-outs for septic tanks, holding tanks, and RVs" },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => { set("service_type", opt.value); setStep(2); }}
                    className={`text-left p-5 rounded-xl border-2 transition-all hover:shadow-md ${
                      form.service_type === opt.value
                        ? "border-chartreuse-500 bg-chartreuse-50"
                        : "border-slate-200 hover:border-chartreuse-300"
                    }`}
                  >
                    <div className="text-3xl mb-2">{opt.icon}</div>
                    <div className="font-bold text-slate-800">{opt.label}</div>
                    <div className="text-slate-500 text-sm mt-1">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Service Details */}
          {step === 2 && (
            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-6">
                {form.service_type === "rental" ? "Rental Details" : "Service Details"}
              </h3>
              <div className="space-y-4">
                {form.service_type === "rental" ? (
                  <>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Delivery Date *</label>
                        <input type="date" className={inputClass} value={form.delivery_date} onChange={(e) => set("delivery_date", e.target.value)} min={new Date().toISOString().split("T")[0]} required />
                      </div>
                      <div>
                        <label className={labelClass}>Pickup Date *</label>
                        <input type="date" className={inputClass} value={form.pickup_date} onChange={(e) => set("pickup_date", e.target.value)} min={form.delivery_date || new Date().toISOString().split("T")[0]} required />
                      </div>
                    </div>
                    <div>
                      <label className={labelClass}>Number of Units *</label>
                      <div className="flex gap-2">
                        {QUANTITY_OPTIONS.map((q) => (
                          <button
                            key={q}
                            type="button"
                            onClick={() => set("quantity", q)}
                            className={`flex-1 py-2.5 rounded-lg text-sm font-semibold border-2 transition-colors ${
                              form.quantity === q
                                ? "border-chartreuse-500 bg-chartreuse-50 text-chartreuse-700"
                                : "border-slate-200 text-slate-600 hover:border-chartreuse-300"
                            }`}
                          >
                            {q}
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label className={labelClass}>Service Date *</label>
                      <input type="date" className={inputClass} value={form.service_date} onChange={(e) => set("service_date", e.target.value)} min={new Date().toISOString().split("T")[0]} required />
                    </div>
                    <div>
                      <label className={labelClass}>Tank Type *</label>
                      <div className="flex gap-2 flex-wrap">
                        {TANK_OPTIONS.map((opt) => (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => set("tank_type", opt.value)}
                            className={`px-4 py-2.5 rounded-lg text-sm font-semibold border-2 transition-colors ${
                              form.tank_type === opt.value
                                ? "border-chartreuse-500 bg-chartreuse-50 text-chartreuse-700"
                                : "border-slate-200 text-slate-600 hover:border-chartreuse-300"
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                )}
                <div>
                  <label className={labelClass}>
                    {form.service_type === "rental" ? "Delivery Address *" : "Service Address *"}
                  </label>
                  <input type="text" className={inputClass} placeholder="123 Main St, Buda, TX" value={form.address} onChange={(e) => set("address", e.target.value)} required />
                </div>
                <div>
                  <label className={labelClass}>Notes (optional)</label>
                  <textarea className={`${inputClass} resize-none`} rows={3} placeholder="Event type, gate codes, special requirements..." value={form.notes} onChange={(e) => set("notes", e.target.value)} />
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button onClick={() => setStep(1)} className="flex-1 py-3 rounded-lg border-2 border-slate-200 text-slate-600 font-semibold hover:border-slate-300 transition-colors">
                  Back
                </button>
                <button
                  onClick={() => step2Valid() && setStep(3)}
                  disabled={!step2Valid()}
                  className="flex-1 py-3 rounded-lg bg-chartreuse-600 hover:bg-chartreuse-500 disabled:bg-slate-200 disabled:text-slate-400 text-white font-semibold transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Contact Info */}
          {step === 3 && (
            <form onSubmit={handleSubmit}>
              <h3 className="text-lg font-bold text-slate-800 mb-6">Your Contact Info</h3>
              <div className="space-y-4">
                <div>
                  <label className={labelClass}>Name *</label>
                  <input type="text" className={inputClass} placeholder="Jane Smith" value={form.name} onChange={(e) => set("name", e.target.value)} required />
                </div>
                <div>
                  <label className={labelClass}>Phone *</label>
                  <input type="tel" className={inputClass} placeholder="(512) 555-0100" value={form.phone} onChange={(e) => set("phone", e.target.value)} required />
                </div>
                <div>
                  <label className={labelClass}>Email *</label>
                  <input type="email" className={inputClass} placeholder="you@example.com" value={form.email} onChange={(e) => set("email", e.target.value)} required />
                </div>
              </div>
              {status === "error" && (
                <p className="text-red-500 text-sm mt-4">
                  Something went wrong. Please call us at{" "}
                  <a href="tel:+15124129489" className="underline">(512) 412-9489</a>.
                </p>
              )}
              <div className="flex gap-3 mt-6">
                <button type="button" onClick={() => setStep(2)} className="flex-1 py-3 rounded-lg border-2 border-slate-200 text-slate-600 font-semibold hover:border-slate-300 transition-colors">
                  Back
                </button>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex-1 py-3 rounded-lg bg-chartreuse-600 hover:bg-chartreuse-500 disabled:bg-slate-300 text-white font-semibold transition-colors"
                >
                  {status === "loading" ? "Sending..." : "Request Booking"}
                </button>
              </div>
            </form>
          )}
        </div>

        <p className="text-center text-slate-400 text-sm mt-6">
          Prefer to call?{" "}
          <a href="tel:+15124129489" className="text-blue-700 hover:underline font-medium">
            (512) 412-9489
          </a>
        </p>
      </div>
    </section>
  );
}
