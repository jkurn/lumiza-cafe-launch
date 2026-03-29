import ownersImage from "@/assets/fanny-and-shaw.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="bg-card py-16 md:py-24">
      <div className="container px-4 md:px-8">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="overflow-hidden rounded-xl">
            <img
              src={ownersImage}
              alt="Fanny and Shaw, owners of Lumiza Cafe"
              className="h-auto w-full object-cover"
              loading="lazy"
              width={800}
              height={800}
            />
          </div>
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground">
              Our Story
            </p>
            <h2 className="mt-2 font-serif text-4xl font-bold text-foreground md:text-5xl">
              Meet Fanny & Shaw
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              We started Lumiza Cafe with a simple belief: everyone deserves a
              great meal and a perfect coffee without breaking the bank. Tucked
              away under the Holiday Inn on Spring Street, our little spot has
              become a second home for locals, commuters, and hotel guests alike.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Every dish is made with care — generous portions, fresh
              ingredients, and the kind of warmth you'd find at a friend's
              kitchen table. Whether it's your first visit or your hundredth,
              we'll always greet you with a smile and a coffee just the way you
              like it.
            </p>
            <p className="mt-6 font-serif text-lg italic text-primary">
              "Great food, fair prices, and a warm welcome — that's the Lumiza way."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
