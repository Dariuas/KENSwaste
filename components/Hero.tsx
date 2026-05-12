export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white pt-32 pb-36 px-4">
      {/* Background photo — drop a file at public/images/hero.jpg to enable */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />
      {/* Dark overlay keeps text readable over the photo */}
      <div className="absolute inset-0 bg-blue-950/75" />

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <span className="inline-block bg-green-600 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          Serving Central Texas
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Reliable Portable Toilet &amp;{" "}
          <span className="text-green-400">Septic Services</span>
        </h1>

        <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          From weddings to construction sites — TX BM Rentals and Septic Pump has the equipment
          and expertise to keep your sanitation needs covered. Proudly serving
          Buda, Kyle, San Marcos, and the greater Austin area.
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

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 leading-none">
        <svg viewBox="0 0 1440 56" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-14">
          <path d="M0 56L60 46.7C120 37.3 240 18.7 360 14C480 9.3 600 18.7 720 23.3C840 28 960 28 1080 23.3C1200 18.7 1320 9.3 1380 4.7L1440 0V56H1380C1320 56 1200 56 1080 56C960 56 840 56 720 56C600 56 480 56 360 56C240 56 120 56 60 56H0Z" fill="#f8fafc"/>
        </svg>
      </div>
    </section>
  );
}
