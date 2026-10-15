import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Heart, Percent, HandHeart, Landmark } from "lucide-react";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = {
  title: "Donează",
  description:
    "Susține Asociația Creștină Sf. Alexandru — donații, redirecționarea a 3.5% din impozit și voluntariat.",
};

export default function DoneazaPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          label="Susține misiunea"
          title={
            <>
              Fiecare gest devine{" "}
              <em className="font-serif italic font-medium text-gold">speranță</em>
            </>
          }
          subtitle="Alege felul în care vrei să ajuți — donație directă, impozit redirecționat sau timpul tău."
        />

        {/* Metode */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
            {/* Donație */}
            <div className="bg-white border border-[#E8E2D8] rounded-2xl p-8 flex flex-col">
              <div className="size-12 rounded-xl bg-gold-pale flex items-center justify-center mb-5">
                <Heart className="size-5 text-gold" />
              </div>
              <h3 className="text-lg font-semibold text-ink mb-3">Donație directă</h3>
              <p className="text-sm text-ink/60 leading-relaxed flex-1">
                Orice sumă contează — se transformă direct în rechizite,
                ghiozdane, haine și momente de bucurie pentru copii și
                vârstnici.
              </p>
              <div className="mt-6 bg-gold-pale rounded-xl p-4 text-sm">
                <div className="flex items-center gap-2 font-semibold text-ink mb-1">
                  <Landmark className="size-4 text-gold" /> Cont donații
                </div>
                <p className="text-ink/60 text-xs">
                  IBAN disponibil la cerere — scrie-ne la{" "}
                  <a href="mailto:ivanalexandru@yahoo.com" className="text-gold font-semibold">
                    ivanalexandru@yahoo.com
                  </a>
                </p>
              </div>
            </div>

            {/* 3.5% */}
            <div className="bg-white border-2 border-gold rounded-2xl p-8 flex flex-col relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-white text-[11px] font-bold uppercase tracking-wide px-3 py-1 rounded-full">
                Recomandat
              </span>
              <div className="size-12 rounded-xl bg-gold-pale flex items-center justify-center mb-5">
                <Percent className="size-5 text-gold" />
              </div>
              <h3 className="text-lg font-semibold text-ink mb-3">Redirecționează 3.5%</h3>
              <p className="text-sm text-ink/60 leading-relaxed flex-1">
                Nu te costă nimic — din impozitul pe care oricum îl plătești,
                poți direcționa 3.5% către proiectele noastre. Completăm împreună
                formularul, o dată pe an.
              </p>
              <a
                href="mailto:ivanalexandru@yahoo.com?subject=Formular%203.5%25"
                className="mt-6 inline-flex items-center justify-center gap-2 bg-gold text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#967653] transition-colors"
              >
                Cere formularul →
              </a>
            </div>

            {/* Voluntariat */}
            <div className="bg-white border border-[#E8E2D8] rounded-2xl p-8 flex flex-col">
              <div className="size-12 rounded-xl bg-gold-pale flex items-center justify-center mb-5">
                <HandHeart className="size-5 text-gold" />
              </div>
              <h3 className="text-lg font-semibold text-ink mb-3">Voluntariat</h3>
              <p className="text-sm text-ink/60 leading-relaxed flex-1">
                Timpul și prezența ta schimbă vieți — la vizite, la pregătirea
                darurilor, la evenimentele capelei.
              </p>
              <a
                href="mailto:voluntar@sfantulalexandru.ro"
                className="mt-6 inline-flex items-center justify-center gap-2 border border-ink text-ink px-6 py-3 rounded-full font-bold text-sm hover:bg-ink hover:text-white transition-all"
              >
                Devino voluntar →
              </a>
            </div>
          </div>
        </section>

        {/* 3.5% detalii */}
        <section id="impozit" className="py-16 md:py-20 bg-gold-pale">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="font-serif text-6xl text-gold font-semibold">3.5%</div>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink mt-3">
              Cum funcționează redirecționarea
            </h2>
            <div className="mt-10 grid sm:grid-cols-3 gap-5 text-left">
              {[
                ["1", "Ne ceri formularul", "Scrie-ne la ivanalexandru@yahoo.com și îți trimitem formularul precompletat."],
                ["2", "Îl semnezi", "Completezi datele personale și semnezi — durează mai puțin de 5 minute."],
                ["3", "Noi îl depunem", "Trimitem formularul la ANAF. Impozitul tău devine ajutor concret."],
              ].map(([n, t, s]) => (
                <div key={n} className="bg-white rounded-2xl border border-[#E8E2D8] p-6">
                  <span className="font-serif text-3xl text-gold">{n}</span>
                  <h4 className="font-semibold text-ink mt-3 mb-1.5">{t}</h4>
                  <p className="text-[13px] text-ink/60 leading-relaxed">{s}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transparență */}
        <section className="py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-lg mb-10">
              <Image
                src="/images/preot-carte.jpg"
                alt="Pr. Alexandru Ivan slujind în capela Luxab"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 768px"
              />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink">
              Unde ajunge ajutorul tău
            </h2>
            <p className="mt-5 text-ink/60 leading-relaxed">
              Lucrăm transparent, în cadrul sectorului social-filantropic al
              Arhiepiscopiei Bucureștilor. Donațiile susțin proiectul
              „Educația: cheia spre viitor” (~100 de copii DGASPC Sector 1),
              darurile pentru vârstnicii Luxab și activitățile capelei.
            </p>
            <p className="mt-8 font-serif italic text-lg text-gold">
              „Nimeni nu trece singur prin încercări.”
            </p>
            <p className="text-xs text-ink/50 mt-2">— pr. Ioan Alexandru Ivan, președintele asociației</p>
            <Link
              href="/proiecte"
              className="mt-8 inline-flex items-center gap-2 text-gold font-bold text-sm hover:underline"
            >
              Vezi proiectele pe care le susții →
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
