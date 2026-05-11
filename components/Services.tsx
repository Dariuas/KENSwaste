const rentals = [
  {
    icon: "🚽",
    name: "Portable Toilet",
    description: "One portable toilet rental for a 48-hour period.",
    price: "$130",
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
      <div className="flex-shrink-0 w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-2xl border border-blue-100">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-slate-800">{name}</h3>
        <p className="text-slate-500 text-sm mt-0.5">{description}</p>
        <div className="mt-3 flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-blue-900">{price}</span>
            <span className="text-slate-400 text-xs ml-1">{unit}</span>
          </div>
          <a
            href="#booking"
            className="bg-blue-900 hover:bg-blue-800 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
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

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            {/* Rental category banner */}
            <div className="rounded-2xl bg-gradient-to-r from-blue-900 to-blue-700 p-6 mb-5 flex items-center gap-4 text-white">
              <div className="text-5xl">🚽</div>
              <div>
                <h3 className="text-xl font-bold">Event &amp; Private Rentals</h3>
                <p className="text-blue-200 text-sm mt-0.5">
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
            {/* Septic category banner */}
            <div className="rounded-2xl bg-gradient-to-r from-green-800 to-green-600 p-6 mb-5 flex items-center gap-4 text-white">
              <div className="text-5xl">🚛</div>
              <div>
                <h3 className="text-xl font-bold">Septic Care</h3>
                <p className="text-green-100 text-sm mt-0.5">
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
