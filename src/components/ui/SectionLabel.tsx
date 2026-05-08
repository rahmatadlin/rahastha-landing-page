interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`inline-block text-xs font-bold uppercase tracking-widest text-[#1B5E20] mb-3 ${className}`}
    >
      {children}
    </span>
  );
}
