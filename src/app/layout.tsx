import type { Metadata } from "next";
import { Be_Vietnam_Pro, Nunito_Sans, Playfair_Display } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const nunito = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-bevietnam",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sfantulalexandru.ro"),
  title: {
    default: "Asociația Sfântul Ierarh Alexandru și Sfânta Cuvioasă Parascheva",
    template: "%s | Asociația Sf. Alexandru",
  },
  description:
    "Asociație filantropică din București — Capela „Sfântul Ierarh Alexandru” de la Căminul Luxab, proiecte pentru copii defavorizați și îngrijire duhovnicească a vârstnicilor.",
  keywords: [
    "asociația sfântul alexandru",
    "capela luxab",
    "cămin bătrâni bucurești",
    "filantropie",
    "donații",
    "voluntariat",
    "sector 1",
  ],
  authors: [{ name: "Asociația Sf. Ierarh Alexandru" }],
  openGraph: {
    title: "Asociația Sfântul Ierarh Alexandru și Sfânta Cuvioasă Parascheva",
    description:
      "Mâinile noastre ajută, Dumnezeu vindecă și transformă.",
    locale: "ro_RO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ro"
      className={`${nunito.variable} ${beVietnam.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper w-full">
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
