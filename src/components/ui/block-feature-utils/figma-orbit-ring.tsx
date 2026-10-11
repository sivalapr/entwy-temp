import React from "react";

export default function FigmaOrbitRing({ className }: { className?: string }) {
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
