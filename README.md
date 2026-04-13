
# Projekttitel:
**Museums Quest**

Eine PWA, die von einer Sammlung Fragen und Antworten zusammenstellt. Zum Beispiel aus Albertina werden bei bestimmten Werken Fragen gestellt, die einem zum nächsten Rätsel führen. Bei den Werken wird auch kurzer Input gegeben von Epoche, Bildanalyse, Geschichte zum Künstler. Man sammelt Punkte und erhält am Ende Items. (Pinsel, Leinwand etc.)

Beispiele: 
- Finde das älteste Objekt
- Welche Farbe dominiert dieses Bild? 
- Welches Porträt zeigt einen Mann in Uniform?

*Für wen das Projekt gedacht ist*
- Für Schulklassen als eine interaktivere Möglichkeit von Wissenstransfer.
### Welche Daten oder Inhalte verwendet werden (z.B. Texte, Bilder, APIs, Sammlungen)
- Sammlung eines Museums und Quiz-Abfrage


### Die 3 Zutaten einer PWA

- manifest.json – beschreibt die App (Name, Icon, Farben)
- service-worker.js – macht die App offline-fähig (speichert Dateien im Cache)
- HTTPS – Pflicht für PWAs, GitHub Pages liefert das automatisch ✓


Daten sammeln
================================
- Scrappen von einer Museumsseite um eine Sammlung von Werken zu generieren? Code von anderem Kurs schon geschrieben
- Welches Format um Daten einzuspielen? JSON
- Spielealgorithmus für automatische Rätsel erstellen? Leider nur mit API und KI möglich und dafür zu aufwendig
- Layout normal Frage und Antworten Felder
- Spielername
- Punkte sammeln
## So würde mein Quiz-Ablauf aussehen
1. Daten laden
Entweder lädst du deine sammlung.json hoch, oder du startest mit den Beispieldaten. Das Spiel liest dann alle Objekte ein (Titel, Künstler, Jahr).
????Code für das scraping oder alles über die KI als Json generieren?????


2. Fragen generieren
Aus deinen Daten werden automatisch drei Fragetypen erstellt:

Wer schuf „[Titel]"? → Künstler erraten
In welchem Jahr entstand „[Titel]"? → Jahr erraten
Welches Werk stammt von [Künstler]? → Titel erraten

Für jede Frage gibt es 4 Antwortmöglichkeiten – eine richtige, drei falsche. Die falschen werden zufällig aus den anderen Objekten deiner Sammlung gezogen.
3. Spielablauf
Du siehst eine Frage mit 4 Buttons. Nach deiner Auswahl wird sofort angezeigt ob du richtig oder falsch lagst, und die korrekte Antwort wird grün markiert. Dann geht es zur nächsten Frage.
4. Ergebnis
Am Ende siehst du deine Punktzahl (z.B. 6 / 8) und eine Bewertung.


