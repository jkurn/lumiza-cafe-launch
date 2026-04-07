import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { menuCategories } from "@/data/cafe-data";
import { Badge } from "@/components/ui/badge";

gsap.registerPlugin(ScrollTrigger);

const tagColors: Record<string, string> = {
  popular: "bg-accent text-accent-foreground",
  veggie: "bg-green-700/20 text-green-800",
  new: "bg-primary/20 text-primary",
};

const MenuSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const header = el.querySelector("[data-menu-header]");
    const allTitles = el.querySelectorAll("[data-cat-title]");
    const allItems = el.querySelectorAll("[data-menu-item]");

    // Set initial hidden state
    if (header) gsap.set(header, { opacity: 0, y: 14 });
    gsap.set(allTitles, { opacity: 0, x: -12 });
    gsap.set(allItems, { opacity: 0, y: 10 });

    const ctx = gsap.context(() => {
      if (header) {
        gsap.to(header, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power3.out",
          scrollTrigger: { trigger: header, start: "top 85%", toggleActions: "play none none none" },
        });
      }

      el.querySelectorAll("[data-menu-category]").forEach((cat) => {
        const title = cat.querySelector("[data-cat-title]");
        const items = cat.querySelectorAll("[data-menu-item]");

        if (title) {
          gsap.to(title, {
            opacity: 1,
            x: 0,
            duration: 0.35,
            ease: "power3.out",
            scrollTrigger: { trigger: cat, start: "top 85%", toggleActions: "play none none none" },
          });
        }

        if (items.length) {
          gsap.to(items, {
            opacity: 1,
            y: 0,
            duration: 0.3,
            stagger: 0.04,
            ease: "power3.out",
            scrollTrigger: { trigger: cat, start: "top 80%", toggleActions: "play none none none" },
          });
        }
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section id="menu" ref={sectionRef} className="py-16 md:py-24">
      <div className="container px-4 md:px-8">
        <div data-menu-header className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground">
            What We Serve
          </p>
          <h2 className="mt-2 font-serif text-4xl font-bold text-foreground md:text-5xl">
            Our Menu
          </h2>
          <p className="mt-4 text-muted-foreground">
            Fresh, generous, and made with love — just like home cooking should be.
          </p>
        </div>

        <div className="mt-12 space-y-12">
          {menuCategories.map((category) => (
            <div key={category.title} data-menu-category>
              <h3 data-cat-title className="mb-6 border-b border-border pb-2 font-serif text-2xl font-semibold text-primary md:text-3xl">
                {category.title}
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    data-menu-item
                    className="flex justify-between gap-4 rounded-lg border-l-2 border-transparent p-4 transition-all duration-200 hover:border-accent hover:bg-card"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-foreground">{item.name}</span>
                        {item.tag && (
                          <Badge variant="secondary" className={`text-xs ${tagColors[item.tag] ?? ""}`}>
                            {item.tag}
                          </Badge>
                        )}
                      </div>
                      <p className="mt-1 text-[15px] leading-snug text-muted-foreground">{item.description}</p>
                    </div>
                    <span className="shrink-0 font-semibold text-primary">{item.price}</span>
                  </div>
                ))}
              </div>
              {category.note && (
                <p className="mt-3 text-sm italic text-muted-foreground">
                  * {category.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
