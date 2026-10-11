import React from 'react';

interface EntwyLogoProps {
  height?: number;
  className?: string;
  theme?: 'light' | 'dark' | 'auto';
  showWordmark?: boolean;
}

export const EntwyLogo: React.FC<EntwyLogoProps> = ({
  height = 36,
  className = '',
  theme = 'auto',
  showWordmark = true,
}) => {
  const isDark = theme === 'dark';
  const fillColor = isDark ? '#ffffff' : 'var(--color-ink, #0d253d)';

  return (
    <div
      className={`entwy-logo-container ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '9px',
        textDecoration: 'none',
      }}
    >
      {/* 
        Precise SVG vector representation of ENTWY 3-bar "E" symbol.
        Renders razor-sharp on Retina / HiDPI screens and adapts to light or dark surfaces.
      */}
      <svg
        width={Math.round(height * 0.72)}
        height={height}
        viewBox="0 0 74 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block', flexShrink: 0 }}
        aria-hidden="true"
      >
        {/* Top bar with curved top-left shoulder */}
        <path
          d="M 28 0 H 70 C 72.2 0 74 1.8 74 4 V 20 C 74 22.2 72.2 24 70 24 H 4 C 1.8 24 0 22.2 0 20 V 28 C 0 12.5 12.5 0 28 0 Z"
          fill={fillColor}
        />
        {/* Middle bar with curved top-left shoulder */}
        <path
          d="M 28 38 H 70 C 72.2 38 74 39.8 74 42 V 58 C 74 60.2 72.2 62 70 62 H 4 C 1.8 62 0 60.2 0 58 V 66 C 0 50.5 12.5 38 28 38 Z"
          fill={fillColor}
        />
        {/* Bottom bar with curved top-left shoulder */}
        <path
          d="M 28 76 H 70 C 72.2 76 74 77.8 74 80 V 96 C 74 98.2 72.2 100 70 100 H 4 C 1.8 100 0 98.2 0 96 V 104 C 0 88.5 12.5 76 28 76 Z"
          fill={fillColor}
        />
      </svg>

      {showWordmark && (
        <span
          className="brand-wordmark"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: `${Math.round(height * 0.52)}px`,
            fontWeight: 800,
            letterSpacing: '0.16em',
            color: fillColor,
            textTransform: 'uppercase',
            lineHeight: 1,
            userSelect: 'none',
          }}
        >
          ENTWY
        </span>
      )}
    </div>
  );
};
