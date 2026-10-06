import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, TrendingUp, Users, Wrench, GraduationCap } from "lucide-react";

export const Route = createFileRoute("/franchise")({
  head: () => ({
    meta: [
      { title: "Franchise — Mr. Mozzarella | Bring Mr. Mozz to Your Town" },
      {
        name: "description",
        content:
          "Franchise with a proven Ontario pizza brand. Full training, scalable ops, loyal customers since 1997.",
      },
      { property: "og:title", content: "Bring Mr. Mozz to Your Town" },
      { property: "og:description", content: "Our possibilities for growth are endless." },
    ],
  }),
  component: FranchisePage,
});

const points = [
  { icon: TrendingUp, title: "Proven brand since 1997" },
  { icon: Users, title: "Loyal, repeat customer base" },
  { icon: Wrench, title: "Simple, scalable operations" },
  { icon: GraduationCap, title: "Full training & support provided" },
];

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().min(7, "Phone required").max(30),
  city: z.string().trim().min(1, "City required").max(120),
  message: z.string().trim().min(10, "Tell us a bit more").max(2000),
});

function FranchisePage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      for (const issue of result.error.issues) errs[issue.path[0] as string] = issue.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <div>
      <section className="bg-charcoal text-white py-20 text-center checker-bg">
        <div className="mx-auto max-w-4xl px-4">
          <p className="font-hand text-gold text-xl">Own a Mozz</p>
          <h1 className="font-display text-5xl md:text-7xl">Bring Mr. Mozz to Your Town</h1>
          <p className="mt-3 text-lg text-white/80">Our possibilities for growth are endless.</p>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center font-display text-4xl text-charcoal">
            Why Franchise With Us?
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {points.map((p) => (
              <div
                key={p.title}
                className="bg-white border-2 border-charcoal/10 hover:border-tomato rounded-2xl p-6 text-center hover:-translate-y-1 transition-all shadow-sm"
              >
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gold text-charcoal border-2 border-charcoal">
                  <p.icon className="h-7 w-7" />
                </div>
                <p className="mt-4 font-display text-xl text-charcoal">{p.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-tomato text-white py-16">
        <div className="mx-auto max-w-6xl px-4 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl text-gold">What's Included</h2>
            <ul className="mt-4 space-y-3">
              {[
                "Full kitchen build-out & equipment guidance",
                "Brand assets, recipes & training program",
                "Marketing playbook & launch support",
                "Ongoing operations & supplier network",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <CheckCircle2 className="h-6 w-6 text-gold flex-shrink-0" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl text-gold">Who We're Looking For</h2>
            <ul className="mt-4 space-y-3">
              {[
                "Passionate, community-focused operators",
                "Comfortable leading a small team",
                "A taste for hospitality (and pizza, obviously)",
                "Ready to invest in something they're proud of",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <CheckCircle2 className="h-6 w-6 text-gold flex-shrink-0" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-center font-display text-4xl text-charcoal">
            Start the Conversation
          </h2>
          <p className="text-center text-foreground/70 mt-2">
            Tell us about you. We'll be in touch within a few days.
          </p>

          {sent ? (
            <div className="mt-8 bg-basil text-white rounded-2xl p-8 text-center border-[3px] border-charcoal">
              <h3 className="font-display text-3xl">Got it. Thanks!</h3>
              <p className="mt-2">
                We'll reach out soon to talk pizza, partnership, and possibility.
              </p>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mt-8 bg-white rounded-3xl border-4 border-charcoal/10 p-6 md:p-8 shadow-md space-y-4"
            >
              <Field name="name" label="Full Name" errors={errors} />
              <Field name="email" label="Email" type="email" errors={errors} />
              <Field name="phone" label="Phone" type="tel" errors={errors} />
              <Field name="city" label="City / Province of Interest" errors={errors} />
              <Field name="message" label="Message" textarea errors={errors} />
              <button type="submit" className="btn-mozz w-full">
                Start the Conversation
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

function Field({
  name,
  label,
  type = "text",
  textarea,
  errors,
}: {
  name: string;
  label: string;
  type?: string;
  textarea?: boolean;
  errors: Record<string, string>;
}) {
  const err = errors[name];
  const base =
    "w-full rounded-xl border-2 border-charcoal/20 bg-cream/40 px-4 py-3 font-body focus:border-tomato focus:outline-none transition-colors";
  return (
    <div>
      <label htmlFor={name} className="block font-display text-lg text-charcoal mb-1">
        {label}
      </label>
      {textarea ? (
        <textarea id={name} name={name} rows={4} className={base} />
      ) : (
        <input id={name} name={name} type={type} className={base} />
      )}
      {err && <p className="mt-1 text-sm text-tomato">{err}</p>}
    </div>
  );
}
