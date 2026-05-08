import type { NavItem, StatItem, ContactInfo } from "@/types";

export const navItems: NavItem[] = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang Kami", href: "#tentang-kami" },
  { label: "Layanan", href: "#layanan" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Kontak", href: "#kontak" },
];

export const stats: StatItem[] = [
  { value: "2025", label: "Tahun Berdiri" },
  { value: "+10", label: "Mitra Prinsipal" },
  { value: "+20", label: "Perusahaan Perkebunan Bermitra" },
  { value: "100%", label: "Komitmen untuk Solusi Berkelanjutan" },
];

export const contactInfo: ContactInfo = {
  phone: "+62 811 9998 769",
  email: "contact@rahastha.id",
  website: "www.rahastha.id",
  address:
    "PT. Rahastha Bina Unggul\nBintaro Tangerang Selatan\nBanten 15221, Indonesia",
};

export const footerNavLinks: NavItem[] = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang Kami", href: "#tentang-kami" },
  { label: "Layanan Kami", href: "#layanan" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Artikel", href: "#artikel" },
  { label: "Kontak", href: "#kontak" },
];
