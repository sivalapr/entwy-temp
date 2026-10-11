'use client';

import React, { useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { GlowEffect } from './glow-effect';

export interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColors?: string[];
  glowMode?: 'rotate' | 'pulse' | 'breathe' | 'colorShift' | 'flowHorizontal' | 'static';
  glowBlur?: 'softest' | 'soft' | 'medium' | 'strong' | 'stronger';
  variant?: 'light' | 'dark' | 'glass' | 'spotlight';
  enableSpotlight?: boolean;
  spotlightColor?: string;
  borderGlow?: boolean;
}

export function GlowCard({
  children,
  className,
  glowColors = ['#533afd', '#00d4ff', '#f96bee', '#ea2261'],
  glowMode = 'breathe',
  glowBlur = 'medium',
  variant = 'light',
  enableSpotlight = true,
  spotlightColor = 'rgba(83, 58, 253, 0.12)',
  borderGlow = true,
  ...props
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !enableSpotlight) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const variantStyles = {
    light: 'bg-[var(--color-surface-card)] text-[var(--color-ink)] border-[var(--color-hairline)] shadow-[0_13px_27px_-5px_rgba(50,50,93,0.08),0_8px_16px_-8px_rgba(0,0,0,0.06)] hover:shadow-[0_30px_60px_-12px_rgba(50,50,93,0.12)]',
    dark: 'bg-[var(--color-surface-dark)] text-[#ffffff] border-[#1c1e54] shadow-lg hover:shadow-xl',
    glass: 'bg-[rgba(255,255,255,0.92)] backdrop-blur-md text-[var(--color-ink)] border-[var(--color-hairline)] shadow-[0_13px_27px_-5px_rgba(50,50,93,0.08)]',
    spotlight: 'bg-[var(--color-surface-card)] text-[var(--color-ink)] border-[var(--color-hairline)] shadow-sm',
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        'group relative overflow-hidden rounded-[var(--radius-lg)] border transition-all duration-300',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {/* Ambient border glow when active/hovered */}
      {borderGlow && (
        <div
          className={cn(
            'pointer-events-none absolute -inset-px rounded-[calc(var(--radius-lg)+1px)] opacity-0 transition-opacity duration-500',
            isHovered && 'opacity-100'
          )}
        >
          <GlowEffect
            colors={glowColors}
            mode={glowMode}
            blur={glowBlur}
            scale={1.02}
          />
        </div>
      )}

      {/* Interactive mouse spotlight */}
      {enableSpotlight && isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, ${spotlightColor}, transparent 70%)`,
          }}
          aria-hidden="true"
        />
      )}

      {/* Card Content */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
}
