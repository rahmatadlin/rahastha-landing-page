import { contactInfo, footerNavLinks } from "@/lib/data";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="kontak" className="bg-[#0d2e10] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/ICON WHITE.svg"
                alt="Logo Rahastha Bina Unggul"
                width={40}
                height={40}
                className="h-10 w-10 shrink-0"
              />
              <div>
                <p className="font-bold text-white text-sm">Rahastha Bina Unggul</p>
                <p className="text-[10px] text-gray-400">Planting Innovation, Shaping Tomorrow</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Mitra strategis terpercaya untuk pertumbuhan optimal perkebunan
              sawit di Indonesia.
            </p>
            {/* Social Media */}
            <div className="flex gap-3">
              {["linkedin", "instagram", "email"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-200"
                  aria-label={social}
                >
                  {social === "linkedin" && (
                    <svg width="16" height="16" fill="white" viewBox="0 0 24 24">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  )}
                  {social === "instagram" && (
                    <svg width="16" height="16" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
                    </svg>
                  )}
                  {social === "email" && (
                    <svg width="16" height="16" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M2 7l10 7 10-7" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Alamat */}
          <div>
            <h4 className="font-semibold text-white mb-4">Alamat</h4>
            <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">
              {contactInfo.address}
            </p>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-semibold text-white mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-gray-400 text-sm hover:text-secondary transition-colors"
                >
                  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.13 1 .37 1.97.72 2.9a2 2 0 01-.45 2.11L5.84 8.16a16 16 0 006 6l1.43-1.43a2 2 0 012.11-.45c.93.35 1.9.59 2.9.72A2 2 0 0122 16.92z" />
                  </svg>
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-2 text-gray-400 text-sm hover:text-secondary transition-colors"
                >
                  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://${contactInfo.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 text-sm hover:text-secondary transition-colors"
                >
                  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
                  </svg>
                  {contactInfo.website}
                </a>
              </li>
            </ul>
          </div>

          {/* Navigasi */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigasi</h4>
            <ul className="space-y-2">
              {footerNavLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-gray-400 text-sm hover:text-secondary transition-colors duration-150"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-xs">
            © {currentYear} PT. Rahastha Bina Unggul. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Planting Innovation, Shaping Tomorrow
          </p>
        </div>
      </div>
    </footer>
  );
}
