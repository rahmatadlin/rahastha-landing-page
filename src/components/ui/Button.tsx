import React from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  asChild?: boolean;
  href?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[#1B5E20] text-white hover:bg-[#2E7D32] focus:ring-2 focus:ring-[#1B5E20] focus:ring-offset-2",
  secondary:
    "bg-[#C9A227] text-white hover:bg-[#e0b83a] focus:ring-2 focus:ring-[#C9A227] focus:ring-offset-2",
  outline:
    "border-2 border-[#1B5E20] text-[#1B5E20] bg-transparent hover:bg-[#1B5E20] hover:text-white focus:ring-2 focus:ring-[#1B5E20] focus:ring-offset-2",
  ghost:
    "text-[#1B5E20] bg-transparent hover:bg-green-50 focus:ring-2 focus:ring-[#1B5E20] focus:ring-offset-2",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  href,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
