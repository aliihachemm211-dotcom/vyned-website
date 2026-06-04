import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#31343F] bg-[#1E2028]">
      {/* Giant VYNED watermark — outlined text, bleeds off edges */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
        aria-hidden
      >
        <span
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(130px, 24vw, 340px)",
            letterSpacing: "-0.01em",
            lineHeight: 1,
            WebkitTextStroke: "1px rgba(232, 234, 242, 0.045)",
            color: "transparent",
            userSelect: "none",
            whiteSpace: "nowrap",
          }}
        >
          VYNED
        </span>
      </div>

      {/* Content sits above the watermark */}
      <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-6">
        {/* Top row — nav links + CTA */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[#31343F]">
          {/* Links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-4">
            {[
              { href: "/", label: "Home" },
              { href: "/how-it-works", label: "How It Works" },
              { href: "/pricing", label: "Pricing" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[11px] uppercase tracking-[0.14em] text-[#80859A] hover:text-[#E8EAF2] transition-colors duration-200"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/PLACEHOLDER"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#4D8FFF] hover:bg-[#3a7af0] text-white text-[11px] uppercase tracking-[0.14em] px-5 py-2.5 rounded-md transition-all duration-200 shimmer-btn whitespace-nowrap cursor-pointer"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            <WhatsAppIcon size={13} />
            Message Us on WhatsApp
          </a>
        </div>

        {/* Bottom line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p
            className="text-[11px] text-[#80859A]"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            © {new Date().getFullYear()} VYNED · vyned.co · @vyned
          </p>
          <p
            className="text-[11px] text-[#80859A]"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            Dubai, UAE
          </p>
        </div>
      </div>
    </footer>
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
