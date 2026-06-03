# Phase 20 Report: Mobile Design Reference

## Objective
Create a static HTML/CSS mobile app design reference for the future Android wallet app. Design should be mobile-native, follow Jutis brand, and serve as handoff documentation for engineering.

## Mobile Screens Created

| File | Purpose | Status |
|------|---------|--------|
| `vault/mobile/index.html` | Design overview, principles, screen list | ✅ |
| `vault/mobile/onboarding.html` | Welcome, create/import wallet, security setup | ✅ |
| `vault/mobile/wallet.html` | Balance card, assets, quick actions, activity preview | ✅ |
| `vault/mobile/send.html` | Recipient, asset selector, amount, review, warnings | ✅ |
| `vault/mobile/receive.html` | QR code, address display, copy/share | ✅ |
| `vault/mobile/activity.html` | Transaction list, filters, status badges | ✅ |
| `vault/mobile/security.html` | Security score, backup status, connected apps | ✅ |
| `vault/mobile/settings.html` | Profile, network, notifications, privacy, logout | ✅ |
| `vault/mobile/rewards.html` | XP card, rank, achievements, leaderboard | ✅ |

## Mobile UX Principles Applied

### Touch-First Design
- Minimum 48px touch targets on all interactive elements
- Generous padding between tappable items (minimum 16px gaps)
- Thumb-friendly navigation placed in bottom 40% of screen
- Bottom navigation bar (not top hamburger menu)

### Spacious Layout
- Large card padding (20-24px)
- Clear visual hierarchy with breathing room
- Not a shrunken desktop — content-focused single column
- Cards with generous border-radius (16-24px)

### Mobile-Native Patterns
- Bottom tab navigation (Home, Activity, Send/Receive FAB, Rewards, Settings)
- Full-width cards and inputs
- Swipe-friendly list items
- Modal sheets for secondary actions
- Sticky headers with blur backdrop

### Consistent Navigation
- 5-tab bottom nav with floating action button for primary Send action
- Top bar with back button and contextual actions
- Visual feedback on all interactive states

## What Differs from Desktop Dashboard

| Aspect | Desktop | Mobile |
|--------|---------|--------|
| Layout | Multi-column, dense | Single column, spacious |
| Navigation | Sidebar (left) | Bottom tabs + FAB |
| Balance | Small header element | Hero card at top |
| Actions | Grid of small buttons | Horizontal scroll or 4-column grid |
| Assets | Table with columns | Stacked card list |
| Activity | Full page | Accessible from home |
| Settings | Full page | Accessible from home |

### Key Mobile-Specific Features
- **Safe area support** — `env(safe-area-inset-*)` for notched devices
- **Bottom nav bar** — Fixed, always accessible
- **Floating Action Button** — Central Send action in nav
- **Full-width inputs** — Better touch accuracy
- **Card-based layout** — Single column, scrollable
- **Pull-to-refresh gesture** — Implied for activity feeds

## Android Handoff Notes

### Design Tokens
All values in `vault/mobile/styles/tokens.css`:
- **Colors:** `--accent: #B7F53A`, `--bg-main: #0D0F14`, `--bg-card: #161920`
- **Spacing:** 4px base scale (--space-1 through --space-16)
- **Radius:** 8px to 24px for various card sizes
- **Typography:** 11px to 40px scale

### Recommended Android Implementation
1. Use Jetpack Compose with Material Design 3
2. Follow the color tokens for theming
3. Implement bottom navigation with NavigationSuite
4. Use `WindowInsets` for proper safe area handling
5. Follow 48dp minimum touch target rule
6. Implement shared element transitions between screens

### Component Equivalents
| Mobile Design | Android Equivalent |
|---------------|-------------------|
| Bottom Nav | NavigationBar or NavigationSuite |
| Cards | Card composable with elevation |
| Badges | Badge composable |
| Toggle | Switch composable |
| List Items | ListItem with leading/trailing elements |
| FAB | FloatingActionButton |
| Top Bar | TopAppBar with blur/scroll behavior |

### Assets to Export
- Jutis logo (SVG available in root)
- Material Symbols icons (already in use)
- QR code placeholder needs real asset

## Components/Patterns Created

### Mobile Patterns
- **Top Bar** — Fixed, blur backdrop, back/action buttons
- **Bottom Navigation** — 5 tabs with FAB integration
- **Balance Card** — Hero element with gradient background
- **Asset List Item** — Icon, name, balance, fiat value
- **Transaction Item** — Icon, type, status badge, amount, time
- **Quick Actions Grid** — 4 equal buttons with icons
- **XP Progress Card** — Linear progress bar, level badge
- **Settings List** — Icon, title, description, toggle/chevron
- **Achievement Item** — Badge icon, title, XP reward
- **Filter Chips** — Horizontal scroll, single select
- **Address Card** — Monospace address, copy button

### Reusable CSS Classes
```
.mobile-topbar, .mobile-nav, .mobile-card, .mobile-badge, .mobile-pill
.mobile-btn, .mobile-btn--primary, .mobile-btn--secondary
.mobile-input, .mobile-input-group, .mobile-list-item
.mobile-section, .mobile-section__title
```

## Known Limitations

1. **No real data** — All screens use placeholder/mockup content
2. **QR codes are placeholders** — Need real QR generation
3. **No actual navigation** — Links go to static pages, no app routing
4. **No animations** — Basic hover states only, no page transitions
5. **No form validation** — Just visual styling
6. **Not responsive tested** — Optimized for 390px width (iPhone 14 Pro)
7. **No dark/light mode toggle** — Dark mode only as per brand
8. **No accessibility audit** — Should be done before Android implementation
9. **No actual wallet functionality** — Design reference only
10. **Legal links point to vault pages** — May need adjustment for mobile context

## Validation Results

| Check | Command | Result |
|-------|---------|--------|
| Files created | `find vault/mobile -maxdepth 2 -type f` | ✅ 11 files |
| No jutis_vault refs | `grep -R "jutis_vault"` | ✅ Clean |
| No jutis_companions refs | `grep -R "jutis_companions"` | ✅ Clean |
| Mobile-first viewport | Present in all pages | ✅ |
| Jutis brand tokens | Used in all pages | ✅ |
| Bottom nav present | All app screens | ✅ |
| Touch targets 48px+ | CSS reviewed | ✅ |

## Result
**COMPLETE** — All 9 mobile screens created with consistent design language, proper mobile UX patterns, and Android handoff documentation.

---

*Design Reference v1.0 — For Android Engineering*