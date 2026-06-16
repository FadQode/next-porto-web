import type { MouseEvent } from "react";

const DEFAULT_NAV_HEIGHT = 64;
const SECTION_GAP = 12;

const getFixedNavHeight = () => {
  const navBar = document.querySelector<HTMLElement>("[data-site-nav-bar]");
  if (navBar) return navBar.offsetHeight;

  const nav = document.querySelector<HTMLElement>("[data-site-nav]");
  if (!nav) return DEFAULT_NAV_HEIGHT;

  return Math.min(nav.offsetHeight, DEFAULT_NAV_HEIGHT);
};

const getStableDocumentTop = (element: HTMLElement) => {
  let top = 0;
  let current: HTMLElement | null = element;

  while (current) {
    top += current.offsetTop;
    current = current.offsetParent as HTMLElement | null;
  }

  if (top > 0 || element === document.body) return top;

  return element.getBoundingClientRect().top + window.scrollY;
};

export const scrollToSection = (selector: string, updateHash = true) => {
  if (!selector.startsWith("#")) return false;

  const element = document.querySelector<HTMLElement>(selector);
  if (!element) return false;

  const target = element.closest<HTMLElement>("[data-scroll-reveal]") ?? element;
  const targetTop = getStableDocumentTop(target);
  const navOffset = getFixedNavHeight() + SECTION_GAP;

  window.scrollTo({
    top: Math.max(0, targetTop - navOffset),
    behavior: "smooth",
  });

  if (updateHash) {
    window.history.pushState(null, "", selector);
  }

  return true;
};

export const handleSectionLinkClick = (
  event: MouseEvent<HTMLAnchorElement>,
  selector: string,
) => {
  event.preventDefault();
  scrollToSection(selector);
};
