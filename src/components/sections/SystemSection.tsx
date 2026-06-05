"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ── Animated visuals ─────────────────────────────────────────── */

function ChatBubblesVisual() {
  return (
    <div className="relative flex flex-col gap-2.5 h-[90px] justify-center">
      {/* Incoming bubble */}
      <div
        className="self-start rounded-[10px] rounded-tl-[3px] px-3 py-2 animate-bubble-in"
        style={{ background: "#272A34", border: "1px solid #31343F", maxWidth: "80%" }}
      >
        <p style={{ fontFamily: "var(--font-syne)", fontSize: "12px", color: "#80859A", lineHeight: 1.4 }}>
          Need availability for 3BR Marina?
        </p>
      </div>
      {/* Outgoing — electric blue */}
      <div
        className="self-end rounded-[10px] rounded-tr-[3px] px-3 py-2 animate-bubble-reply"
        style={{ background: "rgba(77,143,255,0.14)", border: "1px solid rgba(77,143,255,0.3)", maxWidth: "80%" }}
      >
        <p style={{ fontFamily: "var(--font-syne)", fontSize: "12px", color: "#4D8FFF", lineHeight: 1.4 }}>
          Available! When would you like to view? ✓
        </p>
      </div>
    </div>
  );
}

function PipelineDotVisual() {
  const dots = [0, 25, 50, 75, 100];
  return (
    <div className="relative flex items-center h-[90px]">
      <div className="relative w-full h-px" style={{ background: "#31343F" }}>
        {/* Stage markers */}
        {dots.map((pct) => (
          <div
            key={pct}
            className="absolute top-1/2 w-3 h-3 rounded-full"
            style={{
              left: `${pct}%`,
              transform: "translate(-50%, -50%)",
              background: "#1E2028",
              border: "1px solid #31343F",
            }}
          />
        ))}
        {/* Travelling glow dot */}
        <div
          className="absolute top-1/2 w-3 h-3 rounded-full animate-dot-travel"
          style={{
            transform: "translate(-50%, -50%)",
            background: "#4D8FFF",
            boxShadow: "0 0 10px 4px rgba(77,143,255,0.5)",
          }}
        />
      </div>
      {/* Stage labels */}
      <div className="absolute w-full flex justify-between" style={{ top: "calc(50% + 14px)" }}>
        {["New", "Qual.", "View", "Follow", "Closed"].map((label) => (
          <span
            key={label}
            style={{ fontFamily: "var(--font-dm-mono)", fontSize: "7px", color: "#3D4050", textTransform: "uppercase", letterSpacing: "0.1em" }}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

function ShieldVisual() {
  return (
    <div className="flex justify-center items-center h-[90px]">
      <svg width="70" height="76" viewBox="0 0 70 76" fill="none" aria-hidden>
        {/* Shield body */}
        <path
          d="M35 4 L60 14 L60 36 Q60 58 35 72 Q10 58 10 36 L10 14 Z"
          fill="rgba(77,143,255,0.06)"
          stroke="#4D8FFF"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        {/* Inner shield glow */}
        <path
          d="M35 12 L52 20 L52 36 Q52 52 35 63 Q18 52 18 36 L18 20 Z"
          fill="none"
          stroke="rgba(77,143,255,0.18)"
          strokeWidth="1"
          strokeLinejoin="round"
        />
        {/* Animated checkmark */}
        <path
          d="M23 38 L31 46 L47 28"
          stroke="#4D8FFF"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="32"
          className="animate-draw-check"
        />
      </svg>
    </div>
  );
}

/* ── Pillar data ──────────────────────────────────────────────── */

const pillars = [
  {
    Visual: ChatBubblesVisual,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4D8FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    title: "ALWAYS-ON RESPONSE",
    body: "Every lead gets an instant automated WhatsApp reply the second they make contact. 2AM on a Friday. You're in a viewing. It doesn't matter.",
  },
  {
    Visual: PipelineDotVisual,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4D8FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <line x1="8" y1="6" x2="21" y2="6"/>
        <line x1="8" y1="12" x2="21" y2="12"/>
        <line x1="8" y1="18" x2="21" y2="18"/>
        <circle cx="3" cy="6" r="1" fill="#4D8FFF" stroke="none"/>
        <circle cx="3" cy="12" r="1" fill="#4D8FFF" stroke="none"/>
        <circle cx="3" cy="18" r="1" fill="#4D8FFF" stroke="none"/>
      </svg>
    ),
    title: "PIPELINE THAT RUNS ITSELF",
    body: "14 stages from first inquiry to deal closed. Viewing confirmations, reminders, feedback requests — the right message fires automatically at the right moment.",
  },
  {
    Visual: ShieldVisual,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4D8FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
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
          <span className="text-[#4D8FFF] uppercase" style={{ fontFamily: "var(--font-dm-mono)", fontSize: "11px", letterSpacing: "0.18em" }}>
            The System
          </span>
          <h2
            className="text-[#E8EAF2]"
            style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(40px, 5.5vw, 72px)", lineHeight: 0.92, maxWidth: "800px" }}
          >
            We build it. We run it.{" "}
            <span className="text-[#4D8FFF]">It never sleeps.</span>
          </h2>
          <p className="text-[#80859A] max-w-lg leading-relaxed" style={{ fontFamily: "var(--font-syne)", fontSize: "17px" }}>
            A complete operational system for your real estate business — built on professional CRM infrastructure,
            tailored to the Dubai market, managed entirely by us.
          </p>
        </motion.div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#31343F]">
          {pillars.map(({ Visual, icon, title, body }, i) => (
            <motion.div
              key={title}
              initial={prefersReduced ? {} : { y: 32, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.14, duration: 0.65, ease: EASE }}
              className="group flex flex-col gap-5 px-0 md:px-10 py-10 md:py-0 first:pl-0 last:pr-0"
            >
              {/* Animated top line */}
              <div className="relative h-px bg-[#31343F] overflow-hidden mb-1">
                <motion.div
                  className="absolute inset-0 bg-[#4D8FFF]"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.14 + 0.2, duration: 0.7, ease: EASE }}
                  style={{ transformOrigin: "left" }}
                />
              </div>

              {/* Animated visual */}
              <div
                className="rounded-[8px] px-4"
                style={{ background: "rgba(77,143,255,0.04)", border: "1px solid #31343F" }}
              >
                <Visual />
              </div>

              {/* Icon + title */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-[6px] flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(77,143,255,0.08)" }}
                >
                  {icon}
                </div>
                <h3
                  className="text-[#E8EAF2]"
                  style={{ fontFamily: "var(--font-bebas)", fontSize: "22px", letterSpacing: "0.02em", lineHeight: 1 }}
                >
                  {title}
                </h3>
              </div>

              {/* Body */}
              <p className="text-[#80859A] leading-relaxed" style={{ fontFamily: "var(--font-syne)", fontSize: "15px", lineHeight: 1.7 }}>
                {body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
