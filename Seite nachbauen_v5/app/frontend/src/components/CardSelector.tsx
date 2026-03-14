import { useState } from "react";
import { ArrowLeft, ArrowRight, Mail, Package, Layers, CreditCard, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const RECIPIENT_EMAIL = "info@epiccardsnms.com";

const CARD_TYPES = [
  {
    id: "pokemon",
    label: "Pokémon",
    image: "/assets/logos/pokemon-logo.png",
  },
  {
    id: "magic",
    label: "Magic: The Gathering",
    image: "/assets/logos/magic-logo.png",
  },
  {
    id: "andere",
    label: "Andere",
    image: "https://mgx-backend-cdn.metadl.com/generate/images/1025752/2026-03-14/591259e7-a858-4404-8a21-84b4e366eafc.png",
  },
];

const CATEGORIES = [
  {
    id: "einzelkarten",
    label: "Einzelkarten",
    description: "Einzelne wertvolle Karten verkaufen",
    icon: CreditCard,
  },
  {
    id: "bulk",
    label: "Bulk",
    description: "Große Mengen an Karten auf einmal",
    icon: Package,
  },
  {
    id: "sammlung",
    label: "Sammlung",
    description: "Komplette Sammlung verkaufen",
    icon: Layers,
  },
];

function buildMailtoLink(cardTypeLabel: string, categoryLabel: string) {
  const subject = encodeURIComponent(
    `Ankauf-Anfrage: ${cardTypeLabel} - ${categoryLabel}`
  );

  let bodyTemplate = "";

  if (categoryLabel === "Einzelkarten") {
    bodyTemplate = `Hallo EpicCards Team,

ich möchte gerne meine ${cardTypeLabel} Einzelkarten verkaufen.

Kartentyp: ${cardTypeLabel}
Kategorie: ${categoryLabel}

Anzahl der Karten: [Bitte eintragen]
Zustand der Karten (Mint/Near Mint/Played/etc.): [Bitte eintragen]
Besondere Karten (z.B. Holographisch, Full Art, etc.): [Bitte eintragen]
Geschätzter Wert (falls bekannt): [Bitte eintragen]

Weitere Informationen:
[Hier kannst du weitere Details zu deinen Karten angeben]

Mit freundlichen Grüßen`;
  } else if (categoryLabel === "Bulk") {
    bodyTemplate = `Hallo EpicCards Team,

ich möchte gerne meine ${cardTypeLabel} Bulk-Karten verkaufen.

Kartentyp: ${cardTypeLabel}
Kategorie: ${categoryLabel}

Ungefähre Anzahl der Karten: [Bitte eintragen]
Sprache der Karten (Deutsch/Englisch/Japanisch/etc.): [Bitte eintragen]
Zustand der Karten (sortiert/unsortiert): [Bitte eintragen]
Enthält die Sammlung Holos/Rares?: [Ja/Nein]

Weitere Informationen:
[Hier kannst du weitere Details zu deinen Karten angeben]

Mit freundlichen Grüßen`;
  } else {
    bodyTemplate = `Hallo EpicCards Team,

ich möchte gerne meine ${cardTypeLabel} Sammlung verkaufen.

Kartentyp: ${cardTypeLabel}
Kategorie: ${categoryLabel}

Ungefähre Anzahl der Karten: [Bitte eintragen]
Zeitraum der Sammlung (z.B. 2000-2024): [Bitte eintragen]
Zustand der Karten: [Bitte eintragen]
Enthält die Sammlung besondere Karten?: [Bitte eintragen]
Wie ist die Sammlung gelagert (Ordner/Boxen/etc.)?: [Bitte eintragen]

Weitere Informationen:
[Hier kannst du weitere Details zu deiner Sammlung angeben]

Mit freundlichen Grüßen`;
  }

  const body = encodeURIComponent(bodyTemplate);
  return `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
}

export default function CardSelector() {
  const [step, setStep] = useState(0);
  const [cardType, setCardType] = useState("");
  const [category, setCategory] = useState("");

  const canGoNext = () => {
    if (step === 0) return !!cardType;
    if (step === 1) return !!category;
    return false;
  };

  const getCardTypeLabel = () => {
    return CARD_TYPES.find((ct) => ct.id === cardType)?.label || cardType;
  };

  const getCategoryLabel = () => {
    return CATEGORIES.find((cat) => cat.id === category)?.label || category;
  };

  const handleOpenMail = () => {
    const link = buildMailtoLink(getCardTypeLabel(), getCategoryLabel());
    window.location.href = link;
  };

  return (
    <div className="space-y-8">
      {/* Progress Bar */}
      <div className="flex items-center gap-2 max-w-xs mx-auto">
        {[0, 1, 2].map((s) => (
          <div
            key={s}
            className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
              s <= step ? "bg-white" : "bg-white/10"
            }`}
          />
        ))}
      </div>

      {/* Step 0: Card Type */}
      {step === 0 && (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white">
              Welche Karten möchtest du verkaufen?
            </h3>
            <p className="text-neutral-500 text-sm mt-1">Wähle dein Kartenspiel</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {CARD_TYPES.map((ct) => (
              <button
                key={ct.id}
                onClick={() => setCardType(ct.id)}
                className={`group relative overflow-hidden rounded-2xl border-2 transition-all duration-300 ${
                  cardType === ct.id
                    ? "border-white shadow-lg shadow-white/10 scale-[1.02]"
                    : "border-white/10 hover:border-white/30"
                }`}
              >
                <div className="aspect-[4/3] overflow-hidden bg-neutral-900 flex items-center justify-center p-6">
                  <img
                    src={ct.image}
                    alt={ct.label}
                    className={`max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110 ${
                      ct.id === "andere" ? "w-full h-full object-cover" : ""
                    }`}
                  />
                </div>
                <div className="p-4 bg-neutral-900/80 border-t border-white/5">
                  <span className="text-base font-bold text-white">{ct.label}</span>
                </div>
                {cardType === ct.id && (
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-black" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 1: Category */}
      {step === 1 && (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white">
              Was möchtest du verkaufen?
            </h3>
            <p className="text-neutral-500 text-sm mt-1">Wähle eine Kategorie</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`p-6 rounded-2xl border-2 text-left transition-all duration-300 ${
                    category === cat.id
                      ? "border-white bg-white/10 shadow-lg shadow-white/5"
                      : "border-white/10 bg-white/[0.02] hover:border-white/30 hover:bg-white/5"
                  }`}
                >
                  <Icon
                    className={`w-8 h-8 mb-3 ${
                      category === cat.id ? "text-white" : "text-neutral-600"
                    }`}
                  />
                  <h4 className="text-white font-semibold">{cat.label}</h4>
                  <p className="text-neutral-500 text-sm mt-1">{cat.description}</p>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Step 2: Summary + Mail Button */}
      {step === 2 && (
        <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300 max-w-md mx-auto">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white">
              Deine Auswahl
            </h3>
            <p className="text-neutral-500 text-sm mt-1">
              Klicke auf den Button, um dein Mail-Programm zu öffnen
            </p>
          </div>

          {/* Summary Card */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-neutral-500 text-sm">Kartentyp</span>
              <span className="text-white font-semibold">{getCardTypeLabel()}</span>
            </div>
            <div className="h-px bg-white/10" />
            <div className="flex items-center justify-between">
              <span className="text-neutral-500 text-sm">Kategorie</span>
              <span className="text-white font-semibold">{getCategoryLabel()}</span>
            </div>
            <div className="h-px bg-white/10" />
            <div className="flex items-center justify-between">
              <span className="text-neutral-500 text-sm">Empfänger</span>
              <span className="text-white font-semibold text-sm">{RECIPIENT_EMAIL}</span>
            </div>
          </div>

          <p className="text-neutral-500 text-sm text-center">
            Es öffnet sich dein E-Mail-Programm mit einer vorausgefüllten Nachricht.
            Trage dort die Anzahl, den Zustand und weitere Infos zu deinen Karten ein.
          </p>

          {/* Mail Button */}
          <Button
            onClick={handleOpenMail}
            className="w-full py-6 text-lg bg-white text-black font-bold hover:bg-neutral-200 shadow-lg shadow-white/10 hover:shadow-white/20 transition-all rounded-xl"
          >
            <Mail className="w-5 h-5 mr-3" />
            Mail-Programm öffnen
          </Button>

          <p className="text-neutral-600 text-xs text-center">
            Falls sich kein Programm öffnet, sende eine E-Mail direkt an{" "}
            <a
              href={`mailto:${RECIPIENT_EMAIL}`}
              className="text-neutral-400 underline hover:text-white"
            >
              {RECIPIENT_EMAIL}
            </a>
          </p>
        </div>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between max-w-md mx-auto pt-4">
        <Button
          variant="ghost"
          onClick={() => setStep(Math.max(0, step - 1))}
          disabled={step === 0}
          className="text-neutral-400 hover:text-white hover:bg-white/5 disabled:opacity-30"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Zurück
        </Button>

        {step < 2 && (
          <Button
            onClick={() => setStep(step + 1)}
            disabled={!canGoNext()}
            className="bg-white text-black font-semibold hover:bg-neutral-200 disabled:opacity-30 disabled:cursor-not-allowed shadow-lg shadow-white/10"
          >
            Weiter
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
}