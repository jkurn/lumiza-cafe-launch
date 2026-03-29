import { menuCategories } from "@/data/cafe-data";
import { Badge } from "@/components/ui/badge";

const tagColors: Record<string, string> = {
  popular: "bg-accent text-accent-foreground",
  veggie: "bg-green-700/20 text-green-800",
  new: "bg-primary/20 text-primary",
};

const MenuSection = () => {
  return (
    <section id="menu" className="py-16 md:py-24">
      <div className="container px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
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
            <div key={category.title}>
              <h3 className="mb-6 border-b border-border pb-2 font-serif text-2xl font-semibold text-primary md:text-3xl">
                {category.title}
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex justify-between gap-4 rounded-lg p-4 transition-colors hover:bg-card"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
