import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

const socials = [
  {
    name: "YouTube",
    href: "https://www.youtube.com/@Sf.alexandru",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4 text-gold">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8zM9.5 15.5v-7l6.3 3.5-6.3 3.5z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/sfalexandruparascheva",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4 text-gold">
        <path d="M24 12a12 12 0 1 0-13.9 11.9v-8.4h-3v-3.5h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 1-2 1.9v2.2h3.4l-.5 3.5h-2.8v8.4A12 12 0 0 0 24 12z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/explore/locations/105841305262366/asociatia-sf-ierarh-alexandru-si-sf-cuvioasa-parascheva/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4 text-gold">
        <path d="M12 2.2c3.2 0 3.6 0 4.8.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8 0 3.2 0 3.6-.1 4.8-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.8.1-3.2 0-3.6 0-4.8-.1-3.3-.1-4.8-1.7-4.9-4.9-.1-1.3-.1-1.6-.1-4.8 0-3.2 0-3.6.1-4.8.1-3.2 1.7-4.8 4.9-4.9 1.2-.1 1.6-.1 4.8-.1zm0 3.6a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-10.5a1.4 1.4 0 1 0 0 2.9 1.4 1.4 0 0 0 0-2.9z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@pr.ivan_alexandru",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4 text-gold">
        <path d="M19.6 5.8a5 5 0 0 1-3.4-3.3c-.1-.4-.2-.8-.2-1.5h-3.6v13.2a2.9 2.9 0 1 1-2.9-2.9c.3 0 .6 0 .9.1V7.6a6.6 6.6 0 1 0 5.6 6.5V8.6a8.4 8.4 0 0 0 4.9 1.5V6.5c-.5 0-1-.2-1.3-.7z" />
      </svg>
    ),
  },
];
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

          {/* Social */}
          <div className="max-w-7xl mx-auto px-6 mt-12">
            <div className="bg-white border border-[#E8E2D8] rounded-2xl p-8 text-center">
              <h3 className="font-semibold text-ink mb-6">Urmărește-ne</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 border border-[#E8E2D8] rounded-full px-6 py-3 text-sm font-semibold text-ink hover:border-gold hover:text-gold transition-colors"
                  >
                    {s.icon}
                    {s.name}
                  </a>
                ))}
              </div>
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
