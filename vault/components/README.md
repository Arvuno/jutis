# Jutis Vault — Component Files

## Purpose

These are **canonical static HTML component references** for the Jutis production site.
They are the authoritative source for header, footer, and UI patterns.

## Important Rules

### Do not duplicate inconsistent markup

Actual pages (index.html, dashboard/, developers/, docs/) **must** use the same header and footer component pattern defined here. Do not create page-specific header variants.

### Preserve the design system

All components reference `../styles/tokens.css` for CSS variables. When adding page-specific styles, reference the token system rather than hard-coding values. If a token is missing, add it to `tokens.css` instead of creating one-off styles.

### Navigation is universal

The same top navigation header must appear on:
- Home (index.html)
- Features (feature.html)
- Security (security.html)
- Developers (developers/index.html and all sub-pages)
- Docs (docs/index.html and all sub-pages)
- Wallet (dashboard/ section)
- Login (login.html)
- Signup (signup.html)
- Waitlist (waitlist.html)

The only exception is the **Dashboard sidebar** (dashboard/ section), which uses a separate sidebar navigation that does NOT replace the top nav — it supplements it.

### Developer and Docs pages must not switch to a different header

Previous versions of `jutis_vault` had developers/ and docs/ using a logo-only header. This **must not** be carried forward. These sections use the same full public nav header.

### Relative path notes

| Page location | Header link to home | CSS include path |
|---|---|---|
| `vault/index.html` (root) | `href="index.html"` | `styles/tokens.css` |
| `vault/feature.html` | `href="index.html"` | `styles/tokens.css` |
| `vault/security.html` | `href="index.html"` | `styles/tokens.css` |
| `vault/login.html` | `href="index.html"` | `styles/tokens.css` |
| `vault/dashboard/index.html` | `href="../index.html"` | `../styles/tokens.css` |
| `vault/developers/index.html` | `href="../index.html"` | `../styles/tokens.css` |
| `vault/docs/index.html` | `href="../index.html"` | `../styles/tokens.css` |

## File Inventory

| File | Purpose |
|------|---------|
| `layout.html` | Full HTML shell — copy into each new page |
| `header.html` | Top navigation — must appear on every public page |
| `footer.html` | Site footer — must appear on every public page |
| `brand.html` | Logo mark and wordmark usage patterns |
| `cards.html` | Card component variants |
| `buttons.html` | Button component variants |

## CSS System

All components depend on the CSS token system:

```
styles/
├── tokens.css      ← Design tokens (colors, spacing, radii, shadows, motion)
├── base.css        ← Reset and body defaults
├── layout.css      ← Page shell, containers, header, footer, grid
└── components.css  ← UI components (buttons, cards, badges, widgets)
```

Pages must include all four CSS files in this order.

## Branding

The Jutis mark consists of:
- An outer rotated square (lime, `#dce87a`)
- An inner rotated square (white at 20% opacity)
- A centered lime vertical bar

This mark appears in the header, footer, and on the homepage hero.
Do not recreate or modify the mark — use the SVG assets in `assets/`.

## Status

These are canonical reference components for Phase 4 layout construction.
Pages will be rebuilt in later phases using these as the authoritative template.