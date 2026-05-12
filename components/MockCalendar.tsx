"use client";

import { useState } from "react";

const SERVICES = [
  "Portable Toilet Rental ($130 / 48 hrs)",
  "Holding Tank Rental ($275 / month)",
  "Hand Washing Station ($120 / 48 hrs)",
  "Septic Pump Out ($400 — up to 1,500 gal)",
  "Holding Tank Pump Out ($150 — up to 300 gal)",
  "RV Pump Out ($150 — up to 60 gal)",
];

const TIME_SLOTS = [
  "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
];

// Days of the month that appear "already booked"
const BOOKED_DAYS = new Set([3, 7, 12, 18, 22, 27]);

const DAY_LABELS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export default function MockCalendar() {
  const today = new Date();

  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const firstDayOfWeek = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const monthLabel = new Date(year, month).toLocaleString("default", { month: "long" });

  function prevMonth() {
    if (month === 0) { setMonth(11); setYear((y) => y - 1); }
    else setMonth((m) => m - 1);
    reset();
  }

  function nextMonth() {
    if (month === 11) { setMonth(0); setYear((y) => y + 1); }
    else setMonth((m) => m + 1);
    reset();
  }

  function reset() {
    setSelectedDay(null);
    setSelectedTime(null);
    setSelectedService("");
    setConfirmed(false);
  }

  function isAvailable(day: number) {
    const date = new Date(year, month, day);
    const isPast = date < new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const isWeekend = date.getDay() === 0 || date.getDay() === 6;
    return !isPast && !isWeekend && !BOOKED_DAYS.has(day);
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="grid md:grid-cols-[1fr_1.1fr]">

        {/* ── Calendar panel ── */}
        <div className="p-6 border-b md:border-b-0 md:border-r border-slate-100">
          {/* Month navigation */}
          <div className="flex items-center justify-between mb-5">
            <button
              onClick={prevMonth}
              className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 text-slate-500 transition-colors"
              aria-label="Previous month"
            >
              ‹
            </button>
            <span className="font-bold text-slate-800">
              {monthLabel} {year}
            </span>
            <button
              onClick={nextMonth}
              className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 text-slate-500 transition-colors"
              aria-label="Next month"
            >
              ›
            </button>
          </div>

          {/* Day-of-week headers */}
          <div className="grid grid-cols-7 mb-1">
            {DAY_LABELS.map((d) => (
              <div key={d} className="text-center text-xs font-medium text-slate-400 py-1">
                {d}
              </div>
            ))}
          </div>

          {/* Day grid */}
          <div className="grid grid-cols-7 gap-y-1">
            {Array.from({ length: firstDayOfWeek }).map((_, i) => (
              <div key={`pad-${i}`} />
            ))}
            {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
              const available = isAvailable(day);
              const selected = selectedDay === day;
              return (
                <button
                  key={day}
                  disabled={!available}
                  onClick={() => {
                    setSelectedDay(day);
                    setSelectedTime(null);
                    setSelectedService("");
                    setConfirmed(false);
                  }}
                  className={`
                    aspect-square rounded-lg text-sm font-medium transition-colors
                    flex items-center justify-center mx-auto w-9 h-9
                    ${selected ? "bg-blue-900 text-white" : ""}
                    ${available && !selected ? "text-slate-700 hover:bg-blue-50 cursor-pointer" : ""}
                    ${!available ? "text-slate-300 cursor-not-allowed" : ""}
                  `}
                >
                  {day}
                </button>
              );
            })}
          </div>

          {/* Legend */}
          <div className="mt-4 flex gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-blue-900 inline-block" /> Selected
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-slate-200 inline-block" /> Unavailable
            </span>
          </div>
        </div>

        {/* ── Time / confirmation panel ── */}
        <div className="p-6 bg-slate-50 min-h-[340px] flex flex-col">
          {!selectedDay && (
            <div className="flex-1 flex flex-col items-center justify-center text-center text-slate-400">
              <div className="text-4xl mb-3">📅</div>
              <p className="text-sm">Select an available date<br />to see open time slots</p>
            </div>
          )}

          {selectedDay && confirmed && (
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="font-bold text-green-700 text-lg">Booking Request Sent!</h3>
              <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                We&apos;ll confirm your appointment for<br />
                <strong>{monthLabel} {selectedDay} at {selectedTime}</strong><br />
                within 24 hours.
              </p>
              <button
                onClick={reset}
                className="mt-5 text-blue-700 text-sm underline hover:text-blue-900"
              >
                Book another service
              </button>
            </div>
          )}

          {selectedDay && !confirmed && (
            <>
              <h3 className="font-bold text-slate-800 text-base mb-1">
                {monthLabel} {selectedDay}
              </h3>
              <p className="text-slate-500 text-xs mb-4">Select a time slot</p>

              {/* Time slots */}
              <div className="grid grid-cols-2 gap-2 mb-5">
                {TIME_SLOTS.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`py-2 px-3 rounded-lg text-sm font-medium border transition-colors ${
                      selectedTime === time
                        ? "bg-blue-900 border-blue-900 text-white"
                        : "bg-white border-slate-200 text-slate-700 hover:border-blue-400"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>

              {selectedTime && (
                <div className="mt-auto">
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Service
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full border border-slate-200 bg-white rounded-lg px-3 py-2 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a service...</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>

                  <button
                    onClick={() => setConfirmed(true)}
                    disabled={!selectedService}
                    className="w-full bg-green-600 hover:bg-green-500 disabled:opacity-50 text-white font-semibold py-3 rounded-lg transition-colors"
                  >
                    Request Booking
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
