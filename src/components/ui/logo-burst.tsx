import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tentacle = {
  angle: number;
  length: number;
  width: number;
  alpha: number;
  delay: number;
  grow: number;
  phase: number;
  tip: boolean;
  tipSize: number;
  tipOvershoot: number;
  mids: Array<{ t: number; size: number; alpha: number }>;
};

function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function easeOutQuart(t: number) {
  const p = 1 - clamp(t, 0, 1);
  return 1 - p * p * p * p;
}

function createTentacles(
  count: number,
  seed: number,
  particleRatio: number,
): Tentacle[] {
  const rand = mulberry32(seed);
  const tentacles: Tentacle[] = [];

  for (let i = 0; i < count; i++) {
    const base = (i / count) * Math.PI * 2;
    const angle = base + (rand() - 0.5) * (Math.PI * 2 * 0.018);
    const roll = rand();
    // Power curve: more mid-length rays, a few long outliers, some stubs.
    const length =
      roll < 0.12
        ? 0.22 + rand() * 0.18
        : roll < 0.78
          ? 0.48 + rand() * 0.32
          : 0.78 + rand() * 0.22;
    const tip = rand() < particleRatio;
    const midCount = rand() < 0.22 ? 2 : rand() < 0.48 ? 1 : 0;
    const mids: Tentacle["mids"] = [];
    for (let m = 0; m < midCount; m++) {
      mids.push({
        t: 0.28 + rand() * 0.52,
        size: 0.55 + rand() * 0.7,
        alpha: 0.28 + rand() * 0.38,
      });
    }

    tentacles.push({
      angle,
      length: clamp(length, 0.16, 1),
      width: 0.35 + rand() * 0.85,
      alpha: 0.22 + rand() * 0.55,
      delay: rand() * 0.42 + (i / count) * 0.08,
      grow: 0.55 + rand() * 0.7,
      phase: rand() * Math.PI * 2,
      tip,
      tipSize: 0.85 + rand() * 1.35,
      tipOvershoot: tip && rand() < 0.35 ? 0.018 + rand() * 0.05 : 0,
      mids,
    });
  }

  return tentacles;
}

/** Pointer-driven adaptation of the supplied filament burst. No replay overlay. */
export function LogoBurst({ children, className }: { children?: ReactNode; className?: string }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!host || !canvas || !ctx) return;
    const rays = createTentacles(260, 23, 0.62);
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    let width = 0, height = 0, frame = 0, visible = true, disposed = false;
    let active = false, x = 0, y = 0, targetX = 0, targetY = 0, strength = 0;
    let started = performance.now(), previous = started;
    let entered = false;
    const duration = 1600;

    function schedule() {
      if (!frame && visible && !document.hidden && !disposed) frame = requestAnimationFrame(paint);
    }
    function paint(now: number) {
      frame = 0;
      if (disposed || !visible || document.hidden || !ctx || !canvas) return;
      const dt = Math.min((now - previous) / 1000, 0.05);
      previous = now;
      const ease = 1 - Math.exp(-dt * 10);
      x += (targetX - x) * ease;
      y += (targetY - y) * ease;
      strength += ((active ? 1 : 0) - strength) * ease;
      const reduced = motion.matches;
      const progress = reduced ? 1 : clamp((now - started) / duration, 0, 1);
      ctx.clearRect(0, 0, width, height);
      const cx = width / 2, cy = height / 2;
      const radius = Math.min(width, height) * 0.47;
      const core = Math.min(width, height) * 0.085;
      const force = reduced ? 0 : strength;
      for (const ray of rays) {
        const p = easeOutQuart(clamp((progress * 1.8 - ray.delay) / ray.grow, 0, 1));
        const length = core + (radius - core) * ray.length * p;
        const cos = Math.cos(ray.angle), sin = Math.sin(ray.angle);
        const endX = cx + cos * length, endY = cy + sin * length;
        const distance = Math.hypot(endX - x, endY - y);
        const influence = Math.exp(-distance * distance / (radius * radius * 0.42)) * force;
        const bendX = (x - endX) * influence * 0.28;
        const bendY = (y - endY) * influence * 0.28;
        ctx.beginPath();
        ctx.moveTo(cx + cos * core, cy + sin * core);
        ctx.quadraticCurveTo(cx + cos * length * 0.58 + bendX * 1.8,
          cy + sin * length * 0.58 + bendY * 1.8, endX + bendX, endY + bendY);
        ctx.strokeStyle = `rgba(70,48,235,${ray.alpha * (0.45 + influence * 0.5)})`;
        ctx.lineWidth = ray.width + influence * 0.5;
        ctx.stroke();
        if (ray.tip && p > 0.9) {
          ctx.beginPath();
          ctx.arc(endX + bendX, endY + bendY, ray.tipSize * (1 + influence * 0.6), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(70,48,235,${0.35 + influence * 0.55})`;
          ctx.fill();
        }
      }
      const moving = Math.abs(x - targetX) + Math.abs(y - targetY) > 0.2
        || Math.abs(strength - (active ? 1 : 0)) > 0.002;
      if (!reduced && (progress < 1 || moving)) schedule();
    }
    function resize() {
      if (!host || !canvas || !ctx) return;
      width = host.clientWidth; height = host.clientHeight;
      const dpr = Math.min(devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!active) { x = targetX = width / 2; y = targetY = height / 2; }
      schedule();
    }
    function move(event: PointerEvent) {
      if (!host) return;
      const box = host.getBoundingClientRect();
      targetX = event.clientX - box.left; targetY = event.clientY - box.top;
      active = true; schedule();
    }
    function release() { active = false; schedule(); }
    function key(event: KeyboardEvent) {
      const directions: Record<string, [number, number]> = {
        ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1],
      };
      if (event.key === 'Escape') { release(); return; }
      const direction = directions[event.key];
      if (!direction) return;
      event.preventDefault();
      targetX = clamp(targetX + direction[0] * 45, 0, width);
      targetY = clamp(targetY + direction[1] * 45, 0, height);
      active = true; schedule();
    }
    function visibility() {
      if (document.hidden) { cancelAnimationFrame(frame); frame = 0; }
      else { previous = performance.now(); schedule(); }
    }
    function preference() { previous = performance.now(); schedule(); }
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);
    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) {
        if (!entered) { entered = true; started = performance.now(); }
        previous = performance.now(); schedule();
      } else { cancelAnimationFrame(frame); frame = 0; }
    });
    intersection.observe(host);
    host.addEventListener('pointermove', move);
    host.addEventListener('pointerdown', move);
    host.addEventListener('pointerleave', release);
    host.addEventListener('pointercancel', release);
    host.addEventListener('pointerup', release);
    host.addEventListener('blur', release);
    host.addEventListener('keydown', key);
    document.addEventListener('visibilitychange', visibility);
    motion.addEventListener('change', preference);
    resize();
    return () => {
      disposed = true; cancelAnimationFrame(frame);
      resizeObserver.disconnect(); intersection.disconnect();
      host.removeEventListener('pointermove', move);
      host.removeEventListener('pointerdown', move);
      host.removeEventListener('pointerleave', release);
      host.removeEventListener('pointercancel', release);
      host.removeEventListener('pointerup', release);
      host.removeEventListener('blur', release);
      host.removeEventListener('keydown', key);
      document.removeEventListener('visibilitychange', visibility);
      motion.removeEventListener('change', preference);
    };
  }, []);

  return (
    <div ref={hostRef} className={cn('logo-burst', className)} tabIndex={0}
      role="group" aria-label="Interactive ENTWY filament artwork. Move your pointer or use arrow keys to bend the lines. Escape releases them. Reduced motion shows a static illustration.">
      <canvas ref={canvasRef} aria-hidden="true" />
      <div className="logo-burst-mark" aria-hidden="true">{children}</div>
    </div>
  );
}
export default LogoBurst;
