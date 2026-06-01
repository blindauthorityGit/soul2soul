import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum und rechtliche Angaben des Soul2Soul Designstudios.",
  alternates: {
    canonical: "/impressum",
  },
};

export default function ImpressumPage() {
  return (
    <LegalPage eyebrow="Rechtliches" title="Impressum">
      <h2>Angaben gemäß § 5 ECG</h2>

      <div className="my-8">
        <p className="mb-6 text-center text-sm font-medium uppercase tracking-[0.18em] text-primary">
          Soul2Soul
          <br />
          Eine Zusammenarbeit von
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p>
              Sandra Löbl
              <br />
              Kirchengasse 11
              <br />
              2860 Kirchschlag
              <br />
              Österreich
            </p>
          </div>

          <div>
            <p>
              Denise Ritschel
              <br />
              Gymelsdorfer Gasse 19
              <br />
              2700 Wiener Neustadt
              <br />
              Österreich
            </p>
          </div>
        </div>
      </div>

      <p>
        E-Mail: <a href="mailto:office@soul2soul.at">office@soul2soul.at</a>
        <br />
        Website: <a href="https://www.soul2soul.at">www.soul2soul.at</a>
        <br />
        Instagram: soul2soul.designstudios
        <br />
        Facebook: Soul2Soul Designstudio
      </p>

      <h2>Unternehmensgegenstand</h2>
      <p>
        Creative Studio für Grafikdesign, Markenauftritt, Webdesign, Social
        Media Gestaltung, kreative Beratung & Ressourcenmanagement
      </p>

      <h2>Gewerbe & Mitgliedschaften</h2>
      <p>
        Mitglied der Wirtschaftskammer Österreich (WKÖ)
        <br />
        Behörde gemäß ECG: Bezirkshauptmannschaft Wr. Neustadt
        <br />
        Anwendbare Rechtsvorschriften: Gewerbeordnung:{" "}
        <a href="https://www.ris.bka.gv.at">www.ris.bka.gv.at</a>
      </p>

      <h2>Haftungsausschluss</h2>
      <p>
        Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung
        für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten
        sind ausschließlich deren Betreiber verantwortlich.
      </p>
      <p>
        Alle Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für
        die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen
        wir jedoch keine Gewähr.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die auf dieser Website veröffentlichten Inhalte, Designs, Bilder und
        Texte unterliegen dem Urheberrecht. Jegliche Verwendung,
        Vervielfältigung oder Weitergabe bedarf der schriftlichen Zustimmung
        von Soul2Soul.
      </p>
    </LegalPage>
  );
}