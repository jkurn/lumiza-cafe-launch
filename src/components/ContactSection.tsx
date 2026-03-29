import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { cafeInfo, openingHours } from "@/data/cafe-data";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground">
            Find Us
          </p>
          <h2 className="mt-2 font-serif text-4xl font-bold text-foreground md:text-5xl">
            Visit Lumiza Cafe
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-10 md:grid-cols-2">
          {/* Map */}
          <a
            href={cafeInfo.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-xl border border-border"
          >
            <iframe
              title="Lumiza Cafe Location"
              src="https://www.google.com/maps?q=Lumiza+Pizza+Cafe,+5/28+Spring+St,+Bondi+Junction+NSW&output=embed"
              width="100%"
              height="350"
              style={{ border: 0, pointerEvents: "none" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute inset-0 flex items-end justify-center bg-transparent transition-colors group-hover:bg-foreground/10">
              <span className="mb-4 rounded-full bg-background/90 px-4 py-2 text-sm font-medium text-foreground opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
                Open in Google Maps
              </span>
            </div>
          </a>

          {/* Info */}
          <div className="space-y-6">
            <a href={cafeInfo.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" />
              <div>
                <p className="font-medium text-foreground group-hover:text-primary">{cafeInfo.address}</p>
                <p className="text-sm text-muted-foreground">{cafeInfo.addressNote}</p>
              </div>
            </a>

            <div className="flex items-start gap-4">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-accent" />
              <a href={`tel:${cafeInfo.phone}`} className="font-medium text-foreground hover:text-primary">
                {cafeInfo.phone}
              </a>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-accent" />
              <a href={`mailto:${cafeInfo.email}`} className="font-medium text-foreground hover:text-primary">
                {cafeInfo.email}
              </a>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-accent" />
              <div className="space-y-1">
                {openingHours.map((h) => (
                  <div key={h.days} className="flex gap-4 text-sm">
                    <span className="w-36 font-medium text-foreground">{h.days}</span>
                    <span className="text-muted-foreground">{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-4 pt-4">
              <a
                href={cafeInfo.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-primary p-3 text-primary-foreground transition-colors hover:bg-primary/80"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
