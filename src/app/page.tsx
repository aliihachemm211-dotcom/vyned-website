import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VYNED — Every lead you miss is a commission someone else closed.",
  description:
    "VYNED builds and runs a complete automated system for your real estate business. Instant responses. Confirmed viewings. Deals that don't fall through the cracks.",
};

const problems = [
  {
    num: "01",
    text: "A lead messages at midnight. You're asleep. By 7AM they've already called another agent.",
  },
  {
    num: "02",
    text: "Viewing requests buried in three WhatsApp threads you meant to check yesterday.",
  },
  {
    num: "03",
    text: "You showed the property. They seemed interested. You never followed up. Neither did they.",
  },
  {
    num: "04",
    text: "The deal closed. You forgot to ask for the review. The moment passed.",
  },
  {
    num: "05",
    text: "That lead from two months ago had a budget of AED 2M. They're still out there. You have no idea.",
  },
  {
    num: "06",
    text: "You have no idea how many active leads you have right now. Or where any of them stand.",
  },
];

const pillars = [
  {
    label: "01",
    title: "Always-On Response",
    body: "Every lead gets an instant automated WhatsApp reply the second they make contact. 2AM on a Friday. You're in a viewing. It doesn't matter.",
  },
  {
    label: "02",
    title: "Pipeline That Runs Itself",
    body: "14 stages from first inquiry to deal closed. Viewing confirmations, reminders, feedback requests — the right message fires automatically at the right moment.",
  },
  {
    label: "03",
    title: "Managed, Not Self-Serve",
    body: "We build it, monitor it, and keep it running. You never log into a backend, watch a tutorial, or troubleshoot a broken automation.",
  },
];

export default function Home() {
  return (
    <>
      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#1E2028]">
        {/* Background grid */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(77,143,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(77,143,255,0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Glow */}
        <div
          className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(77,143,255,0.12) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-40 flex flex-col items-center text-center gap-8">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 border border-[#31343F] rounded-full px-4 py-1.5 bg-[#272A34]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4D8FFF] animate-pulse-glow" />
            <span
              className="text-xs text-[#80859A] uppercase tracking-widest"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Real-estate automation · Dubai
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl text-[#E8EAF2] leading-none max-w-4xl"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            Every lead you miss is a commission{" "}
            <span className="text-[#4D8FFF]">someone else closed.</span>
          </h1>

          {/* Sub */}
          <p
            className="text-base md:text-lg text-[#80859A] max-w-2xl leading-relaxed"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            VYNED builds and runs a complete automated system for your real estate
            business. Instant responses. Confirmed viewings. Deals that don&apos;t fall
            through the cracks. You focus on closing — the system handles everything else.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            <a
              href="https://wa.me/PLACEHOLDER"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#4D8FFF] hover:bg-[#3a7af0] active:scale-95 text-white font-semibold px-6 py-3.5 rounded-md transition-all text-sm"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              <WhatsAppIcon />
              Message Us on WhatsApp
            </a>
            <a
              href="/how-it-works"
              className="text-sm text-[#80859A] hover:text-[#E8EAF2] transition-colors underline-offset-4 hover:underline"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              See how it works →
            </a>
          </div>

          {/* Stat strip */}
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12 mt-8 pt-8 border-t border-[#31343F] w-full justify-center">
            {[
              { stat: "< 60s", label: "Response time on every lead" },
              { stat: "14", label: "Pipeline stages automated" },
              { stat: "$220/mo", label: "Full managed service" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-1">
                <span
                  className="text-2xl text-[#4D8FFF]"
                  style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.05em" }}
                >
                  {item.stat}
                </span>
                <span
                  className="text-xs text-[#80859A] text-center"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROBLEM ─────────────────────────────────────────────── */}
      <section className="bg-[#272A34] py-24 px-6 border-t border-[#31343F]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 flex flex-col gap-3">
            <span
              className="text-xs text-[#4D8FFF] uppercase tracking-widest"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              The problem
            </span>
            <h2
              className="text-4xl md:text-6xl text-[#E8EAF2] leading-none max-w-3xl"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              You&apos;re not losing deals because you&apos;re bad at your job.
            </h2>
            <p
              className="text-[#80859A] text-base md:text-lg max-w-xl leading-relaxed"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              You&apos;re losing them because no system exists between you and your leads.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {problems.map((p) => (
              <div
                key={p.num}
                className="group relative rounded-xl border border-[#31343F] bg-[#1E2028] p-6 hover:border-[#4D8FFF]/40 hover:bg-[#272A34] transition-all duration-300"
              >
                <span
                  className="block text-4xl text-[#4D8FFF]/30 mb-4 group-hover:text-[#4D8FFF]/60 transition-colors"
                  style={{ fontFamily: "var(--font-bebas)" }}
                >
                  {p.num}
                </span>
                <p
                  className="text-sm text-[#80859A] leading-relaxed group-hover:text-[#E8EAF2] transition-colors"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SYSTEM ──────────────────────────────────────────────── */}
      <section className="bg-[#1E2028] py-24 px-6 border-t border-[#31343F]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 flex flex-col gap-3">
            <span
              className="text-xs text-[#4D8FFF] uppercase tracking-widest"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              The solution
            </span>
            <h2
              className="text-4xl md:text-6xl text-[#E8EAF2] leading-none"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              We build it. We run it.{" "}
              <span className="text-[#4D8FFF]">It never sleeps.</span>
            </h2>
            <p
              className="text-[#80859A] text-base md:text-lg max-w-xl leading-relaxed"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              A complete operational system for your real estate business — built on
              professional CRM infrastructure, tailored to the Dubai market, managed
              entirely by us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div
                key={p.label}
                className="relative rounded-xl border border-[#31343F] bg-[#272A34] p-8 flex flex-col gap-4 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4D8FFF]/50 to-transparent" />
                <span
                  className="text-5xl text-[#4D8FFF]/20"
                  style={{ fontFamily: "var(--font-bebas)" }}
                >
                  {p.label}
                </span>
                <h3
                  className="text-2xl text-[#E8EAF2]"
                  style={{ fontFamily: "var(--font-bebas)" }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-sm text-[#80859A] leading-relaxed"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING PREVIEW ─────────────────────────────────────── */}
      <section className="bg-[#272A34] py-24 px-6 border-t border-[#31343F]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col gap-4 max-w-xl">
            <span
              className="text-xs text-[#4D8FFF] uppercase tracking-widest"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Pricing
            </span>
            <h2
              className="text-4xl md:text-6xl text-[#E8EAF2] leading-none"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              $220 a month.{" "}
              <span className="text-[#4D8FFF]">
                One closed deal covers the year.
              </span>
            </h2>
            <p
              className="text-[#80859A] text-base md:text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              In Dubai, the math is not complicated.
            </p>
            <a
              href="/pricing"
              className="text-sm text-[#4D8FFF] hover:text-[#E8EAF2] transition-colors underline-offset-4 hover:underline mt-2 w-fit"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              See full pricing details →
            </a>
          </div>

          {/* Price card */}
          <div className="relative rounded-2xl border border-[#4D8FFF]/30 bg-[#1E2028] p-8 min-w-[300px] flex flex-col gap-5">
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at top, rgba(77,143,255,0.08) 0%, transparent 65%)",
              }}
            />
            <div className="flex flex-col gap-1 relative">
              <span
                className="text-6xl text-[#E8EAF2]"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                $220
              </span>
              <span
                className="text-xs text-[#80859A] uppercase tracking-widest"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                per month · fully managed
              </span>
            </div>
            <ul className="flex flex-col gap-3 relative">
              {[
                "Instant WhatsApp response system",
                "14-stage automated pipeline",
                "Viewing confirmations & reminders",
                "Re-engagement sequences",
                "Review request automation",
                "Built, monitored & managed for you",
              ].map((feat) => (
                <li key={feat} className="flex items-start gap-2.5">
                  <svg
                    className="mt-0.5 shrink-0 text-[#4D8FFF]"
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M3 8l4 4 6-7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span
                    className="text-sm text-[#80859A]"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {feat}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/PLACEHOLDER"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-2 bg-[#4D8FFF] hover:bg-[#3a7af0] text-white text-sm font-semibold px-5 py-3 rounded-md transition-colors mt-2"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              <WhatsAppIcon />
              Message Us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#1E2028] py-28 px-6 border-t border-[#31343F]">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center bottom, rgba(77,143,255,0.1) 0%, transparent 65%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
          <h2
            className="text-5xl md:text-7xl text-[#E8EAF2] leading-none"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            The lead that just messaged you{" "}
            <span className="text-[#4D8FFF]">is still waiting.</span>
          </h2>
          <p
            className="text-lg text-[#80859A]"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Don&apos;t let them wait.
          </p>
          <a
            href="https://wa.me/PLACEHOLDER"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#4D8FFF] hover:bg-[#3a7af0] active:scale-95 text-white font-semibold px-8 py-4 rounded-md transition-all text-base mt-2 animate-pulse-glow"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            <WhatsAppIcon size={18} />
            Message Us on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.132.558 4.133 1.535 5.873L0 24l6.335-1.508A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.679-.507-5.214-1.392l-.374-.217-3.861.92.978-3.751-.243-.387A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}
