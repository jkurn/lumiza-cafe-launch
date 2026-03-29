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
            className="block overflow-hidden rounded-xl border border-border"
          >
            <iframe
              title="Lumiza Cafe Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d826.9!2d151.2472!3d-33.8932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae1880e2f8c1%3A0x6b7e323cbe8dce0!2sLumiza%20Pizza%20Cafe!5e0!3m2!1sen!2sau!4v1"
              width="100%"
              height="350"
              style={{ border: 0, pointerEvents: "none" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
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
