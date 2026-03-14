import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_DATA = [
  {
    q: "Welche Trading-Karten kauft ihr an?",
    a: "Wir kaufen Pokémon-Karten, Magic: The Gathering Karten und viele weitere Trading Card Game (TCG) Karten an. Egal ob Einzelkarten, Bulk oder ganze Sammlungen – wir machen dir ein faires Angebot.",
  },
  {
    q: "Wie funktioniert der Ankauf?",
    a: "Der Prozess ist einfach: Wähle dein Kartenspiel, gib an ob du Einzelkarten, Bulk oder eine Sammlung verkaufen möchtest, und erhalte in unter 2 Minuten ein unverbindliches Kaufangebot per E-Mail.",
  },
  {
    q: "Wie werden meine Karten bewertet?",
    a: "Einzelkarten werden anhand aktueller Marktpreise bewertet. Für Bulk-Karten gelten feste Preise je nach Seltenheitsgrad. Bei ganzen Sammlungen erstellen wir ein individuelles Angebot basierend auf deinen Angaben.",
  },
  {
    q: "Ist das Angebot verbindlich?",
    a: "Nein, das erste Angebot ist unverbindlich. Erst wenn du das Angebot akzeptierst und die Karten bei uns eingegangen sind, wird der finale Preis bestätigt.",
  },
  {
    q: "Wie lange dauert es, bis ich mein Geld erhalte?",
    a: "Nach Eingang und Prüfung deiner Karten erhältst du die Auszahlung in der Regel innerhalb weniger Werktage.",
  },
  {
    q: "In welchem Zustand müssen die Karten sein?",
    a: "Wir kaufen Karten in jedem Zustand an. Der Zustand beeinflusst jedoch den Ankaufspreis. Karten in gutem bis neuwertigem Zustand erzielen natürlich höhere Preise.",
  },
  {
    q: "Wie versende ich meine Karten?",
    a: "Nachdem du unser Angebot akzeptiert hast, erhältst du alle Informationen zum Versand per E-Mail. Bitte verpacke deine Karten sicher, um Transportschäden zu vermeiden.",
  },
  {
    q: "Gibt es einen Mindestankaufswert?",
    a: "Für Einzelkarten gibt es keinen Mindestwert. Bei Bulk-Sendungen empfehlen wir eine Mindestanzahl von 100 Karten, damit sich der Versand für dich lohnt.",
  },
  {
    q: "Wie finde ich heraus, wie viel meine Sammelkarten wert sind?",
    a: "Den Wert Deiner Sammelkarten ermittelst Du durch eine professionelle Wertanalyse basierend auf echten Verkaufsdaten, Zustand und aktueller Nachfrage. Angebotspreise im Internet spiegeln nicht automatisch den realen Marktwert wider. Ein strukturierter Sammelkarten Ankauf berücksichtigt Edition, Seltenheit, Zustandsbewertung und Grading-Potenzial.",
  },
  {
    q: "Welche Sammelkarten bringen am meisten Geld?",
    a: "Am meisten Geld bringen seltene Karten in Near Mint Zustand mit hoher Nachfrage. Dazu gehören Pokémon Alternate Arts, Yu-Gi-Oh Ghost Rares oder Magic Reserved List Karten. Entscheidend sind Seltenheit, Zustand und Markttrend. Eine professionelle Bewertung verhindert, dass wertvolle Karten unter Marktpreis verkauft werden.",
  },
  {
    q: "Lohnt es sich, Sammelkarten bewerten zu lassen, um sie zu verkaufen?",
    a: "Ja, besonders bei Karten ab etwa 100 Euro Marktwert. Eine Bewertung schützt vor Fehlverkäufen und zeigt Grading-Potenzial auf. Ein seriöser Ankauf analysiert transparent und marktbezogen.",
  },
  {
    q: "Wie läuft ein Sammelkarten Ankauf online ab?",
    a: "Du sendest Bilder oder eine Liste ein, erhältst ein Angebot, versendest versichert und bekommst nach Prüfung die Auszahlung. Ein strukturierter Online Ankauf bietet Sicherheit, Transparenz und schnelle Abwicklung.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 text-neutral-300 text-sm font-medium mb-4 border border-white/10">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Häufig gestellte Fragen
          </h2>
          <p className="text-neutral-500 mt-3">
            Alles was du über den Kartenankauf wissen musst
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {FAQ_DATA.map((item, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-white/10 rounded-xl px-6 bg-white/[0.02] data-[state=open]:bg-white/[0.05] data-[state=open]:border-white/20 transition-all"
            >
              <AccordionTrigger className="text-left text-white hover:text-neutral-300 hover:no-underline py-5 text-base font-medium">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-neutral-400 leading-relaxed pb-5">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}