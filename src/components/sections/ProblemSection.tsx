"use client";

import { useRef, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const problems = [
  {
    num: "01",
    text: "A lead messages at midnight. You're asleep. By 7AM they've already called another agent.",
    span: "col-span-12 md:col-span-6",
    wide: false,
  },
  {
    num: "02",
    text: "Viewing requests buried in three WhatsApp threads you meant to check yesterday.",
    span: "col-span-12 md:col-span-6",
    wide: false,
  },
  {
    num: "03",
    text: "You showed the property. They seemed interested. You never followed up. Neither did they.",
    span: "col-span-12",
    wide: true,
  },
  {
    num: "04",
    text: "The deal closed. You forgot to ask for the review. The moment passed.",
    span: "col-span-12 md:col-span-7",
    wide: false,
  },
  {
    num: "05",
    text: "That lead from two months ago had a budget of AED 2M. They're still out there. You have no idea.",
    span: "col-span-12 md:col-span-5",
    wide: false,
  },
  {
    num: "06",
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
        const cards = sectionRef.current?.querySelectorAll(".problem-card");
        if (!cards) return;

        cards.forEach((card, i) => {
          gsap.fromTo(
            card,
            { y: 56, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.75,
              delay: i * 0.08,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play none none reverse",
              },
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
          <span
            className="text-[#4D8FFF] uppercase"
            style={{ fontFamily: "var(--font-dm-mono)", fontSize: "11px", letterSpacing: "0.18em" }}
          >
            The Reality
          </span>
          <h2
            className="text-[#E8EAF2] max-w-3xl"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(40px, 5.5vw, 72px)",
              lineHeight: 0.92,
              letterSpacing: "0.01em",
            }}
          >
            You&apos;re not losing deals because you&apos;re bad at your job.
          </h2>
          <p
            className="text-[#80859A] max-w-lg leading-relaxed"
            style={{ fontFamily: "var(--font-syne)", fontSize: "17px" }}
          >
            You&apos;re losing them because no system exists between you and your leads.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-12 gap-4">
          {problems.map((p) => (
            <div key={p.num} className={`problem-card group cursor-default ${p.span}`}>
              <div
                className="h-full rounded-[8px] p-8 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "#1E2028",
                  border: "1px solid #31343F",
                  borderLeft: "2px solid #4D8FFF",
                }}
              >
                <span
                  className="text-[#4D8FFF]"
                  style={{ fontFamily: "var(--font-dm-mono)", fontSize: "11px", letterSpacing: "0.18em", opacity: 0.55 }}
                >
                  {p.num}
                </span>
                <p
                  className="text-[#80859A] leading-relaxed group-hover:text-[#E8EAF2] transition-colors duration-300"
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: p.wide ? "17px" : "15px",
                    lineHeight: 1.65,
                  }}
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
