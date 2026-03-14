import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface PriceRow {
  category: string;
  price: string;
}

interface PriceTable {
  title: string;
  subtitle: string;
  rows: PriceRow[];
}

const PRICE_TABLES: PriceTable[] = [
  {
    title: "Pokémon",
    subtitle: "Bulk-Ankaufspreise",
    rows: [
      { category: "Common / Uncommon", price: "0,01 € / Karte" },
      { category: "Rare (Holo)", price: "0,05 € / Karte" },
      { category: "Reverse Holo", price: "0,02 € / Karte" },
      { category: "V / VMAX / VSTAR", price: "0,15 € / Karte" },
      { category: "EX / GX", price: "0,10 € / Karte" },
      { category: "Full Art / Alt Art", price: "Individuell" },
      { category: "Trainer Gallery", price: "0,10 € / Karte" },
      { category: "Energiekarten", price: "0,005 € / Karte" },
    ],
  },
  {
    title: "Magic: The Gathering",
    subtitle: "Bulk-Ankaufspreise",
    rows: [
      { category: "Common / Uncommon", price: "0,005 € / Karte" },
      { category: "Rare", price: "0,02 € / Karte" },
      { category: "Mythic Rare", price: "0,10 € / Karte" },
      { category: "Foil Common/Uncommon", price: "0,01 € / Karte" },
      { category: "Foil Rare", price: "0,05 € / Karte" },
      { category: "Foil Mythic", price: "Individuell" },
      { category: "Tokens / Lands", price: "0,003 € / Karte" },
      { category: "Commander Staples", price: "Individuell" },
    ],
  },
  {
    title: "Andere TCGs",
    subtitle: "Yu-Gi-Oh, Digimon, One Piece & mehr",
    rows: [
      { category: "Common / Uncommon", price: "0,005 € / Karte" },
      { category: "Rare", price: "0,02 € / Karte" },
      { category: "Super Rare", price: "0,05 € / Karte" },
      { category: "Ultra Rare", price: "0,10 € / Karte" },
      { category: "Secret Rare", price: "0,20 € / Karte" },
      { category: "Ghost / Starlight Rare", price: "Individuell" },
      { category: "Promo Karten", price: "Individuell" },
      { category: "Bulk gemischt", price: "0,005 € / Karte" },
    ],
  },
];

export default function PreisePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Header />

      <section className="pt-28 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 text-neutral-300 text-sm font-medium mb-4 border border-white/10">
              Preise
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Unsere Ankaufspreise
            </h1>
            <p className="text-neutral-500 mt-4 max-w-2xl mx-auto">
              Hier findest du unsere aktuellen Bulk-Ankaufspreise. Für
              Einzelkarten und besondere Karten erstellen wir individuelle
              Angebote basierend auf aktuellen Marktpreisen.
            </p>
          </div>

          {/* Info Banner */}
          <div className="max-w-3xl mx-auto mb-12 p-5 rounded-2xl bg-white/[0.03] border border-white/10">
            <p className="text-neutral-400 text-sm text-center">
              <strong className="text-white">Hinweis:</strong> Die angegebenen Preise gelten für
              Bulk-Ankäufe. Einzelkarten mit höherem Marktwert werden individuell
              bewertet und erzielen deutlich höhere Preise.
            </p>
          </div>

          {/* Price Tables */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {PRICE_TABLES.map((table) => (
              <div
                key={table.title}
                className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-white/20 transition-colors"
              >
                {/* Table Header */}
                <div className="p-6 border-b border-white/10 bg-white/[0.03]">
                  <h2 className="text-xl font-bold text-white">
                    {table.title}
                  </h2>
                  <p className="text-neutral-500 text-sm mt-1">
                    {table.subtitle}
                  </p>
                </div>

                {/* Table Body */}
                <div className="p-4">
                  <div className="space-y-1">
                    {table.rows.map((row, i) => (
                      <div
                        key={i}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl ${
                          i % 2 === 0 ? "bg-white/[0.02]" : ""
                        }`}
                      >
                        <span className="text-sm text-neutral-400">
                          {row.category}
                        </span>
                        <span
                          className={`text-sm font-semibold ${
                            row.price === "Individuell"
                              ? "text-neutral-300"
                              : "text-white"
                          }`}
                        >
                          {row.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-neutral-500 mb-6">
              Du hast wertvolle Einzelkarten oder eine komplette Sammlung?
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-neutral-200 transition-all shadow-lg shadow-white/10 hover:shadow-white/20"
            >
              Individuelles Angebot anfordern
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}