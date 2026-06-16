"use client";

import { useEffect, useRef, useState } from "react";

type AstralSunLoaderProps = {
  onRevealStart: () => void;
  onComplete: () => void;
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

type OrbitParams = {
  cx: number;
  cy: number;
  r: number;
  start: number;
  end: number;
};

const ORBIT_DURATION = 4000;
const HOLD_AFTER_ORBIT = 120;
const LOADER_FADE = 620;

const deg = (value: number) => (value * Math.PI) / 180;
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const rand = (min: number, max: number) => Math.random() * (max - min) + min;

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

function orbitParams(width: number, height: number): OrbitParams {
  if (width < 640) {
    return {
      cx: width * 1.05,
      cy: height * 1.52,
      r: Math.max(height * 1.45, width * 1.9),
      start: deg(-138),
      end: deg(-82),
    };
  }

  if (width < 1024) {
    return {
      cx: width * 0.95,
      cy: height * 1.56,
      r: Math.max(height * 1.52, width * 1.14),
      start: deg(-136),
      end: deg(-84),
    };
  }

  return {
    cx: width * 0.868,
    cy: height * 1.642,
    r: Math.max(height * 1.667, width * 0.92),
    start: deg(-133),
    end: deg(-86),
  };
}

const orbitTrackGap = (width: number) => Math.max(72, Math.min(250, width * 0.13));

const activeSunRadius = (params: OrbitParams, width: number) =>
  params.r - orbitTrackGap(width) * 0.9;

export default function AstralSunLoader({
  onRevealStart,
  onComplete,
}: AstralSunLoaderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sunRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const finishTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const completeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const startTimeRef = useRef(0);
  const starsRef = useRef<Star[]>([]);
  const dustRef = useRef<DustCloud[]>([]);
  const dimensionsRef = useRef({ width: 0, height: 0, dpr: 1 });
  const lastPercentRef = useRef(-1);
  const isFinishingRef = useRef(false);
  const onRevealStartRef = useRef(onRevealStart);
  const onCompleteRef = useRef(onComplete);
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    onRevealStartRef.current = onRevealStart;
    onCompleteRef.current = onComplete;
  }, [onRevealStart, onComplete]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const sun = sunRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx || !sun) {
      onCompleteRef.current();
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      onRevealStartRef.current();
      completeTimeoutRef.current = setTimeout(() => onCompleteRef.current(), 120);
      return () => {
        if (completeTimeoutRef.current) {
          clearTimeout(completeTimeoutRef.current);
        }
      };
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const buildSpace = () => {
      const { width, height } = dimensionsRef.current;
      const starCount = Math.min(
        420,
        Math.max(160, Math.floor((width * height) / 4200)),
      );
      const dustCount = Math.min(
        64,
        Math.max(30, Math.floor((width * height) / 22000)),
      );

      starsRef.current = Array.from({ length: starCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        z: rand(0.2, 1),
        r: rand(0.35, 1.35),
        twinkle: rand(0, Math.PI * 2),
        speed: rand(0.012, 0.06),
        hue: Math.random() > 0.7 ? rand(36, 58) : rand(178, 205),
      }));

      dustRef.current = Array.from({ length: dustCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: rand(70, 260),
        alpha: rand(0.008, 0.035),
        hue: Math.random() > 0.52 ? "66, 138, 145" : "234, 188, 58",
      }));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;

      dimensionsRef.current = { width, height, dpr };
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildSpace();
    };

    const drawGalaxy = (time: number) => {
      const { width, height } = dimensionsRef.current;
      ctx.clearRect(0, 0, width, height);

      const bg = ctx.createRadialGradient(
        width * 0.56,
        height * 0.08,
        0,
        width * 0.56,
        height * 0.08,
        Math.max(width, height) * 0.88,
      );
      bg.addColorStop(0, "rgba(255, 255, 255, 0.09)");
      bg.addColorStop(0.18, "rgba(66, 138, 145, 0.05)");
      bg.addColorStop(0.56, "rgba(5, 9, 13, 0.62)");
      bg.addColorStop(1, "rgba(5, 9, 13, 0.98)");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

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

      ctx.globalAlpha = 0.055;
      ctx.fillStyle = "#ffffff";
      for (let i = 0; i < 96; i += 1) {
        const x = (i * 97 + time * 0.018) % width;
        const y = (i * 61 + time * 0.009) % height;
        ctx.fillRect(x, y, 1, 1);
      }
      ctx.globalAlpha = 1;
    };

    const drawHudLines = () => {
      const { width, height } = dimensionsRef.current;
      const params = orbitParams(width, height);
      const responsiveGap = orbitTrackGap(width);
      const activeRadius = activeSunRadius(params, width);
      const radii = [
        params.r - responsiveGap * 1.8,
        params.r - responsiveGap * 0.9,
        params.r,
        params.r + responsiveGap * 1.1,
      ];

      ctx.save();
      ctx.lineWidth = 1;

      radii.forEach((radius, index) => {
        ctx.beginPath();
        ctx.strokeStyle =
          index === 2
            ? "rgba(174, 205, 199, 0.18)"
            : "rgba(174, 205, 199, 0.075)";
        ctx.arc(params.cx, params.cy, radius, params.start - deg(9), params.end + deg(9));
        ctx.stroke();
      });

      ctx.setLineDash([12, 18]);
      ctx.beginPath();
      ctx.strokeStyle = "rgba(234, 188, 58, 0.15)";
      ctx.arc(params.cx, params.cy, activeRadius, params.start - deg(6), params.end + deg(4));
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.strokeStyle = "rgba(174, 205, 199, 0.075)";
      const columns = [0.14, 0.45, 0.69, 0.92];
      for (const xp of columns) {
        const x = width * xp;
        ctx.beginPath();
        ctx.moveTo(x, height * 0.08);
        ctx.lineTo(x, height * 0.87);
        ctx.stroke();
      }

      const rows = [0.18, 0.49, 0.78];
      for (const yp of rows) {
        const y = height * yp;
        ctx.beginPath();
        ctx.moveTo(width * 0.03, y);
        ctx.lineTo(width * 0.97, y);
        ctx.stroke();
      }

      const targetX = width * 0.5;
      const targetY = height * 0.54;
      ctx.strokeStyle = "rgba(234, 188, 58, 0.22)";
      ctx.setLineDash([8, 12]);
      ctx.strokeRect(targetX - 72, targetY - 22, 144, 44);
      ctx.setLineDash([]);
      ctx.fillStyle = "rgba(234, 188, 58, 0.35)";
      ctx.fillRect(targetX - 2, targetY - 2, 4, 4);
      ctx.restore();
    };

    const drawSunTrail = (angle: number, progressValue: number) => {
      const { width, height } = dimensionsRef.current;
      const params = orbitParams(width, height);
      const radius = activeSunRadius(params, width);
      const trailLength = deg(9 + progressValue * 8);
      const gradient = ctx.createLinearGradient(width * 0.15, height * 0.6, width * 0.9, 0);

      gradient.addColorStop(0, "rgba(234, 188, 58, 0)");
      gradient.addColorStop(0.42, "rgba(234, 188, 58, 0.22)");
      gradient.addColorStop(1, "rgba(255, 214, 90, 0.62)");

      ctx.save();
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.strokeStyle = gradient;
      ctx.beginPath();
      ctx.arc(params.cx, params.cy, radius, angle - trailLength, angle);
      ctx.stroke();
      ctx.restore();
    };

    const setSunPosition = (progressValue: number) => {
      const { width, height } = dimensionsRef.current;
      const params = orbitParams(width, height);
      const radius = activeSunRadius(params, width);
      const eased = easeInOutCubic(progressValue);
      const angle = lerp(params.start, params.end, eased);
      const x = params.cx + Math.cos(angle) * radius;
      const y = params.cy + Math.sin(angle) * radius;
      const scale = lerp(0.82, 1.1, Math.sin(progressValue * Math.PI));
      const opacity =
        progressValue < 0.04
          ? progressValue / 0.04
          : progressValue > 0.96
            ? (1 - progressValue) / 0.04
            : 1;

      sun.style.opacity = Math.max(0, Math.min(1, opacity)).toFixed(3);
      sun.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
      return angle;
    };

    const finishLoader = () => {
      if (isFinishingRef.current) {
        return;
      }

      isFinishingRef.current = true;
      setProgress(100);

      finishTimeoutRef.current = setTimeout(() => {
        setIsExiting(true);
        onRevealStartRef.current();
        completeTimeoutRef.current = setTimeout(() => {
          document.body.style.overflow = previousOverflow;
          onCompleteRef.current();
        }, LOADER_FADE);
      }, HOLD_AFTER_ORBIT);
    };

    const animate = (time: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = time;
      }

      const elapsed = time - startTimeRef.current;
      const rawProgress = Math.min(elapsed / ORBIT_DURATION, 1);
      const percent = Math.min(100, Math.floor(rawProgress * 100));

      if (percent !== lastPercentRef.current) {
        lastPercentRef.current = percent;
        setProgress(percent);
      }

      drawGalaxy(time);
      drawHudLines();
      const angle = setSunPosition(rawProgress);
      drawSunTrail(angle, rawProgress);

      if (rawProgress >= 1) {
        finishLoader();
        return;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      document.body.style.overflow = previousOverflow;

      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }

      if (finishTimeoutRef.current) {
        clearTimeout(finishTimeoutRef.current);
      }

      if (completeTimeoutRef.current) {
        clearTimeout(completeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section
      aria-label="Loading portfolio"
      aria-live="polite"
      className={`fixed inset-0 z-[100] overflow-hidden bg-[#05090d] transition-[opacity,filter,visibility] duration-[620ms] ease-out ${
        isExiting
          ? "pointer-events-none invisible opacity-0 blur-xl"
          : "visible opacity-100 blur-0"
      }`}
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      <div
        ref={sunRef}
        aria-hidden="true"
        className="astral-sun-marker absolute left-0 top-0 z-20 h-[clamp(14px,1.5vw,22px)] w-[clamp(14px,1.5vw,22px)] rounded-full opacity-0 will-change-transform"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[clamp(18px,4vw,70px)] border border-[#aecdc7]/10 opacity-75"
      >
        <div className="absolute inset-0 astral-hud-corners opacity-25" />
      </div>

      <div className="pointer-events-none absolute left-1/2 top-1/2 z-30 flex -translate-x-1/2 translate-y-12 flex-col items-center font-mono text-sm tracking-[0.35em] text-[#aecdc7]/85 sm:text-base">
        <span className="tabular-nums">{progress.toString().padStart(2, "0")}%</span>
        <span className="mt-3 h-px w-28 bg-gradient-to-r from-transparent via-[#eabc3a]/70 to-transparent" />
      </div>

      <div className="pointer-events-none absolute inset-0 astral-loader-glass mix-blend-screen" />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 z-40 transition-opacity duration-500 ease-out ${
          isExiting ? "opacity-100" : "opacity-0"
        } astral-loader-flash`}
      />

      <style>{`
        .astral-sun-marker {
          margin-left: calc(clamp(14px, 1.5vw, 22px) / -2);
          margin-top: calc(clamp(14px, 1.5vw, 22px) / -2);
          background: radial-gradient(circle, #fffdf1 0 15%, #ffe16b 20% 36%, #ff9f1c 50%, rgba(255, 159, 28, 0) 72%);
          box-shadow:
            0 0 8px rgba(255, 231, 134, 0.95),
            0 0 22px rgba(234, 188, 58, 0.55),
            0 0 56px rgba(255, 127, 30, 0.28);
        }

        .astral-sun-marker::before,
        .astral-sun-marker::after {
          content: "";
          position: absolute;
          inset: -12px;
          border-radius: inherit;
          border: 1px solid rgba(234, 188, 58, 0.28);
          transform: scale(0.72);
          opacity: 0.75;
          animation: astralSunPulse 1.4s ease-in-out infinite;
        }

        .astral-sun-marker::after {
          inset: -23px;
          opacity: 0.26;
          animation-delay: 220ms;
        }

        .astral-hud-corners {
          background:
            linear-gradient(#aecdc7, #aecdc7) left top / 42px 1px no-repeat,
            linear-gradient(#aecdc7, #aecdc7) left top / 1px 42px no-repeat,
            linear-gradient(#aecdc7, #aecdc7) right top / 42px 1px no-repeat,
            linear-gradient(#aecdc7, #aecdc7) right top / 1px 42px no-repeat,
            linear-gradient(#aecdc7, #aecdc7) left bottom / 42px 1px no-repeat,
            linear-gradient(#aecdc7, #aecdc7) left bottom / 1px 42px no-repeat,
            linear-gradient(#aecdc7, #aecdc7) right bottom / 42px 1px no-repeat,
            linear-gradient(#aecdc7, #aecdc7) right bottom / 1px 42px no-repeat;
        }

        .astral-loader-glass {
          background:
            linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.035), transparent) 0 0 / 380px 100% no-repeat,
            linear-gradient(to bottom, rgba(255, 255, 255, 0.04), transparent 17%, transparent 85%, rgba(255, 255, 255, 0.04));
          animation: astralScanGlare 5s linear infinite;
        }

        .astral-loader-flash {
          background:
            radial-gradient(circle at 86% 18%, rgba(234, 188, 58, 0.95), transparent 5%),
            radial-gradient(circle at 86% 18%, rgba(255, 255, 255, 0.26), transparent 26%),
            rgba(5, 9, 13, 0);
          mix-blend-mode: screen;
        }

        @keyframes astralSunPulse {
          0%, 100% { transform: scale(0.7); opacity: 0.55; }
          50% { transform: scale(1.05); opacity: 0.15; }
        }

        @keyframes astralScanGlare {
          from { background-position: -460px 0, 0 0; }
          to { background-position: calc(100vw + 460px) 0, 0 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .astral-sun-marker::before,
          .astral-sun-marker::after,
          .astral-loader-glass {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
