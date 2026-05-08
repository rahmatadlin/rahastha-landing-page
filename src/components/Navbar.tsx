"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { navItems } from "@/lib/data";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#beranda");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionElements = navItems
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => Boolean(el));

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    sectionElements.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    setActiveSection(href);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/92 backdrop-blur-md shadow-sm border-b border-black/5"
          : "bg-white/75 backdrop-blur-md"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "h-15 md:h-17" : "h-16 md:h-20"
          }`}
        >
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
                  className={`group relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 cursor-pointer ${
                    activeSection === item.href
                      ? "text-primary"
                      : "text-gray-700 hover:text-primary"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute left-4 right-4 -bottom-0.5 h-0.5 origin-left rounded-full bg-primary transition-transform duration-300 ${
                      activeSection === item.href
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
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
              className="shadow-md hover:scale-105 transition-all duration-300"
              onClick={() => handleNavClick("#kontak")}
            >
              Hubungi Kami
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
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
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <div className="md:hidden">
            <motion.div
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[1px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsMenuOpen(false)}
            />

            <motion.aside
              className="fixed top-0 right-0 z-50 h-screen w-[82%] max-w-sm bg-white shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between px-6 h-16 border-b border-gray-100">
                <span className="font-semibold text-primary">Menu</span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                  aria-label="Close menu"
                >
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M6 6l12 12M6 18L18 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              <div className="p-5">
                <ul className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <button
                        onClick={() => handleNavClick(item.href)}
                        className={`w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                          activeSection === item.href
                            ? "text-primary bg-green-50"
                            : "text-gray-700 hover:text-primary hover:bg-green-50"
                        }`}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <Button
                    variant="primary"
                    size="sm"
                    className="w-full justify-center shadow-md hover:scale-105 transition-all duration-300"
                    href="#kontak"
                    onClick={() => handleNavClick("#kontak")}
                  >
                    Hubungi Kami
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12h14M13 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Button>
                </div>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
