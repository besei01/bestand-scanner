# Bestand Scanner PWA v2

Offline-Web-App für iPhone + Bluetooth-Barcode-Scanner.

## Neu in Version 2

- Doppelscan-Schutz: gleicher Barcode wird innerhalb der eingestellten Sekunden ignoriert.
- Schutz vor negativem Bestand: Warenausgang wird blockiert, wenn der Bestand unter 0 fallen würde.
- Umschaltbarer Scan-Feld-Modus:
  - Scanner-Modus: Bildschirmtastatur aus
  - Manuell: Tastatur im Scan-Feld erlauben
- Einstellungen werden lokal gespeichert.

## Bereits enthalten

- Artikel anlegen: Barcode, Name, Bestand, Mindestbestand, Lagerort
- Warenausgang: Scan reduziert Bestand
- Wareneingang: Scan erhöht Bestand
- Unbekannte Barcodes direkt als neuen Artikel anlegen
- Artikelsuche
- CSV-Import und CSV-Export
- Buchungshistorie
- Offlinefähig nach Installation auf dem Home-Bildschirm

## CSV-Importformat

Empfohlen mit Semikolon:

barcode;name;bestand;mindestbestand;lagerort
4012345678901;Schraube M6 x 20;50;10;Regal A1

## Update-Hinweis

Bei GitHub die bestehenden Dateien durch diese Version ersetzen:
index.html, manifest.json, sw.js, README.md, .nojekyll und den Ordner icons.

Danach auf dem iPhone öffnen:
https://besei01.github.io/bestand-scanner/?v=2

Die Produktdaten bleiben lokal auf dem iPhone erhalten.
Bitte trotzdem regelmäßig über "Artikel als CSV exportieren" sichern.
