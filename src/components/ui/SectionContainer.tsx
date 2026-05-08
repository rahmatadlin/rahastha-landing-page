import React from "react";

interface SectionContainerProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  background?: "white" | "gray" | "green" | "green-dark";
}

const bgClasses: Record<string, string> = {
  white: "bg-white",
  gray: "bg-gray-50",
  green: "bg-[#1B5E20]",
  "green-dark": "bg-[#0a3d0e]",
};

export function SectionContainer({
  id,
  children,
  className = "",
  background = "white",
}: SectionContainerProps) {
  return (
    <section id={id} className={`${bgClasses[background]} ${className}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        {children}
      </div>
    </section>
  );
}
