import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, Heart } from "lucide-react";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { PageHero } from "@/components/site/page-hero";
import { projects, getProject } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PageHero label={`Proiect · ${project.status}`} title={project.title} />

        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-xl mb-12">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1280px"
                priority
              />
            </div>

            <div className="grid lg:grid-cols-[1.4fr_.6fr] gap-12">
              {/* Conținut */}
              <div className="space-y-5 text-ink/70 text-[17px] leading-relaxed">
                {project.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* Sidebar */}
              <aside className="space-y-6">
                <div className="bg-white border border-[#E8E2D8] rounded-2xl p-7">
                  <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-gold mb-5">
                    Puncte cheie
                  </h3>
                  <ul className="space-y-3 text-sm text-ink/80">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex gap-2.5">
                        <Check className="size-4 text-gold shrink-0 mt-0.5" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs bg-gold-pale text-ink/70 px-3 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-ink rounded-2xl p-7 text-center">
                  <Heart className="size-7 text-gold mx-auto mb-4" />
                  <p className="text-sm text-white/80 leading-relaxed mb-5">
                    Proiectul continuă datorită oamenilor care aleg să ajute.
                  </p>
                  <Link
                    href="/doneaza"
                    className="inline-flex items-center gap-2 bg-gold text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#967653] transition-colors w-full justify-center"
                  >
                    Susține proiectul
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Alte proiecte */}
        <section className="py-16 bg-[#F9F6F1]">
          <div className="max-w-4xl mx-auto px-6">
            <Link
              href="/proiecte"
              className="inline-flex items-center gap-2 text-sm font-bold text-gold hover:underline mb-8"
            >
              <ArrowLeft className="size-4" /> Toate proiectele
            </Link>
            <div className="grid sm:grid-cols-2 gap-5">
              {projects
                .filter((p) => p.slug !== project.slug)
                .map((p) => (
                  <Link
                    key={p.slug}
                    href={`/proiecte/${p.slug}`}
                    className="group bg-white border border-[#E8E2D8] rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="relative aspect-[21/9]">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, 440px"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-[11px] font-bold uppercase tracking-wide text-gold">
                        {p.status}
                      </span>
                      <h3 className="font-semibold text-ink mt-1 group-hover:text-gold transition-colors">
                        {p.title}
                      </h3>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
