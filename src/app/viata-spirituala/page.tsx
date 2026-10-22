import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Church, CalendarDays, Sparkles, Users } from "lucide-react";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = {
  title: "Viață spirituală",
  description:
    "Capela „Sfântul Ierarh Alexandru” de la Căminul Luxab — moaște, slujbe, Taina Maslului și hramul de 30 august.",
};

const relics = [
  {
    name: "Moaștele Sf. Ierarh Alexandru",
    text: "Sfântul Ierarh Alexandru, ocrotitor al capelei, este cinstit ca apărător al dreptei credințe și mărturisitor al adevărului. Părțicele din sfintele sale moaște sunt păstrate în capelă spre închinarea beneficiarilor.",
  },
  {
    name: "Moaștele Sf. Pantelimon",
    text: "Părțicele din moaștele Sfântului Mare Mucenic și Tămăduitor Pantelimon, păstrate în capelă spre cinstire și închinare.",
  },
  {
    name: "Veșmânt al Sf. Cuvioase Parascheva",
    text: "Veșmântul Sfintei Cuvioase Parascheva, primit de la Iași și păstrat în capelă spre cinstirea ocrotitoarei Moldovei.",
  },
];

const services = [
  {
    icon: Church,
    title: "Sfânta Liturghie",
    text: "Sfânta Liturghie este săvârșită în cele două capele, în duminici și sărbători, precum și sâmbăta, cu participarea persoanelor vârstnice, a personalului și a credincioșilor prezenți.",
  },
  {
    icon: Sparkles,
    title: "Taina Sfântului Maslu",
    text: "Taina Sfântului Maslu este săvârșită pentru persoanele vârstnice și bolnave, inclusiv la căpătâiul celor care nu se pot deplasa.",
  },
  {
    icon: Users,
    title: "Cercuri pastorale și evenimente duhovnicești",
    text: "Centrele luxab găzduiesc deseori conferințe organizate în cadrul cercurilor pastorale ale preoților de caritate precum și alte evenimente socio-culturale.",
  },
  {
    icon: CalendarDays,
    title: "Hramurile capelelor",
    dates: [
      "27 iulie — Sf. Pantelimon",
      "30 august — Sf. Alexandru",
      "14 octombrie — Sf. Parascheva",
      "3 mai — Sf. Irodion de la Lainici",
      "29 iunie — Sf. Ap. Petru și Pavel",
    ],
    text: "Hramurile celor două capele sunt sărbătorite anual printr-un bogat program liturgic și filantropic, care cuprinde slujbe de priveghere, Sfânta Liturghie și activități dedicate persoanelor vârstnice din cadrul centrelor.",
  },
];

export default function ViataSpiritualaPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          label="Viață spirituală"
          title={
            <>
              Capela <em className="font-serif italic font-medium text-gold">Sfântul Ierarh Alexandru</em>
            </>
          }
          subtitle="Casă de rugăciune în incinta Căminului Luxab — Str. Occidentului nr. 25, Sector 1, București."
        />

        {/* Imagine */}
        <section className="pb-4">
          <div className="max-w-7xl mx-auto px-6">
            <div className="relative aspect-[21/7] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/liturghie-luxab.jpg"
                alt="Preoți slujind în capela Luxab, în prezența vârstnicilor"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </section>

        {/* Relicve */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center">
              <span className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.18em] text-gold mb-4">
                <span className="w-8 h-px bg-gold" /> Relicvele capelei <span className="w-8 h-px bg-gold" />
              </span>
              <h2 className="text-3xl md:text-[40px] font-semibold text-ink">
                Sfinte odoare în patrimoniul capelei
              </h2>
              <p className="mt-4 text-ink/60 max-w-2xl mx-auto">
                Moaștele Sf. Ierarh Alexandru și ale Sf. Cuvioase Parascheva de
                la Iași, alături de moaștele Sf. Pantelimon — trei daruri sfinte
                sub același acoperiș.
              </p>
            </div>
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {relics.map((r) => (
                <div key={r.name} className="bg-white border border-[#E8E2D8] rounded-2xl p-8">
                  <span className="font-serif text-3xl text-gold">✝</span>
                  <h3 className="text-lg font-semibold text-ink mt-4 mb-3">{r.name}</h3>
                  <p className="text-sm text-ink/60 leading-relaxed">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Slujbe */}
        <section className="py-16 md:py-20 bg-[#F9F6F1]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center">
              <span className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.18em] text-gold mb-4">
                <span className="w-8 h-px bg-gold" /> Slujirea <span className="w-8 h-px bg-gold" />
              </span>
              <h2 className="text-3xl md:text-[40px] font-semibold text-ink">
                Viața liturgică și activitatea pastorală
              </h2>
            </div>
            <div className="mt-12 grid sm:grid-cols-2 gap-6">
              {services.map((s) => (
                <div key={s.title} className="flex gap-5 bg-white border border-[#E8E2D8] rounded-2xl p-7">
                  <div className="size-12 shrink-0 rounded-xl bg-gold-pale flex items-center justify-center">
                    <s.icon className="size-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink mb-1.5">{s.title}</h3>
                    {"dates" in s && s.dates && (
                      <ul className="text-[13px] text-gold font-semibold space-y-0.5 mb-2">
                        {s.dates.map((d) => (
                          <li key={d}>{d}</li>
                        ))}
                      </ul>
                    )}
                    <p className="text-sm text-ink/60 leading-relaxed">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hram */}
        <section className="py-16 md:py-20 bg-ink text-[#E9E4D8]">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.1fr_.9fr] gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.18em] text-gold-light mb-4">
                <span className="w-8 h-px bg-gold-light" /> 30 August
              </span>
              <h2 className="text-3xl md:text-[40px] font-semibold text-white leading-tight">
                Hramul — rugăciune care devine filantropie
              </h2>
              <p className="mt-5 opacity-80 leading-relaxed">
                În fiecare an, de sărbătoarea Sfântului Ierarh Alexandru,
                capela își primește credincioșii într-o zi de bucurie dublă:
                Liturghie solemnă, pomenirea ctitorilor și binefăcătorilor — și
                daruri concrete pentru copiii defavorizați, prezenți alături de
                vârstnicii căminului.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="space-y-4 text-sm">
                {[
                  ["29 aug · 17:00", "Vecernia unită cu Litia și Utrenia"],
                  ["30 aug · 09:00", "Acatistul Sfântului Ierarh Alexandru"],
                  ["30 aug · 10:00", "Sfânta Liturghie — Corala „Divina Armonie”"],
                  ["După slujbă", "Pomenirea ctitorilor și daruri pentru copii"],
                ].map(([t, s]) => (
                  <div key={t} className="flex gap-4 border-b border-white/10 pb-3.5 last:border-0 last:pb-0">
                    <span className="text-gold-light font-bold min-w-[110px] font-heading">{t}</span>
                    <span>{s}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/evenimente"
                className="mt-7 inline-flex items-center gap-2 bg-gold text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#967653] transition-colors"
              >
                Programul complet →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
