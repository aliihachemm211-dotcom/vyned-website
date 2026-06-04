"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(30, 32, 40, 0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid #31343F" : "1px solid transparent",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span
              className="text-[28px] leading-none tracking-wide"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              <span className="text-[#4D8FFF]">V</span>
              <span className="text-[#E8EAF2]">YNED</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="relative text-[11px] uppercase tracking-[0.14em] transition-colors duration-200 cursor-pointer"
                style={{
                  fontFamily: "var(--font-dm-mono)",
                  color: pathname === l.href ? "#E8EAF2" : "#80859A",
                }}
              >
                {l.label}
                {pathname === l.href && (
                  <span
                    className="absolute left-0 right-0 bg-[#4D8FFF]"
                    style={{ bottom: "-5px", height: "1px" }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="https://wa.me/PLACEHOLDER"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 border border-[#4D8FFF] text-[#4D8FFF] hover:bg-[rgba(77,143,255,0.08)] text-[11px] uppercase tracking-[0.14em] px-4 py-2 rounded-md transition-all duration-200 cursor-pointer"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            <WhatsAppIcon size={13} />
            Get Started
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#80859A] hover:text-[#E8EAF2] p-2 transition-colors cursor-pointer"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile menu — full-screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-[60] flex flex-col"
            style={{ background: "#1E2028" }}
          >
            {/* Top bar */}
            <div className="h-16 flex items-center justify-between px-6 border-b border-[#31343F] flex-shrink-0">
              <Link href="/" onClick={() => setOpen(false)}>
                <span
                  className="text-[28px] leading-none tracking-wide"
                  style={{ fontFamily: "var(--font-bebas)" }}
                >
                  <span className="text-[#4D8FFF]">V</span>
                  <span className="text-[#E8EAF2]">YNED</span>
                </span>
              </Link>
              <button
                onClick={() => setOpen(false)}
                className="text-[#80859A] hover:text-[#E8EAF2] p-2 transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 flex flex-col justify-center px-8 gap-1">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 + 0.08, duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 transition-colors duration-200 cursor-pointer"
                    style={{
                      fontFamily: "var(--font-bebas)",
                      fontSize: "clamp(36px, 10vw, 52px)",
                      lineHeight: 1.1,
                      color: pathname === l.href ? "#4D8FFF" : "#E8EAF2",
                    }}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
              className="px-8 pb-12"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              <a
                href="https://wa.me/PLACEHOLDER"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#4D8FFF] text-white text-[11px] uppercase tracking-[0.14em] px-6 py-4 rounded-md w-full shimmer-btn cursor-pointer"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                <WhatsAppIcon size={15} />
                Message Us on WhatsApp
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
