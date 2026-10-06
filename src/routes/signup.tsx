import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Pizza } from "lucide-react";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Email Signup — Mr. Mozzarella" },
      {
        name: "description",
        content:
          "Be the first to know about specials, new menu items, and deals at Mr. Mozzarella.",
      },
      { property: "og:title", content: "Get the Good Stuff First 🍕" },
    ],
  }),
  component: SignupPage,
});

const schema = z.object({
  firstName: z.string().trim().min(1, "First name required").max(80),
  email: z.string().trim().email("Valid email required").max(255),
});

function SignupPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      for (const i of r.error.issues) errs[i.path[0] as string] = i.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setDone(true);
  }

  return (
    <section className="bg-charcoal text-white min-h-[80vh] py-20 relative overflow-hidden checker-bg">
      <div className="absolute -top-10 -right-10 opacity-10">
        <Pizza className="h-72 w-72 text-gold" />
      </div>
      <div className="relative mx-auto max-w-xl px-4 text-center">
        <div className="inline-block animate-fade-up">
          <Pizza className="mx-auto h-16 w-16 text-gold cheese-drip-anim" />
        </div>
        <h1 className="mt-4 font-display text-5xl md:text-6xl animate-fade-up">
          Get the Good Stuff First <span aria-hidden>🍕</span>
        </h1>
        <p className="mt-3 text-white/85 text-lg animate-fade-up">
          Be the first to know about specials, new menu items, and deals at Mr. Mozzarella.
        </p>

        {done ? (
          <div className="mt-10 bg-basil/90 border-[3px] border-charcoal rounded-2xl p-8 animate-fade-up">
            <h2 className="font-display text-3xl">You're in!</h2>
            <p className="mt-2">Check your inbox — fresh deals coming your way.</p>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mt-10 bg-white/10 backdrop-blur border-2 border-white/20 rounded-3xl p-6 md:p-8 text-left space-y-4 animate-fade-up"
          >
            <div>
              <label htmlFor="firstName" className="block font-display text-lg text-gold mb-1">
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                className="w-full rounded-xl border-2 border-white/30 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:border-gold focus:outline-none"
                placeholder="Pepperoni Pete"
              />
              {errors.firstName && <p className="mt-1 text-sm text-gold">{errors.firstName}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block font-display text-lg text-gold mb-1">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full rounded-xl border-2 border-white/30 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:border-gold focus:outline-none"
                placeholder="you@email.com"
              />
              {errors.email && <p className="mt-1 text-sm text-gold">{errors.email}</p>}
            </div>
            <button type="submit" className="btn-mozz-gold w-full">
              Count Me In!
            </button>
            <p className="text-xs text-white/60 text-center">
              No spam. Just pizza. Unsubscribe anytime.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
