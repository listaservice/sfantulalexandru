import type { Metadata } from "next";
import Image from "next/image";
import { CalendarDays, MapPin } from "lucide-react";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = {
  title: "Evenimente",
  description:
    "Hramul capelei, sărbători intergeneraționale și întâlniri ale preoților de caritate la Căminul Luxab.",
};

const events = [
  {
    date: "29–30 August",
    badge: "Anual",
    image: "/images/hram-2024.jpg",
    title: "Hramul Capelei — Sfântul Ierarh Alexandru",
    location: "Capela Căminului Luxab, Str. Occidentului 25, Sector 1",
    schedule: [
      "29 aug, 17:00 — Vecernia unită cu Litia și Utrenia",
      "30 aug, 09:00 — Acatistul Sfântului Ierarh Alexandru",
      "30 aug, 10:00 — Sfânta și Dumnezeiasca Liturghie (Corala „Divina Armonie”)",
      "Pomenirea ctitorilor și binefăcătorilor · daruri pentru copii",
    ],
  },
  {
    date: "Martie",
    badge: "Anual",
    image: "/images/luxab-2023.jpg",
    title: "Vestim bucuria primăverii",
    location: "Căminul Luxab",
    schedule: [
      "Copiii Centrului „Sfânta Muceniță Sofia” vizitează vârstnicii",
      "Cântece, flori și mărțișoare dăruite rezidenților",
    ],
  },
  {
    date: "Sfârșitul lunii mai",
    badge: "În ajun de 1 Iunie",
    image: "/images/anunt-luxab.jpg",
    title: "Ziua Copilului la Luxab",
    location: "Căminul Luxab",
    schedule: [
      "Copiii sărbătoriți cu daruri",
      "Vârstnicii le oferă la rândul lor cadouri celor mici",
    ],
  },
  {
    date: "Periodic",
    badge: "Recurent",
    image: "/images/liturghie-luxab.jpg",
    title: "Cercul pastoral al preoților de caritate",
    location: "Capela Luxab — gazdă pentru Sectorul 1",
    schedule: [
      "Taina Sfântului Maslu pentru vârstnici, inclusiv la căpătâi",
      "Întâlniri de consiliere și formare a preoților de caritate",
    ],
  },
];

export default function EvenimentePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          label="Evenimente"
          title={
            <>
              Sărbători care devin{" "}
              <em className="font-serif italic font-medium text-gold">fapte</em>
            </>
          }
          subtitle="Calendarul vieții asociației — liturgic și filantropic, mereu împreună."
        />

        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-6 space-y-6">
            {events.map((e) => (
              <article
                key={e.title}
                className="bg-white border border-[#E8E2D8] rounded-2xl overflow-hidden"
              >
                <div className="relative aspect-[21/7]">
                  <Image
                    src={e.image}
                    alt={e.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 896px"
                  />
                </div>
                <div className="p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 bg-gold text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    <CalendarDays className="size-3.5" /> {e.date}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wide text-gold">
                    {e.badge}
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-semibold text-ink">
                  {e.title}
                </h2>
                <p className="flex items-center gap-1.5 text-sm text-ink/50 mt-2">
                  <MapPin className="size-3.5 text-gold" /> {e.location}
                </p>
                <ul className="mt-5 space-y-2 text-sm text-ink/70">
                  {e.schedule.map((s) => (
                    <li key={s} className="flex gap-2.5">
                      <span className="text-gold">·</span>
                      {s}
                    </li>
                  ))}
                </ul>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
