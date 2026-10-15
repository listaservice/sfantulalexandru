"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Bird, Handshake, Backpack, Heart, Church } from "lucide-react";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";

const pillars = [
  {
    icon: Church,
    title: "Viață spirituală",
    description:
      "Slujbe și Taina Sfântului Maslu pentru vârstnicii din Luxab, cercuri pastorale ale preoților de caritate și hramul capelei, la 30 august.",
    href: "/viata-spirituala",
    cta: "Viață spirituală",
  },
  {
    icon: Handshake,
    title: "Vârstnicii din Luxab",
    description:
      "Vizite, sărbători și momente de bucurie pentru rezidenți — copiii le aduc cântece, flori și prezență, iar bunicii le dăruiesc înapoi.",
    href: "/proiecte",
    cta: "Poveștile noastre",
  },
  {
    icon: Backpack,
    title: "Copii defavorizați",
    description:
      "Proiectul „Educația: cheia spre viitor” și daruri concrete pentru copiii din familii vulnerabile ale Sectorului 1.",
    href: "/proiecte",
    cta: "Proiectele noastre",
  },
];

const relics = [
  { name: "Moaștele Sf. Ierarh Alexandru", note: "ocrotitorul capelei" },
  { name: "Moaștele Sf. Pantelimon", note: "tămăduitorul bolnavilor" },
  { name: "Veșmânt al Sf. Cuvioase Parascheva", note: "de la Iași" },
];

const hramProgram = [
  { time: "29 Aug · 17:00", text: "Vecernia unită cu Litia și Utrenia — în ajunul hramului" },
  { time: "30 Aug · 09:00", text: "Acatistul Sfântului Ierarh Alexandru" },
  { time: "30 Aug · 10:00", text: "Sfânta și Dumnezeiasca Liturghie — răspunsuri: Corala Academică „Divina Armonie”" },
  { time: "Pe tot parcursul", text: "Spre cinstire: moaștele Sf. Alexandru și Sf. Pantelimon, veșmântul Sf. Parascheva" },
];

const steps = [
  { title: "Identificăm nevoile", text: "Ascultăm și interacționăm direct cu familiile, școlile și autoritățile locale pentru a înțelege unde e cea mai mare nevoie." },
  { title: "Construim programe", text: "De la sprijin educațional la activități recreative, consiliere și asistență materială — soluții personalizate, sustenabile." },
  { title: "Mobilizăm resurse", text: "O rețea de voluntari, specialiști și donatori generoși. Fiecare resursă — timp, expertiză sau donație — face diferența." },
  { title: "Acționăm cu devotament", text: "Programe cu obiective clare și etape definite, monitorizate constant și adaptate nevoilor reale." },
];

function Label({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.18em] mb-4 ${
        light ? "text-gold-light" : "text-gold"
      }`}
    >
      <span className={`w-8 h-px ${light ? "bg-gold-light" : "bg-gold"}`} />
      {children}
      <span className={`w-8 h-px ${light ? "bg-gold-light" : "bg-gold"}`} />
    </span>
  );
}

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* ============ HERO ============ */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#FBF8F2] via-[#F6F0E6] to-[#EFE6D6] py-24 md:py-32">
          <span
            aria-hidden
            className="absolute -right-10 top-1/2 -translate-y-1/2 font-serif text-[380px] leading-none text-gold/[0.07] select-none pointer-events-none"
          >
            ✝
          </span>
          <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.2fr_.8fr] gap-12 items-center">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.18em] text-gold mb-5">
                <span className="w-8 h-px bg-gold" />
                Asociație filantropică · București, Sector 1
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-ink leading-[1.12]">
                Mâinile noastre ajută,{" "}
                <em className="font-serif italic font-medium text-gold">
                  Dumnezeu vindecă
                </em>{" "}
                și transformă.
              </h1>
              <p className="mt-7 text-lg text-ink/60 leading-relaxed max-w-xl">
                Asociația Sf. Ierarh Alexandru și Sf. Cuvioasă Parascheva.
                Construim o comunitate în care sărbătoarea devine faptă, iar
                fapta devine speranță — pentru vârstnici, pentru copii, pentru
                cei vulnerabili.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/doneaza"
                  className="inline-flex items-center gap-2 bg-gold text-white px-8 py-3.5 rounded-full font-bold text-[15px] hover:bg-[#967653] hover:-translate-y-0.5 transition-all"
                >
                  Donează acum <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/cine-suntem"
                  className="inline-flex items-center gap-2 border border-ink text-ink px-8 py-3.5 rounded-full font-bold text-[15px] hover:bg-ink hover:text-white transition-all"
                >
                  Descoperă misiunea
                </Link>
              </div>
              <div className="mt-14 flex flex-wrap gap-8">
                {[
                  ["Capela Luxab", "Str. Occidentului 25, Sector 1"],
                  ["Hram", "30 August — Sf. Ierarh Alexandru"],
                  ["Din 2022", "casă a moaștelor Sf. Alexandru"],
                ].map(([t, s]) => (
                  <div key={t} className="border-l-2 border-gold pl-4 text-[13.5px] text-ink/60">
                    <strong className="block text-ink text-sm font-heading">{t}</strong>
                    {s}
                  </div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex justify-center"
            >
              <Image
                src="/brand/sfalexandru.png"
                alt="Icoana Sfântului Ierarh Alexandru și a Sfintei Cuvioase Parascheva"
                width={460}
                height={460}
                className="drop-shadow-2xl w-[240px] h-auto lg:w-[460px]"
                priority
              />
            </motion.div>
          </div>
        </section>

        {/* ============ TRUST BAR ============ */}
        <div className="bg-ink text-[#CFC9BD]">
          <div className="max-w-7xl mx-auto flex flex-wrap">
            {[
              ["✦", "Cu binecuvântarea Patriarhiei", "Sub obârșia duhovnicească a Arhiepiscopiei Bucureștilor"],
              ["✚", "Moaștele Sf. Alexandru", "Fragment primit în dar de la Catedrala Episcopală din Alexandria"],
              ["❋", "Nimeni nu trece singur", "Prin încercări — misiunea preoților de caritate"],
            ].map(([ico, t, s], i) => (
              <div
                key={t}
                className={`flex-1 min-w-[260px] px-6 py-6 flex gap-4 items-start ${
                  i > 0 ? "border-l border-white/10" : ""
                }`}
              >
                <span className="text-gold-light text-xl leading-snug">{ico}</span>
                <div>
                  <strong className="block text-white text-sm font-heading font-semibold">{t}</strong>
                  <span className="text-[13px]">{s}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============ CELE 3 AXE ============ */}
        <section className="py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <Label>Ce facem</Label>
            <h2 className="text-3xl md:text-[42px] font-semibold text-ink leading-tight">
              Trei direcții, o singură misiune
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-ink/60 text-[17px] leading-relaxed">
              Din capela de la Luxab, lucrarea noastră se revarsă spre toți cei
              care au nevoie — vârstnici, copii și suflete în căutare de alinare.
            </p>
            <div className="mt-14 grid md:grid-cols-3 gap-6 text-left">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative overflow-hidden bg-white border border-[#E8E2D8] rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                  <div className="size-14 rounded-2xl bg-gold-pale flex items-center justify-center mb-6">
                    <p.icon className="size-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-semibold text-ink mb-2.5">{p.title}</h3>
                  <p className="text-sm text-ink/60 leading-relaxed">{p.description}</p>
                  <Link
                    href={p.href}
                    className="inline-block mt-5 text-gold font-bold text-sm hover:underline"
                  >
                    {p.cta} →
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ CAPELA ============ */}
        <section className="py-20 md:py-24 bg-[#F9F6F1]">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
            <div className="relative aspect-[4/3.4] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/capela-2022.jpg"
                alt="Catapeteasma capelei „Sfântul Ierarh Alexandru” de la Căminul Luxab"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <span className="absolute left-5 bottom-5 bg-white/90 rounded-lg px-4 py-2.5 text-xs text-ink">
                Capela „Sfântul Ierarh Alexandru” · Căminul Luxab
              </span>
            </div>
            <div>
              <span className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.18em] text-gold mb-4">
                <span className="w-8 h-px bg-gold" /> Inima asociației
              </span>
              <h2 className="text-3xl md:text-[42px] font-semibold text-ink leading-tight">
                Capela în care odihnesc moaștele Sfântului Alexandru
              </h2>
              <p className="mt-5 text-ink/60 leading-relaxed">
                La 16 ianuarie 2022, cu binecuvântarea Preafericitului Părinte
                Patriarh Daniel, capela a primit în dar un fragment din
                cinstitele moaște ale Sfântului Ierarh Alexandru, Arhiepiscopul
                Constantinopolului — de la Catedrala Episcopală din Alexandria,
                prin bunăvoința PS Galaction.
              </p>
              <div className="mt-7 grid gap-3">
                {relics.map((r) => (
                  <div
                    key={r.name}
                    className="flex gap-3.5 items-center bg-white border border-[#E8E2D8] rounded-xl px-4 py-3.5 text-sm"
                  >
                    <span className="size-2 rounded-full bg-gold shrink-0" />
                    <span>
                      <b className="text-ink">{r.name}</b> — {r.note}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ PROIECT VEDETĂ ============ */}
        <section className="py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.18em] text-gold mb-4">
                <span className="w-8 h-px bg-gold" /> Proiectul vedetă
              </span>
              <h2 className="text-3xl md:text-[42px] font-semibold text-ink leading-tight">
                „Educația: cheia spre viitor”
              </h2>
              <p className="mt-5 text-ink/60 leading-relaxed">
                Ajuns la a treia ediție, proiectul sprijină aproximativ 100 de
                copii beneficiari ai serviciilor sociale DGASPC Sector 1 — cu
                rechizite, ghiozdane complet echipate, haine și susținere
                continuă.
              </p>
              <ul className="mt-6 space-y-2.5 text-sm text-ink/80">
                {[
                  "Ediția a III-a — continuitate reală, nu promisiuni",
                  "~100 de copii sprijiniți prin DGASPC Sector 1",
                  "Ghiozdane echipate oferite și la hramul capelei",
                  "Parteneriat cu Centrul de zi „Sfânta Muceniță Sofia”",
                ].map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className="text-gold font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="relative aspect-[16/9] rounded-t-2xl overflow-hidden -mb-6">
                <Image
                  src="/images/educatie-100.webp"
                  alt="Copiii sprijiniți de proiectul „Educația: cheia spre viitor”"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="relative bg-gradient-to-br from-gold to-[#8F7350] rounded-2xl p-10 md:p-11 text-white shadow-2xl">
              <div className="font-serif text-7xl font-semibold leading-none">100</div>
              <div className="uppercase tracking-[0.14em] text-xs opacity-85 mt-2">
                copii sprijiniți în fiecare ediție
              </div>
              <hr className="border-white/25 my-7" />
              <p className="font-serif italic text-[15px] leading-relaxed opacity-90">
                „Fiecare copil merită o șansă la educație, siguranță și un viitor
                mai bun. Transformăm nevoile identificate în programe concrete
                și sustenabile.”
              </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ URMĂTORUL EVENIMENT ============ */}
        <section className="py-20 md:py-24 bg-ink text-[#E9E4D8]">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.2fr_.8fr] gap-12 lg:gap-16 items-center">
            <div>
              <Label light>Următorul eveniment</Label>
              <h2 className="text-3xl md:text-[42px] font-semibold text-white leading-tight">
                Hramul Capelei
                <br />
                <span className="font-serif italic font-medium text-gold-light">
                  Sfântul Ierarh Alexandru
                </span>
              </h2>
              <div className="mt-7 border-t border-white/10">
                {hramProgram.map((row) => (
                  <div
                    key={row.time}
                    className="flex gap-5 py-3.5 border-b border-white/10 text-[14.5px]"
                  >
                    <span className="text-gold-light font-bold min-w-[115px] font-heading">
                      {row.time}
                    </span>
                    <span>{row.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center gap-5">
              <div className="inline-flex flex-col items-center bg-gold text-white rounded-2xl px-7 py-4 min-w-[120px]">
                <b className="font-serif text-5xl leading-none">30</b>
                <span className="text-xs uppercase tracking-[0.14em] mt-1.5">August</span>
              </div>
              <p className="text-center text-sm opacity-80">
                Capela Căminului Luxab
                <br />
                Str. Occidentului nr. 25, Sector 1
              </p>
              <Link
                href="/evenimente"
                className="inline-flex items-center gap-2 border border-white/50 text-white px-7 py-3 rounded-full font-bold text-sm hover:bg-white/10 transition-colors"
              >
                Vezi toate evenimentele →
              </Link>
            </div>
          </div>
        </section>

        {/* ============ GALERIE ============ */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <Label>Clipe de la Luxab</Label>
            <h2 className="text-3xl md:text-[42px] font-semibold text-ink leading-tight">
              Comunitatea, în imagini
            </h2>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                ["/images/liturghie-luxab.jpg", "Sfânta Liturghie în capela Luxab"],
                ["/images/hram-2024.jpg", "Răspunsurile la strană, ziua hramului"],
                ["/images/luxab-2024.jpg", "Vârstnicii la sărbătoarea capelei"],
                ["/images/sobor-liturgic.jpg", "Sobor de preoți în capela Luxab"],
              ].map(([src, alt]) => (
                <div
                  key={src}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden group"
                >
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ CUM LUCRĂM ============ */}
        <section className="py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <Label>Cum lucrăm</Label>
            <h2 className="text-3xl md:text-[42px] font-semibold text-ink leading-tight">
              De la nevoie la faptă, în patru pași
            </h2>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
              {steps.map((s, i) => (
                <div
                  key={s.title}
                  className="p-7 border border-[#E8E2D8] rounded-2xl bg-white"
                >
                  <span className="font-serif text-4xl text-gold block mb-3.5">
                    0{i + 1}
                  </span>
                  <h4 className="text-base font-semibold text-ink mb-2">{s.title}</h4>
                  <p className="text-[13.5px] text-ink/60 leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 3.5% IMPOZIT ============ */}
        <section className="py-20 md:py-24 bg-gold-pale" id="impozit">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.1fr_.9fr] gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.18em] text-gold mb-4">
                <span className="w-8 h-px bg-gold" /> Fără să te coste nimic
              </span>
              <h2 className="text-3xl md:text-[42px] font-semibold text-ink leading-tight">
                Transformă impozitul tău în speranță
              </h2>
              <p className="mt-5 text-ink/60 leading-relaxed">
                Redirecționează 3.5% din impozitul pe venit către Asociația Sf.
                Alexandru — un gest simplu care devine rechizite, ghiozdane și
                clipe de bucurie pentru copiii aflați în dificultate.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-[#E8E2D8] p-9 shadow-xl">
              <div className="font-serif text-5xl text-gold font-semibold leading-none">3.5%</div>
              <h3 className="text-xl font-semibold text-ink mt-2">din impozitul pe venit</h3>
              <p className="text-sm text-ink/60 mt-2.5 mb-6">
                Completezi un formular o dată pe an. Noi ne ocupăm de restul.
              </p>
              <Link
                href="/doneaza#impozit"
                className="inline-flex items-center gap-2 bg-gold text-white px-7 py-3 rounded-full font-bold text-sm hover:bg-[#967653] transition-colors"
              >
                Completează formularul →
              </Link>
            </div>
          </div>
        </section>

        {/* ============ CTA FINAL ============ */}
        <section className="relative overflow-hidden py-20 md:py-24 bg-gradient-to-br from-[#3A352E] to-ink text-[#EDE7DA] text-center">
          <span
            aria-hidden
            className="absolute left-1/2 -top-16 -translate-x-1/2 font-serif text-[280px] text-gold/10 select-none pointer-events-none"
          >
            ✝
          </span>
          <div className="relative max-w-3xl mx-auto px-6">
            <Label light>Alătură-te misiunii</Label>
            <h2 className="font-serif italic font-medium text-2xl md:text-4xl text-gold-light">
              „Nimeni nu trece singur prin încercări.”
            </h2>
            <p className="max-w-xl mx-auto mt-5 opacity-85 leading-relaxed">
              Devino parte din povestea transformării — ca donator, ca voluntar,
              sau prin simpla redirecționare a impozitului.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-9">
              <Link
                href="/doneaza"
                className="inline-flex items-center gap-2 bg-gold text-white px-8 py-3.5 rounded-full font-bold text-[15px] hover:bg-[#967653] transition-colors"
              >
                Donează acum <Heart className="size-4" />
              </Link>
              <a
                href="mailto:voluntar@sfantulalexandru.ro"
                className="inline-flex items-center gap-2 border border-white/50 text-white px-8 py-3.5 rounded-full font-bold text-[15px] hover:bg-white/10 transition-colors"
              >
                Devino voluntar
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
