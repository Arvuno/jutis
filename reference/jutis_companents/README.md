# Jutis Design System

Brand & UI system for **Jutis**, a non-custodial web-extension wallet built for the **Canton blockchain ecosystem**. Jutis positions itself as bank-grade security with a "futuristic, architected" tone — dark surfaces, lime-yellow accent, rotated-square geometric mark, precise typography.

> "The essence of security, architected for Canton."

## Sources

This system was reverse-engineered from the public landing-page repo (the only design source attached):

- **GitHub:** `JutisWallet/jutis-landing-page` (main) — pure HTML + Tailwind CDN + Material Symbols. Imported into project root: `index.html`, `feature.html`, `security.html`, `signup.html`, `login.html`, `waitlist.html`, plus `bridge/`, `dashboard/`, `developers/`, `docs/`, `components/`, `designed_source/`. Read those files for ground-truth markup.
- **Brand mark:** `favicon.svg`, `og-image.svg` from the same repo (also copied into `assets/`).
- **Other Jutis repos** (not imported, listed for reference): `jutis-wallet`, `jutis-web-extension`, `jutis-sdk`, `jutis-core`, `jutis-docs`, `hey-jutis`. Pull from these if extending the system to the extension UI or dApps.

## Index

| File / Folder | Purpose |
|---|---|
| `README.md` | This document — fundamentals, voice, visuals, iconography. |
| `SKILL.md` | Cross-compatible skill manifest for Claude Code. |
| `colors_and_type.css` | Single source of truth for color + type tokens (CSS vars + semantic classes). |
| `assets/` | Logo marks, OG image. Copy these — don't redraw the mark. |
| `preview/` | Cards rendered in the Design System tab. |
| `ui_kits/landing/` | High-fidelity React recreation of the marketing site + product chrome. |
| Repo imports at root | `index.html`, `dashboard/`, `bridge/`, `login.html`, etc. — reference only. |

---

## Content Fundamentals

**Voice:** Confident, technical, slightly poetic. Crypto-finance with a security-first posture. Avoids hype words ("revolutionary", "to the moon"); leans on architectural metaphors ("essence", "architected", "encryption layer").

**Person:** Largely impersonal/third-person on marketing surfaces. Switches to direct second-person inside the product ("Welcome back, John", "Your session will expire", "You Pay / You Receive").

**Casing:**
- The wordmark **JUTIS** is always all-caps with wide tracking (0.20–0.25em).
- Microlabels and status pills are **ALL CAPS** with widest tracking: `BETA`, `NOW ON`, `VERIFIED NODE`, `ENCRYPTION LAYER 1`, `SECURE`, `FAST`, `CANTON`, `NON-CUSTODIAL`.
- Section headlines: Sentence case ("Recent Transactions", "Wallet Addresses").
- Body: Sentence case, oxford comma not enforced.

**Tone examples (verbatim from source):**
- Hero: *"The essence of security, architected for Canton."*
- CTA: *"Open Jutis"* (verb + brand, no period).
- Auth: *"Welcome Back · Sign in to your Jutis wallet"*.
- Status: *"Live"*, *"Pending"*, *"Connected"*, *"Inactive"*.
- Banner: *"Your session will expire in 24 minutes. Save your work."* — short, declarative.

**Numbers:** Comma-grouped (`8,234.56`), six decimals max in swap UIs, two for fiat. Prefix `$` for USD, suffix ticker for crypto (`8,234.56 CANT`). Address shorthand always `0x1a2b…3c4d` (ellipsis, lowercase hex).

**Emoji:** Never. The system uses Material Symbols outline icons exclusively.

**Vibe:** Quiet, premium, dark-mode-only, hint of cyberpunk on immersive surfaces (Bridge), much calmer on auth/marketing.

---

## Visual Foundations

**Mode.** Dark-only. `class="dark"` on `<html>` is set everywhere; there is no light variant. Two background tiers:
- `#1a1d23` — default surface (marketing, dashboard).
- `#0a0b0f` — "deep" surface used by the Bridge for an immersive, app-like feel.

**Color palette.** Spartan: 4 neutrals + 1 accent.
- Neutrals: `#0a0b0f`, `#1a1d23`, `#232730`, `#2e323c`, `#9aa1ac`, `#e6e8ec`.
- Accent: `#dce87a` (lime/chartreuse) — the **only** chromatic color in the brand. Used at 5–30% opacity for glows, fills, and subtle washes; at 100% only on CTAs and status dots.
- Token colors (USDC blue, ETH purple, BTC orange) appear only inside swap chips — they are not part of the brand, they're functional.

**Typography.**
- Display: **Plus Jakarta Sans** (500/600/700/800).
- Body: **Inter** (400/500/600).
- Icons: **Material Symbols Outlined** (variable font, default weight ~400).
- The wordmark JUTIS uses 800 weight + 0.20–0.25em tracking + uppercase. This treatment carries the brand more than the icon does.

**Spacing.** Tailwind's default scale (4px base). Cards pad at 16/24/32px. Comfortable but not airy — the product is information-dense (balances, txs, rates).

**Backgrounds — signature combo (used on landing, auth, waitlist):**
1. Radial-dot grid at 30% opacity, 40px tile (`bg-network-grid` in `colors_and_type.css`).
2. Two large blurred ambient orbs in opposite corners — one accent-tinted (5%), one white (5%), both `blur-[140px]`.
3. Three "abstract-shape" rotated rounded squares with 1px borders at 10–20% opacity, scattered. These echo the logo geometry.

**Bridge ("immersive") background:** deeper bg, larger dot grid (50px), an animated `scan-line` overlay sweeping vertically, and `cyber-glow` shadows on cards.

**Animation.**
- Default easings: `ease-in-out` for fades, `cubic-bezier(0.4,0,0.2,1)` for transforms, `cubic-bezier(0.34,1.56,0.64,1)` for spring/pop interactions (token select, swap success).
- Signature motions: a gentle `floating` 6s vertical hover on the hero mark; a 4s vertical `scan` line on Bridge cards; `pulse-glow` 2s on status dots.
- Hover scales: buttons `1.02` (subtle) to `1.05` (CTAs); active scale `0.95–0.98`.
- Swap-success: card pulses to `1.02` with intensified accent glow, then settles.

**Hover states.**
- Text links: `text-[#9aa1ac] → text-[#e6e8ec]` (lighten).
- Borders: `border-[#2e323c] → border-[#dce87a]/30` (warm to accent).
- Filled CTAs: `bg-[#e6e8ec] → bg-[#dce87a]` (white→accent swap) **or** `bg-[#dce87a] → bg-[#e6e8ec]` (accent→white) depending on which is the primary state.
- Surfaces: `bg-[#232730] → bg-[#1a1d23]` (slightly darker).

**Press states.** `scale(0.95)` on primary CTAs, `scale(0.98)` on cards. Token taps emit a radial ripple in `accent-20`.

**Borders.** Always 1px. Three flavors:
1. `#2e323c` solid — default dividers/cards.
2. `rgba(220,232,122,0.1)` — `cyber-border` on Bridge surfaces, brightens to `0.3` on hover.
3. `#dce87a` solid 2px — only on the logo mark and on the swap-flip button ring.

**Shadows.** No drop-shadows in the conventional sense. Instead, **cyber glows**: `box-shadow: 0 0 40px rgba(220,232,122,0.12), 0 0 80px rgba(220,232,122,0.05)`. Used on Bridge swap card; otherwise surfaces are flat.

**Transparency & blur.** Heavy use of accent at 5/10/20/30% opacity for tints. Backdrop blur appears on: ambient orbs (`blur-[140px]` on backgrounds), modal scrims (`backdrop-blur-sm` over `bg-black/70`).

**Layout rules.**
- Fixed top accent bar: `h-1` gradient `transparent → accent/20 → transparent` across the page top — appears on most marketing/auth pages.
- Marketing pages center one column at `max-w-4xl`; product (`dashboard/`) uses a **fixed 256px sidebar** + flexible main; Bridge uses `100dvh` no-scroll layout with footer.
- Mobile: sidebar slides in from left over a `bg-black/50` scrim.

**Imagery.** No photographs. The brand is purely geometric — the logo mark, ambient orbs, dot grids, and rotated-square shapes. **Do not introduce photographic imagery without flagging it as off-brand.**

**Corner radii.**
- `rounded-lg` (8px) — small token chips, secondary buttons.
- `rounded-xl` (12px) — buttons, inputs, sidebar nav rows, quick actions.
- `rounded-2xl` (16px) — cards, balance card.
- `rounded-full` — primary CTAs (pill), avatars, status dots, BETA badge.

**Cards.** Three recurring patterns:
1. **Default card:** `bg-[#232730] border border-[#2e323c] rounded-2xl p-6`. Flat, no shadow.
2. **Inset row** (within a card): `bg-[#1a1d23] rounded-xl p-4`. Recursive nesting is common.
3. **Cyber card** (Bridge only): gradient `from-[#181a21] to-[#0f1015]` + `cyber-border` + `cyber-glow` shadow.

**Status pills.** Pill-shaped, accent-tinted bg (`accent/10`) with accent border (`accent/20`), accent text, often a `1.5×1.5px` dot prefix that pulses for "live" states. Inactive variants use neutral `#2e323c` bg with `#9aa1ac` text.

**Inputs.** `bg-[#1a1d23]` (darker than parent card) `border-[#2e323c] rounded-xl`, focus-state border `border-[#dce87a]/50`. Placeholders use `#9aa1ac`.

---

## Iconography

**Primary system: Material Symbols Outlined** (Google Fonts variable). Loaded via:
```html
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
```
Used as `<span class="material-symbols-outlined">icon_name</span>`. Default weight ~400, outline (FILL=0). Common icons in the system:
- Wallet/finance: `account_balance_wallet`, `swap_horiz`, `swap_vert`, `qr_code`, `send`, `receive`, `arrow_upward`, `arrow_downward`, `arrow_outward`.
- Nav/UI: `dashboard`, `history`, `security`, `settings`, `notifications`, `menu`, `close`, `expand_more`, `add`, `logout`.
- Status: `bolt`, `check_circle`, `warning`, `help`, `stars`, `gavel`, `schedule`.

**Sizing.** Inline with text by default (1em). `text-base` for buttons, `text-sm` for inline icons in pills. Color inherits from parent.

**No custom icon set.** Material Symbols covers everything in the existing product. If extending into a domain Material doesn't cover (e.g. specific chain logos), use **single-letter / glyph chips** in a colored circular bg — the existing pattern: `<div class="w-8 h-8 rounded-full bg-[#dce87a]/20"><span class="font-bold text-[#dce87a]">C</span></div>`. Examples already in source: C (Canton, accent), $ (USDC, blue), Ξ (ETH, purple), ₿ (BTC, orange).

**Emoji:** Never. The brand voice is too security-serious for emoji.

**SVG / brand mark.** The square-rotated logo is built from inline SVG primitives (two rotated rounded-square outlines + a vertical pill). It's already in `assets/jutis-mark.svg`, `assets/jutis-mark-lg.svg`, `assets/jutis-lockup.svg`, `assets/jutis-og.svg`. Re-use these — the mark is small enough that embedding inline is fine when needed.

**Substitutions flagged:** None. Material Symbols + the in-house SVG mark cover the source completely.
