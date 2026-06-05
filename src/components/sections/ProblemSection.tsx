"use client";

import { useRef, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ── SVG icon components ──────────────────────────────────────── */

function MidnightPhoneIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 40 40" fill="none" aria-hidden>
      {/* Moon crescent */}
      <path d="M30 10 Q22 12 21 21 Q20 29 27 34 Q19 35 14 29 Q7 21 11 13 Q15 5 25 7 Q28 8 30 10Z"
        stroke="#4D8FFF" strokeWidth="1.4" strokeLinejoin="round"/>
      {/* Phone body */}
      <rect x="4" y="17" width="13" height="20" rx="2" stroke="#4D8FFF" strokeWidth="1.4"/>
      {/* Screen message lines */}
      <line x1="7" y1="23" x2="14" y2="23" stroke="#4D8FFF" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="7" y1="26" x2="12" y2="26" stroke="#4D8FFF" strokeWidth="1.2" strokeLinecap="round"/>
      {/* Notification badge */}
      <circle cx="21" cy="19" r="4.5" fill="rgba(77,143,255,0.12)" stroke="#4D8FFF" strokeWidth="1.2"/>
      <text x="21" y="22" fontSize="5" textAnchor="middle" fill="#4D8FFF" fontFamily="monospace">!</text>
    </svg>
  );
}

function ScatteredThreadsIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 40 40" fill="none" aria-hidden>
      {/* Bubble 1 — back left */}
      <rect x="2" y="8" width="20" height="13" rx="4" stroke="#4D8FFF" strokeWidth="1.4" strokeOpacity="0.4"/>
      <path d="M6 24 L4 27 L10 24" stroke="#4D8FFF" strokeWidth="1.2" strokeOpacity="0.4" strokeLinejoin="round"/>
      {/* Bubble 2 — back right */}
      <rect x="16" y="4" width="22" height="13" rx="4" stroke="#4D8FFF" strokeWidth="1.4" strokeOpacity="0.6"/>
      <path d="M34 17 L36 20 L30 17" stroke="#4D8FFF" strokeWidth="1.2" strokeOpacity="0.6" strokeLinejoin="round"/>
      {/* Bubble 3 — front center */}
      <rect x="6" y="18" width="24" height="14" rx="4" stroke="#4D8FFF" strokeWidth="1.5"/>
      <path d="M12 32 L10 36 L18 32" stroke="#4D8FFF" strokeWidth="1.3" strokeLinejoin="round"/>
      {/* Dots inside front bubble */}
      <circle cx="14" cy="25" r="1.2" fill="#4D8FFF"/>
      <circle cx="20" cy="25" r="1.2" fill="#4D8FFF"/>
      <circle cx="26" cy="25" r="1.2" fill="#4D8FFF"/>
    </svg>
  );
}

function TimelineIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 40 40" fill="none" aria-hidden>
      {/* Track line */}
      <line x1="4" y1="20" x2="36" y2="20" stroke="#4D8FFF" strokeWidth="1.2" strokeOpacity="0.3"/>
      {/* Dot 1 — viewing happened (filled) */}
      <circle cx="8" cy="20" r="4" fill="rgba(77,143,255,0.15)" stroke="#4D8FFF" strokeWidth="1.4"/>
      <circle cx="8" cy="20" r="2" fill="#4D8FFF"/>
      <text x="8" y="32" fontSize="5.5" textAnchor="middle" fill="#4D8FFF" fontFamily="monospace">View</text>
      {/* Dot 2 — silence (hollow) */}
      <circle cx="20" cy="20" r="4" fill="transparent" stroke="#4D8FFF" strokeWidth="1.4" strokeOpacity="0.5" strokeDasharray="2 2"/>
      <text x="20" y="32" fontSize="5.5" textAnchor="middle" fill="#80859A" fontFamily="monospace">···</text>
      {/* Dot 3 — crossed out follow-up */}
      <circle cx="32" cy="20" r="4" fill="rgba(77,143,255,0.05)" stroke="#4D8FFF" strokeWidth="1.4" strokeOpacity="0.4"/>
      <line x1="29.5" y1="17.5" x2="34.5" y2="22.5" stroke="#4D8FFF" strokeWidth="1.4" strokeOpacity="0.6" strokeLinecap="round"/>
      <line x1="34.5" y1="17.5" x2="29.5" y2="22.5" stroke="#4D8FFF" strokeWidth="1.4" strokeOpacity="0.6" strokeLinecap="round"/>
      <text x="32" y="32" fontSize="5" textAnchor="middle" fill="#80859A" fontFamily="monospace">F/up</text>
    </svg>
  );
}

function StarRatingIcon() {
  /* 5 stars — first filled, rest outlined dashed */
  const starPath = (cx: number, cy: number) =>
    `M${cx},${cy - 5} L${cx + 1.5},${cy - 1.8} L${cx + 5},${cy - 1.6} L${cx + 2.4},${cy + 0.9} L${cx + 3.1},${cy + 4.2} L${cx},${cy + 2.5} L${cx - 3.1},${cy + 4.2} L${cx - 2.4},${cy + 0.9} L${cx - 5},${cy - 1.6} L${cx - 1.5},${cy - 1.8} Z`;
  const positions = [8, 16, 24, 32, 40];
  return (
    <svg width="40" height="22" viewBox="0 0 48 22" fill="none" aria-hidden>
      {/* Star 1 — filled */}
      <path d={starPath(8, 11)} fill="#4D8FFF" stroke="#4D8FFF" strokeWidth="0.8"/>
      {/* Stars 2–5 — outline */}
      {positions.slice(1).map((cx) => (
        <path
          key={cx}
          d={starPath(cx, 11)}
          fill="none"
          stroke="#4D8FFF"
          strokeWidth="1.2"
          strokeOpacity="0.45"
          strokeDasharray="2.5 1.5"
        />
      ))}
    </svg>
  );
}

function ContactCardIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 44 38" fill="none" aria-hidden>
      {/* Card outline */}
      <rect x="2" y="2" width="36" height="28" rx="4" stroke="#4D8FFF" strokeWidth="1.4"/>
      {/* Avatar circle */}
      <circle cx="11" cy="12" r="5" fill="rgba(77,143,255,0.1)" stroke="#4D8FFF" strokeWidth="1.2"/>
      {/* Text lines */}
      <line x1="20" y1="9" x2="34" y2="9" stroke="#4D8FFF" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="20" y1="13" x2="30" y2="13" stroke="#4D8FFF" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.6"/>
      {/* Budget line */}
      <rect x="6" y="20" width="28" height="6" rx="2" fill="rgba(77,143,255,0.08)" stroke="#4D8FFF" strokeWidth="1" strokeOpacity="0.5"/>
      <text x="20" y="24.5" fontSize="5.5" textAnchor="middle" fill="#4D8FFF" fontFamily="monospace">AED 2,000,000</text>
      {/* Question mark badge */}
      <circle cx="38" cy="6" r="5" fill="rgba(77,143,255,0.15)" stroke="#4D8FFF" strokeWidth="1.2"/>
      <text x="38" y="9" fontSize="6.5" textAnchor="middle" fill="#4D8FFF" fontWeight="bold" fontFamily="monospace">?</text>
    </svg>
  );
}

function GreyPipelineIcon() {
  const dots = [6, 18, 30, 42];
  return (
    <svg width="44" height="24" viewBox="0 0 52 24" fill="none" aria-hidden>
      {/* Connecting lines */}
      <line x1="10" y1="12" x2="44" y2="12" stroke="#31343F" strokeWidth="1.5"/>
      {/* Stage dots — all grey/unknown */}
      {dots.map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="12" r="5.5" fill="#1E2028" stroke="#31343F" strokeWidth="1.5"/>
          <text x={cx} y="15" fontSize="6" textAnchor="middle" fill="#3D4050" fontFamily="monospace">?</text>
        </g>
      ))}
      {/* Last dot */}
      <circle cx="46" cy="12" r="5.5" fill="#1E2028" stroke="#31343F" strokeWidth="1.5"/>
      <text x="46" y="15" fontSize="6" textAnchor="middle" fill="#3D4050" fontFamily="monospace">?</text>
    </svg>
  );
}

/* ── Card data ───────────────────────────────────────────────── */

const problems = [
  {
    num: "01",
    Icon: MidnightPhoneIcon,
    text: "A lead messages at midnight. You're asleep. By 7AM they've already called another agent.",
    span: "col-span-12 md:col-span-6",
    wide: false,
  },
  {
    num: "02",
    Icon: ScatteredThreadsIcon,
    text: "Viewing requests buried in three WhatsApp threads you meant to check yesterday.",
    span: "col-span-12 md:col-span-6",
    wide: false,
  },
  {
    num: "03",
    Icon: TimelineIcon,
    text: "You showed the property. They seemed interested. You never followed up. Neither did they.",
    span: "col-span-12",
    wide: true,
  },
  {
    num: "04",
    Icon: StarRatingIcon,
    text: "The deal closed. You forgot to ask for the review. The moment passed.",
    span: "col-span-12 md:col-span-7",
    wide: false,
  },
  {
    num: "05",
    Icon: ContactCardIcon,
    text: "That lead from two months ago had a budget of AED 2M. They're still out there. You have no idea.",
    span: "col-span-12 md:col-span-5",
    wide: false,
  },
  {
    num: "06",
    Icon: GreyPipelineIcon,
    text: "You have no idea how many active leads you have right now. Or where any of them stand.",
    span: "col-span-12",
    wide: true,
  },
];

export default function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;
    let ctx: { revert: () => void } | null = null;

    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        sectionRef.current?.querySelectorAll(".problem-card").forEach((card, i) => {
          gsap.fromTo(card,
            { y: 56, opacity: 0 },
            {
              y: 0, opacity: 1, duration: 0.75, delay: i * 0.08, ease: "power3.out",
              scrollTrigger: { trigger: card, start: "top 90%", toggleActions: "play none none reverse" },
            }
          );
        });
      }, sectionRef);
    };
    init();
    return () => ctx?.revert();
  }, [prefersReduced]);

  return (
    <section
      ref={sectionRef}
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
          <span className="text-[#4D8FFF] uppercase" style={{ fontFamily: "var(--font-dm-mono)", fontSize: "11px", letterSpacing: "0.18em" }}>
            The Reality
          </span>
          <h2 className="text-[#E8EAF2] max-w-3xl" style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(40px, 5.5vw, 72px)", lineHeight: 0.92 }}>
            You&apos;re not losing deals because you&apos;re bad at your job.
          </h2>
          <p className="text-[#80859A] max-w-lg leading-relaxed" style={{ fontFamily: "var(--font-syne)", fontSize: "17px" }}>
            You&apos;re losing them because no system exists between you and your leads.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-12 gap-4">
          {problems.map((p) => (
            <div key={p.num} className={`problem-card group cursor-default ${p.span}`}>
              <div
                className="h-full rounded-[8px] p-8 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1"
                style={{ background: "#1E2028", border: "1px solid #31343F", borderLeft: "2px solid #4D8FFF" }}
              >
                {/* SVG icon */}
                <div className="opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  <p.Icon />
                </div>
                {/* Number */}
                <span className="text-[#4D8FFF]" style={{ fontFamily: "var(--font-dm-mono)", fontSize: "11px", letterSpacing: "0.18em", opacity: 0.5 }}>
                  {p.num}
                </span>
                {/* Text */}
                <p
                  className="text-[#80859A] leading-relaxed group-hover:text-[#E8EAF2] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-syne)", fontSize: p.wide ? "17px" : "15px", lineHeight: 1.65 }}
                >
                  {p.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
