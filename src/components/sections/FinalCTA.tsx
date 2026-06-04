"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const lines = [
  { words: ["THE", "LEAD", "THAT", "JUST"] },
  { words: ["MESSAGED", "YOU", "IS"]       },
  { words: ["STILL"]                        },
  { words: ["WAITING."]                     },
];

/* Flat index for stagger calculation */
let globalWordIdx = 0;
const wordList = lines.flatMap((line) =>
  line.words.map((word) => ({ word, idx: globalWordIdx++ }))
);

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.132.558 4.133 1.535 5.873L0 24l6.335-1.508A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.679-.507-5.214-1.392l-.374-.217-3.861.92.978-3.751-.243-.387A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

export default function FinalCTA() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden bg-[#1E2028] px-6 text-center"
      style={{ paddingTop: "160px", paddingBottom: "160px", borderTop: "1px solid #31343F" }}
    >
      {/* Glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
        style={{ background: "radial-gradient(ellipse at center bottom, rgba(77,143,255,0.1) 0%, transparent 65%)" }}
        aria-hidden
      />

      <div className="relative max-w-5xl mx-auto flex flex-col items-center gap-10">
        {/* Headline */}
        <h2
          aria-label="The lead that just messaged you is still waiting."
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(64px, 10vw, 136px)",
            lineHeight: 0.9,
            letterSpacing: "0.01em",
          }}
        >
          {lines.map((line, li) => (
            <span key={li} style={{ display: "block" }}>
              {line.words.map((word) => {
                const entry = wordList.find((w) => w.word === word && lines.indexOf(line) === li) ?? { idx: 0 };
                const isStill = word === "STILL";
                return (
                  <motion.span
                    key={`${li}-${word}`}
                    initial={prefersReduced ? {} : { y: 80, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: entry.idx * 0.09, duration: 0.65, ease: EASE }}
                    style={{ display: "inline-block", marginRight: "0.2em", color: isStill ? "#4D8FFF" : "#E8EAF2" }}
                  >
                    {word}
                  </motion.span>
                );
              })}
            </span>
          ))}
        </h2>

        {/* Subline */}
        <motion.p
          initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: 0.55, duration: 0.6, ease: EASE }}
          className="text-[#80859A]"
          style={{ fontFamily: "var(--font-syne)", fontSize: "20px" }}
        >
          Don&apos;t let them wait.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: 0.7, duration: 0.6, ease: EASE }}
        >
          <a
            href="https://wa.me/PLACEHOLDER"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#4D8FFF] hover:bg-[#5a9aff] text-white text-[11px] uppercase tracking-[0.16em] px-10 py-4 rounded-md transition-all duration-200 shimmer-btn animate-pulse-glow cursor-pointer"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            <WhatsAppIcon />
            Message Us on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
