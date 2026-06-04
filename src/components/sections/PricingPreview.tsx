"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const standardFeatures = [
  "Instant WhatsApp response system",
  "14-stage automated CRM pipeline",
  "Built, monitored & managed for you",
];

const featuredFeatures = [
  "Everything in Standard",
  "Integrated calendar booking",
  "Automated viewing confirmations",
  "Post-viewing feedback sequences",
  "Re-engagement sequences",
];

function CheckIcon() {
  return (
    <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M3 8l3.5 3.5 6.5-7" stroke="#4D8FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WhatsAppIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.132.558 4.133 1.535 5.873L0 24l6.335-1.508A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.679-.507-5.214-1.392l-.374-.217-3.861.92.978-3.751-.243-.387A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

export default function PricingPreview() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      className="bg-[#272A34] px-6"
      style={{ paddingTop: "140px", paddingBottom: "140px", borderTop: "1px solid #31343F" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-16 flex flex-col gap-4"
        >
          <span
            className="text-[#4D8FFF] uppercase"
            style={{ fontFamily: "var(--font-dm-mono)", fontSize: "11px", letterSpacing: "0.18em" }}
          >
            Pricing
          </span>
          <h2
            className="text-[#E8EAF2]"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(40px, 5.5vw, 72px)",
              lineHeight: 0.92,
              letterSpacing: "0.01em",
              maxWidth: "680px",
            }}
          >
            $220 a month.{" "}
            <span className="text-[#4D8FFF]">One closed deal covers the year.</span>
          </h2>
          <p className="text-[#80859A]" style={{ fontFamily: "var(--font-syne)", fontSize: "17px" }}>
            In Dubai, the math is not complicated.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {/* Standard */}
          <motion.div
            initial={prefersReduced ? {} : { y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: EASE }}
            className="rounded-[10px] p-8 flex flex-col gap-7"
            style={{ background: "#1E2028", border: "1px solid #31343F" }}
          >
            <span
              className="text-[#80859A] uppercase"
              style={{ fontFamily: "var(--font-dm-mono)", fontSize: "10px", letterSpacing: "0.16em" }}
            >
              Standard
            </span>

            <div className="flex flex-col gap-1">
              <div className="flex items-baseline gap-2">
                <span
                  className="text-[#E8EAF2] leading-none"
                  style={{ fontFamily: "var(--font-bebas)", fontSize: "80px" }}
                >
                  $220
                </span>
                <span className="text-[#80859A]" style={{ fontFamily: "var(--font-dm-mono)", fontSize: "11px" }}>
                  / month
                </span>
              </div>
              <span className="text-[#80859A]" style={{ fontFamily: "var(--font-dm-mono)", fontSize: "10px", letterSpacing: "0.1em" }}>
                + $200–250 one-time setup
              </span>
            </div>

            <ul className="flex flex-col gap-3">
              {standardFeatures.map((feat) => (
                <li key={feat} className="flex items-start gap-2.5">
                  <CheckIcon />
                  <span className="text-[#80859A] leading-relaxed" style={{ fontFamily: "var(--font-syne)", fontSize: "14px" }}>
                    {feat}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <a
                href="https://wa.me/PLACEHOLDER"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full border border-[#4D8FFF] text-[#4D8FFF] hover:bg-[rgba(77,143,255,0.08)] text-[10px] uppercase tracking-[0.14em] px-5 py-3 rounded-md transition-all duration-200 cursor-pointer"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                <WhatsAppIcon />
                Message Us on WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Featured — Calendar Upgrade */}
          <motion.div
            initial={prefersReduced ? {} : { y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.14, duration: 0.65, ease: EASE }}
            className="border-beam-bg rounded-[10px]"
          >
            <div className="rounded-[9px] p-8 flex flex-col gap-7 h-full" style={{ background: "#1E2028" }}>
              {/* Header + badge */}
              <div className="flex items-center justify-between">
                <span
                  className="text-[#80859A] uppercase"
                  style={{ fontFamily: "var(--font-dm-mono)", fontSize: "10px", letterSpacing: "0.16em" }}
                >
                  Calendar Upgrade
                </span>
                <span
                  className="text-[#4D8FFF] text-[9px] uppercase tracking-[0.14em] px-2.5 py-1 rounded-full"
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                    border: "1px solid #4D8FFF",
                    background: "rgba(77,143,255,0.08)",
                  }}
                >
                  Recommended
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-[#E8EAF2] leading-none" style={{ fontFamily: "var(--font-bebas)", fontSize: "80px" }}>
                    $220
                  </span>
                  <span className="text-[#80859A]" style={{ fontFamily: "var(--font-dm-mono)", fontSize: "11px" }}>
                    / month
                  </span>
                </div>
                <span className="text-[#80859A]" style={{ fontFamily: "var(--font-dm-mono)", fontSize: "10px", letterSpacing: "0.1em" }}>
                  + $300–350 one-time setup
                </span>
              </div>

              <ul className="flex flex-col gap-3">
                {featuredFeatures.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5">
                    <CheckIcon />
                    <span className="text-[#80859A] leading-relaxed" style={{ fontFamily: "var(--font-syne)", fontSize: "14px" }}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <a
                  href="https://wa.me/PLACEHOLDER"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full bg-[#4D8FFF] hover:bg-[#5a9aff] text-white text-[10px] uppercase tracking-[0.14em] px-5 py-3 rounded-md transition-all duration-200 shimmer-btn cursor-pointer"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  <WhatsAppIcon />
                  Message Us on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Value anchor */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
          className="mt-20 text-center"
        >
          {[
            { text: "A single commission on a AED 2M apartment is AED 40,000.", blue: false },
            { text: "VYNED costs AED 800 a month.",                              blue: true  },
            { text: "Do the math.",                                               blue: false },
          ].map((line) => (
            <p
              key={line.text}
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(28px, 4vw, 52px)",
                lineHeight: 1.05,
                color: line.blue ? "#4D8FFF" : "#E8EAF2",
                letterSpacing: "0.01em",
              }}
            >
              {line.text}
            </p>
          ))}

          <div className="mt-8">
            <a
              href="/pricing"
              className="inline-flex items-center gap-2 text-[#80859A] hover:text-[#E8EAF2] transition-colors duration-200 cursor-pointer group"
              style={{ fontFamily: "var(--font-dm-mono)", fontSize: "11px", letterSpacing: "0.14em" }}
            >
              See full pricing details
              <svg
                className="transition-transform duration-200 group-hover:translate-x-1"
                width="12" height="12" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
