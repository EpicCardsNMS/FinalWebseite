import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface Section {
  title: string;
  subtitle: string;
  content: React.ReactNode;
}

const SECTIONS: Section[] = [
  {
    title: "Sammelkarten Ankauf – Sicher, transparent & zum Marktpreis verkaufen",
    subtitle: "SAMMELKARTEN VERKAUFEN LEICHT GEMACHT",
    content: (
      <>
        <p>
          Wer heute Sammelkarten verkaufen möchte, steht vor einer zentralen
          Frage: Wo bekomme ich faire Preise ohne Risiko?
        </p>
        <p>
          Der Markt für Sammelkarten Ankauf in Deutschland ist stark gewachsen.
          Gleichzeitig gibt es große Unterschiede bei Preisgestaltung,
          Transparenz und Auszahlungsgeschwindigkeit. Ein professioneller TCG
          Ankauf analysiert Karten nicht pauschal, sondern anhand aktueller
          Marktpreise, realer Verkaufsdaten und Zustandsbewertungen.
        </p>
        <p>Beim Sammelkarten Ankauf erfolgt der Prozess strukturiert:</p>
        <ol className="list-decimal list-inside space-y-1 my-3">
          <li>Anfrage über Ankauf-Formular oder Bilder</li>
          <li>Kostenlose Wertanalyse</li>
          <li>Transparentes Angebot</li>
          <li>Versicherter Versand oder Abgabe im Shop</li>
          <li>Schnelle Auszahlung nach Prüfung</li>
        </ol>
        <p>Dabei werden unter anderem berücksichtigt:</p>
        <ul className="list-disc list-inside space-y-1 my-3">
          <li>Zustandsbewertung (Mint, Near Mint, Played)</li>
          <li>Erstauflage oder Reprint</li>
          <li>Seltenheit (Secret Rare, Alternate Art, Gold Rare etc.)</li>
          <li>Markttrend und Nachfrage</li>
          <li>Grading-Potenzial</li>
          <li>Sprache der Karte</li>
        </ul>
        <p>
          Gerade bei hochwertigen Pokémon Karten, Yu-Gi-Oh Karten oder Magic The
          Gathering Karten kann eine professionelle Bewertung mehrere hundert
          Euro Unterschied bedeuten. Wer Sammelkarten verkaufen will, sollte
          daher nicht nur nach „höchstem Angebot" suchen, sondern nach einem
          seriösen Ankauf mit transparenter Kalkulation.
        </p>
      </>
    ),
  },
  {
    title: "Pokémon Karten verkaufen – Wert richtig ermitteln & fair verkaufen",
    subtitle: "POKÉMON KARTEN VERKAUFEN: WAS WIRKLICH DEN PREIS BESTIMMT",
    content: (
      <>
        <p>
          Das Keyword „Pokémon Karten verkaufen" gehört zu den meistgesuchten
          Begriffen im Bereich Trading Cards verkaufen. Doch viele Verkäufer
          unterschätzen, wie komplex die Wertermittlung ist.
        </p>
        <p className="font-semibold text-white mt-4">Zustand ist entscheidend</p>
        <p>
          Kleinste Whitening-Spuren, Drucklinien oder Kratzer können den
          Marktwert deutlich beeinflussen. Für ein mögliches Grading ist Near
          Mint nahezu Voraussetzung.
        </p>
        <p className="font-semibold text-white mt-4">Set & Edition</p>
        <p>
          Base Set, Neo, EX-Serien, Gold Stars, Full Arts, Alternate Arts oder
          moderne Illustration Rares – jedes Set hat eigene Marktmechanismen.
        </p>
        <p className="font-semibold text-white mt-4">Nachfrage & Spielbarkeit</p>
        <p>Turnierrelevante Karten steigen kurzfristig im Wert.</p>
        <p className="font-semibold text-white mt-4">Sprache & Druckauflage</p>
        <p>
          Englische Karten erzielen teilweise höhere internationale Nachfrage,
          deutsche Karten sind im heimischen Markt stark gefragt.
        </p>
        <p className="mt-4">
          Beim Pokémon Karten Ankauf Online basiert die Bewertung auf aktuellen
          Marktpreisen, realen Verkaufsdaten, transparenten Zustandskategorien
          und fairer Ankaufkalkulation.
        </p>
      </>
    ),
  },
  {
    title: "Yu-Gi-Oh Karten verkaufen – Dynamischer Markt & faire Preise",
    subtitle: "YU-GI-OH KARTEN ANKAUF MIT MARKTKENNTNIS",
    content: (
      <>
        <p>
          Yu-Gi-Oh Karten verkaufen unterscheidet sich stark von anderen TCGs.
          Meta-Decks, Bannlisten, Reprints und Turnierergebnisse beeinflussen
          Preise teilweise innerhalb weniger Wochen.
        </p>
        <p className="mt-3">Wichtige Wertfaktoren beim Yu-Gi-Oh Karten Ankauf:</p>
        <ul className="list-disc list-inside space-y-1 my-3">
          <li>1st Edition vs. Unlimited</li>
          <li>Ghost Rare, Starlight Rare, Ultimate Rare</li>
          <li>OCG vs. TCG</li>
          <li>Zustand & Zentrierung</li>
          <li>Sammlerrelevanz</li>
        </ul>
        <p>
          Ein strukturierter Yu-Gi-Oh Karten Ankauf reduziert Preisverfall durch
          falsche Einschätzung, Verkaufsstress, Rückbuchungsrisiko und
          Plattformgebühren.
        </p>
      </>
    ),
  },
  {
    title: "Magic The Gathering verkaufen – Einzelkarten oder komplette Sammlung?",
    subtitle: "MAGIC KARTEN VERKAUFEN MIT STRATEGIE",
    content: (
      <>
        <p>
          Magic The Gathering Ankauf folgt eigenen Marktregeln. Reserved List
          Karten, Modern Staples, Commander Staples und Vintage-Karten
          entwickeln sich unabhängig von kurzfristigen Trends.
        </p>
        <p className="mt-3">Wer Magic Karten verkaufen möchte, sollte prüfen:</p>
        <ul className="list-disc list-inside space-y-1 my-3">
          <li>Reserved List Status</li>
          <li>Foil vs. Non-Foil</li>
          <li>Old Border Karten</li>
          <li>Format-Relevanz</li>
          <li>Zustand & Grading-Potenzial</li>
        </ul>
        <p>
          Einzelverkauf bringt theoretisch mehr Erlös, bedeutet jedoch hohen
          Zeitaufwand, Preisverhandlungen, Versandrisiko und Rücksendungen. Ein
          strukturierter Magic The Gathering Ankauf kalkuliert realistisch, fair
          und marktbezogen.
        </p>
      </>
    ),
  },
  {
    title: "Sammelkarten Wert ermitteln – Welche Karten haben wirklich Wert?",
    subtitle: "SAMMELKARTEN BEWERTEN LASSEN STATT SPEKULIEREN",
    content: (
      <>
        <p>
          „Welche Sammelkarten haben Wert?" gehört zu den häufigsten Fragen.
        </p>
        <p className="mt-3">Wertvoll sind meist:</p>
        <ul className="list-disc list-inside space-y-1 my-3">
          <li>Seltene Erstauflagen</li>
          <li>Secret Rares & Alternate Arts</li>
          <li>Gold Stars & Promo Karten</li>
          <li>Reserved List Karten bei Magic</li>
          <li>Hochgradige Karten mit Grading-Potenzial</li>
        </ul>
        <p>
          Nicht jede alte Karte ist automatisch wertvoll. Zustand, Nachfrage und
          Markttrend entscheiden. Eine professionelle Wertanalyse basiert auf
          realen Verkaufsdaten und Marktbeobachtung – nicht auf Wunschpreisen.
        </p>
      </>
    ),
  },
  {
    title: "Komplette Sammlung verkaufen – Wann lohnt sich das?",
    subtitle: "SAMMLUNG VERKAUFEN OHNE AUFWAND",
    content: (
      <>
        <p>Eine komplette Sammlung zu verkaufen lohnt sich besonders, wenn:</p>
        <ul className="list-disc list-inside space-y-1 my-3">
          <li>Zeit wichtiger ist als Maximalerlös</li>
          <li>Viele mittelpreisige Karten enthalten sind</li>
          <li>Kein Einzelverkaufsaufwand gewünscht ist</li>
        </ul>
        <p>
          Ein professioneller Sammelkarten Ankauf berücksichtigt Gesamtwert,
          Liquidität der Karten, Sortierung, Zustand und Nachfrage. Es wird
          transparent kalkuliert, sodass Verkäufer nachvollziehen können, wie
          sich der Ankaufspreis zusammensetzt.
        </p>
      </>
    ),
  },
  {
    title: "Sammelkarten Ankauf in der Nähe oder Online Ankauf?",
    subtitle: "LOKAL VERKAUFEN ODER ONLINE EINSENDEN?",
    content: (
      <>
        <p>
          Lokaler Ankauf bietet persönliche Beratung, direkte Bewertung und
          sofortige Klärung von Fragen.
        </p>
        <p className="mt-3">Online Ankauf bietet:</p>
        <ul className="list-disc list-inside space-y-1 my-3">
          <li>Deutschlandweite Abwicklung</li>
          <li>Versicherter Versand</li>
          <li>Schnelle Auszahlung</li>
        </ul>
        <p>
          Beide Modelle haben ihre Vorteile – Online Ankauf deutschlandweit
          sowie Verkauf im Ladengeschäft.
        </p>
      </>
    ),
  },
  {
    title: "Sammelkarten verkaufen ohne eBay Risiko",
    subtitle: "WARUM EIN PROFESSIONELLER ANKAUF MEIST MEHR BRINGT",
    content: (
      <>
        <p>Plattformen wie eBay bergen Risiken:</p>
        <ul className="list-disc list-inside space-y-1 my-3">
          <li>Gebühren</li>
          <li>Fake-Käufer</li>
          <li>Rücksendungen</li>
          <li>Preisunterbietung</li>
          <li>Zeitaufwand</li>
        </ul>
        <p>Ein strukturierter TCG Ankauf bietet:</p>
        <ul className="list-disc list-inside space-y-1 my-3">
          <li>Transparente Kalkulation</li>
          <li>Faire Preise</li>
          <li>Schnelle Auszahlung</li>
          <li>Keinen Verkaufsstress</li>
        </ul>
        <p>
          Gerade bei hochwertigen Karten oder kompletten Sammlungen ist ein
          professioneller Sammelkarten Ankauf langfristig oft die wirtschaftlich
          bessere Lösung.
        </p>
      </>
    ),
  },
];

export default function Ratgeber() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 text-neutral-300 text-sm font-medium mb-4 border border-white/10">
            Ratgeber
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ratgeber: Sammelkarten verkaufen
          </h2>
          <p className="text-neutral-500 mt-3">
            Alles was du über den Kartenverkauf wissen musst
          </p>
        </div>

        <div className="space-y-4">
          {SECTIONS.map((section, i) => {
            const isExpanded = expandedIndex === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-300 ${
                  isExpanded
                    ? "border-white/20 bg-white/[0.05]"
                    : "border-white/10 bg-white/[0.02] hover:border-white/15"
                }`}
              >
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : i)}
                  className="w-full text-left p-6 flex items-start justify-between gap-4"
                >
                  <div>
                    <span className="text-xs font-semibold tracking-wider text-neutral-500 uppercase">
                      {section.subtitle}
                    </span>
                    <h3 className="text-lg font-semibold text-white mt-1">
                      {section.title}
                    </h3>
                  </div>
                  <div className="flex-shrink-0 mt-1">
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-white" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-neutral-600" />
                    )}
                  </div>
                </button>
                {isExpanded && (
                  <div className="px-6 pb-6 text-neutral-400 leading-relaxed space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
                    {section.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}