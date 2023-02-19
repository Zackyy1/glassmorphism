import React from "react";
import colorful2 from "@/assets/colorful2.jpg";
import GlassCard from "@/components/GlassCard";
import Heading from "@/components/Heading";
import GlassBanner from "@/components/GlassBanner";
const ColorfulGlassBlurSection = () => {
  return (
    <div>
      <img
        className="w-[100vw] absolute min-h-[100vh]  object-cover"
        src={colorful2}
      />
      <div className="grid md:grid-cols-2 p-8 max-w-[1080px] text-center gap-8 mx-auto">
        <GlassCard className="w-full">
          <Heading tag="h2">Hi</Heading>
          <p>This is Glassmorphism</p>
        </GlassCard>
        <GlassCard className="w-full">
          <Heading tag="h2">It is aesthetic</Heading>
          <p>And gives your website a very fragile feel</p>
        </GlassCard>
        <GlassBanner className="w-full md:col-span-2">
            <Heading tag="h2">Soft and Silky</Heading>
            <p>Like this very light piece of matte glass</p>
        </GlassBanner>
      </div>
    </div>
  );
};

export default ColorfulGlassBlurSection;
