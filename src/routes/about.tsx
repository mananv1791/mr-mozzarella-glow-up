import { createFileRoute, Link } from "@tanstack/react-router";
import { Leaf, Heart, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Mr. Mozzarella | Family-Owned Since 1997" },
      {
        name: "description",
        content:
          "Founded in Ontario in 1997, Mr. Mozzarella is a family-owned pizza chain serving fresh, homemade pizza with love.",
      },
      { property: "og:title", content: "Made With Love Since 1997" },
      { property: "og:description", content: "Our story, our promise, our pizza." },
      {
        property: "og:image",
        content: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=1200&q=80",
      },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    text: "Homemade dough crafted daily, never frozen.",
    color: "var(--basil)",
  },
  {
    icon: Heart,
    title: "Family Owned",
    text: "Real people who care about every order.",
    color: "var(--tomato)",
  },
  {
    icon: Award,
    title: "Community First",
    text: "Serving Ontario families since '97.",
    color: "var(--gold)",
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1593504049359-74330189a345?w=600&q=80",
  "https://images.unsplash.com/photo-1542834369-f10ebf06d3e0?w=600&q=80",
  "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80",
  "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=600&q=80",
];

function AboutPage() {
  return (
    <div>
      <section className="relative bg-charcoal text-white py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 to-charcoal" />
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <p className="font-hand text-gold text-xl">Our Story</p>
          <h1 className="font-display text-5xl md:text-7xl">Made With Love Since 1997</h1>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-4xl px-4 text-lg text-foreground/85 space-y-5 leading-relaxed">
          <p>
            It started in 1997 in a small Ontario kitchen with a stubborn belief: pizza should be
            made fresh, by people who actually care. No shortcuts, no frozen dough, no apologies.
          </p>
          <p>
            Today, Mr. Mozzarella is still family-owned and operated, with multiple locations across
            Ontario (and a growing presence in Alberta). What hasn't changed is the recipe — for our
            dough, our sauce, and our welcome.
          </p>
          <p className="font-hand text-2xl text-tomato">
            "Pizza you'll want to bring home to meet Mom!"
          </p>
          <p>
            We won't offer you a $6.99 pizza — because you get what you pay for. We use real cheese,
            real ingredients, and real people who treat you like family.
          </p>
        </div>
      </section>

      <section className="bg-tomato text-white py-20 relative checker-bg">
        <div className="relative mx-auto max-w-7xl px-4">
          <h2 className="text-center font-display text-4xl md:text-5xl">Our Promise</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="bg-white/10 backdrop-blur border-2 border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-colors"
              >
                <div
                  className="mx-auto grid h-16 w-16 place-items-center rounded-full border-[3px] border-white"
                  style={{ background: p.color }}
                >
                  <p.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="mt-4 font-display text-2xl">{p.title}</h3>
                <p className="mt-2 text-white/90">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center font-display text-4xl md:text-5xl text-charcoal">
            In Our Kitchen
          </h2>
          <div className="mt-10 grid gap-4 grid-cols-2 md:grid-cols-4">
            {gallery.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Mr. Mozzarella kitchen ${i + 1}`}
                loading="lazy"
                className="aspect-square w-full object-cover rounded-2xl border-4 border-charcoal hover:scale-105 transition-transform"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-16 text-white text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="font-display text-5xl">Come taste the difference.</h2>
          <Link to="/locations" className="btn-mozz mt-6 inline-flex">
            Find a Location
          </Link>
        </div>
      </section>
    </div>
  );
}
