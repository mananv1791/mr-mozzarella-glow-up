import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Pizza } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/locations", label: "Locations" },
  { to: "/about", label: "About" },
  { to: "/franchise", label: "Franchise" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-charcoal text-white border-b-4 border-tomato">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-tomato border-2 border-gold group-hover:rotate-12 transition-transform">
            <Pizza className="h-6 w-6 text-white" />
          </span>
          <span className="font-display text-2xl leading-none">
            <span className="text-white">Mr. </span>
            <span className="text-gold">Mozzarella</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-display text-lg tracking-wide hover:text-gold transition-colors"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/locations"
          className="hidden md:inline-flex btn-mozz"
          style={{ padding: "0.6rem 1.2rem", fontSize: "1rem" }}
        >
          Order Now
        </Link>

        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 text-white"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-charcoal animate-fade-up">
          <div className="flex flex-col px-4 py-4 gap-3">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-display text-xl py-1 hover:text-gold"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/locations"
              onClick={() => setOpen(false)}
              className="btn-mozz mt-2 self-start"
              style={{ padding: "0.6rem 1.2rem", fontSize: "1rem" }}
            >
              Order Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
