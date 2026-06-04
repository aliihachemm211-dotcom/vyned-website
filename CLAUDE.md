# VYNED Marketing Website

## Project Overview
B2B managed SaaS marketing site for VYNED — targeting real estate agents in Dubai. 5-page static marketing site built with Next.js App Router + Tailwind CSS.

## Tech Stack
- **Framework**: Next.js 16 (App Router, TypeScript)
- **Styling**: Tailwind CSS v4
- **Fonts**: Bebas Neue (headlines), Syne (body), DM Mono (labels) — via `next/font/google`
- **Dev server**: `npm run dev` → http://localhost:3000

## Brand System
| Token | Value | Usage |
|---|---|---|
| Background | `#1E2028` | Page background |
| Secondary BG | `#272A34` | Alternating sections |
| Border | `#31343F` | Default borders |
| Border strong | `#3D4050` | Emphasis borders |
| Primary text | `#E8EAF2` | Headings, body |
| Muted text | `#80859A` | Subtitles, labels |
| Accent | `#4D8FFF` | Electric blue — CTAs, highlights |

CSS variables defined in `src/app/globals.css` under `@theme inline`.

## Fonts
- **Bebas Neue** → `--font-bebas` → used on all `<h1>` / `<h2>` / `<h3>` via inline `fontFamily: "var(--font-bebas)"`
- **Syne** → `--font-syne` → body text, paragraphs, nav links, CTAs
- **DM Mono** → `--font-dm-mono` → eyebrow labels, stats, small uppercase tags

## Site Structure
```
src/app/
  page.tsx                  ✅ Home — fully built
  how-it-works/page.tsx     🔲 How It Works — stub
  pricing/page.tsx          🔲 Pricing — stub
  about/page.tsx            🔲 About — stub
  contact/page.tsx          🔲 Contact — stub
  layout.tsx                ✅ Root layout (fonts, metadata, Nav, Footer)
  globals.css               ✅ Brand tokens + base styles + animations

src/components/
  Nav.tsx                   ✅ Sticky nav, mobile hamburger menu
  Footer.tsx                ✅ Footer with links + CTA
```

## What Is Built (Session 1)
### Home page — all 5 sections complete
1. **Hero** — eyebrow pill with pulse dot, Bebas Neue headline, subheadline, WhatsApp CTA + secondary link, stat strip (< 60s / 14 stages / $220/mo)
2. **Problem** — "You're not losing deals because you're bad at your job." + 6 numbered cards with hover reveal (border + text)
3. **System** — "We build it. We run it. It never sleeps." + 3 pillar cards with top accent gradient line
4. **Pricing preview** — copy block + feature card with checklist + WhatsApp CTA
5. **Final CTA** — full-width section, glowing blue WhatsApp button

### Shared components
- **Nav** — sticky, blur backdrop, active link highlight, mobile-responsive hamburger
- **Footer** — brand mark, page links, WhatsApp CTA, copyright

### Animations (defined, not yet scroll-triggered)
- `animate-fade-up` — translateY + opacity keyframe
- `animate-fade-in` — opacity keyframe
- `animate-pulse-glow` — box-shadow pulse (used on final CTA button and hero dot)

## What Is Next (Session 2)
### Animations to add
- [ ] Scroll-triggered fade-ups on all sections (use Intersection Observer or a library like `motion` / `framer-motion`)
- [ ] Shimmer sweep effect on CTA buttons (pseudo-element CSS animation)
- [ ] Animated number counters on hero stat strip (< 60s, 14, $220)
- [ ] Glowing animated border on pricing card
- [ ] Subtle animated background glow behind hero headline (slow drift/breathe)

### Inner pages to build
- [ ] How It Works — step-by-step system walkthrough
- [ ] Pricing — full $220/mo plan page with FAQ
- [ ] About — brand story
- [ ] Contact — WhatsApp + contact details

## Pending Before Launch
- [ ] **Replace `https://wa.me/PLACEHOLDER`** with the real WhatsApp number everywhere (Nav, Footer, Home page ×3, Contact)
- [ ] Add real favicon / og:image

## Primary CTA
```
href: https://wa.me/PLACEHOLDER   ← REPLACE WITH REAL NUMBER
label: "Message Us on WhatsApp"
```

## Section Pattern (follow for all inner pages)
```tsx
<section className="bg-[#1E2028] py-24 px-6 border-t border-[#31343F]">   // or bg-[#272A34] alternating
  <div className="max-w-6xl mx-auto">
    <span style={{ fontFamily: "var(--font-dm-mono)" }} className="text-xs text-[#4D8FFF] uppercase tracking-widest">
      Eyebrow label
    </span>
    <h2 style={{ fontFamily: "var(--font-bebas)" }} className="text-4xl md:text-6xl text-[#E8EAF2] leading-none">
      Section headline
    </h2>
    <p style={{ fontFamily: "var(--font-syne)" }} className="text-[#80859A] text-base md:text-lg max-w-xl leading-relaxed">
      Subheadline
    </p>
  </div>
</section>
```
