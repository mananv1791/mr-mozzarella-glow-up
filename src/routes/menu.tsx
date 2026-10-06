import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Star } from "lucide-react";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Mr. Mozzarella | Pizza, Wings, Subs, Poutine" },
      {
        name: "description",
        content:
          "Fresh homemade pizza, crispy wings with 25+ sauces, subs, pasta, poutine and more. Everything made fresh every day.",
      },
      { property: "og:title", content: "The Good Stuff — Mr. Mozzarella Menu" },
      { property: "og:description", content: "Everything made fresh, every single day." },
    ],
  }),
  component: MenuPage,
});

const categories = [
  "Pizza",
  "Wings",
  "Subs & Wraps",
  "Pasta",
  "Poutine",
  "Sides",
  "Drinks",
  "Desserts",
] as const;
type Cat = (typeof categories)[number];

const pizzas = [
  {
    name: "Mr. Mozzarella Special",
    desc: "Pepperoni, mushrooms, green peppers, onions & extra mozzarella.",
    img: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=700&q=80",
    fav: true,
  },
  {
    name: "BBQ Chicken",
    desc: "Smoky BBQ sauce, grilled chicken, red onion, fresh cilantro.",
    img: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=700&q=80",
  },
  {
    name: "Veggie Supreme",
    desc: "Mushrooms, peppers, onions, olives, tomatoes & spinach.",
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=700&q=80",
  },
  {
    name: "Meat Lovers",
    desc: "Pepperoni, bacon, ham, sausage, ground beef. Heavy in the best way.",
    img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=700&q=80",
  },
  {
    name: "Hawaiian",
    desc: "Ham, pineapple, mozzarella. We don't judge — we deliver.",
    img: "https://images.unsplash.com/photo-1593504049359-74330189a345?w=700&q=80",
  },
  {
    name: "Buffalo Chicken",
    desc: "Spicy buffalo sauce, breaded chicken, mozzarella, blue cheese drizzle.",
    img: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=700&q=80",
  },
];

const sauces = [
  "Honey Garlic",
  "Buffalo",
  "BBQ",
  "Suicide",
  "Sweet Chili",
  "Lemon Pepper",
  "Cajun",
  "Salt & Pepper",
  "Teriyaki",
  "Hot Honey",
  "Mango Habanero",
  "Garlic Parmesan",
  "Jerk",
  "Maple Bacon",
  "Buffalo Ranch",
  "Sriracha",
  "Korean BBQ",
  "Carolina Reaper",
  "Mild",
  "Medium",
  "Hot",
  "Extra Hot",
  "Honey BBQ",
  "Chipotle",
  "Dill Pickle",
];

const subs = [
  {
    name: "Italian Sub",
    desc: "Salami, capicola, ham, provolone, lettuce, tomato, oil & vinegar.",
  },
  { name: "Chicken Parm Sub", desc: "Breaded chicken, marinara, mozzarella, baked to perfection." },
  { name: "Meatball Sub", desc: "House-made meatballs, marinara, melted mozzarella." },
  { name: "Veggie Wrap", desc: "Grilled veggies, hummus, spinach in a warm flour wrap." },
];

const pasta = [
  { name: "Spaghetti & Meatballs", desc: "Classic marinara with our house meatballs." },
  { name: "Penne Alfredo", desc: "Creamy alfredo, parmesan, fresh parsley. Add chicken." },
  { name: "Lasagna", desc: "Layers of pasta, meat sauce, ricotta & mozzarella." },
];

const poutines = [
  { name: "Classic Poutine", desc: "Hand-cut fries, fresh cheese curds, hot gravy." },
  { name: "Pulled Pork Poutine", desc: "Slow-cooked pork, BBQ drizzle, curds, gravy." },
  { name: "Buffalo Chicken Poutine", desc: "Crispy chicken, buffalo sauce, curds, gravy." },
];

const sides = [
  { name: "Garlic Bread", desc: "With or without cheese — your call." },
  { name: "Caesar Salad", desc: "Crisp romaine, croutons, parmesan, house dressing." },
  { name: "Onion Rings", desc: "Golden, crispy, hand-battered." },
  { name: "Fries", desc: "Hand-cut, lightly seasoned." },
];

const drinks = [
  { name: "Fountain Pop", desc: "Coke, Diet Coke, Sprite, Root Beer & more." },
  { name: "Bottled Water", desc: "Still or sparkling." },
  { name: "Iced Tea", desc: "Brewed fresh daily." },
];

const desserts = [
  { name: "Chocolate Brownie", desc: "Warm, gooey, with chocolate drizzle." },
  { name: "Cinnamon Bread Sticks", desc: "Sweet pizza dough, cinnamon sugar, icing dip." },
  { name: "Cheesecake", desc: "Classic New York style." },
];

function MenuPage() {
  const [active, setActive] = useState<Cat>("Pizza");

  return (
    <div>
      <section className="bg-charcoal text-white py-16 md:py-20 text-center relative checker-bg">
        <div className="relative mx-auto max-w-4xl px-4">
          <p className="font-hand text-gold text-xl">The Menu</p>
          <h1 className="font-display text-5xl md:text-7xl">The Good Stuff</h1>
          <p className="mt-3 text-lg text-white/80">Everything made fresh, every single day.</p>
        </div>
      </section>

      {/* Tabs */}
      <div className="sticky top-[68px] z-40 bg-cream/95 backdrop-blur border-b-2 border-charcoal/10">
        <div className="mx-auto max-w-7xl px-4 py-3 flex gap-2 overflow-x-auto">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-full font-display text-lg whitespace-nowrap border-2 transition-all ${
                active === c
                  ? "bg-tomato text-white border-charcoal"
                  : "bg-white text-charcoal border-charcoal/20 hover:border-tomato"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <section className="bg-cream py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4">
          {active === "Pizza" && (
            <div>
              <p className="text-center max-w-2xl mx-auto text-foreground/70 italic mb-8">
                All pizzas made on fresh, homemade dough. Not thin crust — light, airy, and
                perfectly crispy.
              </p>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {pizzas.map((p) => (
                  <article
                    key={p.name}
                    className="bg-white rounded-3xl overflow-hidden border-2 border-charcoal/10 hover:border-tomato hover:-translate-y-1 transition-all shadow-md"
                  >
                    <div className="relative aspect-[4/3]">
                      <img
                        src={p.img}
                        alt={p.name}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                      {p.fav && (
                        <span className="absolute top-3 left-3 bg-gold border-2 border-charcoal rounded-full px-3 py-1 font-hand text-charcoal flex items-center gap-1 text-sm">
                          <Star className="h-4 w-4 fill-charcoal" /> Fan Favourite
                        </span>
                      )}
                    </div>
                    <div className="p-5">
                      <div className="flex flex-wrap gap-1 mb-2">
                        {["S", "M", "L", "XL"].map((s) => (
                          <span
                            key={s}
                            className="text-xs px-2 py-1 bg-cream border border-charcoal/20 rounded-full font-bold"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                      <h3 className="font-display text-2xl text-charcoal">{p.name}</h3>
                      <p className="mt-1 text-sm text-foreground/70">{p.desc}</p>
                      <Link
                        to="/locations"
                        className="mt-4 inline-flex btn-mozz"
                        style={{ padding: "0.5rem 1rem", fontSize: "0.95rem" }}
                      >
                        Customize & Order
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {active === "Wings" && (
            <div>
              <p className="text-center max-w-2xl mx-auto text-foreground/80 mb-2 text-lg">
                Baked in our special blend of spices, then fried to crispy perfection.
              </p>
              <div className="flex justify-center gap-2 flex-wrap mb-8">
                {["Original", "Breaded", "Boneless"].map((t) => (
                  <span
                    key={t}
                    className="px-4 py-2 rounded-full bg-charcoal text-gold font-display text-lg border-2 border-gold"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="bg-white rounded-3xl border-4 border-tomato/20 p-6 md:p-10 shadow-md">
                <h3 className="font-display text-3xl text-charcoal text-center">
                  25+ Sauces. Pick Your Poison.
                </h3>
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {sauces.map((s, i) => (
                    <span
                      key={s}
                      className="px-4 py-2 rounded-full font-bold text-sm border-2"
                      style={{
                        background:
                          i % 3 === 0
                            ? "var(--tomato)"
                            : i % 3 === 1
                              ? "var(--gold)"
                              : "var(--basil)",
                        color: i % 3 === 1 ? "var(--charcoal)" : "white",
                        borderColor: "var(--charcoal)",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <p className="mt-8 text-center font-hand text-tomato text-xl">
                  Our wings are light, crispy, and sauced to perfection — never heavy or greasy.
                </p>
              </div>
            </div>
          )}

          {active === "Subs & Wraps" && <CardList items={subs} />}
          {active === "Pasta" && <CardList items={pasta} />}
          {active === "Poutine" && (
            <div>
              <div className="bg-charcoal text-white rounded-3xl p-8 md:p-12 mb-8 text-center border-4 border-gold">
                <h3 className="font-display text-4xl text-gold">Canada's Coziest Poutine</h3>
                <p className="mt-2 text-white/80">
                  Hand-cut fries. Fresh cheese curds. Hot, savoury gravy.
                </p>
              </div>
              <CardList items={poutines} />
            </div>
          )}
          {active === "Sides" && <CardList items={sides} />}
          {active === "Drinks" && <CardList items={drinks} />}
          {active === "Desserts" && <CardList items={desserts} />}

          <p className="mt-12 text-center text-sm italic text-foreground/60">
            Prices and availability may vary by location. Ask your local Mr. Mozz about daily
            specials!
          </p>
        </div>
      </section>
    </div>
  );
}

function CardList({ items }: { items: { name: string; desc: string }[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((i) => (
        <div
          key={i.name}
          className="bg-white rounded-2xl border-2 border-charcoal/10 hover:border-tomato p-6 transition-all hover:-translate-y-1 shadow-sm hover:shadow-lg"
        >
          <h3 className="font-display text-2xl text-charcoal">{i.name}</h3>
          <p className="mt-2 text-foreground/70">{i.desc}</p>
        </div>
      ))}
    </div>
  );
}
