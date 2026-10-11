import React from "react";

export default function FeatureMotion({ className }: { className?: string }) {
  return (
    <div className={`relative flex flex-col justify-between p-6 h-full min-h-[260px] ${className || ""}`}>
      <div className="flex items-center justify-between pb-3 border-b border-black/[0.06] dark:border-white/10">
        <span className="text-xs font-mono text-muted-foreground">Latency SLA: &lt; 120ms</span>
        <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-violet-50 text-violet-600 dark:bg-violet-950 dark:text-violet-400 font-medium">
          Streaming 60fps
        </span>
      </div>

      <div className="relative my-auto py-6 flex items-center justify-center">
        {/* Motion curve SVG */}
        <svg viewBox="0 0 280 100" fill="none" className="w-full h-24 overflow-visible" aria-hidden="true">
          <path
            d="M 10 90 C 80 90, 90 10, 270 10"
            stroke="currentColor"
            strokeOpacity="0.12"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          <path
            d="M 10 90 C 80 90, 90 10, 270 10"
            stroke="url(#motion-gradient)"
            strokeWidth="3"
            strokeLinecap="round"
          />
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
