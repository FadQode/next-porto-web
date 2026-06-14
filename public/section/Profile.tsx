"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowDownToLine,
  ArrowUpRight,
  Circle,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { profileContent } from "@/lib/content/profile";
import { contactLinks } from "@/lib/content/site";

const SCRAMBLE_CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";

function useDecryptText(
  text: string,
  speed: number,
  delay: number,
  trigger: boolean,
) {
  const placeholder = useMemo(
    () => text.replace(/[^\s]/g, "·"),
    [text],
  );
  const [display, setDisplay] = useState(placeholder);

  useEffect(() => {
    if (!trigger) return;

    const characters = text.split("");
    const order = characters
      .map((character, index) => ({ character, index }))
      .filter(({ character }) => character !== " " && character !== "\n")
      .map(({ index }) => index)
      .sort(() => Math.random() - 0.5);
    const revealed = new Set<number>();
    let pointer = 0;
    let tick = 0;
    let intervalId: number | undefined;

    const randomCharacter = () =>
      SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
    const render = () => {
      setDisplay(
        characters
          .map((character, index) => {
            if (character === " " || character === "\n") return character;
            return revealed.has(index) ? character : randomCharacter();
          })
          .join(""),
      );
    };

    const timeoutId = window.setTimeout(() => {
      render();
      intervalId = window.setInterval(() => {
        tick += 1;
        if (tick % 2 === 0 && pointer < order.length) {
          revealed.add(order[pointer]);
          pointer += 1;
        }

        render();
        if (revealed.size === order.length) {
          if (intervalId !== undefined) window.clearInterval(intervalId);
          setDisplay(text);
        }
      }, speed);
    }, delay);

    return () => {
      window.clearTimeout(timeoutId);
      if (intervalId !== undefined) window.clearInterval(intervalId);
    };
  }, [delay, speed, text, trigger]);

  return display;
}

export default function ProfileSummary() {
  const { identity, profileCard } = profileContent;
  const sectionRef = useRef<HTMLElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const nameDuration =
    100 + profileCard.name.replace(/\s/g, "").length * 52;
  const roleDelay = nameDuration + 80;
  const roleDuration =
    roleDelay + profileCard.role.replace(/\s/g, "").length * 34;
  const bioDelay = roleDuration + 80;

  const name = useDecryptText(profileCard.name, 26, 100, triggered);
  const role = useDecryptText(profileCard.role, 17, roleDelay, triggered);
  const bio = useDecryptText(profileCard.bio, 8, bioDelay, triggered);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleTilt = (event: React.MouseEvent<HTMLDivElement>) => {
    const frame = tiltRef.current;
    if (!frame) return;

    const bounds = frame.getBoundingClientRect();
    const offsetX = event.clientX - bounds.left - bounds.width / 2;
    const offsetY = event.clientY - bounds.top - bounds.height / 2;
    setTilt({
      x: (offsetY / (bounds.height / 2)) * -7,
      y: (offsetX / (bounds.width / 2)) * 7,
    });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="profile"
      ref={sectionRef}
      className="relative flex min-h-[620px] items-center justify-center overflow-hidden bg-[#12403c] px-4 py-20 sm:px-6 md:min-h-[calc(100vh-4rem)] md:px-8 md:py-16 lg:px-12 xl:px-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(212,168,67,0.12)_1px,transparent_1px)] bg-[length:28px_28px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4a843]/55 to-transparent" />
      <div className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#5dcaa5]/8 blur-3xl" />

      <div className="pointer-events-none absolute left-5 top-5 h-12 w-12 border-l border-t border-[#d4a843]/45 sm:left-9 sm:top-9" />
      <div className="pointer-events-none absolute right-5 top-5 h-12 w-12 border-r border-t border-[#d4a843]/45 sm:right-9 sm:top-9" />
      <div className="pointer-events-none absolute bottom-5 left-5 h-12 w-12 border-b border-l border-[#d4a843]/45 sm:bottom-9 sm:left-9" />
      <div className="pointer-events-none absolute bottom-5 right-5 h-12 w-12 border-b border-r border-[#d4a843]/45 sm:bottom-9 sm:right-9" />

      <article className="group relative z-10 grid w-full max-w-[1560px] overflow-hidden border border-[#d4a843]/40 bg-[#0d3330] shadow-[5px_5px_0_rgba(212,168,67,0.16)] md:min-h-[600px] md:grid-cols-[280px_minmax(0,1fr)] md:grid-rows-[auto_1fr_auto] lg:min-h-[650px] lg:grid-cols-[340px_minmax(0,1fr)] xl:min-h-[680px] xl:grid-cols-[380px_minmax(0,1fr)]">
        <span className="absolute -left-px -top-px z-30 h-[10px] w-[10px] bg-[#d4a843]" />
        <span className="absolute -bottom-px -right-px z-30 h-[10px] w-[10px] bg-[#d4a843]" />
        <div className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(-30deg,transparent_60%,rgba(212,168,67,0.18)_70%,transparent_100%)] [background-position:-100%_-100%] [background-size:300%_300%] transition-[background-position] duration-[800ms] group-hover:[background-position:100%_100%]" />

        <header className="order-1 border-b border-[#d4a843]/20 p-6 sm:p-8 md:col-start-2 md:row-start-1 md:px-10 md:py-8 lg:px-14 lg:py-10 xl:px-16">
          <div className="mb-5 inline-flex items-center gap-2 border border-[#d4a843]/40 px-3 py-1 font-mono text-[9px] tracking-[0.16em] text-[#d4a843] lg:mb-7 lg:px-4 lg:py-1.5 lg:text-[10px] xl:text-[11px]">
            <Circle className="h-2 w-2 fill-[#5dcaa5] text-[#5dcaa5]" />
            {profileCard.badge}
          </div>

          <h2
            className="min-h-[4.5rem] whitespace-pre-line font-mono text-[30px] leading-[1.05] tracking-[-0.035em] text-[#e8d5a3] sm:text-[38px] md:text-[42px] lg:min-h-[6.4rem] lg:text-[50px] xl:min-h-0 xl:whitespace-normal xl:text-[60px] 2xl:text-[68px]"
            aria-label={profileCard.name.replace("\n", " ")}
          >
            <span aria-hidden="true">{name}</span>
          </h2>
          <p
            className="mt-3 min-h-5 font-mono text-[11px] tracking-[0.08em] text-[#6db5ad] sm:text-xs lg:mt-5 lg:text-sm xl:mt-6 xl:text-base"
            aria-label={profileCard.role}
          >
            <span aria-hidden="true">{role}</span>
          </p>
        </header>

        <div className="order-2 flex flex-col items-center justify-center gap-5 border-b border-[#d4a843]/25 p-6 sm:p-8 md:col-start-1 md:row-span-3 md:row-start-1 md:border-b-0 md:border-r md:p-7 lg:gap-7 lg:p-9 xl:p-10">
          <div className="mb-1 flex w-full items-center justify-between font-mono text-[8px] tracking-[0.16em] text-[#a8c5c2]/55 lg:text-[9px] xl:text-[10px]">
            <span>SUBJECT_01</span>
            <span>VERIFIED</span>
          </div>

          <div
            ref={tiltRef}
            onMouseMove={handleTilt}
            onMouseLeave={() => setTilt({ x: 0, y: 0 })}
            className="relative h-[280px] w-full max-w-[220px] border border-[#d4a843]/35 bg-[#092b29] transition-transform duration-100 ease-out md:h-[340px] md:max-w-[250px] lg:h-[410px] lg:max-w-[300px] xl:h-[440px] xl:max-w-[320px]"
            style={{
              transform: `perspective(650px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(109,181,173,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(109,181,173,0.08)_1px,transparent_1px)] bg-[length:22px_22px]" />
            <div className="absolute inset-x-3 bottom-3 top-3 border-x border-[#6db5ad]/10" />
            <Image
              src={identity.image}
              alt={identity.name}
              fill
              sizes="(min-width: 1280px) 320px, (min-width: 1024px) 300px, (min-width: 768px) 250px, 220px"
              className="object-contain object-bottom p-2 drop-shadow-[0_12px_18px_rgba(0,0,0,0.35)]"
              priority={false}
            />
            <span className="absolute left-2 top-2 h-4 w-4 border-l border-t border-[#d4a843]" />
            <span className="absolute bottom-2 right-2 h-4 w-4 border-b border-r border-[#d4a843]" />
          </div>

          <div className="grid w-full grid-cols-2 gap-2 lg:gap-3">
            <a
              href="#"
              onClick={(event) => event.preventDefault()}
              aria-label="Resume file coming soon"
              className="relative z-30 inline-flex items-center justify-center gap-2 border border-[#d4a843]/45 px-3 py-2.5 font-mono text-[10px] uppercase tracking-[0.08em] text-[#d4a843] transition-colors duration-200 hover:bg-[#d4a843] hover:text-[#0d3330] active:scale-95 lg:py-3.5 lg:text-[11px]"
            >
              <ArrowDownToLine className="h-3.5 w-3.5" />
              {profileCard.cta.resume}
            </a>
            <button
              type="button"
              onClick={scrollToContact}
              className="relative z-30 inline-flex cursor-pointer items-center justify-center gap-2 bg-[#d4a843] px-3 py-2.5 font-mono text-[10px] uppercase tracking-[0.08em] text-[#0d3330] transition-colors duration-200 hover:bg-[#e8d5a3] active:scale-95 lg:py-3.5 lg:text-[11px]"
            >
              {profileCard.cta.contact}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        <div className="order-3 flex flex-col justify-center p-6 sm:p-8 md:col-start-2 md:row-start-2 md:px-10 md:py-8 lg:px-14 lg:py-10 xl:px-16">
          <div className="mb-5 flex items-center gap-3">
            <span className="font-mono text-[8px] tracking-[0.2em] text-[#d4a843]/65 lg:text-[9px] xl:text-[10px]">DOSSIER / 0028</span>
            <span className="h-px flex-1 bg-[#d4a843]/20" />
          </div>
          <p
            className="min-h-[8.4rem] max-w-5xl whitespace-pre-line font-mono text-[11px] leading-[1.9] text-[#a8c5c2] sm:text-xs lg:min-h-[10rem] lg:text-sm lg:leading-[2] xl:min-h-0 xl:max-w-[960px] xl:whitespace-normal xl:text-base xl:leading-[2.05] 2xl:max-w-[1080px] 2xl:text-[17px]"
            aria-label={profileCard.bio.replace(/\n/g, " ")}
          >
            <span aria-hidden="true">{bio}</span>
          </p>
          <blockquote className="mt-5 border-l-2 border-[#d4a843]/60 pl-4 font-mono text-[10px] italic leading-relaxed text-[#e8d5a3]/75 sm:text-[11px] lg:mt-7 lg:pl-5 lg:text-xs xl:mt-9 xl:text-sm">
            &ldquo;{profileCard.quote}&rdquo;
          </blockquote>
        </div>

        <div className="order-4 grid grid-cols-2 border-t border-[#d4a843]/20 md:col-start-2 md:row-start-3 md:grid-cols-3 xl:grid-cols-5">
          <div className="border-b border-r border-[#d4a843]/15 p-4 lg:p-5 xl:border-b-0 xl:p-6">
            <p className="mb-1 font-mono text-[8px] tracking-[0.12em] text-[#a8c5c2]/55 lg:text-[9px] xl:text-[10px]">AVAILABILITY</p>
            <p className="font-mono text-[11px] font-semibold text-[#5dcaa5] lg:text-[13px] xl:text-sm">{profileCard.stats.availability}</p>
            <p className="mt-1 font-mono text-[8px] text-[#a8c5c2]/55 lg:text-[9px] xl:text-[10px]">{profileCard.stats.availabilitySub}</p>
          </div>
          <a
            href={contactLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group/contact border-b border-r border-[#d4a843]/15 p-4 transition-colors hover:bg-[#d4a843]/8 lg:p-5 xl:border-b-0 xl:p-6"
          >
            <p className="mb-1 flex items-center gap-1.5 font-mono text-[8px] tracking-[0.12em] text-[#a8c5c2]/55 lg:text-[9px] xl:text-[10px]">
              <Linkedin className="h-3 w-3" /> LINKEDIN
            </p>
            <p className="font-mono text-[11px] leading-snug text-[#e8d5a3] transition-colors group-hover/contact:text-[#d4a843] lg:text-[13px] xl:text-sm">{profileCard.stats.linkedin}</p>
            <p className="mt-1 font-mono text-[8px] text-[#a8c5c2]/55 lg:text-[9px] xl:text-[10px]">Connect professionally.</p>
          </a>
          <a
            href={contactLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group/contact border-b border-[#d4a843]/15 p-4 transition-colors hover:bg-[#d4a843]/8 md:border-r lg:p-5 xl:border-b-0 xl:p-6"
          >
            <p className="mb-1 flex items-center gap-1.5 font-mono text-[8px] tracking-[0.12em] text-[#a8c5c2]/55 lg:text-[9px] xl:text-[10px]">
              <Github className="h-3 w-3" /> GITHUB
            </p>
            <p className="font-mono text-[11px] leading-snug text-[#e8d5a3] transition-colors group-hover/contact:text-[#d4a843] lg:text-[13px] xl:text-sm">{profileCard.stats.github}</p>
            <p className="mt-1 font-mono text-[8px] text-[#a8c5c2]/55 lg:text-[9px] xl:text-[10px]">Explore the code.</p>
          </a>
          <a
            href={contactLinks.email}
            className="group/contact border-r border-[#d4a843]/15 p-4 transition-colors hover:bg-[#d4a843]/8 lg:p-5 xl:p-6"
          >
            <p className="mb-1 flex items-center gap-1.5 font-mono text-[8px] tracking-[0.12em] text-[#a8c5c2]/55 lg:text-[9px] xl:text-[10px]">
              <Mail className="h-3 w-3" /> EMAIL
            </p>
            <p className="whitespace-nowrap font-mono text-[10px] leading-snug tracking-[-0.03em] text-[#e8d5a3] transition-colors group-hover/contact:text-[#d4a843] sm:text-[11px] lg:text-[10px] 2xl:text-xs">{profileCard.stats.email}</p>
            <p className="mt-1 font-mono text-[8px] text-[#a8c5c2]/55 lg:text-[9px] xl:text-[10px]">Start a conversation.</p>
          </a>
          <div className="p-4 lg:p-5 xl:p-6">
            <p className="mb-1 font-mono text-[8px] tracking-[0.12em] text-[#a8c5c2]/55 lg:text-[9px] xl:text-[10px]">CURRENT FOCUS</p>
            <p className="font-mono text-[11px] leading-snug text-[#e8d5a3] lg:text-[13px] xl:text-sm">{profileCard.stats.focus}</p>
            <p className="mt-1 font-mono text-[8px] text-[#a8c5c2]/55 lg:text-[9px] xl:text-[10px]">{profileCard.stats.focusSub}</p>
          </div>
        </div>
      </article>
    </section>
  );
}
