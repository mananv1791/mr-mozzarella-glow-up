import { createFileRoute, Link } from "@tanstack/react-router";
import { Flame, Truck, Star, Wheat, ArrowRight } from "lucide-react";
import { CheeseDrip } from "../components/site/CheeseDrip";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mr. Mozzarella — Fresh Homemade Pizza in Ontario Since 1997" },
      {
        name: "description",
        content:
          "Homemade dough daily, 25+ wing sauces, subs, poutine & legendary service. Order now from your nearest Mr. Mozz.",
      },
      {
        property: "og:title",
        content: "Mr. Mozzarella — Pizza you'll want to bring home to meet Mom!",
      },
      { property: "og:description", content: "Family-owned Ontario pizzeria since 1997." },
      {
        property: "og:image",
        content: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&q=80",
      },
    ],
  }),
  component: Home,
});

const features = [
  { icon: Wheat, title: "Homemade Dough Daily", text: "Never frozen. Made fresh every morning." },
  { icon: Flame, title: "25+ Wing Sauces", text: "From Honey Garlic to Suicide — we've got heat." },
  { icon: Truck, title: "Fast Delivery & Pickup", text: "Hot pizza, on your doorstep, on time." },
  { icon: Star, title: "4.6-Star Rated", text: "Loved by Ontario families for 25+ years." },
];

const menuItems = [
  {
    name: "Mr. Mozz Pizzas",
    img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80",
    desc: "Light, airy, perfectly crispy crust with fresh toppings.",
    tag: "Signature",
  },
  {
    name: "Crispy Wings",
    img: "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=800&q=80",
    desc: "Baked, then fried. No thick batter — just flavor.",
    tag: "Fan Favourite",
  },
  {
    name: "Subs & Poutine",
    img: "https://images.unsplash.com/photo-1626078299034-94ef21efcdc6?w=800&q=80",
    desc: "Loaded subs and Canada's coziest poutine.",
    tag: "Local",
  },
];

const reviews = [
  {
    quote:
      "No surprise, they serve standard pizza and wings type stuff here but damn they do it right.",
    author: "Google Review",
    stars: 5,
  },
  { quote: "We absolutely love their menu and customer service!", author: "TripAdvisor", stars: 5 },
  {
    quote: "Best location in 100 miles hands down love them keep up the amazing work!",
    author: "Google Review",
    stars: 5,
  },
  {
    quote:
      "The pizza and poutine are excellent. My wife loves their wings because they don't use thick batter.",
    author: "Google Review",
    stars: 5,
  },
];

function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative bg-charcoal text-white overflow-hidden checker-bg">
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/60 to-charcoal" />
        <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-32 md:pt-28 md:pb-40 text-center">
          <p className="font-hand text-gold text-xl md:text-2xl animate-fade-up">
            Est. 1997 · Ontario
          </p>
          <h1 className="mt-3 font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] animate-fade-up">
            Pizza You'll Want to <br />
            <span className="text-gold">Bring Home to Meet Mom!</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-white/85 animate-fade-up">
            Homemade dough. Freshest ingredients. Made with love since 1997.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 animate-fade-up">
            <Link to="/locations" className="btn-mozz">
              Order Online
            </Link>
            <Link to="/locations" className="btn-mozz-outline">
              Find a Location
            </Link>
          </div>
        </div>
        <CheeseDrip color="#FDF6EC" />
      </section>

      {/* WHY MR MOZZ */}
      <section className="bg-cream py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center font-display text-4xl md:text-5xl text-charcoal">
            Why Mr. Mozz?
          </h2>
          <p className="text-center font-hand text-tomato text-xl mt-2">
            The good stuff, every single time.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-2xl border-2 border-charcoal/10 p-6 text-center hover:border-tomato hover:-translate-y-1 transition-all shadow-sm hover:shadow-lg"
              >
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-tomato text-white">
                  <f.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-4 font-display text-2xl text-charcoal">{f.title}</h3>
                <p className="mt-2 text-sm text-foreground/70">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIGNATURE MENU */}
      <section className="bg-cream pb-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <p className="font-hand text-tomato text-xl">Straight from the oven</p>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal">
              Signature Menu Highlights
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {menuItems.map((m) => (
              <article
                key={m.name}
                className="group bg-white rounded-3xl overflow-hidden border-4 border-tomato/20 hover:border-tomato transition-all shadow-md hover:shadow-2xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={m.img}
                    alt={m.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-gold text-charcoal font-hand px-3 py-1 rounded-full text-sm border-2 border-charcoal">
                    {m.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-3xl text-charcoal">{m.name}</h3>
                  <p className="mt-2 text-foreground/70">{m.desc}</p>
                  <Link
                    to="/menu"
                    className="mt-4 inline-flex items-center gap-1 font-display text-tomato text-lg hover:gap-2 transition-all"
                  >
                    Order Now <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-tomato text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 checker-bg opacity-50" />
        <div className="relative mx-auto max-w-7xl px-4">
          <h2 className="text-center font-display text-4xl md:text-5xl">Folks Are Talkin'</h2>
          <p className="text-center font-hand text-gold text-xl mt-1">
            Real reviews from real Mozz lovers
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {reviews.map((r, i) => (
              <blockquote
                key={i}
                className="bg-white/10 backdrop-blur border-2 border-white/20 rounded-2xl p-6"
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <Star key={j} className="h-5 w-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-serif text-lg italic">"{r.quote}"</p>
                <footer className="mt-3 font-hand text-gold">— {r.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-6xl px-4 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="font-hand text-tomato text-xl">Our Story</p>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal mt-1">
              A family business with a serious cheese addiction.
            </h2>
            <p className="mt-5 text-lg text-foreground/80">
              Founded in 1997, Mr. Mozzarella is a family-owned chain that's quickly become
              Ontario's go-to for freshly made pizza. We believe you get what you pay for — and our
              customers agree.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 font-display text-2xl text-tomato hover:gap-3 transition-all"
            >
              Our Story <ArrowRight className="h-6 w-6" />
            </Link>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1542834369-f10ebf06d3e0?w=1000&q=80"
              alt="Hand stretching pizza dough"
              className="rounded-3xl border-4 border-charcoal shadow-xl object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-4 -right-4 bg-gold text-charcoal font-display text-xl px-4 py-2 rounded-xl border-[3px] border-charcoal rotate-6">
              Since '97
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-charcoal py-16 text-white text-center">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="font-display text-5xl md:text-6xl">Ready to Order?</h2>
          <p className="mt-3 font-hand text-gold text-xl">Hot, fresh, and waiting for you.</p>
          <Link to="/locations" className="btn-mozz mt-6 inline-flex">
            Find Your Nearest Location
          </Link>
        </div>
      </section>
    </div>
  );
}
