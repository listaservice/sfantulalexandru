import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Compass, Eye } from "lucide-react";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = {
  title: "Cine suntem",
  description:
    "Asociația Creștină „Sfântul Ierarh Alexandru și Sfânta Cuvioasă Parascheva” — misiunea, viziunea și valorile noastre.",
};

const values = [
  { title: "Compasiune", text: "Iubirea divină ne inspiră să privim fiecare persoană cu demnitate și respect, cultivând în noi o compasiune autentică care depășește simpla milă și recunoaște valoarea infinită a fiecărei ființe umane." },
  { title: "Unitate", text: "În spiritul comuniunii creștine, Dumnezeu ne ajută să construim o echipă unită prin valori comune, depășind diferențele și lucrând împreună în armonie pentru binele celor pe care îi servim." },
  { title: "Înțelepciune", text: "Dumnezeu ne călăuzește în luarea deciziilor importante, oferindu-ne discernământul necesar pentru a alege cele mai potrivite căi de acțiune și pentru a folosi cu responsabilitate resursele încredințate." },
  { title: "Putere", text: "Prin credință primim puterea de a persevera în fața obstacolelor, de a continua când drumul este greu și de a găsi resurse interioare pentru a depăși momentele de încercare din activitatea noastră." },
  { title: "Inspirație", text: "Dumnezeu ne oferă viziunea și inspirația pentru proiectele noastre, deschizându-ne ochii spre nevoile reale ale comunității și ajutându-ne să vedem potențialul de transformare chiar și în cele mai dificile situații." },
  { title: "Speranță", text: "Credința ne umple de speranță neclintită chiar și în cele mai dificile situații, dându-ne convingerea că transformarea este posibilă și că fiecare efort al nostru, oricât de mic, contribuie la un bine mai mare în planul divin." },
];

export default function CineSuntemPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          label="Cine suntem"
          title={
            <>
              Punctul de întâlnire dintre <em className="font-serif italic font-medium text-gold">viziune</em> și <em className="font-serif italic font-medium text-gold">faptă</em>
            </>
          }
          subtitle="O asociație filantropică născută în jurul Capelei „Sfântul Ierarh Alexandru” de la Căminul de bătrâni Luxab, Sector 1, București — cu binecuvântarea Arhiepiscopiei Bucureștilor."
        />

        {/* Povestea */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="relative aspect-[21/8] rounded-2xl overflow-hidden shadow-lg mb-10">
              <Image
                src="/images/cine-suntem.jpg"
                alt="Sobor de preoți la slujbă în capela Luxab"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 896px"
              />
            </div>
            <div className="space-y-5 text-ink/70 text-[17px] leading-relaxed">
              <p className="text-xl text-ink font-heading font-medium">
                Asociația Creștină Sf. Ierarh Alexandru și Sf. Cuvioasă
                Parascheva reprezintă punctul de întâlnire dintre viziune și
                acțiune
                concretă în sprijinul celor vulnerabili.
              </p>
              <p>
                Ne dorim să fim catalizatorul schimbării pentru copiii și
                familiile care au nevoie de o șansă. Ce ne diferențiază este
                abordarea noastră integrată — nu oferim doar ajutor de moment,
                ci construim soluții sustenabile care transformă destine.
              </p>
              <p>
                Ne-am născut în jurul Capelei „Sfântul Ierarh Alexandru” din
                incinta Căminului de bătrâni Luxab — un loc unde rugăciunea și
                filantropia merg mână în mână. De aici, lucrarea noastră se
                revarsă în trei direcții: viața spirituală a comunității,
                prezența alături de vârstnici și proiecte concrete pentru
                copiii defavorizați.
              </p>
              <p>
                Suntem parte a sectorului social-filantropic al Arhiepiscopiei
                Bucureștilor și lucrăm alături de preoții de caritate, de
                familia Luxab și de o rețea de voluntari și parteneri care
                cred, ca și noi, că <b className="text-ink">nimeni nu trebuie
                să treacă singur prin încercări</b>.
              </p>
            </div>
          </div>
        </section>

        {/* Misiune + Viziune */}
        <section className="py-16 md:py-20 bg-[#F9F6F1]">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-[#E8E2D8] rounded-2xl p-9">
              <div className="size-12 rounded-xl bg-gold-pale flex items-center justify-center mb-5">
                <Compass className="size-5 text-gold" />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Misiunea</span>
              <p className="mt-4 text-xl text-ink leading-relaxed font-heading font-medium">
                Să aducem lumina credinței și ajutorul concret acolo unde
                suferința e mai apăsătoare — la căpătâiul bolnavului, în camera
                vârstnicului singur, în ghiozdanul copilului defavorizat.
              </p>
              <p className="mt-5 font-serif italic text-gold">
                „Mâinile noastre ajută, Dumnezeu vindecă și transformă.”
              </p>
            </div>
            <div className="bg-white border border-[#E8E2D8] rounded-2xl p-9">
              <div className="size-12 rounded-xl bg-gold-pale flex items-center justify-center mb-5">
                <Eye className="size-5 text-gold" />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Viziunea</span>
              <p className="mt-4 text-xl text-ink leading-relaxed font-heading font-medium">
                O comunitate în care sărbătoarea devine faptă, iar fapta devine
                speranță — unde biserica, vârstnicii și copiii se îngrijesc
                unii pe alții într-un lanț de dăruire care nu se întrerupe.
              </p>
            </div>
          </div>
        </section>

        {/* Valori */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <span className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.18em] text-gold mb-4">
              <span className="w-8 h-px bg-gold" /> Valorile noastre <span className="w-8 h-px bg-gold" />
            </span>
            <h2 className="text-3xl md:text-[40px] font-semibold text-ink">
              Dumnezeu lucrează prin noi
            </h2>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
              {values.map((v) => (
                <div key={v.title} className="p-7 border border-[#E8E2D8] rounded-2xl bg-white">
                  <h4 className="font-semibold text-ink uppercase tracking-wide text-sm mb-3 flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-gold" /> {v.title}
                  </h4>
                  <p className="text-sm text-ink/60 leading-relaxed">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Oameni */}
        <section className="py-16 md:py-20 bg-[#F9F6F1]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center">
              <span className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.18em] text-gold mb-4">
                <span className="w-8 h-px bg-gold" /> Oamenii <span className="w-8 h-px bg-gold" />
              </span>
              <h2 className="text-3xl md:text-[40px] font-semibold text-ink">
                Cei care poartă lucrarea mai departe
              </h2>
            </div>
            <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white border border-[#E8E2D8] rounded-2xl p-8">
                <div className="relative size-20 rounded-full overflow-hidden mb-5 border-2 border-gold/40">
                  <Image
                    src="/images/pr-ivan.webp"
                    alt="Pr. Ioan Alexandru Ivan"
                    fill
                    className="object-cover object-top"
                    sizes="80px"
                  />
                </div>
                <h3 className="text-lg font-semibold text-ink">Pr. Ioan Alexandru Ivan</h3>
                <p className="text-sm text-gold font-semibold mt-1">Președintele Asociației</p>
                <p className="text-sm text-ink/60 leading-relaxed mt-4">
                  Preot de caritate, fondatorul lucrării de la Luxab. Conduce
                  proiectele și îngrijirea duhovnicească a vârstnicilor.
                </p>
              </div>
              <div className="bg-white border border-[#E8E2D8] rounded-2xl p-8">
                <div className="relative size-20 rounded-full overflow-hidden mb-5 border-2 border-gold/40">
                  <Image
                    src="/images/pr-damaschin.webp"
                    alt="Pr. Damaschin Corneliu"
                    fill
                    className="object-cover object-top"
                    sizes="80px"
                  />
                </div>
                <h3 className="text-lg font-semibold text-ink">Pr. Damaschin Corneliu</h3>
                <p className="text-sm text-gold font-semibold mt-1">Preot · Slujitor al capelei</p>
                <p className="text-sm text-ink/60 leading-relaxed mt-4">
                  Preot de caritate, responsabil cu tot ceea ce se întâmplă la
                  cămin. Conduce proiectele și îngrijirea duhovnicească a
                  vârstnicilor din Luxab.
                </p>
              </div>
              <div className="bg-white border border-[#E8E2D8] rounded-2xl p-8">
                <div className="relative size-20 rounded-full overflow-hidden mb-5 border-2 border-gold/40">
                  <Image
                    src="/images/diacon-sandu.webp"
                    alt="Diac. Sandu Teodor Marian"
                    fill
                    className="object-cover object-top"
                    sizes="80px"
                  />
                </div>
                <h3 className="text-lg font-semibold text-ink">Diac. Sandu Teodor Marian</h3>
                <p className="text-sm text-gold font-semibold mt-1">Diacon · Slujitor al capelei</p>
                <p className="text-sm text-ink/60 leading-relaxed mt-4">
                  Diacon al capelei Luxab, alături de vârstnici și de copiii
                  care vin în vizită — în slujbe, proiecte și în viața de zi cu
                  zi a comunității.
                </p>
              </div>
            </div>
            <p className="text-center mt-10">
              <Link href="/contact" className="inline-flex items-center gap-2 border border-ink text-ink px-7 py-3 rounded-full font-bold text-sm hover:bg-ink hover:text-white transition-all">
                Vrei să ne cunoști? →
              </Link>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
