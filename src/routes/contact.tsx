import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, Facebook, Instagram, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Mr. Mozzarella" },
      {
        name: "description",
        content:
          "Get in touch with Mr. Mozzarella for catering, franchise inquiries, feedback, or general questions.",
      },
      { property: "og:title", content: "We'd Love to Hear From You" },
      { property: "og:description", content: "Contact Mr. Mozzarella." },
    ],
  }),
  component: ContactPage,
});

const subjects = ["General Inquiry", "Order Issue", "Catering", "Franchise", "Other"];

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  subject: z.string().min(1, "Pick a subject"),
  message: z.string().trim().min(5, "Tell us a bit more").max(2000),
});

const quickLocations = [
  { name: "Iroquois", phone: "(613) 652-1997" },
  { name: "Kemptville", phone: "(613) 258-1997" },
  { name: "Prescott", phone: "(613) 925-1997" },
  { name: "Winchester", phone: "(613) 774-1997" },
];

function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

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
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <div>
      <section className="bg-charcoal text-white py-20 text-center checker-bg">
        <div className="mx-auto max-w-4xl px-4">
          <p className="font-hand text-gold text-xl">Say hello</p>
          <h1 className="font-display text-5xl md:text-7xl">We'd Love to Hear From You</h1>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="mx-auto max-w-6xl px-4 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {sent ? (
              <div className="bg-basil text-white rounded-2xl p-8 text-center border-[3px] border-charcoal">
                <h3 className="font-display text-3xl">Message received!</h3>
                <p className="mt-2">We'll get back to you faster than a hot slice.</p>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="bg-white rounded-3xl border-4 border-charcoal/10 p-6 md:p-8 shadow-md space-y-4"
              >
                <Field name="name" label="Name" errors={errors} />
                <Field name="email" label="Email" type="email" errors={errors} />
                <div>
                  <label
                    htmlFor="subject"
                    className="block font-display text-lg text-charcoal mb-1"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full rounded-xl border-2 border-charcoal/20 bg-cream/40 px-4 py-3 focus:border-tomato focus:outline-none"
                  >
                    <option value="">Choose one…</option>
                    {subjects.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  {errors.subject && <p className="mt-1 text-sm text-tomato">{errors.subject}</p>}
                </div>
                <Field name="message" label="Message" textarea errors={errors} />
                <button type="submit" className="btn-mozz w-full">
                  Send Message
                </button>
              </form>
            )}
          </div>

          <aside className="space-y-6">
            <div className="bg-charcoal text-white rounded-2xl p-6 border-2 border-gold">
              <h3 className="font-display text-2xl text-gold">Get in touch</h3>
              <a
                href="mailto:hello@mrmozzarella.ca"
                className="mt-3 flex items-center gap-2 hover:text-gold"
              >
                <Mail className="h-5 w-5" /> hello@mrmozzarella.ca
              </a>
              <div className="mt-4 flex gap-3">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="grid h-10 w-10 place-items-center rounded-full border-2 border-white/30 hover:border-gold hover:text-gold"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="grid h-10 w-10 place-items-center rounded-full border-2 border-white/30 hover:border-gold hover:text-gold"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
              <p className="mt-4 text-sm text-white/70 italic">
                For order-specific questions, please contact your local location directly.
              </p>
            </div>

            <div className="bg-white border-2 border-charcoal/10 rounded-2xl p-6">
              <h3 className="font-display text-2xl text-charcoal">Quick Location Lines</h3>
              <ul className="mt-3 space-y-2">
                {quickLocations.map((l) => (
                  <li
                    key={l.name}
                    className="flex items-center justify-between gap-2 border-b border-charcoal/10 pb-2 last:border-0"
                  >
                    <span className="font-display text-lg">{l.name}</span>
                    <a
                      href={`tel:${l.phone}`}
                      className="inline-flex items-center gap-1 text-tomato hover:underline"
                    >
                      <Phone className="h-4 w-4" /> {l.phone}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
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
    "w-full rounded-xl border-2 border-charcoal/20 bg-cream/40 px-4 py-3 focus:border-tomato focus:outline-none";
  return (
    <div>
      <label htmlFor={name} className="block font-display text-lg text-charcoal mb-1">
        {label}
      </label>
      {textarea ? (
        <textarea id={name} name={name} rows={5} className={base} />
      ) : (
        <input id={name} name={name} type={type} className={base} />
      )}
      {err && <p className="mt-1 text-sm text-tomato">{err}</p>}
    </div>
  );
}
