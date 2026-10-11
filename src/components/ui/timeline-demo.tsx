"use client";

import React from "react";
import Timeline from "@/components/ui/timeline";

const settings = {
  textColor: "var(--color-foreground, #0a2540)",
  mutedTextColor: "var(--color-muted-foreground, #425466)",
  activeColor: "#533afd",
  backgroundColor: "var(--color-background, #ffffff)",
  duration: 1.4,
};

export default function TimelineDemo(props: Partial<typeof settings>) {
  const s = { ...settings, ...props };
  return (
    <main className="bg-background text-foreground">
      {/* Lead-in so the pinned timeline has somewhere to scroll in from. */}
      <section className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 text-center">
        <h1 className="max-w-[20ch] text-3xl font-light leading-tight tracking-tight sm:text-5xl font-display text-ink">
          Six years of engineering, one continuous timeline.
        </h1>
        <p className="max-w-md text-base leading-relaxed text-body font-light">
          Scroll to explore how architecture, systems, and product delivery evolve from initial research to multi-market launch.
        </p>
        <span className="mt-2 animate-bounce text-muted-foreground">&darr;</span>
      </section>

      {/* Realistic usage: custom copy, a branded accent, tuned reveal speed. */}
      <Timeline
        title="Product Storyline"
        periodLabel="2020 — 2026"
        backgroundColor={s.backgroundColor}
        textColor={s.textColor}
        mutedTextColor={s.mutedTextColor}
        activeColor={s.activeColor}
        imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Team at work in a bright studio"
        duration={s.duration}
      />

      <section className="flex min-h-[40vh] items-center justify-center px-6 text-center text-sm text-muted-foreground">
        From the first research note to enterprise production launch.
      </section>
    </main>
  );
}
