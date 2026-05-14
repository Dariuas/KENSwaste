const photos = [
  {
    src: "/images/USER_SCOPED_TEMP_DATA_MSGR_PHOTO_FOR_UPLOAD_1542823694694.jpg_1542823729367.jpeg",
    alt: "Branded TX BM Rentals portable toilet ready for delivery",
    label: "Fleet Ready for Delivery",
  },
  {
    src: "/images/F2E0789B-3586-41A4-8DA6-3EB9D94CD773.png",
    alt: "Luxury lavatory trailer",
    label: "Luxury Lavatory Trailer Available",
  },
  {
    src: "/images/IMG_20181125_083530_707.jpeg",
    alt: "Clean, well-stocked portable toilet interior",
    label: "Clean Every Delivery",
  },
  {
    src: "/images/KIMG0578.jpeg",
    alt: "Fresh portable toilet interior close-up",
    label: "Stocked & Ready",
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

        {/* Magazine grid: tall left + wide top-right + 2 bottom-right */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-3"
          style={{ height: "480px" }}
        >
          {/* Tall left — spans both rows on desktop */}
          <div className="relative overflow-hidden rounded-2xl md:row-span-2">
            <img
              src={photos[0].src}
              alt={photos[0].alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/80 to-transparent p-4">
              <span className="inline-block bg-chartreuse-600 text-white text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded mb-1">
                Rentals
              </span>
              <p className="text-white text-sm font-semibold">{photos[0].label}</p>
            </div>
          </div>

          {/* Wide top-right — spans 2 columns on desktop */}
          <div className="relative overflow-hidden rounded-2xl md:col-span-2">
            <img
              src={photos[1].src}
              alt={photos[1].alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/80 to-transparent p-4">
              <span className="inline-block bg-chartreuse-600 text-white text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded mb-1">
                Premium
              </span>
              <p className="text-white text-sm font-semibold">{photos[1].label}</p>
            </div>
          </div>

          {/* Bottom-right pair */}
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={photos[2].src}
              alt={photos[2].alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/80 to-transparent p-3">
              <p className="text-white text-xs font-semibold">{photos[2].label}</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={photos[3].src}
              alt={photos[3].alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/80 to-transparent p-3">
              <p className="text-white text-xs font-semibold">{photos[3].label}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
