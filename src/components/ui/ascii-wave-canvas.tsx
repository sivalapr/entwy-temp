'use client';

import React, { useEffect, useRef } from 'react';

interface AsciiWaveCanvasProps {
  className?: string;
  characters?: string[];
  fontSize?: number;
  speed?: number;
  density?: number;
  interactive?: boolean;
}

export const AsciiWaveCanvas: React.FC<AsciiWaveCanvasProps> = ({
  className = '',
  characters = [' ', '.', ':', '-', '+', '=', '*', '#', '%', '@'],
  fontSize = 11,
  speed = 0.0015,
  interactive = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef<{ x: number; y: number }>({ x: -1000, y: -1000 });
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: false });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    let time = 0;
    let isVisible = true;

    const charWidth = fontSize * 0.62;
    const charHeight = fontSize * 1.15;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
      cols = Math.ceil(width / charWidth);
      rows = Math.ceil(height / charHeight);
    };

    resize();

    const resizeObserver = new ResizeObserver(() => resize());
    resizeObserver.observe(container);

    // Pause when offscreen for 0 CPU overhead
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    intersectionObserver.observe(container);

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = container.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      if (!isVisible) {
        animFrameRef.current = requestAnimationFrame(render);
        return;
      }

      time += speed;
      ctx.clearRect(0, 0, width, height);
      ctx.font = `600 ${fontSize}px "JetBrains Mono", Menlo, Monaco, Consolas, monospace`;
      ctx.textBaseline = 'top';

      const numChars = characters.length;
      const mouse = mouseRef.current;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * charWidth;
          const y = r * charHeight;

          // 2D Wave formula: multi-frequency generative ripples
          const nx = c / cols;
          const ny = r / rows;

          const wave1 = Math.sin(nx * 6 + time * 8);
          const wave2 = Math.cos(ny * 5 - time * 6);
          const wave3 = Math.sin((nx + ny) * 7 + time * 10);

          let intensity = (wave1 + wave2 + wave3 + 3) / 6; // 0 to 1

          // Mouse ripple interactivity
          if (interactive && mouse.x > 0) {
            const dx = x - mouse.x;
            const dy = y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const radius = 130;
            if (dist < radius) {
              const mouseEffect = Math.cos((dist / radius) * Math.PI * 0.5);
              intensity = Math.min(1, intensity + mouseEffect * 0.45);
            }
          }

          const charIndex = Math.min(
            numChars - 1,
            Math.max(0, Math.floor(intensity * numChars))
          );
          const char = characters[charIndex];

          if (char === ' ') continue;

          // Warm Rosewood palette color blending: peach, cream, blush highlight
          const alpha = 0.12 + intensity * 0.38;
          ctx.fillStyle = `rgba(255, 245, 238, ${alpha.toFixed(2)})`;

          ctx.fillText(char, x, y);
        }
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [characters, fontSize, speed, interactive]);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 overflow-hidden select-none ${className}`}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};

export default AsciiWaveCanvas;
