const stats = [
  { value: "6+", label: "Services Offered" },
  { value: "48hr", label: "Rental Turnaround" },
  { value: "1,500", label: "Max Gallon Pump-Out" },
  { value: "10+", label: "Cities Served" },
];

export default function StatsBanner() {
  return (
    <div className="bg-white border-b border-slate-100 py-8 px-4">
      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-3xl font-bold text-slate-800">{s.value}</div>
            <div className="text-slate-500 text-sm mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
