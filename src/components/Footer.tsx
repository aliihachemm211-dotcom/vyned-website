import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#31343F] bg-[#1E2028] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8">
        {/* Brand */}
        <div className="flex flex-col gap-2">
          <span
            className="text-2xl tracking-widest text-[#E8EAF2]"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            VYNED
          </span>
          <p
            className="text-sm text-[#80859A] max-w-xs"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Real estate automation built and managed for Dubai agents.
          </p>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-3">
          <span
            className="text-xs text-[#80859A] uppercase tracking-widest"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            Pages
          </span>
          {[
            { href: "/how-it-works", label: "How It Works" },
            { href: "/pricing", label: "Pricing" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-[#80859A] hover:text-[#E8EAF2] transition-colors"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex flex-col gap-4">
          <span
            className="text-xs text-[#80859A] uppercase tracking-widest"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            Get Started
          </span>
          <a
            href="https://wa.me/PLACEHOLDER"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#4D8FFF] hover:bg-[#3a7af0] text-white text-sm font-medium px-5 py-2.5 rounded-md transition-colors w-fit"
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

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-[#31343F] flex flex-col md:flex-row items-center justify-between gap-2">
        <p
          className="text-xs text-[#80859A]"
          style={{ fontFamily: "var(--font-dm-mono)" }}
        >
          © {new Date().getFullYear()} VYNED. All rights reserved.
        </p>
        <p
          className="text-xs text-[#80859A]"
          style={{ fontFamily: "var(--font-dm-mono)" }}
        >
          Dubai, UAE
        </p>
      </div>
    </footer>
  );
}
