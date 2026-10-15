import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Asociația Creștină Sf. Ierarh Alexandru — Str. Occidentului 25, Sector 1, București, în interiorul centrului de îngrijire LUXAB.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          label="Contact"
          title={
            <>
              Hai să <em className="font-serif italic font-medium text-gold">vorbim</em>
            </>
          }
          subtitle="Pentru donații, parteneriate sau rugăciune — suntem aici."
        />

        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-[#E8E2D8] rounded-2xl p-8">
              <div className="size-12 rounded-xl bg-gold-pale flex items-center justify-center mb-5">
                <MapPin className="size-5 text-gold" />
              </div>
              <h3 className="font-semibold text-ink mb-2">Adresă</h3>
              <p className="text-sm text-ink/60 leading-relaxed">
                Str. Occidentului nr. 25
                <br />
                Sector 1, București
                <br />
                <span className="text-ink/50 text-xs">
                  în interiorul centrului de îngrijire LUXAB
                </span>
              </p>
            </div>

            <div className="bg-white border border-[#E8E2D8] rounded-2xl p-8">
              <div className="size-12 rounded-xl bg-gold-pale flex items-center justify-center mb-5">
                <Phone className="size-5 text-gold" />
              </div>
              <h3 className="font-semibold text-ink mb-2">Telefon</h3>
              <p className="text-sm leading-relaxed">
                <a
                  href="tel:+40767430430"
                  className="text-ink/70 hover:text-gold transition-colors"
                >
                  0767 430 430
                </a>
              </p>
            </div>

            <div className="bg-white border border-[#E8E2D8] rounded-2xl p-8">
              <div className="size-12 rounded-xl bg-gold-pale flex items-center justify-center mb-5">
                <Mail className="size-5 text-gold" />
              </div>
              <h3 className="font-semibold text-ink mb-2">Email</h3>
              <p className="text-sm leading-relaxed">
                <a
                  href="mailto:ivanalexandru@yahoo.com"
                  className="text-ink/70 hover:text-gold transition-colors block break-all"
                >
                  ivanalexandru@yahoo.com
                </a>
              </p>
            </div>
          </div>

          {/* Harta */}
          <div className="max-w-7xl mx-auto px-6 mt-12">
            <div className="rounded-2xl overflow-hidden border border-[#E8E2D8] shadow-lg aspect-[16/7] bg-gold-pale">
              <iframe
                title="Locația Capelei Luxab"
                src="https://www.google.com/maps?q=Strada+Occidentului+25,+Sector+1,+București&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
