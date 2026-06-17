"use client";

import { useEffect, useRef } from "react";

type GalaxyStarfieldProps = {
  className?: string;
  density?: "hero" | "loader";
  withBackdrop?: boolean;
};

type Star = {
  x: number;
  y: number;
  z: number;
  r: number;
  twinkle: number;
  speed: number;
  hue: number;
};

type DustCloud = {
  x: number;
  y: number;
  r: number;
  alpha: number;
  hue: string;
};

const rand = (min: number, max: number) => Math.random() * (max - min) + min;
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export default function GalaxyStarfield({
  className = "",
  density = "hero",
  withBackdrop = false,
}: GalaxyStarfieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);
  const starsRef = useRef<Star[]>([]);
  const dustRef = useRef<DustCloud[]>([]);
  const dimensionsRef = useRef({ width: 0, height: 0, dpr: 1 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const buildSpace = () => {
      const { width, height } = dimensionsRef.current;
      const area = width * height;
      const starDivisor = density === "loader" ? 4200 : 5200;
      const dustDivisor = density === "loader" ? 22000 : 30000;

      const starCount = Math.min(420, Math.max(150, Math.floor(area / starDivisor)));
      const dustCount = Math.min(58, Math.max(24, Math.floor(area / dustDivisor)));

      starsRef.current = Array.from({ length: starCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        z: rand(0.2, 1),
        r: rand(0.35, 1.35),
        twinkle: rand(0, Math.PI * 2),
        speed: prefersReducedMotion ? 0 : rand(0.01, 0.045),
        hue: Math.random() > 0.7 ? rand(36, 58) : rand(178, 205),
      }));

      dustRef.current = Array.from({ length: dustCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: rand(80, 280),
        alpha: rand(0.008, 0.032),
        hue: Math.random() > 0.52 ? "66, 138, 145" : "234, 188, 58",
      }));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      const width = Math.max(1, Math.floor(rect.width));
      const height = Math.max(1, Math.floor(rect.height));

      dimensionsRef.current = { width, height, dpr };
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildSpace();
    };

    const draw = (time: number) => {
      const { width, height } = dimensionsRef.current;

      ctx.clearRect(0, 0, width, height);

      if (withBackdrop) {
        const bg = ctx.createRadialGradient(
          width * 0.56,
          height * 0.08,
          0,
          width * 0.56,
          height * 0.08,
          Math.max(width, height) * 0.9,
        );
        bg.addColorStop(0, "rgba(255, 255, 255, 0.09)");
        bg.addColorStop(0.18, "rgba(66, 138, 145, 0.05)");
        bg.addColorStop(0.56, "rgba(5, 9, 13, 0.62)");
        bg.addColorStop(1, "rgba(5, 9, 13, 0.98)");
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, width, height);
      }

      for (const cloud of dustRef.current) {
        const drift = Math.sin(time * 0.00007 + cloud.x * 0.01) * 12;
        const gradient = ctx.createRadialGradient(
          cloud.x + drift,
          cloud.y,
          0,
          cloud.x + drift,
          cloud.y,
          cloud.r,
        );

        gradient.addColorStop(0, `rgba(${cloud.hue}, ${cloud.alpha})`);
        gradient.addColorStop(1, `rgba(${cloud.hue}, 0)`);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(cloud.x + drift, cloud.y, cloud.r, 0, Math.PI * 2);
        ctx.fill();
      }

      for (const star of starsRef.current) {
        const x = (star.x + time * star.speed * star.z) % width;
        const y = (star.y + time * star.speed * 0.22 * star.z) % height;
        const twinkle =
          0.45 + Math.sin(time * 0.0015 + star.twinkle) * 0.32 + star.z * 0.35;

        ctx.fillStyle = `hsla(${star.hue}, 80%, ${lerp(
          58,
          86,
          star.z,
        )}%, ${Math.max(0.12, twinkle)})`;
        ctx.beginPath();
        ctx.arc(x, y, star.r * star.z, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 0.045;
      ctx.fillStyle = "#ffffff";
      for (let i = 0; i < 88; i += 1) {
        const x = (i * 97 + time * 0.018) % width;
        const y = (i * 61 + time * 0.009) % height;
        ctx.fillRect(x, y, 1, 1);
      }
      ctx.globalAlpha = 1;

      if (!prefersReducedMotion) {
        rafRef.current = requestAnimationFrame(draw);
      }
    };

    resize();
    window.addEventListener("resize", resize);
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);

      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [density, withBackdrop]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`absolute inset-0 h-full w-full ${className}`}
    />
  );
}
