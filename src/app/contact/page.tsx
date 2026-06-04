import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — VYNED",
  description:
    "Get in touch with VYNED. WhatsApp is the fastest way — we respond within minutes.",
};

export default function Contact() {
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
        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-36 flex flex-col items-center text-center gap-6">
          <div className="inline-flex items-center gap-2 border border-[#31343F] rounded-full px-4 py-1.5 bg-[#272A34]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4D8FFF] animate-pulse-glow" />
            <span
              className="text-xs text-[#80859A] uppercase tracking-widest"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Get in touch
            </span>
          </div>
          <h1
            className="text-5xl md:text-7xl lg:text-8xl text-[#E8EAF2] leading-none max-w-3xl"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            Let&apos;s talk about{" "}
            <span className="text-[#4D8FFF]">your pipeline.</span>
          </h1>
          <p
            className="text-base md:text-lg text-[#80859A] max-w-xl leading-relaxed"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            We respond on WhatsApp within minutes. Tell us about your setup —
            how many leads you handle, where they come from, what's not working.
            We'll tell you exactly what VYNED can do for you.
          </p>
        </div>
      </section>

      {/* ─── PRIMARY CTA — WHATSAPP ──────────────────────────────── */}
      <section className="bg-[#272A34] py-24 px-6 border-t border-[#31343F]">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-8">
          {/* WhatsApp card */}
          <div className="relative w-full max-w-lg rounded-2xl border border-[#4D8FFF]/30 bg-[#1E2028] p-10 flex flex-col items-center gap-5 overflow-hidden">
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl"
              style={{
                background:
                  "radial-gradient(ellipse at top, rgba(77,143,255,0.09) 0%, transparent 60%)",
              }}
            />
            {/* WhatsApp icon large */}
            <div className="relative w-16 h-16 rounded-full bg-[#272A34] border border-[#31343F] flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="#4D8FFF">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.132.558 4.133 1.535 5.873L0 24l6.335-1.508A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.679-.507-5.214-1.392l-.374-.217-3.861.92.978-3.751-.243-.387A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
            </div>

            <div className="relative flex flex-col items-center gap-2">
              <h2
                className="text-3xl md:text-4xl text-[#E8EAF2] leading-none"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                WhatsApp — fastest way to reach us
              </h2>
              <p
                className="text-sm text-[#80859A] max-w-sm"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                We typically respond within minutes. No bots — a real person from the
                VYNED team will pick up your message.
              </p>
            </div>

            <a
              href="https://wa.me/PLACEHOLDER"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2.5 bg-[#4D8FFF] hover:bg-[#3a7af0] active:scale-95 text-white font-semibold px-7 py-3.5 rounded-md transition-all text-sm animate-pulse-glow"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.132.558 4.133 1.535 5.873L0 24l6.335-1.508A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.679-.507-5.214-1.392l-.374-.217-3.861.92.978-3.751-.243-.387A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              Message Us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ─── OTHER CHANNELS ──────────────────────────────────────── */}
      <section className="bg-[#1E2028] py-24 px-6 border-t border-[#31343F]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 flex flex-col gap-3">
            <span
              className="text-xs text-[#4D8FFF] uppercase tracking-widest"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Other ways to reach us
            </span>
            <h2
              className="text-4xl md:text-5xl text-[#E8EAF2] leading-none"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              Wherever works for you.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Email */}
            <div className="rounded-xl border border-[#31343F] bg-[#272A34] p-6 flex flex-col gap-4 hover:border-[#4D8FFF]/40 transition-colors group">
              <div className="w-10 h-10 rounded-lg border border-[#31343F] bg-[#1E2028] flex items-center justify-center group-hover:border-[#4D8FFF]/40 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4D8FFF" strokeWidth="1.5">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m2 7 10 7 10-7" />
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <span
                  className="text-xs text-[#80859A] uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  Email
                </span>
                <a
                  href="mailto:hello@vyned.com"
                  className="text-[#E8EAF2] hover:text-[#4D8FFF] transition-colors text-sm"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  hello@vyned.com
                </a>
              </div>
              <p
                className="text-xs text-[#80859A] leading-relaxed"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                For non-urgent questions. We reply within one business day.
              </p>
            </div>

            {/* Instagram */}
            <div className="rounded-xl border border-[#31343F] bg-[#272A34] p-6 flex flex-col gap-4 hover:border-[#4D8FFF]/40 transition-colors group">
              <div className="w-10 h-10 rounded-lg border border-[#31343F] bg-[#1E2028] flex items-center justify-center group-hover:border-[#4D8FFF]/40 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4D8FFF" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="#4D8FFF" stroke="none" />
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <span
                  className="text-xs text-[#80859A] uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  Instagram
                </span>
                <a
                  href="https://instagram.com/vyned"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E8EAF2] hover:text-[#4D8FFF] transition-colors text-sm"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  @vyned
                </a>
              </div>
              <p
                className="text-xs text-[#80859A] leading-relaxed"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Follow for system insights, Dubai market updates, and automation tips.
              </p>
            </div>

            {/* Location */}
            <div className="rounded-xl border border-[#31343F] bg-[#272A34] p-6 flex flex-col gap-4">
              <div className="w-10 h-10 rounded-lg border border-[#31343F] bg-[#1E2028] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4D8FFF" strokeWidth="1.5">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <span
                  className="text-xs text-[#80859A] uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  Based in
                </span>
                <span
                  className="text-[#E8EAF2] text-sm"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  Dubai, UAE
                </span>
              </div>
              <p
                className="text-xs text-[#80859A] leading-relaxed"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Built specifically for the Dubai real estate market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT TO EXPECT ──────────────────────────────────────── */}
      <section className="bg-[#272A34] py-24 px-6 border-t border-[#31343F]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 flex flex-col gap-3">
            <span
              className="text-xs text-[#4D8FFF] uppercase tracking-widest"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              What happens next
            </span>
            <h2
              className="text-4xl md:text-5xl text-[#E8EAF2] leading-none"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              After you message us.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
            {[
              {
                step: "01",
                title: "We reply fast.",
                body: "A real person responds on WhatsApp — usually within minutes. We ask a few questions about your current setup.",
              },
              {
                step: "02",
                title: "One call. 20 minutes.",
                body: "We walk through your lead flow, where things break down, and exactly how the VYNED system would work for your business.",
              },
              {
                step: "03",
                title: "Live in 3–5 days.",
                body: "We build your system, test it, and launch it. You don't do anything technical. You just start seeing leads handled automatically.",
              },
            ].map((item, i) => (
              <div
                key={item.step}
                className={`flex flex-col gap-4 py-8 px-6 ${
                  i < 2 ? "sm:border-r border-[#31343F]" : ""
                } border-b sm:border-b-0 border-[#31343F]`}
              >
                <span
                  className="text-4xl text-[#4D8FFF]/30"
                  style={{ fontFamily: "var(--font-bebas)" }}
                >
                  {item.step}
                </span>
                <h3
                  className="text-xl text-[#E8EAF2]"
                  style={{ fontFamily: "var(--font-bebas)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm text-[#80859A] leading-relaxed"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
