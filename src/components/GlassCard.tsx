import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassCard = ({ children, className }: GlassCardProps) => {
  return (
    <div
      className={`${
        className || ""
      } mx-auto text-white px-8 py-4 rounded-2xl bg-gradient-to-bl noisy from-slate-100/40 to-slate-500/30 border border-slate-400/20 backdrop-blur-[12px]`}
    >
      {children}
    </div>
  );
};

export default GlassCard;
