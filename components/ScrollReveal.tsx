"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ScrollReveal.css";

type ScrollRevealProps = {
  children: ReactNode;
  index?: number;
  baseOpacity?: number;
  enableBlur?: boolean;
  baseRotation?: number;
  blurStrength?: number;
  distance?: number;
  revealEnd?: string;
  className?: string;
};

export default function ScrollReveal({
  children,
  index = 0,
  baseOpacity = 0.12,
  enableBlur = true,
  baseRotation = 1.5,
  blurStrength = 10,
  distance = 72,
  revealEnd = "top 72%",
  className = "",
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      gsap.set(element, { clearProps: "all" });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const horizontalDistance = index % 2 === 0 ? -distance * 0.28 : distance * 0.28;
    const context = gsap.context(() => {
      gsap.fromTo(
        element,
        {
          autoAlpha: baseOpacity,
          filter: enableBlur ? `blur(${blurStrength}px)` : "blur(0px)",
          rotate: index % 2 === 0 ? baseRotation : -baseRotation,
          scale: 0.975,
          x: horizontalDistance,
          y: distance,
        },
        {
          autoAlpha: 1,
          ease: "none",
          filter: "blur(0px)",
          rotate: 0,
          scale: 1,
          x: 0,
          y: 0,
          scrollTrigger: {
            trigger: element,
            start: "top 92%",
            end: revealEnd,
            scrub: 0.55,
            invalidateOnRefresh: true,
          },
        },
      );
    }, element);

    const refreshId = window.requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      window.cancelAnimationFrame(refreshId);
      context.revert();
    };
  }, [
    baseOpacity,
    baseRotation,
    blurStrength,
    distance,
    enableBlur,
    index,
    revealEnd,
  ]);

  return (
    <div
      ref={containerRef}
      className={`scroll-reveal-section ${className}`.trim()}
      data-scroll-reveal
    >
      {children}
    </div>
  );
}
