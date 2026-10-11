# Antigravity handover: minimal Hero04 and Hero08 rollout

## Objective

Reuse Hero04 and Hero08 across ENTWY without stacking extra hero sections, duplicating page content, or disturbing existing navigation and application flows.

- **Hero04** is the image-led introduction for Work and Careers.
- **Hero08** is the two-path decision hero for About and the Solutions overview.

These components replace existing text-only introductions. Do not insert them in addition to those introductions.

## Final placement

| Route | Component | Action |
| --- | --- | --- |
| `/about` and `/about/:id` | Hero08 | Consolidate the existing About introduction and `AboutCraftSection` into one Hero08 |
| `/solutions` | Hero08 | Replace the overview introduction with a two-path selector |
| `/solutions/:id` | Existing detail heading | Leave unchanged; do not render the selector |
| `/work` | Hero04 | Replace the existing text-only introduction |
| `/careers` and `/careers/:section` | Hero04 | Replace the existing text-only introduction |
| Homepage | Existing `Hero` | Leave unchanged |

Do not add Hero04 or Hero08 to service, solution, case-study, industry, process, insight, or career detail content during this rollout.

## Current project state

The first About implementation is already present:

- `src/components/AboutCraftSection.tsx`
- `src/components/ui/hero-08.tsx`
- `src/components/ui/hero-08-demo.tsx`
- `src/components/ui/hero-08-utils/cta.tsx`
- Hero08 rendering inside `src/pages/AboutPage.tsx`

Hero08 already supports optional `headingAs`, `eyebrow`, `sectionClassName`, and `innerClassName` props. Its CTA implementation already uses `Button asChild` with React Router links.

The current code passes `npm run build`. Preserve that baseline.

## Shared implementation rules

Keep reusable components presentation-only. Page copy, image choices, and destinations belong in thin page wrappers.

Create:

- `src/components/ui/hero-04.tsx`
- `src/components/ui/hero-04-utils/art-collage.tsx`
- `src/components/ui/hero-04-demo.tsx`
- `src/components/WorkEditorialHero.tsx`
- `src/components/CareersEditorialHero.tsx`
- `src/components/SolutionsPathwaysHero.tsx`

Retain `src/components/AboutCraftSection.tsx`, but revise it into the complete About Hero08 instead of rendering a separate introductory block above it.

The pasted Hero04 source refers to a separate CTA utility. Do not duplicate CTA behavior. Import `Cta` and `CtaProps` from `src/components/ui/hero-08-utils/cta.tsx`. A neutral rename is unnecessary for this task.

The project already includes all required dependencies. Do not reinstall packages, regenerate shadcn files, or replace `button.tsx`.

## Hero04 foundation

Add these optional props to the supplied Hero04 interface:

```ts
headingAs?: 'h1' | 'h2'
eyebrow?: React.ReactNode
sectionClassName?: string
innerClassName?: string
```

Defaults must preserve the supplied demo:

```ts
headingAs = 'h1'
animation = 'none'
variant = 'standard'
```

Use the existing ENTWY display font, body color, radii, and tokens. When Hero04 is rendered inside the site `.container`, pass `innerClassName="max-w-none px-0 py-0"` to avoid duplicate horizontal padding.

The pasted source did not include `ArtCollage`. Implement it with this interface:

```ts
interface ArtCollageProps {
  primaryImage: string
  secondaryImage: string
  primaryAlt?: string
  secondaryAlt?: string
}
```

Use one large primary image with a smaller overlapping secondary image. Both must remain inside the viewport at mobile widths. Give their containers stable aspect ratios to prevent layout shift. Use `object-cover`, accurate alt text, restrained borders and shadows, and lazy loading where the image is below the initial viewport.

## About: Hero08 as the complete introduction

Remove the separate header block currently above `AboutCraftSection`. Hero08 becomes the page’s single introduction and owns the H1.

| Field | Value |
| --- | --- |
| Eyebrow | Company & Leadership |
| Heading | Engineered for impact. Built with craft. |
| Description | ENTWY brings your data, systems, and people together to turn promising ideas into reliable, production-ready intelligence and automated workflows. |
| Card 1 | 0-to-1 Systems Architecture |
| Card 1 subtitle | Full-stack foundations built for production |
| Card 1 CTA | Explore Solutions → `/solutions/build-a-new-product` |
| Card 2 | Autonomous Agent Meshes |
| Card 2 subtitle | Governed agent workflows connected to your enterprise systems |
| Card 2 CTA | Explore AI Solutions → `/services/ai` |
| Heading element | `h1` |
| Variant | `standard` |
| Animation | `subtle` |

Keep the existing About tabs, cards, section IDs, refs, aliases, breadcrumbs, and engineering-hubs section unchanged.

Do not add social-proof numbers or avatars until ENTWY provides verified claims and approved images.

## Solutions overview: Hero08 pathway selector

On `/solutions`, replace the existing overview header with `SolutionsPathwaysHero`. It owns the H1 and contains two cards.

| Field | Value |
| --- | --- |
| Eyebrow | Targeted Solutions & System Modernization |
| Heading | Two ways to move from intent to production |
| Description | Launch a new digital product or automate the workflows already running your business. ENTWY assembles the right strategy, design, AI, and engineering team for either path. |
| Card 1 | Build a New Product |
| Card 1 subtitle | For founders and enterprise innovation teams launching a production-ready platform |
| Card 1 CTA | Explore Product Build → `/solutions/build-a-new-product` |
| Card 2 | Automate Business Workflows |
| Card 2 subtitle | For operations, RevOps, and IT teams removing repetitive work with governed automation |
| Card 2 CTA | Explore Automation → `/solutions/automate-business-workflows` |
| Heading element | `h1` |
| Variant | `standard` |
| Animation | `subtle` |

Render this component only when `activeSolution` is false. On `/solutions/:id`, preserve the current breadcrumb, selected-solution heading, deep-dive content, CTAs, and solution portfolio.

The five-card solutions grid stays below the overview hero. The hero provides the two most common entry points; the grid remains the complete portfolio.

## Work: Hero04 introduction

Replace only the current Work header block with `WorkEditorialHero`.

| Field | Value |
| --- | --- |
| Eyebrow | Featured Case Studies & Client Deployments |
| Title | Proven impact across |
| Title line 2 | critical workflows. |
| Description | Explore how ENTWY engineers resilient platforms, governed AI workflows, and production-ready integrations for enterprise teams. |
| Primary CTA | View Case Studies → `#case-studies` |
| Secondary CTA | Start a Similar Project → `/start-a-project` |
| Heading element | `h1` |
| Variant | `standard` |
| Animation | `subtle` |

Add `id="case-studies"` to the existing case-study list container. Preserve all existing case-study content and detail links.

Use product, architecture, or engineering imagery. Temporary stock images must not imply that depicted people or companies are ENTWY clients.

## Careers: Hero04 introduction

Replace only the current Careers header block with `CareersEditorialHero`.

| Field | Value |
| --- | --- |
| Eyebrow | Culture & Engineering Talent |
| Title | Join a guild of senior builders |
| Title line 2 | and systems architects. |
| Description | Work with high autonomy, direct customer impact, and the space to ship modern AI software with care. |
| Primary CTA | Explore Open Positions → `/careers/open-positions` |
| Secondary CTA | View Internships → `/careers/internships` |
| Heading element | `h1` |
| Variant | `standard` |
| Animation | `subtle` |

Preserve the existing breadcrumbs, quick tabs, section IDs, refs, automatic scrolling, roles, internships, hiring-process content, and application mail links.

Use approved culture or workspace imagery when available. Stock imagery must use generic alt text and must not be described as ENTWY employees or offices.

## CTA behavior

- Internal routes use React Router `Link` through `Button asChild`.
- Same-page hashes such as `#case-studies` use a normal anchor or explicit accessible scrolling.
- External destinations use anchors. Only open a new tab when that behavior is intentional.
- Each CTA contains exactly one interactive element.
- Keyboard focus must remain visible.
- Preserve query strings, hashes, browser back/forward, and modifier-click behavior.

## Scope restrictions

Do not change:

- Homepage content or layout.
- `src/App.tsx` routes, except an optional `/hero-04-demo` preview route.
- Navbar or footer behavior.
- Global design tokens, `.container`, or shared typography definitions.
- Sitemap data or existing page data structures.
- Case-study modal behavior.
- Start-project form behavior.
- Existing detail-page layouts.
- Package dependencies.

Do not introduce route checks inside Hero04 or Hero08. Route-specific conditions stay in the page or wrapper.

## Responsive and accessibility requirements

- Exactly one H1 per rendered page.
- Card and image text must meet readable contrast levels.
- Decorative images use empty alt text; meaningful images use accurate descriptions.
- Honor `prefers-reduced-motion` through the existing `useReducedMotion` behavior.
- No horizontal overflow at 320px or wider.
- CTAs remain visible without hover and usable by keyboard.
- Text and cards may grow vertically when copy wraps.
- Preserve logical reading and tab order on mobile.

## Verification

Run `npm run build`, then inspect the changed routes at approximately 375px, 768px, and 1440px.

Verify:

- `/about`, `/about/our-team`, and `/about/team`: one H1, both Hero08 CTAs, selected tabs, aliases, scrolling, and back/forward navigation.
- `/solutions`: one Hero08, both pathway CTAs, and the complete five-card portfolio below it.
- `/solutions/build-a-new-product`: no pathway hero; selected detail content and CTAs remain intact.
- `/work`: both Hero04 CTAs and all case-study detail links work.
- `/careers`, `/careers/open-positions`, and `/careers/internships`: both Hero04 CTAs, selected tabs, scroll targets, and application links work.
- `/hero-08-demo` and optional `/hero-04-demo`: default component behavior remains intact.
- Homepage, navbar, footer, case-study modal, and `/start-a-project` behave as before.
- No new console errors occur during these flows.

The existing Vite bundle-size warning is non-blocking and predates this rollout. Record it separately rather than treating it as a component integration failure.

## Completion criteria

1. Hero04 replaces the Work and Careers introductions.
2. Hero08 is the single introduction on About and the Solutions overview.
3. No page has stacked or duplicated hero content.
4. Every page has one H1.
5. All new and existing navigation flows pass the checks above.
6. `npm run build` succeeds.
7. The final handoff lists changed files, verified routes, screenshots, and any temporary imagery still awaiting approved assets.
