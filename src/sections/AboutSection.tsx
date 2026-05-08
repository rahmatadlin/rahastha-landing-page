import { Button } from "@/components/ui/Button";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function AboutSection() {
  return (
    <SectionContainer id="tentang-kami" background="white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Left Content */}
        <div>
          <SectionLabel>Tentang Kami</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Solusi Terpadu untuk Perkebunan Sawit yang Lebih{" "}
            <span className="text-[#1B5E20]">Produktif</span> dan{" "}
            <span className="text-[#C9A227]">Berkelanjutan</span>
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-5">
            PT. Rahastha Bina Unggul adalah perusahaan yang berdiri sejak 2025,
            berfokus pada penyediaan jasa dan solusi profesional di sektor
            perkebunan kelapa sawit.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-5">
            Kami melayani kebutuhan antara prinsipal produk dan perusahaan
            perkebunan, dengan pendekatan berbasis teknis, komersial, dan
            implementasi lapangan yang terukur dan berdampak nyata.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-8">
            Dengan tim yang berpengalaman dan jaringan yang luas di industri
            perkebunan, kami berkomitmen untuk memberikan solusi end-to-end
            yang membantu klien mencapai target produktivitas dan efisiensi
            operasional secara berkelanjutan.
          </p>
          <Button variant="outline" size="md" href="#layanan">
            Selengkapnya Tentang Kami →
          </Button>
        </div>

        {/* Right - Image Placeholder */}
        <div className="relative">
          {/* Main image */}
          <div className="rounded-3xl overflow-hidden aspect-[4/5] bg-gray-100 flex items-center justify-center shadow-lg">
            <div className="text-center text-gray-400">
              <svg className="w-20 h-20 mx-auto mb-3 opacity-40" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
              </svg>
              <p className="text-sm">Foto Tim / Lapangan</p>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute bottom-8 -left-8 bg-[#1B5E20] text-white rounded-2xl p-5 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="text-center">
                <p className="text-2xl font-bold text-[#C9A227]">100%</p>
                <p className="text-xs text-green-200 mt-1">Komitmen Solusi</p>
              </div>
            </div>
          </div>

          {/* Decorative dot grid */}
          <div className="absolute -top-6 -right-6 w-24 h-24 opacity-20">
            <svg viewBox="0 0 80 80" fill="#1B5E20">
              {Array.from({ length: 4 }, (_, r) =>
                Array.from({ length: 4 }, (_, c) => (
                  <circle key={`${r}-${c}`} cx={10 + c * 20} cy={10 + r * 20} r="3" />
                ))
              )}
            </svg>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
