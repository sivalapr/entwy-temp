import type { ReactNode } from "react";

// third-party
import { cn } from "cn";

// project-imports
import FeatureBuild from "@/components/ui/block-feature-utils/feature-build";
import FeatureMotion from "@/components/ui/block-feature-utils/feature-motion";
import FigmaOrbitRing from "@/components/ui/block-feature-utils/figma-orbit-ring";
import Tailwind from "@/components/ui/block-feature-utils/tailwind";

// assets
import {
  IconBrandNextjs,
  IconBrandPython,
  IconBrandReact,
  IconBrandTypescript,
  IconBrandOpenai,
  IconDatabase,
} from "@tabler/icons-react";
import { Sparkle, Layers, Bot, Database, Workflow } from "lucide-react";

// ------------------------------ | PRIMITIVES | ------------------------------ //

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
        className,
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
              i === highlight && "bg-indigo-50/80 dark:bg-indigo-500/10",
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

// ------------------------------ | CARD 3 — AGENT & TOOLS ORBIT | ------------------------------ //

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

        {/* Satellite Left: CRM / Database */}
        <div className="absolute top-[18px] left-[12px] flex items-center gap-1.5 rounded-full border border-black/[0.06] bg-white px-2 py-0.5 shadow-sm dark:border-white/10 dark:bg-neutral-900">
          <Database className="size-3 text-indigo-600" />
          <span className="text-[10px] font-medium text-muted-foreground">Postgres</span>
        </div>

        {/* Satellite Right: Webhooks / Tools */}
        <div className="absolute bottom-[18px] right-[12px] flex items-center gap-1.5 rounded-full border border-black/[0.06] bg-white px-2 py-0.5 shadow-sm dark:border-white/10 dark:bg-neutral-900">
          <Workflow className="size-3 text-violet-600" />
          <span className="text-[10px] font-medium text-muted-foreground">APIs</span>
        </div>

        {/* Sparkles */}
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
      <span className="text-violet-600 dark:text-violet-400">
        export async function{" "}
      </span>
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
    <>
      {"}"}
    </>,
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
            <span className="text-[11px] font-mono text-muted-foreground">
              workflow-agent.ts
            </span>
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

const TECH_BELT_PATH =
  "M-40 172C20 172 55 112 185.5 112C316 112 351 172 411 172";
const TECH_BELT_DURATION = 24;
const TECH_BELT_RIDERS = 7;

const techIcons = [
  {
    name: "typescript",
    node: <IconBrandTypescript className="size-8 text-white" />,
    bg: "bg-[#3178C6]",
  },
  {
    name: "python",
    node: <IconBrandPython className="size-8 text-white" />,
    bg: "bg-[#1E415E]",
  },
  {
    name: "nextjs",
    node: <IconBrandNextjs className="size-8 text-white" />,
    bg: "bg-neutral-950",
  },
  {
    name: "react",
    node: <IconBrandReact className="size-8 text-white" />,
    bg: "bg-[#087ea4]",
  },
  {
    name: "openai",
    node: <IconBrandOpenai className="size-8 text-white" />,
    bg: "bg-[#10A37F]",
  },
  {
    name: "database",
    node: <IconDatabase className="size-8 text-white" />,
    bg: "bg-[#336791]",
  },
  {
    name: "tailwind",
    node: <Tailwind className="size-8 text-white" />,
    bg: "bg-[#38BDF8]",
  },
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
              <foreignObject
                x="-30"
                y="-30"
                width="60"
                height="60"
                className="overflow-visible"
              >
                <div
                  className={cn(
                    "flex size-[60px] items-center justify-center rounded-[18px] shadow-[0_16px_32px_rgba(16,24,40,0.22)]",
                    icon.bg,
                  )}
                >
                  {icon.node}
                </div>
              </foreignObject>
            </g>
          );
        })}
      </svg>

      <div
        aria-hidden="true"
        className="absolute inset-0 hidden items-center justify-center gap-3 motion-reduce:flex"
      >
        {techIcons.map((icon) => (
          <div
            key={icon.name}
            className={cn(
              "flex size-[50px] items-center justify-center rounded-[16px] shadow-md",
              icon.bg,
            )}
          >
            {icon.node}
          </div>
        ))}
      </div>
    </div>
  );
}

// ------------------------------ | FEATURE | ------------------------------ //

export default function Feature() {
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
        {/* Editorial Section Anchor — matches ServicesShowcase and Hero layout */}
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

        {/* Bento Grid — Unified 3-column layout matching site gutter & width */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="min-h-[310px] pt-7">
            <Title>Enterprise architecture from day one</Title>
            <ArchitectureGrid />
          </Card>

          <Card className="min-h-[310px]">
            <h3 className="sr-only">Automated Delivery &amp; AI Guardrails</h3>
            <FeatureBuild className="h-full w-full" />
          </Card>

          <Card className="min-h-[310px] pt-4 pb-6">
            <AgentOrbit />
            <Title>Connect AI agents to your business tools</Title>
            <p className="px-6 pt-1 text-center text-xs text-muted-foreground">
              Autonomous workflows via secure MCP, webhooks &amp; REST.
            </p>
          </Card>

          <Card className="min-h-[310px] pt-7">
            <Title>Full control over your code. Zero lock-in.</Title>
            <CodeEditor />
          </Card>

          <Card className="min-h-[310px]">
            <h3 className="sr-only">
              Built with TypeScript, Python, Next.js, React, OpenAI, PostgreSQL, and Tailwind CSS
            </h3>
            <TechBelt />
          </Card>

          <Card className="min-h-[310px]">
            <h3 className="sr-only">Real-time streaming and sub-120ms performance</h3>
            <FeatureMotion className="h-full w-full" />
          </Card>
        </div>
      </div>
    </section>
  );
}
