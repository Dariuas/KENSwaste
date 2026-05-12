export default function About() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Tagline callout */}
        <div className="bg-blue-950 text-white rounded-2xl px-8 py-10 text-center mb-14">
          <p className="text-2xl sm:text-3xl font-bold leading-snug">
            We strive to be{" "}
            <span className="text-green-400">number one</span>{" "}
            in the{" "}
            <span className="text-green-400">number two</span>{" "}
            business.
          </p>
          <p className="text-blue-300 mt-3 text-sm">
            Locally owned &amp; family operated — Kyle, Buda, and beyond
          </p>
        </div>

        {/* Two-column content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">
              Reliable Sanitation Services for Any Event or Job Site
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              At KENS Waste, we offer reliable porta-potty rentals, septic pumping, and
              septic tank services for any event or job site. From weddings to construction
              sites, we have the equipment and expertise to ensure your sanitation needs
              are met.
            </p>
            <a
              href="#quote"
              className="inline-block bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Get a Fast, Friendly Quote
            </a>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center text-xl border border-blue-100">
                🏆
              </div>
              <div>
                <h3 className="font-bold text-slate-800 mb-1">7+ Years Serving Central Texas</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  KENS Waste has supplied the best customer service in the Kyle, Buda, and
                  surrounding areas for over seven years. We continue to provide a service
                  our customers can depend on.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center text-xl border border-blue-100">
                🤝
              </div>
              <div>
                <h3 className="font-bold text-slate-800 mb-1">Local Family Business</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  As a locally owned family business, we can deliver more than the larger
                  companies can. For us, communication is critical and delivery is king.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center text-xl border border-blue-100">
                📋
              </div>
              <div>
                <h3 className="font-bold text-slate-800 mb-1">Simple Booking Process</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Our simple booking process removes one more thing from your list — whether
                  you need a porta-potty for your next event or your septic tank handled
                  quickly and professionally.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
