import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Star, Navigation } from "lucide-react";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Locations — Mr. Mozzarella | Find a Pizza Near You" },
      {
        name: "description",
        content:
          "Find your nearest Mr. Mozzarella in Ontario. Locations in Iroquois, Kemptville, Prescott & Winchester.",
      },
      { property: "og:title", content: "Find Your Mr. Mozz" },
      { property: "og:description", content: "Multiple Ontario locations ready to serve you." },
    ],
  }),
  component: LocationsPage,
});

const locations = [
  {
    name: "Mr. Mozzarella Iroquois",
    address: "123 King St E, Iroquois, ON",
    phone: "(613) 652-1997",
    hours: "Mon–Sun 11am–9pm",
    rating: 4.6,
    reviews: 142,
    featured: true,
  },
  {
    name: "Mr. Mozzarella Kemptville",
    address: "456 Prescott St, Kemptville, ON",
    phone: "(613) 258-1997",
    hours: "Mon–Sun 11am–9pm",
    rating: 4.5,
    reviews: 98,
  },
  {
    name: "Mr. Mozzarella Prescott",
    address: "789 King St W, Prescott, ON",
    phone: "(613) 925-1997",
    hours: "Mon–Sun 11am–9pm",
    rating: 4.4,
    reviews: 76,
  },
  {
    name: "Mr. Mozzarella Winchester",
    address: "321 Main St, Winchester, ON",
    phone: "(613) 774-1997",
    hours: "Mon–Sun 11am–9pm",
    rating: 4.5,
    reviews: 64,
  },
];

function LocationsPage() {
  const featured = locations.find((l) => l.featured)!;
  const others = locations.filter((l) => !l.featured);

  return (
    <div>
      <section className="bg-charcoal text-white py-16 md:py-20 text-center checker-bg">
        <div className="mx-auto max-w-4xl px-4">
          <p className="font-hand text-gold text-xl">Stop by, say hi</p>
          <h1 className="font-display text-5xl md:text-7xl">Find Your Mr. Mozz</h1>
          <p className="mt-3 text-lg text-white/80">
            Multiple Ontario locations ready to serve you.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-4">
          {/* Featured */}
          <div className="bg-white rounded-3xl border-4 border-tomato shadow-xl overflow-hidden md:flex">
            <div className="md:w-1/2 bg-charcoal text-white p-8 md:p-10 relative">
              <div className="absolute top-4 right-4 bg-gold text-charcoal font-hand px-3 py-1 rounded-full border-2 border-charcoal text-sm">
                Featured
              </div>
              <p className="font-hand text-gold text-lg">Our Flagship</p>
              <h2 className="font-display text-4xl mt-1">{featured.name}</h2>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.round(featured.rating) ? "fill-gold text-gold" : "text-white/30"}`}
                    />
                  ))}
                </div>
                <span className="text-white/80 text-sm">
                  {featured.rating} ({featured.reviews} reviews)
                </span>
              </div>
              <div className="mt-6 space-y-3 text-white/90">
                <p className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-gold" /> {featured.address}
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-gold" />{" "}
                  <a href={`tel:${featured.phone}`} className="hover:text-gold">
                    {featured.phone}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-gold" /> {featured.hours} ·{" "}
                  <span className="text-basil">Open Now</span>
                </p>
                <p className="text-sm text-white/60">$10–$20 / person</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#"
                  className="btn-mozz-gold"
                  style={{ fontSize: "1rem", padding: "0.6rem 1.2rem" }}
                >
                  Order Online
                </a>
                <a
                  href="#"
                  className="btn-mozz-outline"
                  style={{ fontSize: "1rem", padding: "0.6rem 1.2rem" }}
                >
                  Get Directions
                </a>
              </div>
            </div>
            <div className="md:w-1/2 min-h-[300px] bg-cream">
              <iframe
                title="Iroquois map"
                src="https://www.google.com/maps?q=Iroquois,Ontario&output=embed"
                className="w-full h-full min-h-[300px] border-0"
                loading="lazy"
              />
            </div>
          </div>

          {/* Other locations */}
          <h2 className="mt-16 text-center font-display text-4xl text-charcoal">More Locations</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {others.map((l) => (
              <article
                key={l.name}
                className="bg-white rounded-3xl border-2 border-charcoal/10 hover:border-tomato hover:-translate-y-1 transition-all p-6 shadow-md"
              >
                <h3 className="font-display text-2xl text-charcoal">{l.name}</h3>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="h-4 w-4 fill-gold text-gold" />
                  <span className="text-sm text-foreground/70">
                    {l.rating} ({l.reviews})
                  </span>
                </div>
                <div className="mt-3 space-y-2 text-sm text-foreground/80">
                  <p className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-tomato mt-0.5" /> {l.address}
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-tomato" />{" "}
                    <a href={`tel:${l.phone}`} className="hover:text-tomato">
                      {l.phone}
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-tomato" /> {l.hours}
                  </p>
                </div>
                <div className="mt-5 flex gap-2 flex-wrap">
                  <a
                    href="#"
                    className="btn-mozz"
                    style={{ fontSize: "0.9rem", padding: "0.45rem 0.9rem" }}
                  >
                    Order
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 font-display text-tomato text-lg hover:gap-2 transition-all"
                  >
                    <Navigation className="h-4 w-4" /> Directions
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* All map */}
          <div className="mt-16 rounded-3xl overflow-hidden border-4 border-charcoal shadow-xl">
            <iframe
              title="All Mr. Mozzarella locations in Ontario"
              src="https://www.google.com/maps?q=Eastern+Ontario&output=embed"
              className="w-full h-[420px] border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
