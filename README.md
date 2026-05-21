# Bestand Scanner PWA v3.2

Offline-Web-App für iPhone + Bluetooth-Barcode-Scanner.

## Datenstruktur pro Artikel

- `barcode`: Artikelnummer / Barcode
- `stock`: Bestand
- `category`: Kategorie
- `dimensions`: Maße
- `image`: Bild als eingebettete Bilddaten, empfohlen JPG 100 × 100 Pixel

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
