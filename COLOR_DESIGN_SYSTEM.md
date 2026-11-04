# ENTWY Color Design System — Expo Brand Specification

Anchored on the **Expo Brand Package** (`expo-brand-package`), this design system delivers a clean, high-performance developer-infrastructure identity:
- **Pure Black Primary Affordance (`#000000`)** for primary calls-to-action and highest visual weight.
- **Near-Black Ink (`#171717`)** for crisp, authoritative typography without harsh artificial contrast.
- **Electric Link Blue (`#0d74ce`)** for subtle, readable text hyperlinks.
- **Expo Purple Voltage (`#4630EB`)** for active selections, code highlights, and brand signals.
- **Pristine White & Canvas Soft (`#ffffff` / `#fafafa`)** with fine hairline borders (`#f0f0f3`) and 4px-grid alignment.

---

## 1. Core Color Tokens

### 1.1 Primary & Interaction (Expo Voltage)

| Token Name | Hex Code | Purpose / Usage |
| :--- | :--- | :--- |
| `--color-primary` | `#000000` | Primary action buttons (`.btn-primary`), primary focus rings |
| `--color-primary-active` / `--color-primary-deep` | `#1a1a1a` | Button hover and pressed active states |
| `--color-on-primary` | `#ffffff` | High-contrast text on primary buttons |
| `--color-expo-purple` | `#4630EB` | Expo signature purple accent, active links, glow highlights |
| `--color-purple-light` | `#7b68ee` | Secondary purple hover states |
| `--color-purple-glow` | `#e8e0ff` | Active menu pill backgrounds, code tag backing |
| `--color-text-link` / `--color-link` | `#0d74ce` | Inline body text links, navigation active items |
| `--color-text-link-secondary` | `#476cff` | Secondary inline links and interactive indicators |

---

### 1.2 Typography & Ink Hierarchy

| Token Name | Hex Code | Purpose / Usage |
| :--- | :--- | :--- |
| `--color-ink` / `--color-body-strong` | `#171717` | Display titles, headings (H1–H3), strong text, table headers |
| `--color-body` / `--color-body-mid` | `#60646c` | Standard body paragraphs, card descriptions |
| `--color-muted` | `#999999` | Secondary captions, timestamps, breadcrumbs, placeholders |
| `--color-muted-soft` | `#cccccc` | Deactivated labels, subtle separators |
| `--color-on-dark` | `#ffffff` | Pure white typography on dark surfaces |
| `--color-on-dark-soft` | `#b0b4ba` | Supporting text on dark banners and code shells |

---

### 1.3 Canvas & Surface Backgrounds

| Token Name | Hex Code | Purpose / Usage |
| :--- | :--- | :--- |
| `--color-canvas` | `#ffffff` | Pure white default canvas, dialogs, cards |
| `--color-canvas-soft` | `#fafafa` | Canvas white, alternating soft sections, body background |
| `--color-surface-card` | `#ffffff` | Card surfaces with hairline border |
| `--color-surface-strong` | `#f0f0f3` | Inactive pills, muted button backgrounds, code backing |
| `--color-surface-dark` | `#171717` | Dark mode container, footer shell base |
| `--color-surface-dark-elevated` | `#1a1a1a` | Elevated dark cards, terminal console headers |

---

### 1.4 Hairlines & Borders

| Token Name | Hex Code | Purpose / Usage |
| :--- | :--- | :--- |
| `--color-hairline` | `#f0f0f3` | Base border for cards, section dividers, table rows |
| `--color-hairline-soft` | `#f5f5f7` | Subtle inner dividers, sub-menu item borders |
| `--color-hairline-strong` / `--color-border-strong` | `#dcdee0` | Strong borders, active card borders, resting inputs |
| `--color-hairline-input` | `#dcdee0` | Form input border boundary |

---

### 1.5 Semantic & Status Tokens

| State | Token Name | Hex Code | Usage |
| :--- | :--- | :--- | :--- |
| **Success** | `--color-semantic-success` | `#16a34a` | Successful tests `[✓]`, operational status, valid badges |
| **Error** | `--color-semantic-error` | `#eb8e90` | Validation errors, failed pipeline gates, destructive actions |
| **Warning** | `--color-accent-warning` | `#ab6400` | In-progress steps, beta indicators, caution tags |
| **Preview** | `--color-accent-preview` | `#8145b5` | Preview features, custom staging environments |

---

## 2. Geometry & Spacing (4px Base Grid)

```css
/* Radii */
--radius-none: 0px;
--radius-xs: 4px;
--radius-sm: 6px;   /* Standard button radius in Expo */
--radius-md: 8px;   /* Inputs, small cards */
--radius-lg: 12px;  /* Documentation cards, main bento items */
--radius-xl: 16px;  /* Modals, featured blocks */
--radius-xxl: 24px; /* Large container shells */
--radius-pill: 9999px; /* Status tags, chips */

/* Spacing */
--space-xxs: 4px;
--space-xs: 8px;
--space-sm: 12px;
--space-md: 16px;
--space-lg: 20px;
--space-xl: 24px;
--space-2xl: 32px;
--space-3xl: 48px;
--space-4xl: 64px;
--space-section: 96px;
```

---

## 3. Elevation & Shadows

Expo emphasizes **border-first architecture** with light, subtle elevation:

```css
--shadow-stripe-sm: 0 1px 2px rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.02);
--shadow-stripe-card: 0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.03);
--shadow-stripe-hover: 0 6px 20px rgba(0, 0, 0, 0.07);
--shadow-stripe-pill: 0 2px 4px rgba(0, 0, 0, 0.08);
--shadow-stripe-pill-hover: 0 4px 10px rgba(0, 0, 0, 0.12);
```

---

## 4. Typography Scale

- **Display & Headings**: Inter (Display weights 600–700, tight tracking)
- **Body**: Inter (400 weight, 1.5–1.6 line height)
- **Code & Terminals**: JetBrains Mono / Fira Code (tabular figures, crisp syntax highlighting)

---

## 5. Tailwind Configuration Mapping

Directly mapped in `tailwind.config.js`:
- `bg-primary` -> `#000000`
- `text-primary` -> `#000000`
- `text-foreground` -> `#171717`
- `bg-background` -> `#ffffff`
- `bg-muted` -> `#fafafa`
- `border-border` -> `#f0f0f3`
- `bg-expo-purple` -> `#4630EB`
- `text-expo-link` -> `#0d74ce`
