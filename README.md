# Bestand Scanner PWA v3

Offline-Web-App für iPhone + Bluetooth-Barcode-Scanner.

## Datenstruktur pro Artikel

- `barcode`: Artikelnummer / Barcode
- `stock`: Bestand
- `image`: Bild als eingebettete Bilddaten, empfohlen JPG 100 × 100 Pixel

QR-Codes werden nicht gespeichert. Sie werden bei Bedarf aus `barcode` erzeugt.

## Sicherung

- CSV-Export: nur `barcode` und `bestand`
- Vollbackup: `barcode`, `bestand` und `image`

Für echte Datensicherung mit Bildern bitte regelmäßig das Vollbackup exportieren.

## Update

Dateien in GitHub Pages ersetzen:

- index.html
- manifest.json
- sw.js
- README.md
- .nojekyll
- icons/

Danach im iPhone öffnen:

https://deinname.github.io/dein-repository/index.html?v=3
