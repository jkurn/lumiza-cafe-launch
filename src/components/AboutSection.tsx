import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ownersImage from "@/assets/fenny-and-shaw.jpg";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const image = el.querySelector("[data-about-image]");
      const textBlocks = el.querySelectorAll("[data-about-text]");

      if (image) {
        gsap.from(image, {
          opacity: 0,
          x: -40,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 75%" },
        });
      }

      if (textBlocks.length) {
        gsap.from(textBlocks, {
          opacity: 0,
          y: 24,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 70%" },
        });
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="bg-card py-16 md:py-24">
      <div className="container px-4 md:px-8">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2 md:gap-16">
          <div data-about-image className="group overflow-hidden rounded-xl">
            <img
              src={ownersImage}
              alt="Fenny and Shaw, owners of Lumiza Cafe"
              className="h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              loading="lazy"
              width={800}
              height={800}
            />
          </div>
          <div className="max-w-prose">
            <p data-about-text className="text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground">
              Our Story
            </p>
            <h2 data-about-text className="mt-2 font-serif text-4xl font-bold text-foreground md:text-5xl">
              Meet Fenny & Shaw
            </h2>
            <p data-about-text className="mt-6 leading-relaxed text-muted-foreground">
              We started Lumiza Cafe with a simple belief: everyone deserves a
              great meal and a perfect coffee without breaking the bank. Tucked
              away under the Holiday Inn on Spring Street, our little spot has
              become a second home for locals, commuters, and hotel guests alike.
            </p>
            <p data-about-text className="mt-4 leading-relaxed text-muted-foreground">
              Every dish is made with care — generous portions, fresh
              ingredients, and the kind of warmth you'd find at a friend's
              kitchen table. Whether it's your first visit or your hundredth,
              we'll always greet you with a smile and a coffee just the way you
              like it.
            </p>
            <p data-about-text className="mt-6 font-serif text-lg italic text-primary">
              "Great food, fair prices, and a warm welcome — that's the Lumiza way."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
