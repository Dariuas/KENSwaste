const photos = [
  {
    src: "/images/luxury-exterior.jpg",
    alt: "BM Luxury Restroom Trailer exterior",
    label: "2-Suite Luxury Trailer",
    badge: "Fleet",
  },
  {
    src: "/images/luxury-collage.jpg",
    alt: "BM Luxury Restroom Trailer at an outdoor venue with interior shots",
    label: "Perfect for Any Event",
    badge: "Premium",
  },
  {
    src: "/images/luxury-interior.jpg",
    alt: "Luxury restroom trailer interior — women's and men's suites",
    label: "Elegant Interior Finishes",
    badge: "Inside",
  },
];

export default function PhotoGallery() {
  return (
    <section className="bg-slate-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-800">Our Equipment</h2>
          <p className="text-slate-500 mt-2">
            Clean, branded, and ready wherever you need us in Central Texas.
          </p>
        </div>

        {/* Magazine grid: tall left + 2 stacked right */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-3"
          style={{ height: "480px" }}
        >
          {/* Left: tall spanning both rows */}
          <div className="relative overflow-hidden rounded-2xl row-span-2">
            <img
              src={photos[1].src}
              alt={photos[1].alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/80 to-transparent p-4">
              <span className="inline-block bg-chartreuse-600 text-white text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded mb-1">
                {photos[1].badge}
              </span>
              <p className="text-white text-sm font-semibold">{photos[1].label}</p>
            </div>
          </div>

          {/* Top right */}
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={photos[0].src}
              alt={photos[0].alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/80 to-transparent p-3">
              <span className="inline-block bg-chartreuse-600 text-white text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded mb-1">
                {photos[0].badge}
              </span>
              <p className="text-white text-xs font-semibold">{photos[0].label}</p>
            </div>
          </div>

          {/* Bottom right */}
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={photos[2].src}
              alt={photos[2].alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/80 to-transparent p-3">
              <span className="inline-block bg-chartreuse-600 text-white text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded mb-1">
                {photos[2].badge}
              </span>
              <p className="text-white text-xs font-semibold">{photos[2].label}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
