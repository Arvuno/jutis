# Jutis Vault — Production Site

Jutis is a premium web extension wallet for the Canton blockchain ecosystem.
This folder (`vault/`) is the production-ready static site.

---

## Folder Structure

```
vault/
├── index.html              ← Public homepage
├── feature.html            ← Features page
├── security.html           ← Security page
├── login.html              ← Login page
├── signup.html             ← Signup page
├── waitlist.html           ← Early access waitlist
├── favicon.svg             ← Brand favicon (nested in all pages)
├── og-image.svg            ← Open Graph image
│
├── assets/                  ← Logo and brand SVGs
│   ├── jutis-mark.svg
│   ├── jutis-mark-lg.svg
│   ├── jutis-lockup.svg
│   └── jutis-og.svg
│
├── styles/                  ← Design system CSS
│   ├── tokens.css          ← Design tokens (colors, typography, spacing)
│   ├── base.css             ← Reset, typography, accessibility
│   ├── layout.css           ← Containers, header, footer, dashboard layout
│   └── components.css        ← Cards, buttons, badges, widgets, code blocks
│
├── components/              ← Reusable HTML snippets (for reference/development)
│   ├── header.html          ← Full public header component
│   ├── footer.html          ← Full 4-column footer component
│   ├── brand.html           ← Logo mark and wordmark
│   ├── buttons.html
│   ├── cards.html
│   └── layout.html
│
├── dashboard/               ← Wallet dashboard (authenticated section)
│   ├── index.html           ← Overview
│   ├── wallet.html          ← Wallet cards and assets
│   ├── swap.html            ← Token swap interface
│   ├── history.html         ← Transaction history
│   ├── security.html        ← Security score and settings
│   └── settings.html         ← User preferences
│
├── developers/              ← Developer documentation
│   ├── index.html           ← Developer landing page
│   ├── quick-start.html      ← Connect wallet, sign messages
│   ├── api-reference.html    ← Provider API documentation
│   ├── tutorials.html        ← Integration tutorials
│   ├── sample-projects.html  ← Working code examples
│   └── developer-support.html ← Integration checklist, community links
│
├── docs/                    ← Product documentation
│   ├── index.html            ← Docs landing page
│   ├── getting-started/
│   │   └── installation.html  ← Extension install, wallet creation
│   ├── core-concepts/
│   │   └── wallet-architecture.html ← Non-custodial model, key handling
│   └── guides/
│       └── send-receive.html  ← Send/receive Canton assets guide
│
└── archive/                 ← Archived old sections (not linked from nav)
    └── bridge/bridge/        ← Old Bridge section (4 files, not maintained)
```

---

## Design System

### CSS Files (load order matters)

All pages load CSS in this order:
```html
<link rel="stylesheet" href="styles/tokens.css">     <!-- 1. Design tokens -->
<link rel="stylesheet" href="styles/base.css">      <!-- 2. Reset + typography -->
<link rel="stylesheet" href="styles/layout.css">    <!-- 3. Layout + header/footer -->
<link rel="stylesheet" href="styles/components.css"><!-- 4. Components + widgets -->
```

### Key Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-main` | `#1a1d23` | Page background |
| `--bg-card` | `#232730` | Card surfaces |
| `--accent` | `#dce87a` | Jutis lime — CTAs, active states |
| `--fg-primary` | `#e6e8ec` | Primary text |
| `--border` | `#2e323c` | Dividers, card edges |
| `--font-display` | Plus Jakarta Sans | Headlines |
| `--font-sans` | Inter | Body text |
| `--font-mono` | JetBrains Mono | Code blocks |

See `styles/tokens.css` for the complete token reference.

---

## How to Open / Test Locally

This is a static site — no server required. Open any HTML file directly in a browser.

```bash
# Open the homepage directly
open vault/index.html

# Or serve statically (optional)
npx serve vault/
```

### Path Notes

- **Root pages** (`index.html`, `feature.html`, `security.html`, `login.html`, `signup.html`, `waitlist.html`):
  - CSS: `styles/tokens.css` (no prefix)
  - Favicon: `favicon.svg`
  - Header logo: `href="index.html"`
- **Dashboard pages** (`dashboard/*.html`):
  - CSS: `../styles/tokens.css`
  - Favicon: `../favicon.svg`
  - Header logo: `href="../index.html"`
- **Developer pages** (`developers/*.html`):
  - CSS: `../styles/tokens.css`
  - Favicon: `../favicon.svg`
  - Header logo: `href="../index.html"`
- **Docs pages** (`docs/**/*.html`):
  - CSS: `../../styles/tokens.css`
  - Favicon: `../../favicon.svg`
  - Header logo: `href="../../index.html"`

---

## Component Reference

### Public Header
Used on: All public pages, developers, docs
File: `components/header.html`
Features: Logo mark + wordmark, primary nav (Features/Security/Developers/Docs/Wallet), Login button, Get Started CTA, top accent line

### Dashboard Sidebar
Used on: All dashboard pages
File: All `dashboard/*.html` pages (inline, not a component include)
Features: Jutis logo, 6-item nav (Dashboard/Wallet/Swap/History/Security/Settings), user footer, mobile hamburger

### Footer
Used on: All pages
File: `components/footer.html`
Features: 4-column layout (Product/Developers/Resources/Legal), SOC 2 + Pen Tested trust badges

---

## Public Pages

| Page | Purpose |
|------|---------|
| `index.html` | Homepage — hero, features, trust, CTA |
| `feature.html` | Feature showcase |
| `security.html` | Security overview |
| `login.html` | Authentication |
| `signup.html` | Registration |
| `waitlist.html` | Early access signup |

---

## Dashboard Pages

All dashboard pages share:
- Consistent sidebar with active state
- Mobile-responsive hamburger menu
- Lime accent (`#dce87a`) for active nav items
- 6-item sidebar: Dashboard / Wallet / Swap / History / Security / Settings

---

## Developer Pages

All developer pages share:
- Public header (same as all other pages)
- Sticky docs sub-nav with 6 items
- Dark card-based code blocks with syntax highlighting
- "SDK pending release" honesty notices on all pages

---

## Docs Pages

All docs pages share:
- Public header
- Sticky docs sub-nav (Overview/Getting Started/Core Concepts/Guides/Developers)
- Sidebar with "On this page" anchor links (desktop only)
- Breadcrumb navigation
- Info/warning blocks for callouts
- Previous/Next article navigation at bottom

---

## Archive

`vault/archive/bridge/bridge/` contains the old Bridge section (4 files):
- `index.html`
- `how-it-works.html`
- `rewards.html`
- `rules.html`

These are **not linked** from any active navigation. They are preserved for reference only.

---

## Known Limitations

1. **No backend** — all pages are static HTML. No forms submit, no auth works, no blockchain connectivity.
2. **No SDK** — developer pages document the provider API; no TypeScript SDK exists yet.
3. **No Canton testnet** — transaction sending, asset transfers are documented but not live.
4. **Extension not published** — installation guide describes expected experience, no download link.
5. **No forms functional** — login, signup, waitlist forms have UI only.
6. **No search** — docs sidebar is static nav, no client-side search.
7. **Static pagination** — dashboard/history.html has a static mock pagination UI.

---

## Reference Material

Source files for rebuild reference:
- `reference/jutis_vault/` — Main Jutis design source files
- `reference/jutis_companions/` — Companion/reference materials

These folders are not part of the production vault and should not be deployed.