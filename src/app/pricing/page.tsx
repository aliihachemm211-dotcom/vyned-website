import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing — VYNED",
  description: "$220/month. Fully managed real estate automation for Dubai agents. One closed deal covers the year.",
};

const features = [
  "Instant WhatsApp response to every new lead",
  "14-stage automated sales pipeline",
  "Viewing confirmation & reminder sequences",
  "Post-viewing follow-up automation",
  "Re-engagement sequences for cold leads",
  "Review request automation after deal close",
  "Pipeline visibility — always know where every lead stands",
  "Built, monitored & managed entirely by VYNED",
  "Ongoing optimisation as your business grows",
];

const comparison = [
  { without: "Leads go cold while you sleep", with: "Instant 24/7 response to every lead" },
  { without: "Viewings fall through from poor follow-up", with: "Automated confirmations + reminders every time" },
  { without: "No visibility into your pipeline", with: "14-stage CRM — always know where every lead stands" },
  { without: "Cold leads never get touched again", with: "Automated re-engagement at the right interval" },
  { without: "Reviews never collected after closing", with: "Review request fires automatically after every deal" },
  { without: "You manage all of this manually", with: "Fully managed — we build it, run it, fix it" },
];

const standards = [
  { label: "Setup time",       value: "8–10 business days", note: "Meta template approval included. We submit on Day 1." },
  { label: "Response speed",   value: "< 60 seconds",      note: "Lead receives first message" },
  { label: "Pipeline stages",  value: "14 stages",         note: "First inquiry through deal closed" },
  { label: "Monitoring",       value: "Continuous",        note: "We watch the system so you don't" },
  { label: "Changes & updates",value: "Included",          note: "Request adjustments any time" },
  { label: "Contract",         value: "Month to month",    note: "No lock-in" },
];

const faqs = [
  { q: "What do I need to get started?", a: "A WhatsApp number and a Meta Business Account. We handle everything from there — CRM setup, WhatsApp connection, automation build, testing, and launch. Onboarding call happens once the system is fully built and tested, before we hand it over to you." },
  { q: "Do I need to learn any software?", a: "No. That's the point. You will never log into a backend, configure an automation, or watch a tutorial. We manage the entire system on your behalf." },
  { q: "What happens if something breaks?", a: "We monitor the system continuously. If an automation fails or a message doesn't send, we catch it and fix it — usually before you'd ever notice." },
  { q: "Can I customise the messages?", a: "Yes — during setup. All WhatsApp messages are Meta-approved templates. We work with you during setup to get the tone and wording right before submitting for approval. After launch, changes to templates require re-submission to Meta and a new approval window. We handle that process for you whenever you need a change." },
  { q: "Is there a setup fee?", a: "Yes. A one-time setup fee of $200–250 for the standard system, or $300–350 for the Calendar Upgrade. This covers the full build, WhatsApp connection, Meta template submission, and end-to-end testing. The $220/month retainer begins when the system goes live." },
  { q: "How do I cancel?", a: "Message us. No forms, no notice period, no penalties. Month to month means exactly that." },
];

function WA() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.132.558 4.133 1.535 5.873L0 24l6.335-1.508A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.679-.507-5.214-1.392l-.374-.217-3.861.92.978-3.751-.243-.387A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
    </svg>
  );
}

export default function Pricing() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1E2028]" style={{ paddingTop: "96px" }}>
        <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse at 60% 50%, rgba(77,143,255,0.08) 0%, transparent 60%)" }} aria-hidden />
        <div className="relative max-w-6xl mx-auto px-6 py-20 flex flex-col gap-5">
          <div className="inline-flex items-center gap-2 border border-[#31343F] rounded-full px-4 py-1.5 bg-[#272A34] w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4D8FFF]" />
            <span className="text-[10px] text-[#80859A] uppercase tracking-[0.18em]" style={{ fontFamily: "var(--font-dm-mono)" }}>Pricing</span>
          </div>
          <h1 className="text-[#E8EAF2] max-w-4xl" style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(48px, 7vw, 96px)", lineHeight: 0.9 }}>
            One closed deal. <span className="text-[#4D8FFF]">The year is paid.</span>
          </h1>
          <p className="text-[#80859A] max-w-2xl leading-relaxed" style={{ fontFamily: "var(--font-syne)", fontSize: "17px" }}>
            In Dubai, commissions start at tens of thousands of dirhams. The question isn&apos;t whether $220 a month is worth it. The question is how many deals you&apos;ve already lost without a system.
          </p>
        </div>
      </section>

      {/* Before / After comparison */}
      <section className="bg-[#1E2028] px-6" style={{ paddingTop: "100px", paddingBottom: "100px", borderTop: "1px solid #31343F" }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 flex flex-col gap-3">
            <span className="text-[#4D8FFF] uppercase" style={{ fontFamily: "var(--font-dm-mono)", fontSize: "11px", letterSpacing: "0.18em" }}>The difference</span>
            <h2 className="text-[#E8EAF2]" style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(36px, 5vw, 60px)", lineHeight: 0.92 }}>
              What changes when VYNED runs your pipeline.
            </h2>
          </div>
          <div className="rounded-[12px] overflow-hidden" style={{ border: "1px solid #31343F" }}>
            {/* Column headers */}
            <div className="grid grid-cols-2" style={{ borderBottom: "1px solid #31343F" }}>
              <div className="flex items-center gap-2 px-6 py-4" style={{ background: "#1a1a22", borderRight: "1px solid #31343F" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
                <span className="text-[#80859A] uppercase" style={{ fontFamily: "var(--font-dm-mono)", fontSize: "10px", letterSpacing: "0.16em" }}>Without VYNED</span>
              </div>
              <div className="flex items-center gap-2 px-6 py-4" style={{ background: "rgba(77,143,255,0.05)" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4D8FFF" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span className="text-[#4D8FFF] uppercase" style={{ fontFamily: "var(--font-dm-mono)", fontSize: "10px", letterSpacing: "0.16em" }}>With VYNED</span>
              </div>
            </div>
            {/* Rows */}
            {comparison.map((row, i) => (
              <div key={i} className="grid grid-cols-2" style={{ borderBottom: i < comparison.length - 1 ? "1px solid #31343F" : "none" }}>
                <div className="flex items-start gap-3 px-6 py-4" style={{ background: i % 2 === 0 ? "#1a1a22" : "#1c1c24", borderRight: "1px solid #31343F" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" className="mt-0.5 flex-shrink-0" strokeOpacity="0.6" aria-hidden>
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                  <span className="text-[#80859A]" style={{ fontFamily: "var(--font-syne)", fontSize: "14px", lineHeight: 1.5 }}>{row.without}</span>
                </div>
                <div className="flex items-start gap-3 px-6 py-4" style={{ background: i % 2 === 0 ? "rgba(77,143,255,0.04)" : "rgba(77,143,255,0.06)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4D8FFF" strokeWidth="2" strokeLinecap="round" className="mt-0.5 flex-shrink-0" aria-hidden>
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span className="text-[#E8EAF2]" style={{ fontFamily: "var(--font-syne)", fontSize: "14px", lineHeight: 1.5 }}>{row.with}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing card + value */}
      <section className="bg-[#272A34] px-6" style={{ paddingTop: "100px", paddingBottom: "100px", borderTop: "1px solid #31343F" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {/* Plan card */}
            <div className="relative rounded-[12px] border-beam-bg">
              <div className="rounded-[11px] p-8 flex flex-col gap-6" style={{ background: "#1E2028" }}>
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="text-[#4D8FFF] uppercase" style={{ fontFamily: "var(--font-dm-mono)", fontSize: "10px", letterSpacing: "0.16em" }}>Managed service</span>
                    <span className="text-[#E8EAF2] leading-none" style={{ fontFamily: "var(--font-bebas)", fontSize: "88px" }}>$220</span>
                    <span className="text-[#80859A] uppercase" style={{ fontFamily: "var(--font-dm-mono)", fontSize: "9px", letterSpacing: "0.12em" }}>$200–250 one-time setup · 3-month minimum</span>
                  </div>
                  <span className="px-3 py-1 rounded-full" style={{ border: "1px solid rgba(77,143,255,0.3)", background: "rgba(77,143,255,0.1)", fontFamily: "var(--font-dm-mono)", fontSize: "9px", color: "#4D8FFF", textTransform: "uppercase", letterSpacing: "0.12em" }}>
                    All-in
                  </span>
                </div>
                <ul className="flex flex-col gap-3">
                  {features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5">
                      <svg className="mt-0.5 flex-shrink-0" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                        <path d="M3 8l3.5 3.5 6.5-7" stroke="#4D8FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-[#80859A]" style={{ fontFamily: "var(--font-syne)", fontSize: "14px" }}>{feat}</span>
                    </li>
                  ))}
                </ul>
                <a href="https://wa.me/PLACEHOLDER" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#4D8FFF] hover:bg-[#5a9aff] text-white text-[11px] uppercase tracking-[0.14em] px-5 py-3.5 rounded-md transition-all shimmer-btn cursor-pointer"
                  style={{ fontFamily: "var(--font-dm-mono)" }}>
                  <WA /> Message Us on WhatsApp
                </a>
              </div>
            </div>

            {/* Value cards */}
            <div className="flex flex-col gap-5">
              <div className="rounded-[12px] p-7 flex flex-col gap-4" style={{ background: "#1E2028", border: "1px solid #31343F" }}>
                <span className="text-[#4D8FFF] uppercase" style={{ fontFamily: "var(--font-dm-mono)", fontSize: "10px", letterSpacing: "0.16em" }}>The math</span>
                <h3 className="text-[#E8EAF2]" style={{ fontFamily: "var(--font-bebas)", fontSize: "28px", lineHeight: 1 }}>One deal. The whole year is covered.</h3>
                {[
                  { label: "Average Dubai commission", value: "AED 15,000–50,000+", note: "per closed deal" },
                  { label: "VYNED annual cost",         value: "AED 9,700",         note: "$220 × 12 months" },
                  { label: "Deals needed to break even",value: "Less than 1",       note: "on a single average commission" },
                ].map((row) => (
                  <div key={row.label} className="flex items-start justify-between gap-4 py-3" style={{ borderBottom: "1px solid #31343F" }}>
                    <div>
                      <p className="text-[#80859A] uppercase" style={{ fontFamily: "var(--font-dm-mono)", fontSize: "9px", letterSpacing: "0.12em" }}>{row.label}</p>
                      <p className="text-[#80859A]" style={{ fontFamily: "var(--font-syne)", fontSize: "12px" }}>{row.note}</p>
                    </div>
                    <span className="text-[#E8EAF2] shrink-0" style={{ fontFamily: "var(--font-bebas)", fontSize: "18px" }}>{row.value}</span>
                  </div>
                ))}
              </div>
              <div className="rounded-[12px] p-7 flex flex-col gap-3" style={{ background: "#1E2028", border: "1px solid #31343F" }}>
                <span className="text-[#4D8FFF] uppercase" style={{ fontFamily: "var(--font-dm-mono)", fontSize: "10px", letterSpacing: "0.16em" }}>No hidden costs</span>
                <p className="text-[#80859A] leading-relaxed" style={{ fontFamily: "var(--font-syne)", fontSize: "14px" }}>
                  No setup fee. No per-seat pricing. No premium tiers. No usage limits. $220 a month covers everything — the build, the management, the monitoring, and every update you ever request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service standards */}
      <section className="bg-[#1E2028] px-6" style={{ paddingTop: "100px", paddingBottom: "100px", borderTop: "1px solid #31343F" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 flex flex-col gap-3">
            <span className="text-[#4D8FFF] uppercase" style={{ fontFamily: "var(--font-dm-mono)", fontSize: "11px", letterSpacing: "0.18em" }}>Service standards</span>
            <h2 className="text-[#E8EAF2]" style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 0.92 }}>What you get, precisely.</h2>
          </div>
          <div className="rounded-[12px] overflow-hidden" style={{ border: "1px solid #31343F" }}>
            {standards.map((row, i) => (
              <div key={row.label} className="grid grid-cols-1 sm:grid-cols-3 gap-2 px-6 py-5" style={{ background: i % 2 === 0 ? "#272A34" : "#1E2028", borderBottom: i < standards.length - 1 ? "1px solid #31343F" : "none" }}>
                <span className="text-[#80859A] uppercase self-center" style={{ fontFamily: "var(--font-dm-mono)", fontSize: "9px", letterSpacing: "0.14em" }}>{row.label}</span>
                <span className="text-[#E8EAF2] self-center" style={{ fontFamily: "var(--font-bebas)", fontSize: "20px" }}>{row.value}</span>
                <span className="text-[#80859A] self-center" style={{ fontFamily: "var(--font-syne)", fontSize: "14px" }}>{row.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#272A34] px-6" style={{ paddingTop: "100px", paddingBottom: "100px", borderTop: "1px solid #31343F" }}>
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 flex flex-col gap-3">
            <span className="text-[#4D8FFF] uppercase" style={{ fontFamily: "var(--font-dm-mono)", fontSize: "11px", letterSpacing: "0.18em" }}>Questions</span>
            <h2 className="text-[#E8EAF2]" style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 0.92 }}>The ones we always get.</h2>
          </div>
          <div className="flex flex-col gap-0">
            {faqs.map((faq, i) => (
              <div key={faq.q} className="py-6" style={{ borderBottom: i < faqs.length - 1 ? "1px solid #31343F" : "none" }}>
                <p className="text-[#E8EAF2] mb-2" style={{ fontFamily: "var(--font-syne)", fontSize: "15px", fontWeight: 600 }}>{faq.q}</p>
                <p className="text-[#80859A] leading-relaxed" style={{ fontFamily: "var(--font-syne)", fontSize: "14px" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#1E2028] px-6 text-center" style={{ paddingTop: "100px", paddingBottom: "100px", borderTop: "1px solid #31343F" }}>
        <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse at center bottom, rgba(77,143,255,0.09) 0%, transparent 65%)" }} aria-hidden />
        <div className="relative max-w-3xl mx-auto flex flex-col items-center gap-6">
          <h2 className="text-[#E8EAF2]" style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(40px, 5vw, 64px)", lineHeight: 0.92 }}>
            Start today. Your next lead <span className="text-[#4D8FFF]">is already waiting.</span>
          </h2>
          <p className="text-[#80859A]" style={{ fontFamily: "var(--font-syne)", fontSize: "17px" }}>No contract. No setup fee. One WhatsApp message to get started.</p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            <a href="https://wa.me/PLACEHOLDER" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#4D8FFF] hover:bg-[#5a9aff] text-white text-[11px] uppercase tracking-[0.14em] px-7 py-3.5 rounded-md transition-all shimmer-btn cursor-pointer"
              style={{ fontFamily: "var(--font-dm-mono)" }}>
              <WA /> Message Us on WhatsApp
            </a>
            <Link href="/how-it-works" className="text-[#80859A] hover:text-[#E8EAF2] transition-colors text-[11px] uppercase tracking-[0.14em]" style={{ fontFamily: "var(--font-dm-mono)" }}>
              See how the system works →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
