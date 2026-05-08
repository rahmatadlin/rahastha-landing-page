import { Card } from "@/components/ui/Card";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionLabel } from "@/components/ui/SectionLabel";

const principalServices = [
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: "Pengenalan Produk",
    description:
      "Presentasi produk ke perusahaan perkebunan. Akses langsung ke decision maker dan end-user untuk memastikan produk dikenal secara tepat sasaran.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
    title: "Pembentukan Permintaan",
    description:
      "Uji coba produk (trial). Pembahasan dampak secara komprehensif dan berbasis data untuk membangun kepercayaan dan permintaan yang berkelanjutan.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    title: "Komersialisasi",
    description:
      "Strategi promosi & positioning produk. Dukungan penjualan & ekspansi pasar untuk memaksimalkan penetrasi dan revenue produk Anda.",
  },
];

const plantationServices = [
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 000 20" />
        <path d="M12 2c2.8 2.8 4.5 6.3 4.5 10S14.8 19.2 12 22" />
        <path d="M2 12h20" />
        <path d="M12 2c-2.8 2.8-4.5 6.3-4.5 10S9.2 19.2 12 22" />
      </svg>
    ),
    title: "Nursery Excellence (Pembibitan Sawit)",
    description:
      "Optimasi pertumbuhan bibit (vigor & uniformity). Efisiensi biaya produksi bibilit. Best practice siap tonton ke lapangan untuk memastikan kualitas bibit terbaik.",
    image: true,
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M3 3h18M3 9h18M3 15h18M3 21h18" strokeOpacity="0.5" />
        <path d="M12 3v18" />
        <circle cx="8" cy="12" r="2" fill="currentColor" fillOpacity="0.2" />
        <circle cx="16" cy="8" r="2" fill="currentColor" fillOpacity="0.2" />
      </svg>
    ),
    title: "Weed Management (Pengendalian Gulma)",
    description:
      "Strategi pengendalian gulma yang efektif & efisien. Program berkelanjutan di Nursery dan TBM (Tanaman Belum Menghasilkan) untuk menekan biaya operasional.",
    image: true,
  },
];

export function ServicesSection() {
  return (
    <SectionContainer id="layanan" background="gray">
      {/* Section header */}
      <div className="text-center mb-12">
        <SectionLabel>Layanan Kami</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          Solusi untuk Perusahaan Produk &amp;{" "}
          <span className="text-[#1B5E20]">Perusahaan Perkebunan</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Category A: Untuk Prinsipal */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#1B5E20] rounded-xl flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
                <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">
                Untuk Perusahaan Produk / Prinsipal
              </h3>
              <p className="text-gray-500 text-sm">
                Strategi penetrasi pasar perkebunan
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {principalServices.map((service) => (
              <Card key={service.title} hover padding="md">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-50 text-[#1B5E20] rounded-xl flex items-center justify-center flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Category B: Untuk Perkebunan */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#C9A227] rounded-xl flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                <path d="M17 8C8 10 5.9 16.17 3.82 19.58a1 1 0 001.72 1C7.28 18.5 10 17 12 17c4 0 4-2 8-2V8h-3z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">
                Untuk Perusahaan Perkebunan
              </h3>
              <p className="text-gray-500 text-sm">
                Peningkatan produktivitas &amp; efisiensi
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {plantationServices.map((service) => (
              <Card key={service.title} hover padding="md">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-amber-50 text-[#C9A227] rounded-xl flex items-center justify-center flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      {service.description}
                    </p>
                    {/* Placeholder image */}
                    <div className="bg-gray-100 rounded-xl aspect-video flex items-center justify-center">
                      <div className="text-center text-gray-400">
                        <svg className="w-10 h-10 mx-auto opacity-40" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                        </svg>
                        <p className="text-xs mt-1">Foto Lapangan</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
