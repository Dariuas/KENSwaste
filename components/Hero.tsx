export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white pt-32 pb-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block bg-green-600 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          Serving Central Texas
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Reliable Portable Toilet &amp;{" "}
          <span className="text-green-400">Septic Services</span>
        </h1>

        <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          From porta potty rentals to full septic pump-outs — we keep your
          site, event, or home running smoothly. Proudly serving Buda, Kyle,
          San Marcos, and the greater Austin area.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#booking"
            className="bg-green-600 hover:bg-green-500 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Book a Service
          </a>
          <a
            href="#quote"
            className="border-2 border-white hover:bg-white hover:text-blue-900 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Request a Quote
          </a>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-blue-200 text-sm">
          {[
            "Licensed & Insured",
            "Fast Response",
            "Flat-Rate Pricing",
            "Central Texas Based",
          ].map((badge) => (
            <div key={badge} className="flex items-center gap-2">
              <span className="text-green-400">&#10003;</span> {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
