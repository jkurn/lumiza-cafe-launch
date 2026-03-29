import { MapPin, Clock, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cafeInfo, openingHours } from "@/data/cafe-data";
import heroImage from "@/assets/hero-placeholder.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[90vh] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Delicious breakfast spread at Lumiza Cafe"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
      </div>

      {/* Content */}
      <div className="relative flex min-h-[90vh] flex-col items-center justify-center px-4 text-center text-primary-foreground">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground/80 md:text-base">
          Welcome to
        </p>
        <h1 className="font-serif text-5xl font-bold leading-tight md:text-7xl lg:text-8xl">
          {cafeInfo.name}
        </h1>
        <p className="mt-4 max-w-lg text-lg font-light text-primary-foreground/90 md:text-xl">
          {cafeInfo.tagline}
        </p>

        {/* Info pills */}
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
          <div className="flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 backdrop-blur-sm">
            <MapPin className="h-4 w-4 text-accent" />
            <span className="text-sm">{cafeInfo.address}</span>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 backdrop-blur-sm">
            <Clock className="h-4 w-4 text-accent" />
            <span className="text-sm">{openingHours[0].hours}</span>
          </div>
        </div>
        <p className="mt-2 text-xs text-primary-foreground/60">{cafeInfo.addressNote}</p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="bg-accent px-8 text-accent-foreground hover:bg-accent/90">
            <a href="#menu">View Menu</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
          >
            <a href={cafeInfo.googleMapsUrl} target="_blank" rel="noopener noreferrer">
              <MapPin className="mr-2 h-4 w-4" /> Get Directions
            </a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <a href="#menu" className="absolute bottom-8 animate-bounce text-primary-foreground/50">
          <ChevronDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
