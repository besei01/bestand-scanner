# Bestand Scanner PWA v3.24

Offline-Web-App für iPhone + Bluetooth-Barcode-Scanner.

## Datenstruktur pro Artikel

- `barcode`: Artikelnummer / Barcode
- `stock`: Bestand
- `category`: Kat1
- `subcategory`: Kat2
- `subcategory2`: Kat3
- `subcategory3`: Kat4
- `dimensions`: Maße
- `image`: Bild als eingebettete Bilddaten, JPG oder PNG 100 × 100 Pixel

QR-Codes werden nicht gespeichert. Sie werden bei Bedarf aus `barcode` erzeugt.

## Neu in Version 3.2

- Kategorie pro Artikel
- Maße pro Artikel
- Artikelliste sortierbar nach Artikelnummer, Bestand oder Kategorie
- Demoartikel-Button entfernt

## Sicherung

- CSV-Export: `barcode`, `bestand`, `kategorie`, `masse`
- Vollbackup: alle Felder inklusive `image`

Für echte Datensicherung mit Bildern bitte regelmäßig das Vollbackup exportieren.

## Update

Dateien in GitHub Pages ersetzen:

- index.html
- manifest.json
- sw.js
- README.md
- qrcode.bundle.js
- .nojekyll
- icons/

Danach im iPhone öffnen:

https://deinname.github.io/dein-repository/index.html?v=32


## Neu in Version 3.3

Diese Bereiche können einzeln ein- und ausgeblendet werden:

- 2. Artikel anlegen / bearbeiten
- 4. QR-Codes / Etiketten
- 5. Sicherung / Import

Der Ein-/Ausblend-Zustand wird lokal auf dem iPhone gespeichert.


## Neu in Version 3.4

- Zusätzliches Feld `MagnetNummer`
- Suche berücksichtigt MagnetNummer
- Sortierung nach MagnetNummer aufsteigend/absteigend
- CSV-Export und Vollbackup enthalten MagnetNummer


## Neu in Version 3.5

- Die Artikelliste wird als kompakte Karten dargestellt.
- Auf dem Handy ist kein seitliches Wischen mehr nötig.
- Bereich `3. Artikelliste` kann ebenfalls ein- und ausgeblendet werden.
- Der Ein-/Ausblend-Zustand wird lokal gespeichert.


## Neu in Version 3.6

- QR-Code-/Etikettenbereich wurde entfernt.
- Neuer Bereich `4. Bestandsübersicht / Drucken`.
- Bestandsübersicht kann gefiltert werden:
  - Kategorie
  - Suchtext
  - Bestand = 0 / Bestand ≠ 0 / alle
- Drucklayout ist kompakt und papiersparend.
- Über den Druckdialog kann die Übersicht als PDF gespeichert werden.


## Neu in Version 3.7

- Die Bestandsübersicht enthält jetzt eine Bildspalte.
- Bilder werden in der Druckansicht und im PDF klein mit ausgegeben.
- Das Drucklayout bleibt kompakt und papiersparend.


## Neu in Version 3.8

- Neues Feld `Preis`
- Märkte können angelegt, ausgewählt und auf `Kein aktiver Markt` gesetzt werden
- Bei aktivem Markt wird jeder Warenausgang als Verkauf gespeichert
- Verkaufshistorie enthält Zeit, Markt, Artikelnummer, Menge, Einzelpreis, Summe und Bestand vor/nach Verkauf
- Verkaufshistorie kann als CSV exportiert werden
- Vollbackup enthält Artikel, Bilder, Märkte und Verkaufshistorie


## Neu in Version 3.9

- Bereich `Markt / Verkauf` kann ein- und ausgeblendet werden.
- Der Ein-/Ausblend-Zustand wird lokal gespeichert.


## Neu in Version 3.10

- Die feste Schalterleiste unten wurde entfernt.
- `Scan-Feld`, `Ausgang/Eingang` und `Tastatur an/Scanner-Modus` sind jetzt klein im Bereich `1. Scannen` integriert.
- Dadurch bleibt unten mehr Platz auf dem Handy.


## Neu in Version 3.11

- `Alle Artikel löschen` ist stärker abgesichert:
  - Bestätigungsdialog
  - zusätzliche Texteingabe `ALLE ARTIKEL LÖSCHEN`
- Neue Funktion `Verkaufshistorie löschen`
  - löscht nur Verkaufseinträge
  - Artikel, Bestände und Märkte bleiben erhalten
  - zusätzliche Texteingabe `VERKÄUFE LÖSCHEN`


## Neu in Version 3.12

- Warenausgang / Bestand reduzieren ist nur noch mit aktivem Markt möglich.
- Wenn kein aktiver Markt ausgewählt ist, wird der Scan bzw. `−1` blockiert.
- Der Bereich `Markt / Verkauf` wird automatisch eingeblendet, wenn ein Verkauf ohne aktiven Markt versucht wird.


## Neu in Version 3.13

- Der `−1`-Button in der Artikelliste ist wieder als Bestandskorrektur ohne aktiven Markt nutzbar.
- Der `−1`-Button schreibt keine Verkaufshistorie.
- Verkäufe per Scanner im Modus `Warenausgang −` bleiben weiterhin nur mit aktivem Markt möglich.
- Der aktive Markt wird oben im Bereich `1. Scannen` angezeigt.


## Neu in Version 3.14

- Eigener Bereich `Verkaufshistorie`
- Verkaufshistorie kann ein- und ausgeblendet werden
- Filter nach Markt
- Suche nach Artikelnummer
- Anzeige der letzten 50/100/250 oder aller Verkaufseinträge
- Zusammenfassung mit Menge und Umsatz


## Neu in Version 3.15

- Unbekannte QR-/Barcodes werden beim Scannen nicht mehr automatisch als neuer Artikel vorbereitet.
- Bei unbekanntem Code erscheint nur ein Hinweis.
- Es wird nichts gebucht und kein neuer Artikel angelegt.
- Neue Artikel können weiterhin manuell im Bereich `Artikel anlegen / bearbeiten` angelegt werden.


## Neu in Version 3.16

- Bereich `1. Scannen` wurde vereinfacht.
- Die fünf oberen Buttons wurden entfernt.
- Scannerbuchung ist fest auf `Warenausgang -1`.
- `Menge pro Scan` wurde entfernt; es wird immer Menge 1 gebucht.
- Das Scan-Feld steht jetzt ganz oben.
- Der aktive Markt wird direkt unter dem Scan-Feld angezeigt.
- Es gibt eine rote Warnung, wenn der Cursor nicht im Scan-Feld aktiv ist.


## Neu in Version 3.17

- Großer Status `VERKAUFSBEREIT` / `NICHT BEREIT`
- Letzter Verkauf wird groß im Scanbereich angezeigt
- Letzten Verkauf rückgängig machen
- Verkauf stornieren direkt in der Verkaufshistorie
- Storno erhöht den Bestand wieder und markiert den Verkauf als storniert
- Akustisches/haptisches Feedback bei Erfolg und Fehler
- Markt abschließen mit Zusammenfassung
- Schutz vor versehentlich aktivem Markt beim App-Start
- Backup-Erinnerung
- Marktbericht mit Umsatz/Menge je Artikel
- Marktbericht kann gedruckt oder als PDF gespeichert werden


## Neu in Version 3.18

- Fehlerkorrektur: JavaScript-Syntaxfehler aus Version 3.17 behoben.
- Buttons und Bedienelemente reagieren wieder.


## Neu in Version 3.19

- Buttons/Bedienelemente reagieren zuverlässiger beim ersten Tippen.
- Das Scan-Feld zieht den Fokus nicht mehr automatisch beim Öffnen/Einklappen von Bereichen.
- Das Bild bei `Letzter Verkauf` wird deutlich größer angezeigt.


## Neu in Version 3.20

- Vollbackup und Import unterstützen jetzt `data:image/jpeg` und `data:image/png`.
- Bilder im Artikelformular können als JPG oder PNG ausgewählt werden.
- Damit kann die Desktop-Bestandsverwaltung quadratische Bilder als JPG und Hoch-/Querformate als PNG mit Transparenz liefern.


## Neu in Version 3.24

- Artikelliste kann nach Kat1, Kat2, Kat3 und Kat4 filtern.
- Artikelliste zeigt kompakt nur Bild, Artikelnummer und Bestand.
- Scanbereich zeigt die letzten 3 Verkäufe kompakt mit Bild, Artikelnummer, Zeit und Bestandsänderung.
- Die App ist jetzt als Markt-App gedacht.
- Artikel anlegen und bearbeiten wurde aus der Oberfläche entfernt.
- In der Artikelliste gibt es keine Bestandskorrektur-, Bearbeiten- oder Löschen-Buttons mehr.
- Artikel und Stammdaten kommen aus der Desktop-Bestandsverwaltung.
- Auf dem Markt werden nur Verkäufe gescannt, vom Handy-Bestand abgezogen und als Verkaufshistorie exportiert.

