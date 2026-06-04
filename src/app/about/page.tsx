import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — VYNED",
  description:
    "VYNED exists because too many good agents in Dubai lose deals to a systems problem, not a skills problem.",
};

const differentiators = [
  {
    num: "01",
    title: "Built for Dubai. Not adapted for Dubai.",
    body: "The Dubai real estate market moves differently. Lead behaviour, response expectations, negotiation culture, the weight of a WhatsApp message at 11PM — we built this system with all of it in mind. Not a generic CRM we've rebranded.",
  },
  {
    num: "02",
    title: "We manage it. You don't touch it.",
    body: "Most 'automation tools' hand you a platform and a tutorial library and wish you luck. VYNED operates the system for you. We build it, we monitor it, we update it, we fix it. You get the outcomes without becoming the administrator.",
  },
  {
    num: "03",
    title: "We're incentivised to keep it working.",
    body: "Month-to-month means you can leave any time. So we have every reason to make sure the system performs. If leads stop converting, if automations break, if the pipeline needs adjusting — that's our problem to fix, not yours to notice.",
  },
];

export default function About() {
  return (
    <>
      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#1E2028]">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(77,143,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(77,143,255,0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(77,143,255,0.10) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-36 flex flex-col gap-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 border border-[#31343F] rounded-full px-4 py-1.5 bg-[#272A34] w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4D8FFF]" />
            <span
              className="text-xs text-[#80859A] uppercase tracking-widest"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              About VYNED
            </span>
          </div>
          <h1
            className="text-5xl md:text-7xl text-[#E8EAF2] leading-none"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            Good agents lose deals to{" "}
            <span className="text-[#4D8FFF]">systems problems.</span>
          </h1>
          <p
            className="text-base md:text-lg text-[#80859A] max-w-2xl leading-relaxed"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            VYNED exists because the gap between a good agent and a great business isn&apos;t skill —
            it&apos;s infrastructure. Most agents in Dubai are talented, driven, and
            experienced. What they&apos;re missing is a system that works when they can&apos;t.
          </p>
        </div>
      </section>

      {/* ─── MISSION ─────────────────────────────────────────────── */}
      <section className="bg-[#272A34] py-24 px-6 border-t border-[#31343F]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-4">
            <span
              className="text-xs text-[#4D8FFF] uppercase tracking-widest"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Why we built this
            </span>
            <h2
              className="text-4xl md:text-5xl text-[#E8EAF2] leading-none"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              The problem is not the agents.
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            <p
              className="text-[#80859A] leading-relaxed"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              A lead messages at midnight. The agent is asleep — as they should be. By
              morning, the lead has already called someone else. Not because the agent
              is bad. Because there was no system to respond.
            </p>
            <p
              className="text-[#80859A] leading-relaxed"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              The Dubai real estate market runs 24 hours. Leads don&apos;t wait. Viewing
              windows close fast. The agents who win aren&apos;t necessarily the most
              experienced — they&apos;re the ones who respond first and follow up
              consistently.
            </p>
            <p
              className="text-[#80859A] leading-relaxed"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              VYNED makes that speed and consistency automatic. We build the system,
              run it, and make sure it performs — so every agent we work with has the
              infrastructure of a top-tier operation, regardless of team size.
            </p>
          </div>
        </div>
      </section>

      {/* ─── DIFFERENTIATORS ─────────────────────────────────────── */}
      <section className="bg-[#1E2028] py-24 px-6 border-t border-[#31343F]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 flex flex-col gap-3">
            <span
              className="text-xs text-[#4D8FFF] uppercase tracking-widest"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              What makes VYNED different
            </span>
            <h2
              className="text-4xl md:text-6xl text-[#E8EAF2] leading-none"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              Three things that matter.
            </h2>
          </div>
          <div className="flex flex-col gap-0">
            {differentiators.map((d, i) => (
              <div
                key={d.num}
                className={`grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6 md:gap-10 py-12 ${
                  i < differentiators.length - 1 ? "border-b border-[#31343F]" : ""
                }`}
              >
                <span
                  className="text-5xl text-[#4D8FFF]/20"
                  style={{ fontFamily: "var(--font-bebas)" }}
                >
                  {d.num}
                </span>
                <div className="flex flex-col gap-3">
                  <h3
                    className="text-2xl md:text-3xl text-[#E8EAF2]"
                    style={{ fontFamily: "var(--font-bebas)" }}
                  >
                    {d.title}
                  </h3>
                  <p
                    className="text-sm md:text-base text-[#80859A] leading-relaxed max-w-2xl"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {d.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMMITMENT ──────────────────────────────────────────── */}
      <section className="bg-[#272A34] py-24 px-6 border-t border-[#31343F]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-4">
            <span
              className="text-xs text-[#4D8FFF] uppercase tracking-widest"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Our commitment
            </span>
            <h2
              className="text-4xl md:text-5xl text-[#E8EAF2] leading-none"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              We don&apos;t sell software.{" "}
              <span className="text-[#4D8FFF]">We run operations.</span>
            </h2>
            <p
              className="text-[#80859A] leading-relaxed"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              There are dozens of CRM tools and automation platforms you could pay for.
              VYNED is not a platform — it&apos;s a service. You never log in. You never
              configure anything. You pay us to make sure it works, and that&apos;s exactly
              what we do.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {[
              { stat: "< 60s", label: "Every lead responded to" },
              { stat: "14", label: "Pipeline stages managed for you" },
              { stat: "3–5 days", label: "From call to live system" },
              { stat: "0", label: "Platforms you need to learn" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-5 rounded-xl border border-[#31343F] bg-[#1E2028] px-6 py-4"
              >
                <span
                  className="text-3xl text-[#4D8FFF] shrink-0 w-20"
                  style={{ fontFamily: "var(--font-bebas)" }}
                >
                  {item.stat}
                </span>
                <span
                  className="text-sm text-[#80859A]"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#1E2028] py-24 px-6 border-t border-[#31343F]">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center bottom, rgba(77,143,255,0.09) 0%, transparent 65%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
          <h2
            className="text-4xl md:text-6xl text-[#E8EAF2] leading-none"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            Work with a team that{" "}
            <span className="text-[#4D8FFF]">runs your system.</span>
          </h2>
          <p className="text-[#80859A]" style={{ fontFamily: "var(--font-syne)" }}>
            One call to understand your setup. Three to five days to go live.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            <a
              href="https://wa.me/PLACEHOLDER"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#4D8FFF] hover:bg-[#3a7af0] text-white font-semibold px-6 py-3.5 rounded-md transition-colors text-sm"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              <WhatsAppIcon />
              Message Us on WhatsApp
            </a>
            <Link
              href="/pricing"
              className="text-sm text-[#80859A] hover:text-[#E8EAF2] transition-colors"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              See pricing →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.132.558 4.133 1.535 5.873L0 24l6.335-1.508A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.679-.507-5.214-1.392l-.374-.217-3.861.92.978-3.751-.243-.387A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}
