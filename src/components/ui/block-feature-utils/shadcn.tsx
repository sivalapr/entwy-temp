import React from "react";

export default function Shadcn({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 256 256"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M208 128l-80 80M192 40L40 192" stroke="currentColor" strokeWidth="28" strokeLinecap="round" />
    </svg>
  );
}
