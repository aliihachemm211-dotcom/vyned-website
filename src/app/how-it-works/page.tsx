import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works — VYNED",
  description: "From first lead to closed deal — see every stage of the VYNED automated system.",
};

/* ── Step visual mockup components ──────────────────────────── */

function PhoneConversation() {
  return (
    <div className="rounded-[16px] overflow-hidden w-full" style={{ background: "#111418", border: "1px solid #272A34", maxWidth: "320px" }}>
      <div className="flex items-center justify-between px-4 py-2" style={{ background: "#0d1014" }}>
        <span style={{ fontFamily: "var(--font-dm-mono)", fontSize: "10px", color: "#80859A" }}>9:41</span>
        <span style={{ fontFamily: "var(--font-dm-mono)", fontSize: "10px", color: "#80859A" }}>●●●</span>
      </div>
      <div className="flex items-center gap-3 px-4 py-3" style={{ background: "#1a2024", borderBottom: "1px solid #1e2830" }}>
        <div className="w-8 h-8 rounded-full bg-[#4D8FFF] flex items-center justify-center flex-shrink-0">
          <span style={{ fontFamily: "var(--font-bebas)", fontSize: "13px", color: "white" }}>V</span>
        </div>
        <div>
          <p style={{ fontFamily: "var(--font-syne)", fontSize: "13px", color: "#E8EAF2", fontWeight: 600 }}>VYNED Bot</p>
          <p style={{ fontFamily: "var(--font-dm-mono)", fontSize: "9px", color: "#22c55e" }}>online</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 px-3 py-4" style={{ background: "#0f1318" }}>
        <div className="self-start" style={{ maxWidth: "80%" }}>
          <div className="rounded-[12px] rounded-tl-[3px] px-3 py-2" style={{ background: "#272A34" }}>
            <p style={{ fontFamily: "var(--font-syne)", fontSize: "12px", color: "#E8EAF2", lineHeight: 1.5 }}>
              Is the 2BR in Marina Gate still available?
            </p>
          </div>
          <p style={{ fontFamily: "var(--font-dm-mono)", fontSize: "9px", color: "#80859A", marginTop: "3px", paddingLeft: "4px" }}>10:14</p>
        </div>
        <div className="self-end" style={{ maxWidth: "85%" }}>
          <div className="rounded-[12px] rounded-tr-[3px] px-3 py-2" style={{ background: "rgba(77,143,255,0.18)", border: "1px solid rgba(77,143,255,0.25)" }}>
            <p style={{ fontFamily: "var(--font-syne)", fontSize: "12px", color: "#E8EAF2", lineHeight: 1.5 }}>
              Hi! Yes it&apos;s available. To help you better, are you looking to:<br/>
              1️⃣ Book a viewing<br/>
              2️⃣ Browse options
            </p>
          </div>
          <p className="text-right" style={{ fontFamily: "var(--font-dm-mono)", fontSize: "9px", color: "#4D8FFF", marginTop: "3px", paddingRight: "4px" }}>10:14 ✓✓</p>
        </div>
      </div>
    </div>
  );
}

function CRMCard() {
  return (
    <div className="rounded-[10px] p-5 flex flex-col gap-4 w-full" style={{ background: "#1E2028", border: "1px solid #31343F", maxWidth: "300px" }}>
      <div className="flex items-center justify-between">
        <span style={{ fontFamily: "var(--font-dm-mono)", fontSize: "9px", color: "#4D8FFF", textTransform: "uppercase", letterSpacing: "0.16em" }}>New Lead · Captured</span>
        <span className="px-2 py-0.5 rounded-full" style={{ background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.3)", fontFamily: "var(--font-dm-mono)", fontSize: "8px", color: "#22c55e" }}>active</span>
      </div>
      <div>
        <p style={{ fontFamily: "var(--font-bebas)", fontSize: "22px", color: "#E8EAF2", lineHeight: 1 }}>Ahmed Al Rashidi</p>
        <p style={{ fontFamily: "var(--font-dm-mono)", fontSize: "11px", color: "#80859A", marginTop: "3px" }}>+971 50 XXX XXXX</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {["viewing-requested", "new-lead"].map((tag) => (
          <span key={tag} className="px-2 py-1 rounded" style={{ background: "rgba(77,143,255,0.1)", border: "1px solid rgba(77,143,255,0.2)", fontFamily: "var(--font-dm-mono)", fontSize: "9px", color: "#4D8FFF" }}>{tag}</span>
        ))}
      </div>
      <div className="rounded-[6px] p-3" style={{ background: "#272A34", border: "1px solid #31343F" }}>
        <p style={{ fontFamily: "var(--font-dm-mono)", fontSize: "9px", color: "#80859A", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "4px" }}>Property preference</p>
        <p style={{ fontFamily: "var(--font-syne)", fontSize: "13px", color: "#E8EAF2" }}>Dubai Marina · 2BR · AED 1.8M</p>
      </div>
    </div>
  );
}

function ViewingButtons() {
  return (
    <div className="flex flex-col gap-3 w-full" style={{ maxWidth: "260px" }}>
      <div className="flex items-center justify-center gap-2 rounded-[8px] px-5 py-3" style={{ background: "#4D8FFF", fontFamily: "var(--font-dm-mono)", fontSize: "11px", color: "white", textTransform: "uppercase", letterSpacing: "0.14em" }}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden><polyline points="20 6 9 17 4 12"/></svg>
        Confirm Viewing
      </div>
      <div className="flex items-center justify-center rounded-[8px] px-5 py-3" style={{ border: "1px solid #31343F", fontFamily: "var(--font-dm-mono)", fontSize: "11px", color: "#80859A", textTransform: "uppercase", letterSpacing: "0.14em" }}>
        Reschedule
      </div>
      <div className="flex items-center justify-center rounded-[8px] px-5 py-2.5" style={{ fontFamily: "var(--font-dm-mono)", fontSize: "11px", color: "#3D4050", textTransform: "uppercase", letterSpacing: "0.14em" }}>
        Decline
      </div>
      <p className="text-center" style={{ fontFamily: "var(--font-dm-mono)", fontSize: "8.5px", color: "#3D4050", textTransform: "uppercase", letterSpacing: "0.12em" }}>
        Right message fires automatically
      </p>
    </div>
  );
}

function FeedbackBubble() {
  return (
    <div className="w-full" style={{ maxWidth: "290px" }}>
      <div className="rounded-[12px] rounded-tl-[3px] p-4 flex flex-col gap-3" style={{ background: "rgba(77,143,255,0.08)", border: "1px solid rgba(77,143,255,0.2)" }}>
        <p style={{ fontFamily: "var(--font-syne)", fontSize: "13px", color: "#E8EAF2", lineHeight: 1.5 }}>
          How did the Marina Gate viewing feel? Reply:
        </p>
        <div className="flex gap-2">
          {[["YES ✓", true], ["MAYBE", false], ["NO", false]].map(([opt, active]) => (
            <span key={String(opt)} className="flex-1 text-center py-1.5 rounded-[6px]" style={{ fontFamily: "var(--font-dm-mono)", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", background: active ? "rgba(77,143,255,0.2)" : "rgba(49,52,63,0.5)", border: `1px solid ${active ? "rgba(77,143,255,0.4)" : "#31343F"}`, color: active ? "#4D8FFF" : "#80859A" }}>
              {opt}
            </span>
          ))}
        </div>
      </div>
      <p style={{ fontFamily: "var(--font-dm-mono)", fontSize: "9px", color: "#4D8FFF", marginTop: "4px", paddingLeft: "4px" }}>VYNED · just now ✓✓</p>
    </div>
  );
}

function NotificationMockup() {
  return (
    <div className="rounded-[14px] px-4 py-3 flex items-start gap-3 w-full" style={{ background: "#272A34", border: "1px solid #31343F", maxWidth: "300px", boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}>
      <div className="w-9 h-9 rounded-[10px] flex-shrink-0 flex items-center justify-center" style={{ background: "#25D366" }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.132.558 4.133 1.535 5.873L0 24l6.335-1.508A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.679-.507-5.214-1.392l-.374-.217-3.861.92.978-3.751-.243-.387A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        </svg>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <span style={{ fontFamily: "var(--font-syne)", fontSize: "12px", color: "#E8EAF2", fontWeight: 600 }}>WhatsApp</span>
          <span style={{ fontFamily: "var(--font-dm-mono)", fontSize: "10px", color: "#80859A" }}>09:00</span>
        </div>
        <p style={{ fontFamily: "var(--font-syne)", fontSize: "12px", color: "#80859A", lineHeight: 1.45 }}>
          Reminder: Your viewing at Marina Gate is today at 4:00 PM 🏠
        </p>
      </div>
    </div>
  );
}

function ReviewRequest() {
  return (
    <div className="rounded-[10px] p-5 flex flex-col gap-4 w-full" style={{ background: "#1E2028", border: "1px solid #31343F", maxWidth: "280px" }}>
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#E8EAF2" }}>
          <span style={{ fontFamily: "var(--font-bebas)", fontSize: "11px", color: "#1E2028" }}>PF</span>
        </div>
        <span style={{ fontFamily: "var(--font-syne)", fontSize: "12px", color: "#E8EAF2", fontWeight: 600 }}>Property Finder</span>
      </div>
      <p style={{ fontFamily: "var(--font-syne)", fontSize: "13px", color: "#80859A", lineHeight: 1.45 }}>
        Share your experience working with this agent
      </p>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((n) => (
          <svg key={n} width="20" height="20" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1.5" aria-hidden>
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
        ))}
      </div>
      <div className="text-center py-2.5 rounded-[6px]" style={{ background: "#4D8FFF", fontFamily: "var(--font-dm-mono)", fontSize: "10px", color: "white", textTransform: "uppercase", letterSpacing: "0.14em" }}>
        Leave a Review
      </div>
    </div>
  );
}

function ReactivationMessage() {
  return (
    <div className="w-full" style={{ maxWidth: "290px" }}>
      <div className="flex items-center gap-2 mb-3">
        <div className="h-px flex-1" style={{ background: "#31343F" }} />
        <span className="px-2 py-1 rounded-full" style={{ fontFamily: "var(--font-dm-mono)", fontSize: "8px", color: "#80859A", background: "#272A34", border: "1px solid #31343F", textTransform: "uppercase", letterSpacing: "0.12em" }}>
          30 days later
        </span>
        <div className="h-px flex-1" style={{ background: "#31343F" }} />
      </div>
      <div className="rounded-[12px] rounded-tl-[3px] p-4" style={{ background: "rgba(77,143,255,0.08)", border: "1px solid rgba(77,143,255,0.18)" }}>
        <p style={{ fontFamily: "var(--font-syne)", fontSize: "13px", color: "#E8EAF2", lineHeight: 1.5 }}>
          Still looking in Dubai Marina? 3 new listings just came up in your budget 🏢
        </p>
        <div className="flex gap-2 mt-3">
          <span className="px-3 py-1 rounded-[6px]" style={{ background: "rgba(77,143,255,0.15)", border: "1px solid rgba(77,143,255,0.3)", fontFamily: "var(--font-dm-mono)", fontSize: "9px", color: "#4D8FFF" }}>See listings</span>
          <span className="px-3 py-1 rounded-[6px]" style={{ background: "transparent", border: "1px solid #31343F", fontFamily: "var(--font-dm-mono)", fontSize: "9px", color: "#80859A" }}>Not now</span>
        </div>
      </div>
    </div>
  );
}

const steps = [
  { num: "01", phase: "Lead arrives",       title: "Lead contacts you. The system responds instantly.",         body: "A prospect messages you on WhatsApp, fills a form, or clicks an ad. Within seconds — not minutes, not hours — they receive a professional, personalised response. Your name. Your brand. Your tone. Sent automatically while you're in a viewing, asleep, or on a call.", Visual: PhoneConversation },
  { num: "02", phase: "Qualification",      title: "The system asks the right questions.",                      body: "The automated sequence gathers what you need: budget, timeline, property type, preferred areas. Not a robotic form — a natural conversation flow over WhatsApp that feels human. By the time you look at the lead, you already know if they're worth your time.", Visual: CRMCard },
  { num: "03", phase: "Viewing booked",     title: "Viewings get confirmed without a single back-and-forth.",   body: "The system proposes times, confirms appointments, and sends reminder messages the day before and two hours before. No-shows drop. Cancellations surface early. You show up to viewings that are actually happening.", Visual: ViewingButtons },
  { num: "04", phase: "Post-viewing",       title: "Every viewing gets a follow-up. Every time.",              body: "After the viewing, the system sends a follow-up message asking for feedback. Interested? A nurture sequence starts. Not ready yet? They stay warm in the pipeline with scheduled check-ins. The lead never goes cold because you forgot to follow up.", Visual: FeedbackBubble },
  { num: "05", phase: "Pipeline management",title: "14 stages. Every lead tracked. Nothing falls through.",     body: "From 'New Inquiry' to 'Deal Closed', every lead sits in a defined stage. The right message fires at the right moment — automatically. You can see at a glance where every lead stands. No spreadsheet. No memory required.", Visual: NotificationMockup },
  { num: "06", phase: "Re-engagement",      title: "Old leads don't die. They get reactivated.",               body: "That lead from 90 days ago who went quiet? The system checks in at the right interval with a relevant message. Market update. New listing. Simple nudge. Some of your best deals are buried in leads you gave up on.", Visual: ReactivationMessage },
  { num: "07", phase: "Deal closed",        title: "Deal closes. Review request fires. Referral loop starts.",  body: "The moment a deal closes, the system sends a review request while the client is still happy. Then it enters them into a long-term referral sequence. Your reputation compounds automatically. Every closed deal becomes the beginning of the next one.", Visual: ReviewRequest },
];

function WA() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.132.558 4.133 1.535 5.873L0 24l6.335-1.508A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.679-.507-5.214-1.392l-.374-.217-3.861.92.978-3.751-.243-.387A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
    </svg>
  );
}

export default function HowItWorks() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1E2028]" style={{ paddingTop: "96px" }}>
        <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(77,143,255,0.08) 0%, transparent 60%)" }} aria-hidden />
        <div className="relative max-w-6xl mx-auto px-6 py-20 flex flex-col gap-5">
          <div className="inline-flex items-center gap-2 border border-[#31343F] rounded-full px-4 py-1.5 bg-[#272A34] w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4D8FFF] animate-pulse-dot" />
            <span className="text-[10px] text-[#80859A] uppercase tracking-[0.18em]" style={{ fontFamily: "var(--font-dm-mono)" }}>The System</span>
          </div>
          <h1 className="text-[#E8EAF2] max-w-4xl" style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(48px, 7vw, 96px)", lineHeight: 0.9 }}>
            From first message to <span className="text-[#4D8FFF]">closed deal.</span>
          </h1>
          <p className="text-[#80859A] max-w-2xl leading-relaxed" style={{ fontFamily: "var(--font-syne)", fontSize: "17px" }}>
            Seven stages. Fully automated. Built and managed for you. Here is exactly what happens when a lead enters the VYNED system.
          </p>
        </div>
      </section>

      {/* Steps — alternating layout */}
      <section className="bg-[#272A34] px-6" style={{ borderTop: "1px solid #31343F" }}>
        <div className="max-w-6xl mx-auto">
          {steps.map(({ num, phase, title, body, Visual }, i) => {
            const visualLeft = i % 2 !== 0;
            return (
              <div
                key={num}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                style={{ paddingTop: "80px", paddingBottom: "80px", borderBottom: i < steps.length - 1 ? "1px solid #31343F" : "none" }}
              >
                {/* Text */}
                <div className={`flex flex-col gap-5 ${visualLeft ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ border: "1px solid #4D8FFF", background: "rgba(77,143,255,0.08)" }}>
                      <span className="text-[#4D8FFF]" style={{ fontFamily: "var(--font-dm-mono)", fontSize: "12px" }}>{num}</span>
                    </div>
                    <span className="text-[#80859A] uppercase" style={{ fontFamily: "var(--font-dm-mono)", fontSize: "10px", letterSpacing: "0.16em" }}>{phase}</span>
                  </div>
                  <h2 className="text-[#E8EAF2]" style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: 0.95 }}>{title}</h2>
                  <p className="text-[#80859A] leading-relaxed" style={{ fontFamily: "var(--font-syne)", fontSize: "16px", lineHeight: 1.7 }}>{body}</p>
                </div>
                {/* Visual */}
                <div className={`flex ${visualLeft ? "lg:justify-start lg:order-1" : "lg:justify-end lg:order-2"}`}>
                  <Visual />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* What you never do */}
      <section className="bg-[#1E2028] px-6" style={{ paddingTop: "120px", paddingBottom: "120px", borderTop: "1px solid #31343F" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
          <div className="flex flex-col gap-4 max-w-xl">
            <span className="text-[#4D8FFF] uppercase" style={{ fontFamily: "var(--font-dm-mono)", fontSize: "11px", letterSpacing: "0.18em" }}>What you never do</span>
            <h2 className="text-[#E8EAF2]" style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 0.92 }}>
              You never touch <span className="text-[#4D8FFF]">the backend.</span>
            </h2>
            <p className="text-[#80859A] leading-relaxed" style={{ fontFamily: "var(--font-syne)", fontSize: "16px" }}>
              Every stage above runs without you logging into anything. We build the system. We monitor it. We fix it when something needs adjusting.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {["No onboarding sessions","No tutorial videos to watch","No backend to log into","No automations to configure","No broken flows to debug","No subscription management"].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <svg className="text-[#4D8FFF] shrink-0" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M3 8l4 4 6-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-[#80859A]" style={{ fontFamily: "var(--font-syne)", fontSize: "15px" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#272A34] px-6 text-center" style={{ paddingTop: "100px", paddingBottom: "100px", borderTop: "1px solid #31343F" }}>
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          <h2 className="text-[#E8EAF2]" style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(40px, 5vw, 64px)", lineHeight: 0.92 }}>Ready to run the system?</h2>
          <p className="text-[#80859A]" style={{ fontFamily: "var(--font-syne)", fontSize: "17px" }}>Message us on WhatsApp. We&apos;ll walk you through setup — it takes one call.</p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            <a href="https://wa.me/PLACEHOLDER" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#4D8FFF] hover:bg-[#5a9aff] text-white text-[11px] uppercase tracking-[0.14em] px-7 py-3.5 rounded-md transition-all shimmer-btn cursor-pointer"
              style={{ fontFamily: "var(--font-dm-mono)" }}>
              <WA /> Message Us on WhatsApp
            </a>
            <Link href="/pricing" className="text-[#80859A] hover:text-[#E8EAF2] transition-colors text-[11px] uppercase tracking-[0.14em]" style={{ fontFamily: "var(--font-dm-mono)" }}>
              See pricing →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
