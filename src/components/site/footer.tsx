import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Heart, Phone } from "lucide-react";

const footerLinks = {
  Navigare: [
    { href: "/cine-suntem", label: "Cine suntem" },
    { href: "/viata-spirituala", label: "Viață spirituală" },
    { href: "/proiecte", label: "Proiecte" },
    { href: "/evenimente", label: "Evenimente" },
    { href: "/contact", label: "Contact" },
  ],
  "Implică-te": [
    { href: "/doneaza", label: "Donează" },
    { href: "/doneaza#impozit", label: "Redirecționează 3.5%" },
    { href: "mailto:voluntar@sfantulalexandru.ro", label: "Voluntariat" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="pt-20 pb-10 bg-paper border-t border-ink/10 text-ink">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 md:gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-6 flex items-center gap-3">
              <Image
                src="/brand/logo.png"
                alt="Sigla Asociației Sf. Ierarh Alexandru"
                width={44}
                height={44}
                className="rounded-full"
              />
              <span className="font-heading font-semibold text-ink text-[15px] leading-tight">
                Asociația Creștină Sf. Ierarh Alexandru
                <span className="block font-sans font-normal text-[11px] text-ink/60">
                  și Sfânta Cuvioasă Parascheva
                </span>
              </span>
            </div>
            <p className="text-sm text-ink/70 leading-relaxed max-w-md">
              Mâinile noastre ajută, Dumnezeu vindecă și transformă. Asociație
              filantropică în jurul Capelei „Sfântul Ierarh Alexandru” de la
              Căminul Luxab, București.
            </p>
          </div>

          {/* Capela */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6">
              Capela
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 items-start">
                <MapPin className="size-4 shrink-0 text-gold mt-0.5" />
                <span>
                  Str. Occidentului nr. 25, Sector 1, București
                  <br />
                  <span className="text-ink/50 text-xs">
                    în interiorul centrului de îngrijire LUXAB
                  </span>
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <Phone className="size-4 shrink-0 text-gold mt-0.5" />
                <a
                  href="tel:+40767430430"
                  className="hover:text-gold transition-colors"
                >
                  0767 430 430
                </a>
              </li>
              <li className="flex gap-3 items-start">
                <Mail className="size-4 shrink-0 text-gold mt-0.5" />
                <a
                  href="mailto:ivanalexandru@yahoo.com"
                  className="hover:text-gold transition-colors"
                >
                  ivanalexandru@yahoo.com
                </a>
              </li>
              <li className="flex gap-3 items-start">
                <Heart className="size-4 shrink-0 text-gold mt-0.5" />
                <span>Hram: 30 August — Sf. Ierarh Alexandru</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6">
              Navigare
            </h4>
            <ul className="space-y-3 text-sm">
              {footerLinks.Navigare.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {footerLinks["Implică-te"].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-gold transition-colors font-semibold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-ink/10 text-center">
          <span className="text-xs text-ink/50">
            © {new Date().getFullYear()} Asociația Creștină Sf. Ierarh
            Alexandru și Sf. Cuvioasă Parascheva. Toate drepturile rezervate.
          </span>
        </div>
      </div>
    </footer>
  );
}
