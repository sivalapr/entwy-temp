import React from "react";

export default function FeatureBuild({ className }: { className?: string }) {
  return (
    <div className={`relative flex flex-col justify-between p-6 h-full min-h-[260px] ${className || ""}`}>
      <div className="flex items-center justify-between pb-4 border-b border-black/[0.06] dark:border-white/10">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-[#16a34a]" />
          <span className="text-xs font-mono font-medium text-muted-foreground">workflow-pipeline.yml</span>
        </div>
        <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-[#f0f0f3] text-[#171717] dark:bg-neutral-800 dark:text-neutral-300 font-medium">
          Deterministic
        </span>
      </div>

      <div className="my-auto py-4 space-y-3">
        <div className="flex items-center gap-3 p-2.5 rounded-xl border border-black/[0.06] bg-neutral-50/50 dark:border-white/10 dark:bg-neutral-900/50">
          <div className="size-7 rounded-lg bg-neutral-100 text-[#171717] flex items-center justify-center font-mono text-xs font-bold">
            01
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-medium text-foreground">Contract &amp; Schema Validation</div>
            <div className="text-[11px] text-muted-foreground truncate">Strict TypeScript &amp; OpenAPI contracts bound</div>
          </div>
          <span className="text-[#16a34a] text-xs font-bold">✓</span>
        </div>

        <div className="flex items-center gap-3 p-2.5 rounded-xl border border-black/15 bg-neutral-50 dark:border-white/20 dark:bg-neutral-900">
          <div className="size-7 rounded-lg bg-black text-white flex items-center justify-center font-mono text-xs font-bold">
            02
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-medium text-foreground">AI Guardrail &amp; Eval Gate</div>
            <div className="text-[11px] text-muted-foreground truncate">Deterministic schemas &amp; regression tests passed</div>
          </div>
          <span className="size-1.5 rounded-full bg-black animate-pulse" />
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
