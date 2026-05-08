import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionLabel } from "@/components/ui/SectionLabel";

const features = [
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M9 12l2 2 4-4" />
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
      </svg>
    ),
    title: "Berpengalaman & Profesional",
    description:
      "Berbasis pengalaman teknis dan implementasi lapangan dengan standar industri tertinggi.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" />
        <circle cx="3" cy="6" r="2" />
        <circle cx="21" cy="6" r="2" />
        <circle cx="3" cy="18" r="2" />
        <circle cx="21" cy="18" r="2" />
        <path d="M5 6h2M17 6h2M5 18h2M17 18h2M10 12H5M19 12h-5M12 10V8M12 16v-2" />
      </svg>
    ),
    title: "Jaringan Luas",
    description:
      "Memiliki jaringan di seluruh industri perkebunan sawit, menghubungkan prinsipal dengan klien strategis.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Pendekatan End-to-End",
    description:
      "Dari riset hingga komersialisasi, mendampingi sampai tuntas dengan hasil yang terukur dan berkelanjutan.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
    title: "Fokus pada Hasil Nyata",
    description:
      "Berorientasi pada efisiensi biaya dan peningkatan produktivitas yang dapat diukur secara objektif.",
  },
];

export function FeaturesSection() {
  return (
    <SectionContainer id="keunggulan" background="white">
      <div className="text-center mb-12">
        <SectionLabel>Keunggulan Kami</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          Mengapa Memilih{" "}
          <span className="text-[#1B5E20]">Rahastha Bina Unggul</span>?
        </h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Kami hadir dengan pendekatan profesional, jaringan luas, dan komitmen
          penuh untuk mendukung pertumbuhan perkebunan sawit Anda.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className="group relative bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
          >
            {/* Icon */}
            <div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-colors duration-200 ${
                index % 2 === 0
                  ? "bg-green-50 text-[#1B5E20] group-hover:bg-[#1B5E20] group-hover:text-white"
                  : "bg-amber-50 text-[#C9A227] group-hover:bg-[#C9A227] group-hover:text-white"
              }`}
            >
              {feature.icon}
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2 leading-snug">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
