import React, { useEffect, useRef } from 'react';

const palette = [
  { pos: 0, rgb: [255, 126, 95] },
  { pos: 0.25, rgb: [254, 180, 123] },
  { pos: 0.5, rgb: [255, 202, 167] },
  { pos: 0.75, rgb: [255, 173, 143] },
  { pos: 1, rgb: [206, 106, 87] },
] as const;

const TAU = Math.PI * 2;
const smoothstep = (edge0: number, edge1: number, value: number) => {
  const x = Math.max(0, Math.min(1, (value - edge0) / (edge1 - edge0)));
  return x * x * (3 - 2 * x);
};

function sampleRibbon(position: number, softness: number) {
  for (let index = 0; index < palette.length - 1; index += 1) {
    const current = palette[index];
    const next = palette[index + 1];
    const boundary = (current.pos + next.pos) * 0.5;
    const feather = softness * 0.045;

    if (position <= boundary + feather || index === palette.length - 2) {
      const mix = smoothstep(boundary - feather, boundary + feather, position);
      return current.rgb.map((channel, channelIndex) =>
        channel + (next.rgb[channelIndex] - channel) * mix,
      );
    }
  }

  return palette[palette.length - 1].rgb;
}

function seededNoise(x: number, y: number) {
  const value = Math.sin(x * 12.9898 + y * 78.233 + 89890650) * 43758.5453;
  return (value - Math.floor(value)) * 2 - 1;
}

export function RibbonFieldCanvas({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const context = canvas.getContext('2d', { alpha: false });
    if (!context) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let startTime: number | null = null;
    let width = 0;
    let height = 0;

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const aspect = Math.max(bounds.width / Math.max(bounds.height, 1), 1);
      height = Math.min(280, Math.max(160, Math.floor(bounds.height * 0.55)));
      width = Math.min(480, Math.max(240, Math.floor(height * aspect)));
      canvas.width = width;
      canvas.height = height;
    };

    const render = (timestamp: number) => {
      if (!width || !height) resize();
      if (startTime === null) startTime = timestamp;

      const elapsed = reduceMotion.matches ? 0 : (timestamp - startTime) / 1000;
      const ph = elapsed * 0.27;
      const amount = 0.2;
      const direction = 1;
      const spin = ph * direction;
      const angle = 30 + Math.sin(spin * 0.6) * 28 * amount;
      const waveClock = 20.75 + ph * 1.2;
      const radians = (angle * Math.PI) / 180;
      const axisX = Math.cos(radians);
      const axisY = Math.sin(radians);
      const crossX = -axisY;
      const crossY = axisX;
      const image = context.createImageData(width, height);
      const data = image.data;
      const softness = 27 / 100;
      const wave = 6 / 100;
      const scale = 68 / 100;
      const grain = 17 / 100;

      for (let y = 0; y < height; y += 1) {
        const ny = y / Math.max(height - 1, 1) - 0.5;
        for (let x = 0; x < width; x += 1) {
          const nx = x / Math.max(width - 1, 1) - 0.5;
          const cross = nx * crossX + ny * crossY;
          const bend = wave * 0.35 * Math.sin(cross * 2.4 * TAU + waveClock);
          const along = nx * axisX + ny * axisY + bend;
          const position = Math.max(0, Math.min(1, 0.5 + along / scale));
          const color = sampleRibbon(position, softness);
          const noise = seededNoise(x, y) * grain * 22;
          const vignette = Math.max(0, nx * nx + ny * ny - 0.26) * 3 * 14;
          const offset = (y * width + x) * 4;

          data[offset] = Math.max(0, Math.min(255, color[0] + noise - vignette));
          data[offset + 1] = Math.max(0, Math.min(255, color[1] + noise - vignette));
          data[offset + 2] = Math.max(0, Math.min(255, color[2] + noise - vignette));
          data[offset + 3] = 255;
        }
      }

      context.putImageData(image, 0, 0);
      if (!reduceMotion.matches) frame = window.requestAnimationFrame(render);
    };

    const observer = new ResizeObserver(() => {
      resize();
      if (reduceMotion.matches) render(performance.now());
    });
    observer.observe(canvas);
    resize();
    frame = window.requestAnimationFrame(render);

    const handleMotionChange = () => {
      window.cancelAnimationFrame(frame);
      startTime = null;
      frame = window.requestAnimationFrame(render);
    };
    reduceMotion.addEventListener('change', handleMotionChange);

    return () => {
      observer.disconnect();
      reduceMotion.removeEventListener('change', handleMotionChange);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas ref={canvasRef} className={`ribbon-field-canvas ${className}`} aria-hidden="true" />;
}

export default RibbonFieldCanvas;
