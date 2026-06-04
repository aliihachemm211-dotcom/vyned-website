import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works — VYNED",
  description:
    "From first lead to closed deal — see every stage of the VYNED automated system.",
};

const steps = [
  {
    num: "01",
    phase: "Lead arrives",
    title: "Lead contacts you. The system responds instantly.",
    body: "A prospect messages you on WhatsApp, fills a form, or clicks an ad. Within seconds — not minutes, not hours — they receive a professional, personalised response. Your name. Your brand. Your tone. Sent automatically while you're in a viewing, asleep, or on a call.",
  },
  {
    num: "02",
    phase: "Qualification",
    title: "The system asks the right questions.",
    body: "The automated sequence gathers what you need: budget, timeline, property type, preferred areas. Not a robotic form — a natural conversation flow over WhatsApp that feels human. By the time you look at the lead, you already know if they're worth your time.",
  },
  {
    num: "03",
    phase: "Viewing booked",
    title: "Viewings get confirmed without a single back-and-forth.",
    body: "The system proposes times, confirms appointments, and sends reminder messages the day before and two hours before. No-shows drop. Cancellations surface early. You show up to viewings that are actually happening.",
  },
  {
    num: "04",
    phase: "Post-viewing",
    title: "Every viewing gets a follow-up. Every time.",
    body: "After the viewing, the system sends a follow-up message asking for feedback. Interested? A nurture sequence starts. Not ready yet? They stay warm in the pipeline with scheduled check-ins. The lead never goes cold because you forgot to follow up.",
  },
  {
    num: "05",
    phase: "Pipeline management",
    title: "14 stages. Every lead tracked. Nothing falls through.",
    body: "From 'New Inquiry' to 'Deal Closed', every lead sits in a defined stage. The right message fires at the right moment — automatically. You can see at a glance where every lead stands. No spreadsheet. No memory required.",
  },
  {
    num: "06",
    phase: "Re-engagement",
    title: "Old leads don't die. They get reactivated.",
    body: "That lead from 90 days ago who went quiet? The system checks in at the right interval with a relevant message. Market update. New listing. Simple nudge. Some of your best deals are buried in leads you gave up on.",
  },
  {
    num: "07",
    phase: "Deal closed",
    title: "Deal closes. Review request fires. Referral loop starts.",
    body: "The moment a deal closes, the system sends a review request while the client is still happy. Then it enters them into a long-term referral sequence. Your reputation compounds automatically. Every closed deal becomes the beginning of the next one.",
  },
];

export default function HowItWorks() {
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
        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-36 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 border border-[#31343F] rounded-full px-4 py-1.5 bg-[#272A34] w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4D8FFF]" />
            <span
              className="text-xs text-[#80859A] uppercase tracking-widest"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              The system
            </span>
          </div>
          <h1
            className="text-5xl md:text-7xl lg:text-8xl text-[#E8EAF2] leading-none max-w-4xl"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            From first message to{" "}
            <span className="text-[#4D8FFF]">closed deal.</span>
          </h1>
          <p
            className="text-base md:text-lg text-[#80859A] max-w-2xl leading-relaxed"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Seven stages. Fully automated. Built and managed for you. Here is exactly
            what happens when a lead enters the VYNED system.
          </p>
        </div>
      </section>

      {/* ─── STEPS ───────────────────────────────────────────────── */}
      <section className="bg-[#272A34] py-24 px-6 border-t border-[#31343F]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-0">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="relative grid grid-cols-1 md:grid-cols-[80px_1fr] gap-6 md:gap-10 py-12 border-b border-[#31343F] last:border-b-0 group"
              >
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute left-[38px] top-[88px] bottom-[-1px] w-px bg-[#31343F]" />
                )}

                {/* Step number circle */}
                <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-0">
                  <div className="relative z-10 w-10 h-10 rounded-full border border-[#31343F] bg-[#1E2028] flex items-center justify-center group-hover:border-[#4D8FFF]/50 transition-colors">
                    <span
                      className="text-sm text-[#4D8FFF]"
                      style={{ fontFamily: "var(--font-dm-mono)" }}
                    >
                      {step.num}
                    </span>
                  </div>
                  <span
                    className="text-xs text-[#80859A] uppercase tracking-widest md:mt-3 md:ml-0"
                    style={{ fontFamily: "var(--font-dm-mono)" }}
                  >
                    {step.phase}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 pb-2">
                  <h2
                    className="text-2xl md:text-3xl text-[#E8EAF2] leading-tight"
                    style={{ fontFamily: "var(--font-bebas)" }}
                  >
                    {step.title}
                  </h2>
                  <p
                    className="text-sm md:text-base text-[#80859A] leading-relaxed max-w-2xl"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MANAGED NOTE ────────────────────────────────────────── */}
      <section className="bg-[#1E2028] py-24 px-6 border-t border-[#31343F]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
          <div className="flex flex-col gap-4 max-w-xl">
            <span
              className="text-xs text-[#4D8FFF] uppercase tracking-widest"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              What you never do
            </span>
            <h2
              className="text-4xl md:text-6xl text-[#E8EAF2] leading-none"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              You never touch{" "}
              <span className="text-[#4D8FFF]">the backend.</span>
            </h2>
            <p
              className="text-[#80859A] text-base leading-relaxed"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Every stage above runs without you logging into anything. We build the
              system. We monitor it. We fix it when something needs adjusting. You get
              the results — leads responded to, viewings confirmed, deals tracked — without
              ever becoming a CRM administrator.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {[
              "No onboarding sessions",
              "No tutorial videos to watch",
              "No backend to log into",
              "No automations to configure",
              "No broken flows to debug",
              "No subscription management",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <svg className="text-[#4D8FFF] shrink-0" width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8l4 4 6-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span
                  className="text-sm text-[#80859A]"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#272A34] py-24 px-6 border-t border-[#31343F]">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
          <h2
            className="text-4xl md:text-6xl text-[#E8EAF2] leading-none"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            Ready to run the system?
          </h2>
          <p className="text-[#80859A]" style={{ fontFamily: "var(--font-syne)" }}>
            Message us on WhatsApp. We&apos;ll walk you through setup — it takes one call.
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
