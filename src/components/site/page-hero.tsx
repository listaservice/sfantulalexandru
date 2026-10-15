import Image from "next/image";

export function PageHero({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FBF8F2] to-[#EFE6D6] py-16 md:py-20">
      <span
        aria-hidden
        className="absolute -right-10 top-1/2 -translate-y-1/2 font-serif text-[260px] leading-none text-gold/[0.07] select-none pointer-events-none"
      >
        ✝
      </span>
      <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center gap-8 md:gap-10">
        <div className="flex-1">
          <span className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.18em] text-gold mb-4">
            <span className="w-8 h-px bg-gold" />
            {label}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-ink leading-[1.15] max-w-3xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 text-lg text-ink/60 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
        <Image
          src="/brand/sfalexandru.png"
          alt="Icoana Sfântului Ierarh Alexandru și a Sfintei Cuvioase Parascheva"
          width={230}
          height={230}
          className="shrink-0 drop-shadow-xl w-[150px] h-auto md:w-[230px] mx-auto md:mx-0"
          priority
        />
      </div>
    </section>
  );
}
