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
    <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col gap-3 hover:shadow-md transition-shadow">
      <div className="text-3xl">{icon}</div>
      <div>
        <h3 className="font-bold text-slate-800 text-lg">{name}</h3>
        <p className="text-slate-500 text-sm mt-1">{description}</p>
      </div>
      <div className="mt-auto pt-3 flex items-end justify-between border-t border-slate-100">
        <div>
          <span className="text-2xl font-bold text-blue-900">{price}</span>
          <span className="text-slate-400 text-sm ml-1">{unit}</span>
        </div>
        <a
          href="#booking"
          className="bg-blue-900 hover:bg-blue-800 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
        >
          Book
        </a>
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
            <h3 className="text-xl font-bold text-blue-900 mb-5 pb-2 border-b border-blue-100">
              Event &amp; Private Rentals
            </h3>
            <div className="flex flex-col gap-4">
              {rentals.map((s) => (
                <ServiceCard key={s.name} {...s} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-5 pb-2 border-b border-blue-100">
              Septic Care
            </h3>
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
