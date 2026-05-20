# Bestand Scanner PWA v3.1

Offline-Web-App für iPhone + Bluetooth-Barcode-Scanner.

## Neu in Version 3.1

- QR-Code-Erzeugung wurde ersetzt.
- Statt eines selbst geschriebenen Mini-QR-Generators nutzt die App jetzt eine lokale QR-Bibliothek (`qrcode.bundle.js`).
- Die App bleibt offlinefähig, weil die Bibliothek als Datei im Repository liegt und vom Service Worker gecacht wird.

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

Dateien in GitHub Pages ersetzen bzw. ergänzen:

- index.html
- manifest.json
- sw.js
- README.md
- qrcode.bundle.js
- .nojekyll
- icons/

Danach im iPhone öffnen:

https://deinname.github.io/dein-repository/index.html?v=31
