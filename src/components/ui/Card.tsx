import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

const paddingClasses = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function Card({
  children,
  className = "",
  hover = false,
  padding = "md",
}: CardProps) {
  return (
    <div
      className={`
        bg-white rounded-2xl shadow-sm border border-gray-100
        ${paddingClasses[padding]}
        ${hover ? "transition-all duration-200 hover:shadow-md hover:-translate-y-1" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
