"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { navItems } from "@/lib/data";
import Image from "next/image";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md"
          : "bg-white"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#beranda" className="flex items-center gap-2 group">
            <Image
              src="/icon-full.svg"
              alt="Logo Rahastha Bina Unggul"
              width={40}
              height={40}
              className="h-10 w-10 shrink-0"
              priority
            />
            <div>
              <span className="font-bold text-primary text-sm md:text-base leading-tight block">
                Rahastha Bina Unggul
              </span>
              <span className="text-[10px] text-gray-500 leading-tight hidden sm:block">
                Planting Innovation, Shaping Tomorrow
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:text-primary hover:bg-green-50 transition-all duration-150 cursor-pointer"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="primary"
              size="sm"
              href="#kontak"
              onClick={() => handleNavClick("#kontak")}
            >
              Hubungi Kami
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                <path
                  d="M6 6l12 12M6 18L18 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="w-full text-left px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:text-primary hover:bg-green-50 transition-all duration-150"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <Button
                  variant="primary"
                  size="sm"
                  className="w-full justify-center"
                  href="#kontak"
                  onClick={() => handleNavClick("#kontak")}
                >
                  Hubungi Kami
                </Button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
