import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section
      id="beranda"
      className="relative min-h-screen bg-gradient-to-br from-[#0a3d0e] via-[#1B5E20] to-[#2E7D32] flex items-center pt-20"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="leaf-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#leaf-pattern)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block bg-[#C9A227]/20 text-[#C9A227] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-[#C9A227]/30">
              Mitra Strategis Perkebunan Sawit
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Mitra Strategis untuk{" "}
              <span className="text-[#C9A227]">Pertumbuhan Optimal</span>{" "}
              Perkebunan Sawit
            </h1>
            <p className="text-green-100 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              Menyediakan solusi profesional dan inovatif untuk meningkatkan
              produktivitas dan efisiensi di setiap tahap perkebunan sawit.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                variant="secondary"
                size="lg"
                href="#layanan"
              >
                Layanan Kami
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="#kontak"
                className="border-white text-white hover:bg-white hover:text-[#1B5E20]"
              >
                Hubungi Kami
              </Button>
            </div>

            {/* Quick stats */}
            <div className="mt-12 flex flex-wrap gap-8">
              {[
                { value: "+10", label: "Mitra Prinsipal" },
                { value: "+20", label: "Klien Perkebunan" },
                { value: "100%", label: "Komitmen" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold text-[#C9A227]">{stat.value}</p>
                  <p className="text-green-200 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image Placeholder */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl aspect-[4/3] flex items-center justify-center">
                <div className="text-center">
                  <svg
                    className="w-24 h-24 text-white/30 mx-auto mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                  </svg>
                  <p className="text-white/40 text-sm">Perkebunan Sawit</p>
                </div>
              </div>
            </div>
            {/* Decorative card */}
            <div className="absolute -bottom-6 -left-6 bg-[#C9A227] text-white rounded-2xl p-5 shadow-xl">
              <p className="text-3xl font-bold">2025</p>
              <p className="text-sm opacity-90 mt-1">Tahun Berdiri</p>
            </div>
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-5 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <svg width="20" height="20" fill="#1B5E20" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Solusi</p>
                  <p className="font-bold text-gray-800 text-sm">Berkelanjutan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 30C1200 70 960 10 720 40C480 70 240 10 0 30L0 80Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
