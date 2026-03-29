import { useState, useEffect } from "react";
import { Menu, X, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cafeInfo } from "@/data/cafe-data";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine which section is in view
      const sections = navLinks.map((l) => l.href.slice(1));
      let current = "#home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) current = `#${id}`;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 border-b bg-background/95 backdrop-blur transition-shadow duration-300 supports-[backdrop-filter]:bg-background/80 ${
        scrolled ? "border-border/50 shadow-md shadow-foreground/5" : "border-transparent shadow-none"
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        <a href="#home" className="font-serif text-xl font-bold text-primary md:text-2xl">
          {cafeInfo.name}
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative text-sm font-medium transition-colors hover:text-primary ${
                activeSection === l.href ? "text-primary" : "text-foreground/80"
              }`}
            >
              {l.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-accent transition-all duration-300 ${
                  activeSection === l.href ? "w-full" : "w-0"
                }`}
              />
            </a>
          ))}
          <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href={cafeInfo.googleMapsUrl} target="_blank" rel="noopener noreferrer">
              <MapPin className="mr-1 h-4 w-4" /> Get Directions
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href={cafeInfo.googleMapsUrl} target="_blank" rel="noopener noreferrer">
              <MapPin className="h-4 w-4" />
            </a>
          </Button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border/50 bg-background px-4 py-4 lg:hidden">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 text-base font-medium transition-colors hover:text-primary ${
                activeSection === l.href
                  ? "text-primary border-l-2 border-accent pl-3"
                  : "text-foreground/80"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
