import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Subtle fade-up reveal on scroll. Attach the returned ref to a container element.
 * Children with `data-reveal` will animate in with a stagger.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: { stagger?: number; y?: number; duration?: number; start?: string } = {}
) {
  const ref = useRef<T>(null);
  const { stagger = 0.06, y = 14, duration = 0.4, start = "top 85%" } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = el.querySelectorAll("[data-reveal]");
    if (targets.length === 0) return;

    gsap.set(targets, { opacity: 0, y });

    const ctx = gsap.context(() => {
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: "play none none none",
        },
      });
    }, el);

    return () => ctx.revert();
  }, [stagger, y, duration, start]);

  return ref;
}
