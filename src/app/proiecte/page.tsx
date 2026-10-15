import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { PageHero } from "@/components/site/page-hero";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Proiecte",
  description:
    "„Educația: cheia spre viitor”, ghiozdane echipate și întâlniri intergeneraționale între copii și vârstnicii Luxab.",
};

export default function ProiectePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          label="Proiectele noastre"
          title={
            <>
              Fapte concrete,{" "}
              <em className="font-serif italic font-medium text-gold">
                nu promisiuni
              </em>
            </>
          }
          subtitle="Programe caritabile cu continuitate reală — de la rechizite pentru copiii Sectorului 1 la întâlniri care unesc generațiile."
        />

        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <Link
                key={p.slug}
                href={`/proiecte/${p.slug}`}
                className="group bg-white border border-[#E8E2D8] rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[16/9]">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <span className="text-[11px] font-bold uppercase tracking-wide text-gold mb-2">
                    {p.status}
                  </span>
                  <h2 className="text-xl font-semibold text-ink mb-3 group-hover:text-gold transition-colors">
                    {p.title}
                  </h2>
                  <p className="text-sm text-ink/60 leading-relaxed flex-1 line-clamp-4">
                    {p.summary}
                  </p>
                  <span className="inline-flex items-center gap-1.5 mt-5 text-gold font-bold text-sm">
                    Citește povestea <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="py-16 bg-gold-pale text-center">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-ink">
              Fiecare proiect începe cu cineva care alege să ajute
            </h2>
            <p className="mt-4 text-ink/60">
              Susține proiectele prin donație, voluntariat sau redirecționarea
              a 3.5% din impozit.
            </p>
            <Link
              href="/doneaza"
              className="mt-7 inline-flex items-center gap-2 bg-gold text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-[#967653] transition-colors"
            >
              Susține proiectele →
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
