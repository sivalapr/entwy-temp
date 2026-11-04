# Engineering Excellence Bento Grid Component

This section corresponds to the **"Engineering excellence across your entire stack"** feature grid on the ENTWY homepage.

---

## 1. File Locations in the Current Project

The section in the screenshot is powered by the following files:

| Component | File Path |
| :--- | :--- |
| **Mounted on Homepage** | [`src/pages/HomePage.tsx`](file:///e:/Hariharan-Design/Entwy/entwywebmain-main/src/pages/HomePage.tsx#L5) (Line 5 & Line 28 `<BlockFeature />`) |
| **Main Section Component** | [`src/components/ui/block-feature.tsx`](file:///e:/Hariharan-Design/Entwy/entwywebmain-main/src/components/ui/block-feature.tsx) |
| **Helper 1 (Pipeline card)** | [`src/components/ui/block-feature-utils/feature-build.tsx`](file:///e:/Hariharan-Design/Entwy/entwywebmain-main/src/components/ui/block-feature-utils/feature-build.tsx) |
| **Helper 2 (Streaming curve card)** | [`src/components/ui/block-feature-utils/feature-motion.tsx`](file:///e:/Hariharan-Design/Entwy/entwywebmain-main/src/components/ui/block-feature-utils/feature-motion.tsx) |
| **Helper 3 (Orbit ring SVG)** | [`src/components/ui/block-feature-utils/figma-orbit-ring.tsx`](file:///e:/Hariharan-Design/Entwy/entwywebmain-main/src/components/ui/block-feature-utils/figma-orbit-ring.tsx) |
| **Helper 4 (Tailwind logo SVG)** | [`src/components/ui/block-feature-utils/tailwind.tsx`](file:///e:/Hariharan-Design/Entwy/entwywebmain-main/src/components/ui/block-feature-utils/tailwind.tsx) |

---

## 2. Dependencies Required

To use this section in your separate home page, you need:
```bash
npm install lucide-react @tabler/icons-react clsx tailwind-merge
```

Make sure you have your standard `cn` utility (usually in `lib/utils.ts`):
```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## 3. Option A: Single-File Drop-in Component (`BlockFeatureStandalone.tsx`)

To make it as easy as possible to drop into your separate home page without managing multiple sub-directories, here is the **all-in-one standalone file** with the SVGs and helpers consolidated:

```tsx
import React, { type ReactNode } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  IconBrandNextjs,
  IconBrandPython,
  IconBrandReact,
  IconBrandTypescript,
  IconBrandOpenai,
  IconDatabase,
} from "@tabler/icons-react";
import { Sparkle, Layers, Bot, Database, Workflow } from "lucide-react";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ------------------------------ | CARD PRIMITIVES | ------------------------------ //

function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "relative flex min-h-[310px] flex-col overflow-hidden rounded-[20px] border border-black/[0.07] bg-white shadow-[0_1px_3px_rgba(16,24,40,0.04)] dark:border-white/10 dark:bg-card transition-shadow hover:shadow-[0_8px_24px_rgba(16,24,40,0.06)]",
        className
      )}
    >
      {children}
    </article>
  );
}

function Title({ children }: { children: ReactNode }) {
  return (
    <h3 className="px-6 text-center text-[19px] leading-snug font-medium text-foreground">
      {children}
    </h3>
  );
}

// ------------------------------ | CARD 1 — ARCHITECTURE GRID | ------------------------------ //

function ArchitectureGrid() {
  const cols = 5;
  const rows = 3;
  const highlight = 1 * cols + 2; // centre cell

  return (
    <div className="relative flex-1 min-h-[170px] flex items-center justify-center px-4 py-2">
      <div className="w-full max-w-[320px] aspect-[5/3] grid grid-cols-5 grid-rows-3 [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_90%)]">
        {Array.from({ length: cols * rows }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "flex items-center justify-center border border-black/[0.08] dark:border-white/[0.1]",
              i === highlight && "bg-indigo-50/80 dark:bg-indigo-500/10"
            )}
          >
            {i === highlight ? (
              <div className="relative flex items-center justify-center">
                <div className="absolute -inset-2 rounded-xl bg-indigo-500/15 blur-sm" />
                <Layers className="relative size-7 text-indigo-600 dark:text-indigo-400" />
              </div>
            ) : (
              <span className="size-1 rounded-full bg-black/[0.08] dark:bg-white/[0.08]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ------------------------------ | CARD 2 — PIPELINE GATE | ------------------------------ //

function FeatureBuild({ className }: { className?: string }) {
  return (
    <div className={cn("relative flex flex-col justify-between p-6 h-full min-h-[260px]", className)}>
      <div className="flex items-center justify-between pb-4 border-b border-black/[0.06] dark:border-white/10">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-emerald-500" />
          <span className="text-xs font-mono font-medium text-muted-foreground">workflow-pipeline.yml</span>
        </div>
        <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400 font-medium">
          Deterministic
        </span>
      </div>

      <div className="my-auto py-4 space-y-3">
        <div className="flex items-center gap-3 p-2.5 rounded-xl border border-black/[0.06] bg-neutral-50/50 dark:border-white/10 dark:bg-neutral-900/50">
          <div className="size-7 rounded-lg bg-indigo-500/10 text-indigo-600 flex items-center justify-center font-mono text-xs font-bold">
            01
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-medium text-foreground">Contract &amp; Schema Validation</div>
            <div className="text-[11px] text-muted-foreground truncate">Strict TypeScript &amp; OpenAPI contracts bound</div>
          </div>
          <span className="text-emerald-500 text-xs font-bold">✓</span>
        </div>

        <div className="flex items-center gap-3 p-2.5 rounded-xl border border-indigo-500/20 bg-indigo-50/30 dark:border-indigo-500/30 dark:bg-indigo-950/20">
          <div className="size-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-mono text-xs font-bold">
            02
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-medium text-foreground">AI Guardrail &amp; Eval Gate</div>
            <div className="text-[11px] text-muted-foreground truncate">Deterministic schemas &amp; regression tests passed</div>
          </div>
          <span className="size-1.5 rounded-full bg-indigo-600 animate-pulse" />
        </div>

        <div className="flex items-center gap-3 p-2.5 rounded-xl border border-black/[0.06] bg-neutral-50/50 dark:border-white/10 dark:bg-neutral-900/50 opacity-60">
          <div className="size-7 rounded-lg bg-neutral-200 dark:bg-neutral-800 text-muted-foreground flex items-center justify-center font-mono text-xs font-bold">
            03
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-medium text-foreground">Zero-Downtime Deployment</div>
            <div className="text-[11px] text-muted-foreground truncate">Multi-region rollout with automated rollback</div>
          </div>
        </div>
      </div>

      <div className="pt-3 border-t border-black/[0.06] dark:border-white/10 flex items-center justify-between text-xs text-muted-foreground">
        <span>Continuous Delivery</span>
        <span className="font-mono text-[11px]">100% test coverage · Audit logged</span>
      </div>
    </div>
  );
}

// ------------------------------ | CARD 3 — AGENT ORBIT | ------------------------------ //

function FigmaOrbitRing({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 229 109"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <ellipse
        cx="114.5"
        cy="54.5"
        rx="113.5"
        ry="53.5"
        stroke="currentColor"
        strokeOpacity="0.15"
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />
    </svg>
  );
}

function AgentOrbit() {
  return (
    <div className="relative flex-1 min-h-[150px] flex items-center justify-center pt-2">
      <div className="relative h-[122px] w-[229px] max-w-full shrink-0">
        <FigmaOrbitRing className="absolute top-[13px] left-0 h-[109px] w-[229px]" />

        {/* Central AI Agent Node */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <div className="absolute -inset-3 rounded-full bg-indigo-500/15 blur-md" />
          <div className="relative flex size-13 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/25">
            <Bot className="size-6" />
          </div>
        </div>

        {/* Satellite Left: Postgres */}
        <div className="absolute top-[18px] left-[12px] flex items-center gap-1.5 rounded-full border border-black/[0.06] bg-white px-2 py-0.5 shadow-sm dark:border-white/10 dark:bg-neutral-900">
          <Database className="size-3 text-indigo-600" />
          <span className="text-[10px] font-medium text-muted-foreground">Postgres</span>
        </div>

        {/* Satellite Right: APIs */}
        <div className="absolute bottom-[18px] right-[12px] flex items-center gap-1.5 rounded-full border border-black/[0.06] bg-white px-2 py-0.5 shadow-sm dark:border-white/10 dark:bg-neutral-900">
          <Workflow className="size-3 text-violet-600" />
          <span className="text-[10px] font-medium text-muted-foreground">APIs</span>
        </div>

        <Sparkle className="absolute top-[22px] right-[40px] size-[12px] fill-indigo-500 text-indigo-500" />
        <Sparkle className="absolute bottom-[28px] left-[32px] size-[10px] fill-violet-500 text-violet-500" />
      </div>
    </div>
  );
}

// ------------------------------ | CARD 4 — CODE EDITOR | ------------------------------ //

function CodeEditor() {
  const lines: ReactNode[] = [
    <>
      <span className="text-violet-600 dark:text-violet-400">export async function </span>
      <span className="text-blue-600 dark:text-blue-400">handleLeadWorkflow</span>
      {"(lead: Lead) {"}
    </>,
    <>
      {"  "}
      <span className="text-violet-600 dark:text-violet-400">const</span>{" "}
      {"valid = "}
      <span className="text-violet-600 dark:text-violet-400">await</span>{" "}
      <span className="text-blue-600 dark:text-blue-400">validateCompliance</span>
      {"(lead);"}
    </>,
    <>
      {"  "}
      <span className="text-violet-600 dark:text-violet-400">const</span>{" "}
      {"triage = "}
      <span className="text-violet-600 dark:text-violet-400">await</span>{" "}
      <span className="text-blue-600 dark:text-blue-400">aiAgent</span>
      {"."}
      <span className="text-amber-500">evaluate</span>
      {"(valid);"}
    </>,
    <>
      {"  "}
      <span className="text-violet-600 dark:text-violet-400">return await</span>{" "}
      <span className="text-blue-600 dark:text-blue-400">crm</span>
      {"."}
      <span className="text-amber-500">dispatch</span>
      {"({ ...triage, status: "}
      <span className="text-emerald-600 dark:text-emerald-400">&quot;routed&quot;</span>
      {" });"}
    </>,
    <>{"}"}</>,
  ];

  return (
    <div className="relative flex-1 min-h-[170px] flex flex-col justify-end px-4">
      <div
        aria-hidden="true"
        className="absolute inset-x-6 bottom-2 h-32 rounded-3xl bg-blue-300/20 blur-2xl dark:bg-blue-500/10 pointer-events-none"
      />

      <div className="relative overflow-hidden rounded-t-xl border border-b-0 border-black/[0.08] bg-white shadow-[0_-8px_24px_rgba(16,24,40,0.06)] dark:border-white/10 dark:bg-neutral-900">
        <div className="flex items-center justify-between px-3.5 py-2.5 bg-neutral-50/70 dark:bg-neutral-900/80 border-b border-black/[0.06] dark:border-white/10">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-red-400" />
              <span className="size-2.5 rounded-full bg-amber-400" />
              <span className="size-2.5 rounded-full bg-green-400" />
            </div>
            <span className="text-[11px] font-mono text-muted-foreground">workflow-agent.ts</span>
          </div>
          <span className="text-[10px] font-medium text-muted-foreground">TS + Node</span>
        </div>
        <pre className="overflow-hidden px-4 py-3 font-mono text-[11.5px] leading-5 text-foreground">
          {lines.map((line, i) => (
            <div key={i} className="whitespace-pre">
              {line}
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
}

// ------------------------------ | CARD 5 — TECH BELT | ------------------------------ //

function TailwindSvg({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
    </svg>
  );
}

const TECH_BELT_PATH = "M-40 172C20 172 55 112 185.5 112C316 112 351 172 411 172";
const TECH_BELT_DURATION = 24;
const TECH_BELT_RIDERS = 7;

const techIcons = [
  { name: "typescript", node: <IconBrandTypescript className="size-8 text-white" />, bg: "bg-[#3178C6]" },
  { name: "python", node: <IconBrandPython className="size-8 text-white" />, bg: "bg-[#1E415E]" },
  { name: "nextjs", node: <IconBrandNextjs className="size-8 text-white" />, bg: "bg-neutral-950" },
  { name: "react", node: <IconBrandReact className="size-8 text-white" />, bg: "bg-[#087ea4]" },
  { name: "openai", node: <IconBrandOpenai className="size-8 text-white" />, bg: "bg-[#10A37F]" },
  { name: "database", node: <IconDatabase className="size-8 text-white" />, bg: "bg-[#336791]" },
  { name: "tailwind", node: <TailwindSvg className="size-8 text-white" />, bg: "bg-[#38BDF8]" },
];

function TechBelt() {
  const step = TECH_BELT_DURATION / TECH_BELT_RIDERS;

  return (
    <div className="relative flex-1 min-h-[190px] overflow-hidden">
      <svg
        viewBox="0 0 371 258"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full motion-reduce:hidden"
      >
        {Array.from({ length: TECH_BELT_RIDERS }).map((_, i) => {
          const icon = techIcons[i % techIcons.length];
          return (
            <g key={`${icon.name}-${i}`}>
              <animateMotion
                dur={`${TECH_BELT_DURATION}s`}
                begin={`${-i * step}s`}
                repeatCount="indefinite"
                calcMode="linear"
                rotate="auto"
                path={TECH_BELT_PATH}
              />
              <foreignObject x="-30" y="-30" width="60" height="60" className="overflow-visible">
                <div className={cn("flex size-[60px] items-center justify-center rounded-[18px] shadow-[0_16px_32px_rgba(16,24,40,0.22)]", icon.bg)}>
                  {icon.node}
                </div>
              </foreignObject>
            </g>
          );
        })}
      </svg>

      <div aria-hidden="true" className="absolute inset-0 hidden items-center justify-center gap-3 motion-reduce:flex">
        {techIcons.map((icon) => (
          <div key={icon.name} className={cn("flex size-[50px] items-center justify-center rounded-[16px] shadow-md", icon.bg)}>
            {icon.node}
          </div>
        ))}
      </div>
    </div>
  );
}

// ------------------------------ | CARD 6 — REAL-TIME MOTION | ------------------------------ //

function FeatureMotion({ className }: { className?: string }) {
  return (
    <div className={cn("relative flex flex-col justify-between p-6 h-full min-h-[260px]", className)}>
      <div className="flex items-center justify-between pb-3 border-b border-black/[0.06] dark:border-white/10">
        <span className="text-xs font-mono text-muted-foreground">Latency SLA: &lt; 120ms</span>
        <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-violet-50 text-violet-600 dark:bg-violet-950 dark:text-violet-400 font-medium">
          Streaming 60fps
        </span>
      </div>

      <div className="relative my-auto py-6 flex items-center justify-center">
        <svg viewBox="0 0 280 100" fill="none" className="w-full h-24 overflow-visible" aria-hidden="true">
          <path d="M 10 90 C 80 90, 90 10, 270 10" stroke="currentColor" strokeOpacity="0.12" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M 10 90 C 80 90, 90 10, 270 10" stroke="url(#motion-gradient)" strokeWidth="3" strokeLinecap="round" />
          <circle cx="10" cy="90" r="5" fill="#533afd" />
          <circle cx="270" cy="10" r="6" fill="#00d4ff" />
          <defs>
            <linearGradient id="motion-gradient" x1="10" y1="90" x2="270" y2="10" gradientUnits="userSpaceOnUse">
              <stop stopColor="#533afd" />
              <stop offset="0.5" stopColor="#7952ff" />
              <stop offset="1" stopColor="#00d4ff" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="pt-3 border-t border-black/[0.06] dark:border-white/10 flex items-center justify-between gap-3 text-xs text-muted-foreground">
        <span className="truncate">Real-Time Streaming</span>
        <span className="font-mono text-[11px] shrink-0">Sub-120ms latency</span>
      </div>
    </div>
  );
}

// ------------------------------ | COMPLETE SECTION EXPORT | ------------------------------ //

export default function EngineeringBentoSection() {
  return (
    <section
      className="section-pad bg-background"
      style={{
        paddingBlock: "88px",
        borderTop: "1px solid var(--color-hairline, #e3e8ee)",
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: "var(--content-max, 1360px)",
          marginInline: "auto",
          paddingInline: "var(--gutter, clamp(20px, 4vw, 56px))",
        }}
      >
        {/* Section Header */}
        <div style={{ maxWidth: "680px", marginBottom: "48px" }}>
          <h2
            style={{
              fontFamily: "var(--font-display, 'Inter', sans-serif)",
              fontSize: "clamp(26px, 3vw, 36px)",
              fontWeight: 300,
              lineHeight: 1.15,
              letterSpacing: "-0.64px",
              color: "var(--color-ink, #0a2540)",
              marginBottom: "14px",
            }}
          >
            Engineering excellence across your entire stack.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body, 'Inter', sans-serif)",
              fontSize: "clamp(16px, 1.4vw, 18px)",
              fontWeight: 300,
              lineHeight: 1.6,
              color: "var(--color-body, #425466)",
            }}
          >
            Every digital product and AI workflow we deliver is built with rigorous enterprise standards — clean architectures, automated guardrails, and complete code ownership.
          </p>
        </div>

        {/* 3x2 Bento Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <Card className="min-h-[310px] pt-7">
            <Title>Enterprise architecture from day one</Title>
            <ArchitectureGrid />
          </Card>

          {/* Card 2 */}
          <Card className="min-h-[310px]">
            <h3 className="sr-only">Automated Delivery &amp; AI Guardrails</h3>
            <FeatureBuild className="h-full w-full" />
          </Card>

          {/* Card 3 */}
          <Card className="min-h-[310px] pt-4 pb-6">
            <AgentOrbit />
            <Title>Connect AI agents to your business tools</Title>
            <p className="px-6 pt-1 text-center text-xs text-muted-foreground">
              Autonomous workflows via secure MCP, webhooks &amp; REST.
            </p>
          </Card>

          {/* Card 4 */}
          <Card className="min-h-[310px] pt-7">
            <Title>Full control over your code. Zero lock-in.</Title>
            <CodeEditor />
          </Card>

          {/* Card 5 */}
          <Card className="min-h-[310px]">
            <h3 className="sr-only">
              Built with TypeScript, Python, Next.js, React, OpenAI, PostgreSQL, and Tailwind CSS
            </h3>
            <TechBelt />
          </Card>

          {/* Card 6 */}
          <Card className="min-h-[310px]">
            <h3 className="sr-only">Real-time streaming and sub-120ms performance</h3>
            <FeatureMotion className="h-full w-full" />
          </Card>
        </div>
      </div>
    </section>
  );
}
```

---

## 4. How to Use on Your Home Page

Simply import and place the component in your page:

```tsx
import EngineeringBentoSection from "./EngineeringBentoSection";

export function HomePage() {
  return (
    <main>
      {/* ...other sections... */}
      <EngineeringBentoSection />
      {/* ...other sections... */}
    </main>
  );
}
```

