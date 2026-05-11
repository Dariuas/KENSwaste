const cities = [
  "Buda",
  "Kyle",
  "San Marcos",
  "Wimberley",
  "Dripping Springs",
  "Lockhart",
  "Seguin",
  "New Braunfels",
  "Austin",
  "Bastrop",
  "Luling",
  "Gonzales",
];

export default function ServiceArea() {
  return (
    <section className="bg-blue-900 py-16 px-4 text-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-3">We Serve Central Texas</h2>
        <p className="text-blue-200 mb-8">
          Based in the Austin area — if your city isn&apos;t listed, give us a
          call. We likely cover you.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {cities.map((city) => (
            <span
              key={city}
              className="bg-blue-800 border border-blue-700 text-blue-100 px-4 py-2 rounded-full text-sm font-medium"
            >
              {city}, TX
            </span>
          ))}
        </div>
        <p className="text-blue-300 text-sm mt-8">
          Don&apos;t see your city?{" "}
          <a
            href="#contact"
            className="text-green-400 underline hover:text-green-300"
          >
            Contact us
          </a>{" "}
          — we&apos;re happy to discuss your location.
        </p>
      </div>
    </section>
  );
}
