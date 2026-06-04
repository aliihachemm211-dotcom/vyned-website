"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const pillars = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4D8FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "ALWAYS-ON RESPONSE",
    body: "Every lead gets an instant automated WhatsApp reply the second they make contact. 2AM on a Friday. You're in a viewing. It doesn't matter.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4D8FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <line x1="8" y1="6" x2="21" y2="6" />
        <line x1="8" y1="12" x2="21" y2="12" />
        <line x1="8" y1="18" x2="21" y2="18" />
        <circle cx="3" cy="6"  r="1" fill="#4D8FFF" stroke="none" />
        <circle cx="3" cy="12" r="1" fill="#4D8FFF" stroke="none" />
        <circle cx="3" cy="18" r="1" fill="#4D8FFF" stroke="none" />
      </svg>
    ),
    title: "PIPELINE THAT RUNS ITSELF",
    body: "14 stages from first inquiry to deal closed. Viewing confirmations, reminders, feedback requests — the right message fires automatically at the right moment.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4D8FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: "MANAGED, NOT SELF-SERVE",
    body: "We build it, monitor it, and keep it running. You never log into a backend, watch a tutorial, or troubleshoot a broken automation.",
  },
];

export default function SystemSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      className="bg-[#1E2028] px-6"
      style={{ paddingTop: "140px", paddingBottom: "140px", borderTop: "1px solid #31343F" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-20 flex flex-col gap-4"
        >
          <span
            className="text-[#4D8FFF] uppercase"
            style={{ fontFamily: "var(--font-dm-mono)", fontSize: "11px", letterSpacing: "0.18em" }}
          >
            The System
          </span>
          <h2
            className="text-[#E8EAF2]"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(40px, 5.5vw, 72px)",
              lineHeight: 0.92,
              letterSpacing: "0.01em",
              maxWidth: "800px",
            }}
          >
            We build it. We run it.{" "}
            <span className="text-[#4D8FFF]">It never sleeps.</span>
          </h2>
          <p
            className="text-[#80859A] max-w-lg leading-relaxed"
            style={{ fontFamily: "var(--font-syne)", fontSize: "17px" }}
          >
            A complete operational system for your real estate business — built on
            professional CRM infrastructure, tailored to the Dubai market, managed
            entirely by us.
          </p>
        </motion.div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#31343F]">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={prefersReduced ? {} : { y: 32, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.14, duration: 0.65, ease: EASE }}
              className="group flex flex-col gap-6 px-0 md:px-10 py-10 md:py-0 first:pl-0 last:pr-0"
            >
              {/* Animated top line */}
              <div className="relative h-px bg-[#31343F] overflow-hidden mb-2">
                <motion.div
                  className="absolute inset-0 bg-[#4D8FFF]"
                  initial={{ scaleX: 0, originX: "left" }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.14 + 0.2, duration: 0.7, ease: EASE }}
                  style={{ transformOrigin: "left" }}
                />
              </div>

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-[6px] flex items-center justify-center transition-all duration-300 group-hover:[filter:drop-shadow(0_0_10px_rgba(77,143,255,0.45))]"
                style={{ background: "rgba(77,143,255,0.08)" }}
              >
                {pillar.icon}
              </div>

              {/* Title */}
              <h3
                className="text-[#E8EAF2]"
                style={{ fontFamily: "var(--font-bebas)", fontSize: "28px", letterSpacing: "0.02em", lineHeight: 1 }}
              >
                {pillar.title}
              </h3>

              {/* Body */}
              <p
                className="text-[#80859A] leading-relaxed"
                style={{ fontFamily: "var(--font-syne)", fontSize: "15px", lineHeight: 1.7 }}
              >
                {pillar.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
