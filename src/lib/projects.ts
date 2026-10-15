export type Project = {
  slug: string;
  title: string;
  status: string;
  image: string;
  summary: string;
  tags: string[];
  paragraphs: string[];
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "educatia-cheia-spre-viitor",
    title: "Educația: cheia spre viitor",
    status: "În desfășurare · ediția a III-a",
    image: "/images/hram-2024.jpg",
    summary:
      "Sprijinim aproximativ 100 de copii beneficiari ai serviciilor sociale DGASPC Sector 1 — cu rechizite, ghiozdane complet echipate, haine și încurajare continuă, pentru a preveni abandonul școlar și excluziunea socială.",
    tags: ["~100 copii", "DGASPC Sector 1", "Educație"],
    paragraphs: [
      "„Educația: cheia spre viitor” este proiectul emblematic al Asociației Sf. Ierarh Alexandru și Sf. Cuvioasă Parascheva — ajuns, în 2026, la a treia ediție consecutivă.",
      "Prin proiect, aproximativ 100 de copii beneficiari ai serviciilor sociale din Sectorul 1 (DGASPC) primesc rechizite, ghiozdane complet echipate și haine pentru noul an școlar — elemente concrete care fac diferența între abandon și continuarea studiilor.",
      "Edițiile anterioare au sprijinit și copiii cu nevoi speciale din DGASPC Sector 2, confirmând angajamentul nostru de a răspunde nevoilor reale, oriunde apar ele.",
      "Distribuirea darurilor este legată de calendarul liturgic al capelei — la hramul Sfântului Ierarh Alexandru, copiii de la Centrul de zi „Sfânta Muceniță Sofia” au primit 35 de ghiozdane complet echipate, în prezența vârstnicilor căminului.",
    ],
    highlights: [
      "Ediția a III-a — continuitate reală",
      "~100 copii sprijiniți prin DGASPC Sector 1",
      "Rechizite, ghiozdane și haine pentru noul an școlar",
      "Prevenirea abandonului școlar și a excluziunii sociale",
    ],
  },
  {
    slug: "vestim-bucuria-primaverii",
    title: "Vestim bucuria primăverii",
    status: "Tradiție anuală",
    image: "/images/luxab-2023.jpg",
    summary:
      "Copiii de la Centrul de zi „Sfânta Muceniță Sofia” vizitează vârstnicii din Luxab cu cântece, flori și mărțișoare — o punte vie între generații.",
    tags: ["Copii ↔ vârstnici", "Centrul Sf. Muceniță Sofia", "Primăvara"],
    paragraphs: [
      "În fiecare primăvară, copiii de la Centrul de zi „Sfânta Muceniță Sofia” al Arhiepiscopiei Bucureștilor vin la Căminul Luxab cu cântece, flori și mărțișoare pentru bunicii centrului.",
      "Pentru mulți dintre vârstnici, aceste vizite sunt cele mai așteptate momente ale anului — copiii aduc energie, atenție și bucurie, iar seniorii le oferă în schimb experiența și căldura lor.",
      "Inițiativa face parte din sectorul social-filantropic al Arhiepiscopiei Bucureștilor și demonstrează că cea mai simplă formă de caritate este, adesea, simpla prezență.",
    ],
    highlights: [
      "Vizite anuale ale copiilor la Luxab",
      "Cântece, flori și mărțișoare pentru vârstnici",
      "Punte vie între generații",
      "Parteneriat cu Centrul „Sfânta Muceniță Sofia”",
    ],
  },
  {
    slug: "daruri-care-unesc-generatii",
    title: "Daruri care unesc generații",
    status: "Recurent",
    image: "/images/anunt-luxab.jpg",
    summary:
      "La hram și în ajunul Zilei Copilului, copiii primesc ghiozdane și daruri la cămin — iar vârstnicii le oferă la rândul lor cadouri celor mici.",
    tags: ["Hram", "1 Iunie", "Daruri"],
    paragraphs: [
      "La Căminul Luxab, caritatea nu curge într-un singur sens. În ajunul Zilei Copilului, copiii din familii defavorizate sunt sărbătoriți la centrul de îngrijire cu daruri — iar vârstnicii le răspund cu propriile daruri pentru cei mici.",
      "La hramul capelei, după Sfânta Liturghie, copiii de la Centrul „Sfânta Muceniță Sofia” au primit 35 de ghiozdane complet echipate — rugăciunea și filantropia merg mereu mână în mână.",
      "Această reciprocitate transformă relația dintre generații: nu este vorba despre ajutor unidirecțional, ci despre o comunitate care se îngrijește reciproc.",
    ],
    highlights: [
      "Daruri pentru copii la hram și de 1 Iunie",
      "Vârstnicii dăruesc înapoi celor mici",
      "35 de ghiozdane echipate la hramul capelei",
      "Relație în două sensuri, nu caritate unidirecțională",
    ],
  },
  {
    slug: "doneaza-din-inima",
    title: "Donează din inimă. Dăruiește viață",
    status: "Campanie umanitară · ediții recurente",
    image: "/images/doneaza-inima.jpg",
    summary:
      "Campanie de donare de sânge organizată în colaborare cu Centrul de Transfuzie Sanguină al Ministerului Apărării Naționale — pentru că sângele nu se vinde, nu se cumpără, doar se dăruiește.",
    tags: ["Donare de sânge", "MApN", "Sănătate"],
    paragraphs: [
      "„Donarea de sânge reprezintă unul dintre cele mai concrete acte de iubire creștină și solidaritate umană” — din această convingere a luat naștere campania „Donează din inimă. Dăruiește viață”, organizată de asociație în parteneriat cu Centrul de Transfuzie Sanguină al Ministerului Apărării Naționale.",
      "Prima acțiune a avut loc în iunie 2025, chiar la Centrul de îngrijire Luxab — într-un spațiu pregătit special, cu bannerul campaniei și echipa medicală mobilă. A doua ediție s-a desfășurat în septembrie 2025 la Centrul Medical „Master” din Sectorul 6, iar campania continuă cu noi acțiuni regulate.",
      "Cu binecuvântarea Preafericitului Părinte Patriarh Daniel, fiecare ediție transformă un gest simplu — câteva minute și 450 ml de sânge — în viață salvată pentru necunoscuți.",
    ],
    highlights: [
      "Ediția I — iunie 2025, la Centrul Luxab",
      "Ediția II — septembrie 2025, Centrul Medical „Master”",
      "Partener: Centrul de Transfuzie Sanguină MApN",
      "Cu binecuvântarea PF Patriarh Daniel",
      "Campanie recurentă — ediții noi regulate",
    ],
  },
  {
    slug: "taina-nasterii",
    title: "Concertul de colinde „Taina Nașterii”",
    status: "Tradiție · ediția a V-a",
    image: "/images/concert-colinde.jpg",
    summary:
      "Concert caritabil de colinde organizat anual la Centrul Luxab — bucurie pentru vârstnici și daruri concrete pentru copiii defavorizați, sub bagheta Muzicii Militare și a corurilor invitate.",
    tags: ["Colinde", "Ediția a V-a", "77 copii", "Caritabil"],
    paragraphs: [
      "În fiecare decembrie, sala Centrului Luxab se transformă în scenă: coruri și grupuri vocale aduc vârstnicilor magia colindelor, iar evenimentul capătă întotdeauna o latură filantropică.",
      "La ediția a V-a (decembrie 2025), concertul a fost dedicat sprijinirii celor 77 de copii aflați în grija DGASPC Sector 2 — iar la final, Moș Crăciun le-a oferit daruri copiilor beneficiari ai centrelor de zi ale Arhiepiscopiei Bucureștilor.",
      "Tradiția a început în 2022 și a crescut de la an la an — din sală plină în sală plină, concertul rămâne momentul în care vârstnicii uită pentru câteva ore de singurătate, înconjurați de copii și de muzică.",
    ],
    highlights: [
      "5 ediții consecutive, din 2022",
      "Ediția a V-a: 77 copii DGASPC Sector 2 sprijiniți",
      "Coruri și grupuri vocale invitate",
      "Daruri de la Moș Crăciun pentru copiii centrelor de zi",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
