import React from "react";

interface GlassBannerProps {
  children: React.ReactNode;
  className?: string;
}

const GlassBanner = ({ children, className }: GlassBannerProps) => {
  return (
    <div
      className={`${
        className || ""
      } mx-auto text-white px-8 py-12 rounded-[32px] bg-gradient-to-bl noisy from-slate-400/30 to-slate-700/10 border border-slate-200/20 backdrop-blur-[4px]`}
    >
      {children}
    </div>
  );
};

export default GlassBanner;
