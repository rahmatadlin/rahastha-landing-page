import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="relative bg-gradient-to-br from-[#0a3d0e] via-[#1B5E20] to-[#2E7D32] py-20 md:py-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="cta-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="white" stopOpacity="0.3" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-glow)" />
        </svg>
      </div>

      {/* Decorative circles */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/5 rounded-full" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#C9A227]/10 rounded-full" />

      <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center">
        <span className="inline-block bg-[#C9A227]/20 text-[#C9A227] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-[#C9A227]/30">
          Mulai Sekarang
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Siap Meningkatkan Produktivitas{" "}
          <span className="text-[#C9A227]">Perkebunan Anda</span>?
        </h2>
        <p className="text-green-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Mari bermitra bersama Rahastha Bina Unggul untuk solusi terbaik
          dan hasil yang berkelanjutan bagi perkebunan sawit Anda.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            variant="secondary"
            size="lg"
            href="#kontak"
          >
            Hubungi Kami Sekarang →
          </Button>
          <Button
            variant="outline"
            size="lg"
            href="#layanan"
            className="border-white text-white hover:bg-white hover:text-[#1B5E20]"
          >
            Lihat Layanan Kami
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-14 flex flex-wrap gap-8 justify-center items-center">
          {[
            { value: "+10", label: "Mitra Prinsipal" },
            { value: "+20", label: "Klien Aktif" },
            { value: "100%", label: "Kepuasan Klien" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-2xl font-bold text-[#C9A227]">{item.value}</p>
              <p className="text-green-200 text-sm mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
