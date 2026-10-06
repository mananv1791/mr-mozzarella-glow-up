import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Pizza } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-white mt-auto">
      <div className="checker-strip h-3 w-full" />
      <div className="mx-auto max-w-7xl px-4 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-tomato border-2 border-gold">
              <Pizza className="h-6 w-6 text-white" />
            </span>
            <span className="font-display text-2xl">
              <span>Mr. </span>
              <span className="text-gold">Mozzarella</span>
            </span>
          </Link>
          <p className="mt-3 font-hand text-gold text-lg">
            "Pizza you'll want to bring home to meet Mom!"
          </p>
          <p className="mt-3 text-white/70 text-sm">Open 7 Days a Week from 11am</p>
        </div>

        <div>
          <h4 className="font-display text-xl text-gold mb-3">Explore</h4>
          <ul className="space-y-2 text-white/80">
            {[
              ["/", "Home"],
              ["/menu", "Menu"],
              ["/locations", "Locations"],
              ["/about", "About"],
              ["/franchise", "Franchise"],
              ["/contact", "Contact"],
              ["/signup", "Email Signup"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-gold transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xl text-gold mb-3">Stay Saucy</h4>
          <p className="text-white/80 text-sm mb-3">
            Follow along for daily specials and cheesy goodness.
          </p>
          <div className="flex gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-full border-2 border-white/30 hover:border-gold hover:text-gold transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border-2 border-white/30 hover:border-gold hover:text-gold transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        © 2025 Mr. Mozzarella. All Rights Reserved.
      </div>
    </footer>
  );
}
