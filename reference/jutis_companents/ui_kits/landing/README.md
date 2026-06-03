# Jutis Landing UI Kit

High-fidelity React recreation of the Jutis web surfaces. Source markup imported from `JutisWallet/jutis-landing-page` (HTML + Tailwind CDN).

## Files

- `index.html` — interactive shell with tab-bar to switch between core screens. Picks up where you left off via `localStorage`.
- `Components.jsx` — atomic primitives: `JutisMark`, `JutisLockup`, `StatusPill`, `PillButton`, `Card`, `TokenChip`, `NavRow`, `Sidebar`, `Topbar`, `CommandPalette`.
- `Screens.jsx` — full screens: `LandingScreen`, `LoginScreen`, `DashboardScreen`, `BridgeScreen`.

## Modernizations vs. source

These small additions stay on-brand (lime accent, dark, geometric, no emoji) but feel more contemporary:

- A **⌘K command palette** in the dashboard topbar — native to modern crypto/dev apps.
- **Live · Canton** pulsing pill on the balance hero — surfaces network status, reinforces "Bridge is alive" feeling.
- Subtle animated **swap-flip rotate** on hover (180° cubic-bezier spring) on Bridge.
- Refined **gradient hero card** for the balance with ambient corner glow.
- Tighter typography: large numerics use `letter-spacing: -.02em` for a more current feel.

The visual vocabulary (palette, type, mark, surfaces, radii) is preserved 1:1 from the source.

## Usage

Open `index.html` directly. All assets are loaded from project root (`../../assets/`, `../../colors_and_type.css`).
