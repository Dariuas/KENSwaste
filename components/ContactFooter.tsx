const quickLinks = [
  { label: "Services & Pricing", href: "#services" },
  { label: "Book a Service", href: "#booking" },
  { label: "Request a Quote", href: "#quote" },
];

export default function ContactFooter() {
  return (
    <>
      <section id="contact" className="bg-slate-800 py-16 px-4 text-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-bold text-lg mb-3">TX BM Rentals and Septic Pump</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Reliable portable toilet and septic services for Central Texas —
              events, construction sites, residential, and commercial.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">Contact</h3>
            <ul className="text-slate-400 text-sm space-y-2">
              <li>
                <a
                  href="tel:+15124129489"
                  className="hover:text-white transition-colors"
                >
                  📞 (512) 412-9489
                </a>
              </li>
              <li>
                {/* TODO: replace with actual email address */}
                <a
                  href="mailto:info@kenswaste.com"
                  className="hover:text-white transition-colors"
                >
                  ✉️ info@kenswaste.com
                </a>
              </li>
              <li>📍 Serving Central Texas</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">Quick Links</h3>
            <ul className="text-slate-400 text-sm space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 py-4 px-4 text-center text-slate-500 text-xs">
        &copy; {new Date().getFullYear()} TX BM Rentals and Septic Pump. All rights reserved.
      </footer>
    </>
  );
}
