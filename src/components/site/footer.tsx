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

const socials = [
  {
    name: "YouTube",
    href: "https://www.youtube.com/@Sf.alexandru",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8zM9.5 15.5v-7l6.3 3.5-6.3 3.5z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/sfalexandruparascheva",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
        <path d="M24 12a12 12 0 1 0-13.9 11.9v-8.4h-3v-3.5h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 1-2 1.9v2.2h3.4l-.5 3.5h-2.8v8.4A12 12 0 0 0 24 12z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/explore/locations/105841305262366/asociatia-sf-ierarh-alexandru-si-sf-cuvioasa-parascheva/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
        <path d="M12 2.2c3.2 0 3.6 0 4.8.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8 0 3.2 0 3.6-.1 4.8-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.8.1-3.2 0-3.6 0-4.8-.1-3.3-.1-4.8-1.7-4.9-4.9-.1-1.3-.1-1.6-.1-4.8 0-3.2 0-3.6.1-4.8.1-3.2 1.7-4.8 4.9-4.9 1.2-.1 1.6-.1 4.8-.1zm0 3.6a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-10.5a1.4 1.4 0 1 0 0 2.9 1.4 1.4 0 0 0 0-2.9z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@pr.ivan_alexandru",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
        <path d="M19.6 5.8a5 5 0 0 1-3.4-3.3c-.1-.4-.2-.8-.2-1.5h-3.6v13.2a2.9 2.9 0 1 1-2.9-2.9c.3 0 .6 0 .9.1V7.6a6.6 6.6 0 1 0 5.6 6.5V8.6a8.4 8.4 0 0 0 4.9 1.5V6.5c-.5 0-1-.2-1.3-.7z" />
      </svg>
    ),
  },
];

export function SiteFooter() {
  return (
    <footer className="pt-20 pb-10 bg-paper border-t border-ink/10 text-ink">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 md:gap-10 mb-12">
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

          {/* Social Media */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6">
              Social Media
            </h4>
            <ul className="space-y-3 text-sm">
              {socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 hover:text-gold transition-colors"
                  >
                    <span className="size-8 rounded-full bg-gold-pale flex items-center justify-center text-gold">
                      {s.icon}
                    </span>
                    {s.name}
                  </a>
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
