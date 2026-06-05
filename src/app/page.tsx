import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import MessageMarquee from "@/components/ui/MessageMarquee";
import ProblemSection from "@/components/sections/ProblemSection";
import SystemSection from "@/components/sections/SystemSection";
import PricingPreview from "@/components/sections/PricingPreview";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "VYNED — Every lead you miss is a commission someone else closed.",
  description:
    "VYNED builds and runs a complete automated system for your real estate business. Instant responses. Confirmed viewings. Deals that don't fall through the cracks.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <MessageMarquee />
      <ProblemSection />
      <SystemSection />
      <PricingPreview />
      <FinalCTA />
    </>
  );
}
