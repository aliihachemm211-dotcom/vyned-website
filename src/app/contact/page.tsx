import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — VYNED",
  description: "Get in touch with VYNED. WhatsApp is the fastest way — we respond within minutes.",
};

function WA({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.132.558 4.133 1.535 5.873L0 24l6.335-1.508A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.679-.507-5.214-1.392l-.374-.217-3.861.92.978-3.751-.243-.387A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
    </svg>
  );
}

/* WhatsApp chat mockup */
function ChatMockup() {
  const messages = [
    { from: "user", text: "Hi, I'm interested in VYNED for my real estate business" },
    { from: "vyned", text: "Great timing. Tell me — how many leads do you get per week roughly?" },
    { from: "user", text: "Around 30–40" },
    { from: "vyned", text: "Perfect fit. Let me show you exactly what we'd build for you." },
  ];

  return (
    <div className="rounded-[16px] overflow-hidden w-full" style={{ background: "#111418", border: "1px solid #272A34", maxWidth: "440px" }}>
      {/* Status bar */}
      <div className="flex items-center justify-between px-4 py-2" style={{ background: "#0d1014" }}>
        <span style={{ fontFamily: "var(--font-dm-mono)", fontSize: "10px", color: "#80859A" }}>9:41</span>
        <span style={{ fontFamily: "var(--font-dm-mono)", fontSize: "10px", color: "#80859A" }}>●●●</span>
      </div>
      {/* WA header */}
      <div className="flex items-center gap-3 px-4 py-3" style={{ background: "#1a2024", borderBottom: "1px solid #1e2830" }}>
        <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #4D8FFF, #2a5fd4)" }}>
          <span style={{ fontFamily: "var(--font-bebas)", fontSize: "14px", color: "white" }}>V</span>
        </div>
        <div className="flex-1">
          <p style={{ fontFamily: "var(--font-syne)", fontSize: "14px", color: "#E8EAF2", fontWeight: 600 }}>VYNED</p>
          <p style={{ fontFamily: "var(--font-dm-mono)", fontSize: "9px", color: "#22c55e" }}>online · typically replies in minutes</p>
        </div>
      </div>
      {/* Messages */}
      <div className="flex flex-col gap-3 px-4 py-5" style={{ background: "#0f1318" }}>
        {messages.map((msg, i) => {
          const isVyned = msg.from === "vyned";
          return (
            <div key={i} className={`flex ${isVyned ? "justify-start" : "justify-end"}`}>
              <div
                className={`px-3.5 py-2.5 rounded-[12px] ${isVyned ? "rounded-tl-[3px]" : "rounded-tr-[3px]"}`}
                style={{
                  background: isVyned ? "rgba(77,143,255,0.16)" : "#272A34",
                  border: isVyned ? "1px solid rgba(77,143,255,0.25)" : "1px solid #31343F",
                  maxWidth: "78%",
                }}
              >
                <p style={{ fontFamily: "var(--font-syne)", fontSize: "13px", color: "#E8EAF2", lineHeight: 1.5 }}>{msg.text}</p>
              </div>
            </div>
          );
        })}
        {/* Typing indicator */}
        <div className="flex justify-start">
          <div className="px-3.5 py-2.5 rounded-[12px] rounded-tl-[3px] flex items-center gap-1.5" style={{ background: "rgba(77,143,255,0.08)", border: "1px solid rgba(77,143,255,0.15)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#4D8FFF] animate-bounce" style={{ animationDelay: "0ms" }} />
            <span className="w-1.5 h-1.5 rounded-full bg-[#4D8FFF] animate-bounce" style={{ animationDelay: "150ms" }} />
            <span className="w-1.5 h-1.5 rounded-full bg-[#4D8FFF] animate-bounce" style={{ animationDelay: "300ms" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <>
      {/* Main contact section — two columns */}
      <section className="relative bg-[#1E2028] px-6" style={{ paddingTop: "120px", paddingBottom: "120px" }}>
        <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(77,143,255,0.07) 0%, transparent 55%)" }} aria-hidden />
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — headline + chat mockup */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-[#4D8FFF] uppercase" style={{ fontFamily: "var(--font-dm-mono)", fontSize: "11px", letterSpacing: "0.18em" }}>
                Get in touch
              </span>
              <h1 className="text-[#E8EAF2]" style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(60px, 8vw, 110px)", lineHeight: 0.88, letterSpacing: "0.01em" }}>
                Let&apos;s <span className="text-[#4D8FFF]">talk.</span>
              </h1>
              <p className="text-[#80859A] max-w-md leading-relaxed" style={{ fontFamily: "var(--font-syne)", fontSize: "17px" }}>
                Tell us about your setup — how many leads you handle, where they come from, what&apos;s not working. We&apos;ll tell you exactly what VYNED can do for you.
              </p>
            </div>
            <ChatMockup />
          </div>

          {/* Right — contact options */}
          <div className="flex flex-col gap-6">
            {/* Primary WhatsApp CTA */}
            <div className="rounded-[12px] p-8 flex flex-col gap-5" style={{ background: "#272A34", border: "1px solid #31343F" }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#25D366" }}>
                  <WA size={22} />
                </div>
                <div>
                  <p className="text-[#E8EAF2]" style={{ fontFamily: "var(--font-syne)", fontSize: "16px", fontWeight: 600 }}>WhatsApp</p>
                  <p className="text-[#80859A]" style={{ fontFamily: "var(--font-dm-mono)", fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.12em" }}>Fastest way to reach us</p>
                </div>
              </div>
              <p className="text-[#80859A]" style={{ fontFamily: "var(--font-syne)", fontSize: "14px", lineHeight: 1.6 }}>
                We typically respond within minutes. No bots — a real person from the VYNED team will pick up your message.
              </p>
              <a
                href="https://wa.me/PLACEHOLDER"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#4D8FFF] hover:bg-[#5a9aff] text-white text-[11px] uppercase tracking-[0.14em] px-6 py-3.5 rounded-md transition-all shimmer-btn cursor-pointer animate-pulse-glow"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                <WA size={14} />
                Message Us on WhatsApp
              </a>
            </div>

            {/* Email + Instagram */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-[10px] p-5 flex flex-col gap-3 group" style={{ background: "#272A34", border: "1px solid #31343F" }}>
                <div className="w-9 h-9 rounded-[8px] flex items-center justify-center" style={{ background: "#1E2028", border: "1px solid #31343F" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4D8FFF" strokeWidth="1.5" aria-hidden>
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m2 7 10 7 10-7"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[#80859A] uppercase" style={{ fontFamily: "var(--font-dm-mono)", fontSize: "9px", letterSpacing: "0.14em", marginBottom: "4px" }}>Email</p>
                  <a href="mailto:hello@vyned.co" className="text-[#E8EAF2] hover:text-[#4D8FFF] transition-colors" style={{ fontFamily: "var(--font-syne)", fontSize: "13px" }}>
                    hello@vyned.co
                  </a>
                </div>
                <p className="text-[#80859A]" style={{ fontFamily: "var(--font-syne)", fontSize: "12px", lineHeight: 1.5 }}>For non-urgent questions.</p>
              </div>

              <div className="rounded-[10px] p-5 flex flex-col gap-3 group" style={{ background: "#272A34", border: "1px solid #31343F" }}>
                <div className="w-9 h-9 rounded-[8px] flex items-center justify-center" style={{ background: "#1E2028", border: "1px solid #31343F" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4D8FFF" strokeWidth="1.5" aria-hidden>
                    <rect x="2" y="2" width="20" height="20" rx="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="#4D8FFF" stroke="none"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[#80859A] uppercase" style={{ fontFamily: "var(--font-dm-mono)", fontSize: "9px", letterSpacing: "0.14em", marginBottom: "4px" }}>Instagram</p>
                  <a href="https://instagram.com/vyned" target="_blank" rel="noopener noreferrer" className="text-[#E8EAF2] hover:text-[#4D8FFF] transition-colors" style={{ fontFamily: "var(--font-syne)", fontSize: "13px" }}>
                    @vyned
                  </a>
                </div>
                <p className="text-[#80859A]" style={{ fontFamily: "var(--font-syne)", fontSize: "12px", lineHeight: 1.5 }}>System insights + Dubai market.</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 px-5 py-4 rounded-[10px]" style={{ background: "rgba(77,143,255,0.05)", border: "1px solid rgba(77,143,255,0.12)" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4D8FFF" strokeWidth="1.5" aria-hidden>
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
              <span className="text-[#80859A]" style={{ fontFamily: "var(--font-syne)", fontSize: "14px" }}>
                Based in <span className="text-[#E8EAF2]">Dubai, UAE</span> — built for the Dubai real estate market.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* What happens next */}
      <section className="bg-[#272A34] px-6" style={{ paddingTop: "100px", paddingBottom: "100px", borderTop: "1px solid #31343F" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 flex flex-col gap-3">
            <span className="text-[#4D8FFF] uppercase" style={{ fontFamily: "var(--font-dm-mono)", fontSize: "11px", letterSpacing: "0.18em" }}>What happens next</span>
            <h2 className="text-[#E8EAF2]" style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 0.92 }}>After you message us.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
            {[
              { step: "01", title: "We reply fast.", body: "A real person responds on WhatsApp — usually within minutes. We ask a few questions about your current setup." },
              { step: "02", title: "One call. 20 minutes.", body: "We walk through your lead flow, where things break down, and exactly how the VYNED system would work for your business." },
              { step: "03", title: "Live in 3–5 days.", body: "We build your system, test it, and launch it. You don't do anything technical. You just start seeing leads handled automatically." },
            ].map((item, i) => (
              <div key={item.step} className="flex flex-col gap-4 py-8 px-6" style={{ borderRight: i < 2 ? "1px solid #31343F" : "none" }}>
                <span className="text-[#4D8FFF]" style={{ fontFamily: "var(--font-bebas)", fontSize: "44px", opacity: 0.3 }}>{item.step}</span>
                <h3 className="text-[#E8EAF2]" style={{ fontFamily: "var(--font-bebas)", fontSize: "22px" }}>{item.title}</h3>
                <p className="text-[#80859A] leading-relaxed" style={{ fontFamily: "var(--font-syne)", fontSize: "14px" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
