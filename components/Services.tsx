const luxuryRates = [
  { label: "Monday – Thursday", price: "$895" },
  { label: "Friday", price: "$995" },
  { label: "Saturday", price: "$1,295" },
  { label: "Sunday", price: "$995" },
  { label: "Weekend (Fri – Sun)", price: "$1,895" },
  { label: "Weekend (Sat – Sun)", price: "$1,595" },
  { label: "Weekly", price: "$3,995" },
  { label: "Monthly", price: "From $5,995" },
];

const luxuryAddOns = [
  { label: "Additional mileage (beyond 30 mi)", price: "$4.00/mile" },
  { label: "Generator rental", price: "$175/day" },
  { label: "Freshwater refill", price: "$125" },
  { label: "Additional waste pumping", price: "$175" },
  { label: "Attendant", price: "$40/hr (4-hr min)" },
  { label: "Emergency after-hours", price: "$250" },
  { label: "Holiday surcharge", price: "$150" },
  { label: "Optional damage waiver", price: "$50" },
];

const rentals = [
  {
    icon: "🚽",
    name: "Portable Toilet",
    description: "One portable toilet rental for a 48-hour period.",
    price: "$150",
    unit: "/ 48 hrs",
  },
  {
    icon: "🪣",
    name: "Holding Tank",
    description: "One holding tank as a monthly rental.",
    price: "$275",
    unit: "/ month",
  },
  {
    icon: "🖐️",
    name: "Hand Washing Station",
    description: "One portable hand washing station for a 48-hour period.",
    price: "$120",
    unit: "/ 48 hrs",
  },
];

const septic = [
  {
    icon: "🚛",
    name: "Septic Pump Out",
    description: "Full septic pump-out service, up to 1,500 gallons.",
    price: "$400",
    unit: "up to 1,500 gal",
  },
  {
    icon: "💧",
    name: "Holding Tank Pump Out",
    description: "Pump-out service for holding tanks, up to 300 gallons.",
    price: "$150",
    unit: "up to 300 gal",
  },
  {
    icon: "🚐",
    name: "RV Pump Out",
    description: "RV waste pump-out service, up to 60 gallons.",
    price: "$150",
    unit: "up to 60 gal",
  },
];

type Service = {
  icon: string;
  name: string;
  description: string;
  price: string;
  unit: string;
};

function ServiceCard({ icon, name, description, price, unit }: Service) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 flex gap-4 hover:shadow-md transition-shadow items-start">
      <div className="flex-shrink-0 w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl border border-slate-200">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-slate-800">{name}</h3>
        <p className="text-slate-500 text-sm mt-0.5">{description}</p>
        <div className="mt-3 flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-slate-800">{price}</span>
            <span className="text-slate-400 text-xs ml-1">{unit}</span>
          </div>
          <a
            href="#booking"
            className="bg-chartreuse-600 hover:bg-chartreuse-500 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
          >
            Book
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">
            Services &amp; Pricing
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">
            Transparent, flat-rate pricing with no hidden fees. We serve events,
            construction sites, residences, and more.
          </p>
        </div>

        {/* Luxury Restroom Trailer — full-width featured section */}
        <div className="mb-14 rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-white">
          <div className="grid md:grid-cols-2">
            {/* Left: image */}
            <div className="relative h-64 md:h-auto overflow-hidden">
              <img
                src="/images/luxury-interior.jpg"
                alt="Luxury restroom trailer interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-900/40" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="inline-block bg-chartreuse-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-2">
                  Premium Service
                </span>
                <h3 className="text-2xl font-bold text-white leading-tight">
                  Luxury Restroom Trailer
                </h3>
                <p className="text-slate-200 text-sm mt-1">
                  Elegant. Clean. Comfortable. — Climate-controlled, flushing toilets &amp; premium finishes.
                </p>
              </div>
            </div>

            {/* Right: pricing */}
            <div className="p-6 md:p-8">
              {/* What's included */}
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">
                Every rental includes
              </p>
              <ul className="text-slate-600 text-sm grid grid-cols-2 gap-x-4 gap-y-1 mb-6">
                {[
                  "Delivery within 30 miles",
                  "Professional setup & pickup",
                  "Toilet paper, paper towels & soap",
                  "Freshwater fill",
                  "Waste disposal",
                  "Complete sanitizing",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-1.5">
                    <span className="text-chartreuse-600 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Rate table */}
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
                2026 Rental Rates
              </p>
              <div className="rounded-xl overflow-hidden border border-slate-200 mb-4">
                {luxuryRates.map((row, i) => (
                  <div
                    key={row.label}
                    className={`flex items-center justify-between px-4 py-2.5 text-sm ${
                      i % 2 === 0 ? "bg-white" : "bg-slate-50"
                    }`}
                  >
                    <span className="text-slate-700">{row.label}</span>
                    <span className="font-bold text-slate-900">{row.price}</span>
                  </div>
                ))}
              </div>

              {/* Add-ons */}
              <details className="group">
                <summary className="cursor-pointer text-xs font-semibold uppercase tracking-widest text-slate-400 list-none flex items-center gap-1 mb-2">
                  <span>Add-ons &amp; Extras</span>
                  <span className="group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <div className="rounded-xl overflow-hidden border border-slate-200 mb-4">
                  {luxuryAddOns.map((row, i) => (
                    <div
                      key={row.label}
                      className={`flex items-center justify-between px-4 py-2 text-xs ${
                        i % 2 === 0 ? "bg-white" : "bg-slate-50"
                      }`}
                    >
                      <span className="text-slate-600">{row.label}</span>
                      <span className="font-semibold text-slate-800">{row.price}</span>
                    </div>
                  ))}
                </div>
              </details>

              <p className="text-xs text-slate-400 mb-4">
                25% non-refundable deposit to reserve. Balance due 7 days before delivery.
                Business accounts may qualify for Net 30 terms.
              </p>

              <a
                href="#booking"
                className="block text-center bg-chartreuse-600 hover:bg-chartreuse-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                Book the Luxury Trailer
              </a>
            </div>
          </div>
        </div>

        {/* Portable Rentals & Septic */}
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <div
              className="rounded-2xl overflow-hidden bg-gradient-to-r from-slate-800 to-slate-600 p-6 mb-5 flex items-center gap-4 text-white relative"
              style={{ backgroundImage: "url('/images/luxury-exterior.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
            >
              <div className="absolute inset-0 bg-slate-900/80 rounded-2xl" />
              <div className="text-5xl relative z-10">🚽</div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold">Event &amp; Private Rentals</h3>
                <p className="text-slate-200 text-sm mt-0.5">
                  Portable toilets, tanks &amp; hand washing for any occasion
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {rentals.map((s) => (
                <ServiceCard key={s.name} {...s} />
              ))}
            </div>
          </div>

          <div>
            <div
              className="rounded-2xl overflow-hidden bg-gradient-to-r from-slate-800 to-slate-600 p-6 mb-5 flex items-center gap-4 text-white relative"
              style={{ backgroundImage: "url('/images/IMG_0732.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }}
            >
              <div className="absolute inset-0 bg-slate-900/80 rounded-2xl" />
              <div className="text-5xl relative z-10">🚛</div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold">Septic Care</h3>
                <p className="text-slate-200 text-sm mt-0.5">
                  Professional pump-outs for septic tanks, holding tanks &amp; RVs
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {septic.map((s) => (
                <ServiceCard key={s.name} {...s} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
