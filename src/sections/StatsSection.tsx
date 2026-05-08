import { stats } from "@/lib/data";

export function StatsSection() {
  return (
    <section className="relative bg-[#1B5E20] py-16 md:py-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center group"
            >
              <p className="text-4xl md:text-5xl font-bold text-[#C9A227] mb-2 transition-transform duration-200 group-hover:scale-110">
                {stat.value}
              </p>
              <div className="w-10 h-1 bg-[#C9A227]/40 rounded-full mx-auto mb-3" />
              <p className="text-green-100 text-sm md:text-base leading-tight max-w-[140px] mx-auto">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
