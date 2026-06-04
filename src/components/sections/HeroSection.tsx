"use client";

import { motion, useReducedMotion } from "framer-motion";
import PipelineMockup from "@/components/ui/PipelineMockup";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const HEADLINE = "EVERY LEAD YOU MISS IS A COMMISSION SOMEONE ELSE CLOSED.";

function WordReveal({ text, delay = 0 }: { text: string; delay?: number }) {
  const prefersReduced = useReducedMotion();
  const words = text.split(" ");

  return (
    <>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={prefersReduced ? {} : { y: 28, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: delay + i * 0.055, duration: 0.55, ease: EASE }}
          style={{ display: "inline-block", marginRight: "0.18em" }}
        >
          {word}
        </motion.span>
      ))}
    </>
  );
}

export default function HeroSection() {
  const prefersReduced = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: prefersReduced ? {} : { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { delay, duration: 0.6, ease: EASE },
  });

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#1E2028] flex flex-col">
      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(rgba(77,143,255,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />

      {/* Radial glow */}
      <div
        className="pointer-events-none absolute top-0 left-0 w-[900px] h-[700px] -translate-x-1/4 -translate-y-1/4"
        style={{
          background: "radial-gradient(ellipse at center, rgba(77,143,255,0.09) 0%, transparent 65%)",
        }}
        aria-hidden
      />

      {/* Content */}
      <div className="relative flex-1 max-w-6xl mx-auto w-full px-6 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 xl:gap-20 items-center w-full py-32 lg:py-0">

          {/* ── Left column ── */}
          <div className="flex flex-col gap-7">
            {/* Eyebrow */}
            <motion.div {...fadeUp(0.08)} className="w-fit">
              <div
                className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5"
                style={{ border: "1px solid #31343F", background: "#272A34" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#4D8FFF] flex-shrink-0 animate-pulse-dot" />
                <span
                  className="text-[#80859A]"
                  style={{ fontFamily: "var(--font-dm-mono)", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase" }}
                >
                  Real-Estate Automation · Dubai
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <h1
              className="text-[#E8EAF2]"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(52px, 6.5vw, 96px)",
                lineHeight: 0.88,
                letterSpacing: "0.01em",
              }}
            >
              <WordReveal text={HEADLINE} delay={0.15} />
            </h1>

            {/* Subheadline */}
            <motion.p
              {...fadeUp(0.5)}
              className="text-[#80859A] max-w-lg leading-relaxed"
              style={{ fontFamily: "var(--font-syne)", fontSize: "17px" }}
            >
              VYNED builds and runs a complete automated system for your real
              estate business. Instant responses. Confirmed viewings. Deals that
              don&apos;t fall through the cracks.
            </motion.p>

            {/* Buttons */}
            <motion.div
              {...fadeUp(0.68)}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-1"
            >
              <a
                href="https://wa.me/PLACEHOLDER"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#4D8FFF] hover:bg-[#5a9aff] text-white text-[11px] uppercase tracking-[0.14em] px-6 py-3.5 rounded-md transition-all duration-200 shimmer-btn cursor-pointer"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                <WhatsAppIcon size={14} />
                Message Us on WhatsApp
              </a>
              <a
                href="/how-it-works"
                className="inline-flex items-center gap-1.5 text-[#4D8FFF] hover:text-[#7ab4ff] text-[11px] uppercase tracking-[0.14em] transition-colors duration-200 px-2 cursor-pointer"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                See How It Works
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </motion.div>

            {/* Stat strip */}
            <motion.div
              {...fadeUp(0.82)}
              className="flex flex-row items-center gap-8 pt-6 mt-1"
              style={{ borderTop: "1px solid #31343F" }}
            >
              {[
                { stat: "< 60s",  label: "Response on every lead"    },
                { stat: "14",     label: "Pipeline stages"            },
                { stat: "$220",   label: "Per month, fully managed"   },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-0.5">
                  <span
                    className="text-[#4D8FFF] leading-none"
                    style={{ fontFamily: "var(--font-bebas)", fontSize: "28px" }}
                  >
                    {item.stat}
                  </span>
                  <span
                    className="text-[#80859A] leading-tight"
                    style={{
                      fontFamily: "var(--font-dm-mono)",
                      fontSize: "9px",
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right column — pipeline card ── */}
          <motion.div
            initial={prefersReduced ? {} : { x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.38, duration: 0.8, ease: EASE }}
            className="relative w-full max-w-[420px] lg:max-w-none mx-auto lg:mx-0 lg:justify-self-end"
          >
            <PipelineMockup />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={prefersReduced ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          className="text-[#80859A]"
          style={{ fontFamily: "var(--font-dm-mono)", fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.2em" }}
        >
          Scroll
        </span>
        <svg
          className="animate-scroll-bounce text-[#80859A]"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </motion.div>
    </section>
  );
}

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.132.558 4.133 1.535 5.873L0 24l6.335-1.508A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.679-.507-5.214-1.392l-.374-.217-3.861.92.978-3.751-.243-.387A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}
