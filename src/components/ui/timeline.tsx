// Built using Hyperiux Vault & polished for ENTWY Stripe-grade design system
"use client";

import React, {
  type CSSProperties,
  useLayoutEffect,
  useRef,
  useSyncExternalStore,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function useGSAP(
  callback: () => void | (() => void),
  options?: {
    dependencies?: unknown[];
    scope?: { current: Element | null } | Element | null;
  }
) {
  const deps = options?.dependencies ?? [];
  const scope = options?.scope;
  const ctxRef = useRef<gsap.Context | null>(null);
  const cleanupRef = useRef<(() => void) | undefined>(undefined);

  useLayoutEffect(() => {
    const el =
      scope && typeof scope === "object" && "current" in scope
        ? scope.current
        : (scope as Element | null);
    ctxRef.current = gsap.context(() => {}, el ?? undefined);
    return () => {
      cleanupRef.current?.();
      cleanupRef.current = undefined;
      ctxRef.current?.revert();
      ctxRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLayoutEffect(() => {
    if (!ctxRef.current) return;
    cleanupRef.current?.();
    const ret = ctxRef.current.add(callback);
    cleanupRef.current = typeof ret === "function" ? ret : undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export type TimelineMilestone = {
  id: string;
  step: string;
  title: string;
  timeframe?: string;
  content: string;
  deliverables?: string[];
  imageUrl?: string;
  imageAlt?: string;
};

export type TimelineProps = {
  title?: string;
  subtitle?: string;
  periodLabel?: string;
  textColor?: string;
  mutedTextColor?: string;
  activeColor?: string;
  backgroundColor?: string;
  imageUrl?: string;
  imageAlt?: string;
  duration?: number;
  items?: TimelineMilestone[];
};

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const COMPACT_VIEWPORT_QUERY = "(max-width: 1023px)";

function subscribeToReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mediaQueryList = window.matchMedia(REDUCED_MOTION_QUERY);
  mediaQueryList.addEventListener("change", callback);
  return () => mediaQueryList.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.(REDUCED_MOTION_QUERY)?.matches ?? false;
}

function getServerReducedMotionSnapshot() {
  return false;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getServerReducedMotionSnapshot,
  );
}

function subscribeToCompactViewport(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mediaQueryList = window.matchMedia(COMPACT_VIEWPORT_QUERY);
  mediaQueryList.addEventListener("change", callback);
  return () => mediaQueryList.removeEventListener("change", callback);
}

function getCompactViewportSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.(COMPACT_VIEWPORT_QUERY)?.matches ?? false;
}

function useCompactViewport() {
  return useSyncExternalStore(
    subscribeToCompactViewport,
    getCompactViewportSnapshot,
    getServerReducedMotionSnapshot,
  );
}

const defaultMilestones: TimelineMilestone[] = [
  {
    id: "stage-01",
    step: "01",
    title: "Architecture & Discovery",
    timeframe: "Week 1–2",
    content: "We map workflows, system boundaries, threat models, and interface contracts with principal engineering direct access.",
    deliverables: ["Guiding architecture spec", "Security & governance baseline"],
    imageUrl: "/images/timeline/stage-01-architecture.webp",
    imageAlt: "Technical architecture, system components, databases, cloud infrastructure, and connected services",
  },
  {
    id: "stage-02",
    step: "02",
    title: "Interactive Prototyping",
    timeframe: "Week 2–3",
    content: "Working prototypes and design systems validated directly with stakeholders in days rather than static slide decks.",
    deliverables: ["Validated UI design system", "Interactive user flows"],
    imageUrl: "/images/timeline/stage-02-prototyping.webp",
    imageAlt: "Product designer validating wireframes and interactive prototypes on laptop",
  },
  {
    id: "stage-03",
    step: "03",
    title: "Parallel Full-Stack Build",
    timeframe: "Week 3–5",
    content: "Concurrent engineering of cloud microservices, autonomous agent workflows, and responsive web frontends.",
    deliverables: ["Typed API schemas", "Continuous CI/CD harness"],
    imageUrl: "/images/timeline/stage-03-full-stack-build.webp",
    imageAlt: "Developer workspace showing code editors, application interfaces, and development tools",
  },
  {
    id: "stage-04",
    step: "04",
    title: "Integration & Connectors",
    timeframe: "Week 5–6",
    content: "Bidirectional sync across enterprise ERPs, databases, legacy backends, and cryptographic access boundaries.",
    deliverables: ["Real-time data synchronization", "Zero unaccounted dependencies"],
    imageUrl: "/images/timeline/stage-04-integrations.webp",
    imageAlt: "Integration diagram connecting APIs, databases, and enterprise systems to a central platform",
  },
  {
    id: "stage-05",
    step: "05",
    title: "Security & Hardening",
    timeframe: "Week 6–7",
    content: "End-to-end regression tests, automated load verification, and zero-trust permission audits under full enterprise SLA.",
    deliverables: ["Penetration & load audit", "Deterministic recovery gates"],
    imageUrl: "/images/timeline/stage-05-security.webp",
    imageAlt: "Minimal security dashboard with shield, access controls, server infrastructure, and testing indicators",
  },
  {
    id: "stage-06",
    step: "06",
    title: "Pilot & Operator Review",
    timeframe: "Week 7–8",
    content: "Controlled staging rollouts, telemetry observation, and continuous human-in-the-loop validation.",
    deliverables: ["Live staging pilot", "Telemetry & observability dashboards"],
    imageUrl: "/images/timeline/stage-06-pilot-review.webp",
    imageAlt: "Refined staging dashboard showing system health, monitoring graphs, and human review workflows",
  },
  {
    id: "stage-07",
    step: "07",
    title: "Production Cutover & IP Handover",
    timeframe: "Launch & Scale",
    content: "Zero-downtime cutover, automated self-healing workflows, and 100% intellectual property transfer to your team.",
    deliverables: ["Zero-downtime production cutover", "Full repository & IP transfer"],
    imageUrl: "/images/timeline/stage-07-production-handover.webp",
    imageAlt: "Production deployment infrastructure, successful validation indicators, and client handover",
  },
];

export default function Timeline({
  title = "How we build your product",
  subtitle = "From initial architecture review to zero-downtime production cutover.",
  periodLabel = "Sprint 01 → Production Launch",
  textColor = "var(--color-ink, #171717)",
  mutedTextColor = "var(--color-body, #60646c)",
  activeColor = "var(--color-expo-purple, #4630EB)",
  backgroundColor = "var(--color-canvas-soft, #fafafa)",
  imageUrl = "/images/timeline/sprint-01-kickoff.webp",
  imageAlt = "Collaborative sprint planning, sticky notes, team discussion, and project kickoff",
  items = defaultMilestones,
}: TimelineProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const compactViewport = useCompactViewport();

  const sectionStyle: CSSProperties = {
    color: textColor,
    backgroundColor,
  };

  useGSAP(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const computeDistance = () => {
      const scrollW = track.scrollWidth;
      const clientW = window.innerWidth;
      return Math.max(0, scrollW - clientW + 120);
    };

    let distance = computeDistance();

    if (reducedMotion) {
      gsap.set(track, { x: 0 });
      gsap.set(".timeline-active-line", { width: "100%" });
      gsap.set(".timeline-card-node", { opacity: 1 });
      return;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${distance + 400}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    // 1. Horizontal track glide
    tl.to(track, {
      x: () => -computeDistance(),
      ease: "none",
      duration: 1,
    });

    // 2. Active fill line along the center axis
    tl.to(
      ".timeline-active-line",
      {
        width: "98%",
        ease: "none",
        duration: 0.95,
      },
      0
    );

    // 3. Staggered reveal for each milestone card & connection stem
    items.forEach((item, index) => {
      const progressPoint = (index / items.length) * 0.9;
      tl.fromTo(
        `.card-${item.id}`,
        { opacity: 0.35, y: index % 2 === 0 ? -12 : 12 },
        {
          opacity: 1,
          y: 0,
          duration: 0.2,
          ease: "power2.out",
        },
        progressPoint
      );

      tl.fromTo(
        `.dot-${item.id}`,
        { scale: 0.6, borderColor: "#cbd5e1" },
        {
          scale: 1.25,
          borderColor: activeColor,
          duration: 0.15,
          ease: "back.out(2)",
        },
        progressPoint
      );
    });

    const handleResize = () => {
      distance = computeDistance();
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, { dependencies: [reducedMotion, compactViewport, items.length, activeColor], scope: sectionRef });

  if (compactViewport) {
    return (
      <section
        id="journey"
        className="w-full border-y border-[#e3e8ee] px-5 py-16 sm:px-8 sm:py-20"
        style={sectionStyle}
        aria-labelledby="journey-title"
      >
        <div className="mx-auto max-w-3xl">
          <div className="overflow-hidden rounded-2xl border border-[#e3e8ee] bg-white shadow-[0_12px_32px_rgba(10,37,64,0.08)]">
            <div className="aspect-[16/10] w-full bg-[radial-gradient(circle_at_70%_30%,rgba(83,58,253,0.3),transparent_32%),linear-gradient(135deg,#eef2ff,#dbeafe)] overflow-hidden">
              <img
                src={imageUrl}
                alt={imageAlt}
                width="1200"
                height="750"
                loading="lazy"
                onError={(event) => { event.currentTarget.style.opacity = "0"; }}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-5 sm:p-6">
              <div className="mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-[var(--color-expo-purple,#4630EB)]">
                {periodLabel}
              </div>
              <h2 id="journey-title" className="mb-2 font-display text-2xl font-light tracking-tight text-[var(--color-ink,#171717)] sm:text-3xl">
                {title}
              </h2>
              <p className="text-sm font-light leading-relaxed text-[var(--color-body,#60646c)] sm:text-base">
                {subtitle}
              </p>
            </div>
          </div>

          <ol className="relative mt-8 space-y-6 before:absolute before:bottom-5 before:left-[11px] before:top-5 before:w-px before:bg-[var(--color-hairline-strong,#dcdee0)] sm:mt-10 sm:space-y-8">
            {items.map((item) => (
              <li key={item.id} className="relative pl-9 sm:pl-11">
                <span
                  className="absolute left-1 top-6 z-10 h-4 w-4 rounded-full border-[3px] border-[var(--color-expo-purple,#4630EB)] bg-white shadow-[0_0_0_4px_rgba(70,48,235,0.12)]"
                  aria-hidden="true"
                />
                <article className="rounded-2xl border border-[var(--color-hairline,#f0f0f3)] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)] sm:p-6 overflow-hidden">
                  {item.imageUrl && (
                    <div className="mb-4 w-full aspect-[16/10] overflow-hidden rounded-xl border border-[var(--color-hairline,#f0f0f3)] bg-[var(--color-canvas-soft,#fafafa)]">
                      <img
                        src={item.imageUrl}
                        alt={item.imageAlt || item.title}
                        width="800"
                        height="500"
                        loading="lazy"
                        onError={(event) => { event.currentTarget.style.opacity = "0"; }}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-full bg-[var(--color-expo-purple,#4630EB)]/10 px-2.5 py-0.5 font-mono text-xs font-bold text-[var(--color-expo-purple,#4630EB)]">
                      Stage {item.step}
                    </span>
                    {item.timeframe && (
                      <span className="text-xs font-medium text-[#64748d]">
                        {item.timeframe}
                      </span>
                    )}
                  </div>
                  <h3 className="mb-2 font-display text-lg font-semibold text-[#0a2540]">
                    {item.title}
                  </h3>
                  <p className="text-sm font-light leading-relaxed text-[#425466]">
                    {item.content}
                  </p>
                  {item.deliverables && (
                    <div className="mt-4 space-y-2 border-t border-[#f0f3f7] pt-4">
                      {item.deliverables.map((deliverable) => (
                        <div key={deliverable} className="flex items-start gap-2 text-xs leading-relaxed text-[#425466]">
                          <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-[#108548]" aria-hidden="true" />
                          <span>{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </article>
              </li>
            ))}
          </ol>

          <div className="cta-wave-banner mt-8 p-6 text-center text-white sm:mt-10 sm:p-8">
            <h3 className="mb-2 font-display text-xl font-light">Ready to begin Sprint 01?</h3>
            <p className="mb-5 text-sm font-light leading-relaxed text-[#cad5e2]">
              Schedule a 30-minute discovery call to review architecture and requirements.
            </p>
            <Link to="/start-a-project" className="btn-secondary-on-dark inline-flex min-h-11 items-center justify-center gap-2 px-6 text-sm">
              <span>Start a Project</span>
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="relative w-full overflow-hidden"
      style={{
        ...sectionStyle,
        borderTop: "1px solid var(--color-hairline, #e3e8ee)",
        borderBottom: "1px solid var(--color-hairline, #e3e8ee)",
      }}
    >
      <div className="min-h-screen w-full flex flex-col justify-center overflow-hidden py-10">
        {/* Horizontal Moving Track */}
        <div
          ref={trackRef}
          className="flex items-center px-8 md:px-16 will-change-transform"
          style={{ width: "max-content", minHeight: "840px" }}
        >
          {/* Left Intro Block */}
          <div className="shrink-0 w-[320px] md:w-[380px] mr-12 md:mr-16 flex flex-col justify-center">
            <div className="relative rounded-2xl overflow-hidden border border-[#e3e8ee] shadow-[0_12px_32px_rgba(10,37,64,0.08)] bg-white mb-6">
              <div className="h-44 w-full overflow-hidden bg-[radial-gradient(circle_at_70%_30%,rgba(83,58,253,0.3),transparent_32%),linear-gradient(135deg,#eef2ff,#dbeafe)]">
                <img
                  src={imageUrl}
                  alt={imageAlt}
                  width="1200"
                  height="750"
                  loading="lazy"
                  onError={(event) => { event.currentTarget.style.opacity = "0"; }}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <div className="text-xs font-semibold text-[#533afd] uppercase tracking-wider mb-2 font-mono">
                  {periodLabel}
                </div>
                <h2 className="text-2xl font-light tracking-tight text-[#0a2540] font-display mb-2">
                  {title}
                </h2>
                <p className="text-sm text-[#425466] leading-relaxed font-light mb-4">
                  {subtitle}
                </p>
                <div className="flex items-center gap-2 text-xs font-medium text-[#533afd]">
                  <span>Scroll to explore milestones</span>
                  <ArrowRight size={13} />
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Center Axis & Cards */}
          <div className="relative flex items-center" style={{ minHeight: "800px" }}>
            {/* Base Horizontal Track Line */}
            <div
              className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-[#e3e8ee]"
              style={{ zIndex: 0 }}
            />

            {/* Active Highlight Line */}
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] timeline-active-line"
              style={{
                backgroundColor: activeColor,
                width: "0%",
                zIndex: 1,
                boxShadow: `0 0 10px ${activeColor}60`,
              }}
            />

            {/* Symmetrically Aligned Milestone Columns */}
            <div className="flex items-center gap-10 md:gap-14 relative z-10">
              {items.map((item, index) => {
                const isTop = index % 2 === 0;

                return (
                  <div
                    key={item.id}
                    className="relative flex flex-col items-center shrink-0 w-[320px] md:w-[350px]"
                    style={{ height: "780px" }}
                  >
                    {/* TOP POSITION CARD */}
                    {isTop ? (
                      <div className="w-full flex flex-col items-center">
                        <div
                          className={`card-${item.id} timeline-card-node w-full bg-white border border-[#e3e8ee] rounded-2xl p-4 md:p-5 shadow-[0_4px_20px_rgba(10,37,64,0.06)] hover:shadow-[0_12px_32px_rgba(83,58,253,0.12)] transition-all flex flex-col`}
                          style={{ minHeight: "340px" }}
                        >
                          {/* Editorial Stage Illustration */}
                          {item.imageUrl && (
                            <div className="relative mb-3.5 w-full aspect-[16/10] overflow-hidden rounded-xl border border-[#e3e8ee]/80 bg-[#f8fafc]">
                              <img
                                src={item.imageUrl}
                                alt={item.imageAlt || item.title}
                                width="640"
                                height="400"
                                loading="lazy"
                                onError={(event) => { event.currentTarget.style.opacity = "0"; }}
                                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                              />
                            </div>
                          )}

                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold text-[#533afd] bg-[#533afd]/10 px-2.5 py-0.5 rounded-full font-mono">
                              Stage {item.step}
                            </span>
                            {item.timeframe && (
                              <span className="text-xs text-[#8898aa] font-medium">
                                {item.timeframe}
                              </span>
                            )}
                          </div>
                          <h3 className="text-base font-semibold text-[#0a2540] mb-1.5 font-display">
                            {item.title}
                          </h3>
                          <p className="text-xs text-[#425466] leading-relaxed font-light mb-3">
                            {item.content}
                          </p>
                          {item.deliverables && (
                            <div className="border-t border-[#f0f3f7] pt-2 mt-auto flex flex-col gap-1">
                              {item.deliverables.map((d, di) => (
                                <div key={di} className="flex items-center gap-1.5 text-[11px] text-[#425466]">
                                  <CheckCircle2 size={11} className="text-[#108548] shrink-0" />
                                  <span className="truncate">{d}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Top Stem connecting card bottom to center line dot */}
                        <div
                          className="w-px h-8 bg-[#533afd]/60 my-0"
                          style={{ height: "36px" }}
                        />
                      </div>
                    ) : (
                      /* Empty top space for bottom cards */
                      <div style={{ height: "376px" }} />
                    )}

                    {/* CENTER AXIS NODE DOT */}
                    <div
                      className={`dot-${item.id} relative z-20 flex items-center justify-center rounded-full bg-white transition-all`}
                      style={{
                        width: "18px",
                        height: "18px",
                        border: `3px solid ${activeColor}`,
                        boxShadow: `0 0 0 4px rgba(83, 58, 253, 0.15)`,
                      }}
                    >
                      <div
                        className="rounded-full"
                        style={{
                          width: "6px",
                          height: "6px",
                          backgroundColor: activeColor,
                        }}
                      />
                    </div>

                    {/* BOTTOM POSITION CARD */}
                    {!isTop ? (
                      <div className="w-full flex flex-col items-center">
                        {/* Bottom Stem connecting center line dot to card top */}
                        <div
                          className="w-px h-8 bg-[#533afd]/60 my-0"
                          style={{ height: "36px" }}
                        />

                        <div
                          className={`card-${item.id} timeline-card-node w-full bg-white border border-[#e3e8ee] rounded-2xl p-4 md:p-5 shadow-[0_4px_20px_rgba(10,37,64,0.06)] hover:shadow-[0_12px_32px_rgba(83,58,253,0.12)] transition-all flex flex-col`}
                          style={{ minHeight: "340px" }}
                        >
                          {/* Editorial Stage Illustration */}
                          {item.imageUrl && (
                            <div className="relative mb-3.5 w-full aspect-[16/10] overflow-hidden rounded-xl border border-[#e3e8ee]/80 bg-[#f8fafc]">
                              <img
                                src={item.imageUrl}
                                alt={item.imageAlt || item.title}
                                width="640"
                                height="400"
                                loading="lazy"
                                onError={(event) => { event.currentTarget.style.opacity = "0"; }}
                                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                              />
                            </div>
                          )}

                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold text-[#533afd] bg-[#533afd]/10 px-2.5 py-0.5 rounded-full font-mono">
                              Stage {item.step}
                            </span>
                            {item.timeframe && (
                              <span className="text-xs text-[#8898aa] font-medium">
                                {item.timeframe}
                              </span>
                            )}
                          </div>
                          <h3 className="text-base font-semibold text-[#0a2540] mb-1.5 font-display">
                            {item.title}
                          </h3>
                          <p className="text-xs text-[#425466] leading-relaxed font-light mb-3">
                            {item.content}
                          </p>
                          {item.deliverables && (
                            <div className="border-t border-[#f0f3f7] pt-2 mt-auto flex flex-col gap-1">
                              {item.deliverables.map((d, di) => (
                                <div key={di} className="flex items-center gap-1.5 text-[11px] text-[#425466]">
                                  <CheckCircle2 size={11} className="text-[#108548] shrink-0" />
                                  <span className="truncate">{d}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      /* Empty bottom space for top cards */
                      <div style={{ height: "376px" }} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* End CTA Card at the end of the timeline track */}
          <div className="shrink-0 w-[280px] ml-12 md:mr-8 flex flex-col justify-center">
            <div className="cta-wave-banner rounded-2xl p-6 text-white text-center">
              <h3 className="text-lg font-light mb-2 font-display">
                Ready to begin Sprint 01?
              </h3>
              <p className="text-xs text-[#cad5e2] leading-relaxed mb-4 font-light">
                Schedule a 30-minute discovery call to review architecture and requirements.
              </p>
              <Link
                to="/start-a-project"
                className="btn-secondary-on-dark w-full text-center inline-flex justify-center items-center gap-2 text-xs py-2.5"
              >
                <span>Start a Project</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
