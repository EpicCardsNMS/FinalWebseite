import { Sparkles, Shield, Zap, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CardSelector from "@/components/CardSelector";
import FAQ from "@/components/FAQ";
import Ratgeber from "@/components/Ratgeber";

const FEATURES = [
  {
    icon: Zap,
    title: "In unter 2 Minuten",
    description: "Erhalte ein unverbindliches Kaufangebot blitzschnell",
  },
  {
    icon: Shield,
    title: "Sicher & Transparent",
    description: "Faire Preise basierend auf aktuellen Marktdaten",
  },
  {
    icon: TrendingUp,
    title: "Beste Preise",
    description: "Professionelle Bewertung für maximalen Erlös",
  },
  {
    icon: Sparkles,
    title: "Alle Karten",
    description: "Pokémon, Magic, Yu-Gi-Oh und viele weitere TCGs",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-8 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-white/[0.03] rounded-full blur-[120px]" />
          <div className="absolute top-40 right-1/4 w-80 h-80 bg-white/[0.02] rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Text */}
          <div className="text-center max-w-3xl mx-auto mb-12 pt-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
              <Sparkles className="w-4 h-4 text-neutral-400" />
              <span className="text-sm text-neutral-300 font-medium">
                EpicCards — Sammelkarten Ankauf
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              <span className="text-white">
                Deine Sammelkarten.
              </span>
              <br />
              <span className="bg-gradient-to-r from-neutral-300 to-neutral-500 bg-clip-text text-transparent">
                Unser bestes Angebot.
              </span>
            </h1>
            <p className="text-lg text-neutral-500 mt-6 max-w-xl mx-auto">
              Verkaufe deine Pokémon, Magic & Yu-Gi-Oh Karten schnell, sicher
              und zum fairen Preis. Erhalte ein unverbindliches Kaufangebot in
              unter 2 Minuten.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative max-w-4xl mx-auto mb-16">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="/assets/images/pokemon-bulk.webp"
                alt="Pokémon Sammelkarten Beispiel"
                className="w-full h-64 sm:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
            {FEATURES.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={i}
                  className="text-center p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 group"
                >
                  <div className="w-12 h-12 mx-auto rounded-xl bg-white/5 flex items-center justify-center mb-3 group-hover:bg-white/10 transition-colors">
                    <Icon className="w-6 h-6 text-neutral-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-sm font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-neutral-600 mt-1">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Card Selector */}
          <div
            id="ankauf"
            className="max-w-3xl mx-auto bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl"
          >
            <CardSelector />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Ratgeber Section */}
      <Ratgeber />

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Bereit, deine Karten zu verkaufen?
          </h2>
          <p className="text-neutral-500 mb-8">
            Starte jetzt und erhalte in unter 2 Minuten ein unverbindliches
            Kaufangebot.
          </p>
          <a
            href="#ankauf"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-neutral-200 transition-all shadow-lg shadow-white/10 hover:shadow-white/20"
          >
            <Sparkles className="w-5 h-5" />
            Jetzt Karten verkaufen
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}