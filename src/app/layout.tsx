import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Rahastha Bina Unggul - Mitra Strategis Perkebunan Sawit",
  description:
    "PT. Rahastha Bina Unggul menyediakan solusi profesional dan inovatif untuk meningkatkan produktivitas dan efisiensi di setiap tahap perkebunan sawit.",
  keywords: "perkebunan sawit, kelapa sawit, agri solution, nursery, weed management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
