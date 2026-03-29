import { useState } from "react";
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

  return (
    <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        <a href="#home" className="font-serif text-xl font-bold text-primary md:text-2xl">
          {cafeInfo.name}
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href={cafeInfo.googleMapsUrl} target="_blank" rel="noopener noreferrer">
              <MapPin className="mr-1 h-4 w-4" /> Get Directions
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 md:hidden">
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
        <div className="border-t border-border/50 bg-background px-4 py-4 md:hidden">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-base font-medium text-foreground/80 transition-colors hover:text-primary"
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
