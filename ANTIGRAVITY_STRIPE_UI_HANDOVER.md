# Antigravity handoff: reproduce Stripe’s homepage UI for ENTWY

Date: 2026-10-11
Owner of implementation: Antigravity
Handoff ID: ENTWY-STRIPE-20261011
Status: Ready for receiver acknowledgement; implementation and visual QA pending.

## Latest implemented direction: interactive burst

The user subsequently chose the supplied radial filament burst instead of the ribbon and requested direct interaction rather than click-to-replay. This supersedes all ribbon requirements below. The homepage now mounts `src/components/ui/logo-burst.tsx` from `HeroRevamped.tsx`, with an ENTWY mark at the center. Pointer movement and touch bend nearby filaments; arrow keys offer keyboard interaction and Escape releases the field. The field settles when interaction ends, renders statically for reduced motion, and suspends rendering when idle/offscreen. Homepage-only styles live in `src/home.css`. Keep this composition when continuing work.

## User intent and priority

The user says the current site looks “vibecoded” and wants to replicate Stripe’s website UI. Deliver a close visual reconstruction of the reference with ENTWY content and identity. Matching a palette is insufficient. Match composition, typography, spacing, component geometry, navigation behavior, responsive layout, and the quality of the graphics.

This is the current design brief. It supersedes conflicting aesthetic directions in `DESIGN_AIRTABLE.md`, `HOMEPAGE_DESIGN_NOTES.md`, `PRODUCT_ENGINE_NOTES.md`, and prior handovers. Preserve existing business content, working routes, and enquiry behavior. Scope is the homepage (`/`) ONLY. Header/footer changes must be scoped to the homepage if their appearance changes; all other pages must retain their current appearance and behavior. Do not publish or deploy as part of this handoff.

## Reference: inspect the actual current website

Primary reference: [Stripe India homepage](https://stripe.com/in). Also available through [Stripe](https://stripe.com/), which may redirect to another locale.

The sender inspected the live India homepage visually and through its rendered DOM on 2026-10-11. At the observed desktop viewport of approximately 1905 × 951:

- A compact horizontal navigation sits over a white surface, with a fine rule beneath it.
- The main content occupies a centered frame bounded by subtle vertical rules.
- The hero uses a broad editorial text block, with headline and supporting statement at similar display scale. It is not a conventional half-width headline beside a terminal mockup.
- A large, sculptural orange/pink/purple/blue ribbon enters from the upper right and flows down the right edge. It has directional texture and distinct folds, not an indistinct blurred radial glow.
- The primary CTA is a compact rectangle with lightly rounded corners. The current reference does not make every control a pill.
- A narrow logo strip sits below the hero, between horizontal rules.
- The following section introduces a modular, visually rich solutions layout.

Measured hero heading styles in that desktop DOM: `font-family: sohne-var, "SF Pro Display", sans-serif`; `font-size: 48px`; `font-weight: 300`; `line-height: 55.2px`; `letter-spacing: -0.96px`; text block width approximately `959px`. These are observations at one viewport, not universal breakpoint values. Do not copy proprietary font files; use an available licensed substitute and tune its metrics.

The text-only fetch of the generic homepage redirected to `/en-br`; use `/in` consistently for screenshot comparison. Freeze reference screenshots before implementation so locale or animation changes do not cause design drift. A third-party Stripe DESIGN.md can support the work but must not overrule the live visual reference.

## What the current code gets wrong

These are code-level findings, not a completed screenshot audit of the local site:

| Finding | Evidence | Required correction |
| --- | --- | --- |
| Hero follows a different composition | `HeroRevamped.tsx` uses a 7/5 split, gradient headline span, a version announcement pill, and a three-tab console | Rebuild around the observed broad editorial hero and ribbon composition |
| Decorative effects substitute for the reference artwork | Hero has a 90px-blurred radial background and a faint skewed band | Build a controlled ribbon with a clear silhouette and folds; reuse `RibbonFieldCanvas.tsx` only if inspection proves it can match |
| Demo mechanics imply a real platform | `handleDeploy` advances through timeouts; copy action offers `npx @entwy/cli` | Remove unsupported product claims; any retained demonstration must be clearly labelled as an example |
| Email capture gives a false success state | `handleEmailSubmit` toggles state without a submission request | Use the existing `/start-a-project` route unless there is a verified real integration |
| Multiple style layers can disagree | `index.css`, `home.css`, `site-polish.css`, Tailwind utilities and inline colors coexist | Consolidate tokens and component rules; remove obsolete overrides as their components are migrated |
| Historical notes describe stale integration | `PRODUCT_ENGINE_NOTES.md` says `ProductEngineHero` is mounted, while `HomePage.tsx` currently mounts `HeroRevamped` | Treat current imports as truth; inspect dependencies before replacing or deleting anything |

Audit displayed customer logos, testimonials, status indicators and numerical performance claims. Use only substantiated ENTWY evidence. Technology names can appear under an accurate “Technologies we work with” label; do not present Stripe’s customers as ENTWY clients.

## Design contract

### Geometry and typography first

1. Establish one centered content frame and shared alignment lines across navigation, hero, sections, CTA and footer. Start near 1280px maximum width, then adjust against reference captures at equal viewport sizes.
2. Match the hero’s broad text measure, generous top space, light display weight, restrained tracking and deliberate line wrapping. Do not retain the current 68px split hero merely because it already exists.
3. Keep paragraph text readable and body weights around 400. Do not apply weight 300 to all small text.
4. Use white as the dominant surface, fine cool-gray rules, restrained navy/dark text and a saturated violet action color. Concentrate expressive color in the main artwork and meaningful product illustrations.
5. Derive corner radii from the actual reference. Initial implementation defaults: controls 4–6px, panels 8–12px, pills only for components that warrant them. These are proposed starting values, not measured Stripe tokens.
6. Use shadows to describe stacked or floating UI surfaces. Do not put the same shadow and hover lift on every content block.

Suggested seed tokens, to be calibrated against screenshots:

```css
--surface: #ffffff;
--surface-subtle: #f6f9fc;
--ink: #0a2540;
--body: #425466;
--action: #533afd;
--rule: #e3e8ee;
--content-max: 1280px;
--gutter: clamp(20px, 4vw, 48px);
```

Use an 8px-based spacing scale with 4px optical adjustments. Keep one font family where practical; compare the existing fonts before adding another. Build homepage-scoped container, section, button and heading patterns using the current architecture. Do not change global tokens or shared defaults that would restyle other routes.

### Homepage composition

```text
┌──────────────── centered page frame ────────────────┐
│ ENTWY     navigation groups          Start a project│
├────────────────────────────────────────────────────┤
│                                                    │
│  Broad editorial proposition       ribbon entering │
│  Supporting sentence in display    from upper right│
│  scale, with controlled wrapping                   │
│  [Start a project]                                 │
│                                                    │
├────────────── verified proof / technology strip ────┤
│ Capabilities introduction                          │
│ Varied visual modules showing actual service work  │
├────────────────────────────────────────────────────┤
│ Selected work / evidence                           │
│ Engineering approach and delivery                  │
│ Insights                                          │
│ Contact invitation                                │
├──────────────── structured footer ─────────────────┤
└────────────────────────────────────────────────────┘
```

Working ENTWY copy: “Software that moves your business forward.” Supporting statement: “We design and build digital products, AI workflows and business systems — from the first idea to everyday operation.” Treat this as proposed copy; adjust length to match the reference’s rhythm without importing Stripe’s payments positioning.

The ribbon must read as one designed object. Explore the existing canvas component before adding dependencies. Use a static fallback on unsupported devices and reduced motion. Keep text and controls accessible independent of the artwork. Do not place a dashboard, terminal, fake deployment button or extra badge into the hero unless it is present in the selected reference composition and relevant to ENTWY.

Use the reference’s modular visual language for capabilities, adapting the content to strategy, design, AI, technology and marketing as represented in the existing data. Vary module size where it explains hierarchy; avoid six identical icon/checklist cards. Consolidate repeated workspace/governance sections when they repeat the same sales message.

### Navigation, interactions and mobile

- Preserve existing destinations. Use grouped navigation if needed to match the reference’s density without dropping routes.
- Dropdowns must work with pointer and keyboard, expose expanded state, close on Escape and return focus appropriately. Mobile navigation must remain usable with page scrolling and focus management.
- Keep primary actions consistent: “Start a project” goes to `/start-a-project`; “View our work” goes to `/work`.
- Match the reference’s responsive behavior through inspection. At narrow widths, keep the text readable and crop/reposition the ribbon intentionally instead of shrinking the whole desktop composition.
- Respect reduced motion; avoid blinking status dots, perpetual card animation and staggered reveals on every section.
- Show genuine pending/success/error states for forms. Do not simulate submission success.

## Implementation map

| Files | Work |
| --- | --- |
| `src/index.css`, `tailwind.config.js` | Inspect existing tokens; leave shared defaults unchanged. Define overrides under `.home-page` |
| `src/home.css`, `src/site-polish.css` | Consolidate homepage styles in `home.css`; do not restyle other routes through global overrides |
| `src/components/Navbar.tsx`, `Footer.tsx`, `EntwyLogo.tsx` | Homepage-only variants where necessary; preserve the default rendering on other routes and retain ENTWY branding |
| `src/components/HeroRevamped.tsx` | Rebuild current active hero to the selected live reference |
| `src/components/RibbonFieldCanvas.tsx` | Inspect for reuse; match silhouette and texture, with static fallback |
| `src/pages/HomePage.tsx` | Compose a cohesive page; remove redundant sections from this composition |
| `ServicesShowcase.tsx`, `TeamWorkspaceCards.tsx`, `ExpandableFeaturePanel.tsx` | Replace repetitive cards and unnecessary simulated consoles with purposeful service visuals |
| `DeveloperSectionStripe.tsx` | Retain only truthful, relevant engineering content; no invented SDK or API claims |
| `ProcessTimeline.tsx`, `InsightsEditorial.tsx`, `CtaBandLight.tsx` | Align section rhythm and geometry to the same system |
| `src/pages/*` and their wrappers | Read for regression awareness only; do not redesign other pages |
| `src/App.tsx`, `src/data/*` | Preserve route and content contracts; change only where composition requires it |

Paths without a directory prefix in this table are in `src/components/`. The project is React 18 + TypeScript + Vite + React Router + Tailwind, with Motion, Lucide, Three.js and Playwright already available. Do not reinstall packages or scaffold a replacement app. Do not edit generated `dist` files, AppleDouble `._*` files, secrets or MCP configuration.

There was one unsaved editor buffer visible in Antigravity when this handoff was prepared. Preserve user edits and pending change reviews; do not accept/reject all changes or overwrite unsaved buffers as a shortcut.

## Scope boundary: homepage only

The user's clarification is explicit: “homepage alone.” Redesign `/` only. Preserve all service, solution, work, process, industry, about, careers, insights, enquiry and demo pages. Keep existing navigation destinations and the `/start-a-project` flow functional.

Shared components used by the homepage may be edited only through opt-in homepage variants or safely scoped styles. Do not alter their default appearance elsewhere. If the header/footer need different styling on `/`, select the variant by the actual pathname so the wildcard fallback does not accidentally restyle other routes. Run representative secondary-page regression checks after shared-code changes, but do not perform a secondary-page redesign.

## Execution sequence and acceptance gate

1. Acknowledge this brief and record reference URL, locale, date and viewport dimensions. Capture Stripe and the local homepage before edits at 1440px and 390px widths. Inspect tablet behavior as well.
2. Compare screenshots and list the five largest differences in structure, spacing, typography, artwork and navigation. Do not start with a bulk color replacement.
3. Build the homepage-scoped foundation and hero. Compare at the same viewport against the frozen reference; correct composition before adding the rest of the page.
4. Finish the homepage. Check that shared-component changes have not altered other pages or forms.
5. Run `npm run build`. Use `npm run dev -- --host 127.0.0.1` if no existing server is available; check the actual port printed by Vite. The IDE’s previous conversation mentioned port 3001, but that is not a fresh availability check.
6. Capture and inspect the final homepage at 1440, 1024, 768 and 390px widths, plus a 375px overflow check. Check representative secondary pages only for regressions from shared-component changes.
7. Exercise dropdowns, mobile navigation, tabs/accordions, internal links, enquiry validation, focus visibility and reduced motion. Check browser console errors and horizontal overflow.
8. Report changed files, homepage scope and regression checks, build result, screenshot paths and remaining deviations. Update stale design notes only after implementation is verified.

Acceptance requires all of the following:

- [ ] First viewport matches the selected reference’s hierarchy, text measure, artwork placement and negative space.
- [ ] Layout visibly resembles the inspected current Stripe site, not a recolored generic SaaS template.
- [ ] Only the homepage has been redesigned; other routes retain their prior appearance and behavior.
- [ ] No unsupported client relationships, live metrics, fake CLI products or simulated form success.
- [ ] No clipped content, accidental horizontal scrolling, overlapping navigation or unreadable text.
- [ ] Keyboard and reduced-motion behavior verified.
- [ ] Build passes, with warnings recorded accurately.
- [ ] Before/after screenshots have been visually reviewed; a successful build alone is not design acceptance.

## Receiver handshake

Reply in the Antigravity conversation with:

> ACK ENTWY-STRIPE-20261011 — I have read ANTIGRAVITY_STRIPE_UI_HANDOVER.md. I will use the current stripe.com/in visual reference, rebuild the composition before refining decoration, preserve ENTWY content and all other pages, implement the homepage only, and verify desktop/mobile screenshots. I will report concrete deviations and validation results.

Then execute the sequence above. The ACK confirms receipt and understanding; it does not mean the redesign is complete. Record completion only after the acceptance checks are actually performed.
