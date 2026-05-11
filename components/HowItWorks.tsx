const steps = [
  {
    num: "01",
    icon: "📋",
    title: "Request or Book",
    desc: "Call us, fill out the quote form, or use our online booking calendar to pick your date and service.",
  },
  {
    num: "02",
    icon: "🚛",
    title: "We Deliver & Set Up",
    desc: "Our team delivers and positions your unit at your location — clean, stocked, and ready to use.",
  },
  {
    num: "03",
    icon: "✅",
    title: "Pickup When You're Done",
    desc: "We handle the rest. When your rental period ends or pump-out is complete, we take care of pickup and disposal.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">
            How It Works
          </h2>
          <p className="text-slate-500 mt-3">
            Simple, fast, and stress-free from start to finish.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden sm:block absolute top-10 left-[20%] right-[20%] h-0.5 bg-blue-100" />

          {steps.map((step) => (
            <div key={step.num} className="flex flex-col items-center text-center relative">
              {/* Icon circle */}
              <div className="w-20 h-20 rounded-full bg-blue-50 border-2 border-blue-100 flex items-center justify-center text-3xl mb-4 relative z-10 bg-white">
                {step.icon}
              </div>

              {/* Step number */}
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">
                Step {step.num}
              </span>

              <h3 className="font-bold text-slate-800 text-lg mb-2">
                {step.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#booking"
            className="inline-block bg-green-600 hover:bg-green-500 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Book a Service Today
          </a>
        </div>
      </div>
    </section>
  );
}
