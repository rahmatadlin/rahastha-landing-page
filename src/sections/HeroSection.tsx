"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";

const heroStats = [
  { value: 10, label: "Mitra Prinsipal", prefix: "+", suffix: "" },
  { value: 20, label: "Klien Perkebunan", prefix: "+", suffix: "" },
  { value: 100, label: "Komitmen", prefix: "", suffix: "%" },
];

function CountUp({
  target,
  prefix = "",
  suffix = "",
  duration = 1400,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const start = performance.now();
    let frameId = 0;

    const tick = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      // easeOutCubic for smoother finish
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [duration, target]);

  return (
    <>
      {prefix}
      {count}
      {suffix}
    </>
  );
}

export function HeroSection() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 800], [0, 120]);

  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Parallax background (halus) */}
      <motion.div
        className="absolute inset-x-0 -top-24 -bottom-24"
        style={{ y: backgroundY }}
        aria-hidden="true"
      >
        <Image
          src="/hero.png"
          alt="Perkebunan Sawit"
          fill
          priority
          className="object-cover object-[center_68%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-r from-primary-dark/85 via-primary/70 to-primary/45" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full py-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-block bg-[#C9A227]/20 text-[#C9A227] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-[#C9A227]/30">
              Mitra Strategis Perkebunan Sawit
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
              Mitra Strategis untuk
            </h1>
            <h2 className="mt-1 text-5xl md:text-6xl lg:text-7xl font-extrabold text-secondary leading-[1.05]">
              Pertumbuhan Optimal
            </h2>
            <h3 className="mt-2 text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
              Perkebunan Sawit
            </h3>
            <p className="text-green-100 text-lg md:text-xl leading-relaxed mt-6 mb-8 max-w-xl">
              Menyediakan solusi profesional dan inovatif untuk meningkatkan
              produktivitas dan efisiensi di setiap tahap perkebunan sawit.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="secondary"
                  size="lg"
                  href="#layanan"
                  className="h-14 px-8 shadow-lg shadow-secondary/30 transition-all duration-300"
                >
                  Layanan Kami
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  href="#kontak"
                  className="h-14 px-8 border-white text-white hover:bg-white! hover:text-primary! transition-all duration-300"
                >
                  Hubungi Kami
                </Button>
              </motion.div>
            </div>

            <div className="mt-10 flex flex-wrap gap-8 md:gap-10">
              {heroStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: [0, -3, 0] }}
                  transition={{
                    opacity: { duration: 0.5, delay: 0.4 + index * 0.12 },
                    y: {
                      duration: 3 + index * 0.4,
                      delay: 0.6 + index * 0.12,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <p className="text-3xl font-bold text-secondary">
                    <CountUp
                      target={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      duration={1400 + index * 250}
                    />
                  </p>
                  <p className="text-green-200 text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
