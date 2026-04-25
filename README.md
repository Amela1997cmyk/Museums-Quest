
# Projekttitel:
## Das GrazQuiz – Code-Erklärung
Das ist eine Progressive Web App (PWA) über die Geschichte von Graz. Hier ist ein Überblick:

# Struktur & Layout
- Header: Logo und Badge (GrazMuseum)
- Hero-Bereich: 5 Bilder aus Graz mit überlagerndem Text (1128–2003)
- Navigation: 3 Tabs – Quiz, Epochen, Über

# Die drei Hauptpanels
Panel	Inhalt
Quiz----40 Fragen zu 5 Epochen der Grazer Geschichte; Benutzer wählt Epoche → 10 Fragen → Ergebnis
Epochen-----Informationstexte zu den 5 historischen Perioden (1128–1600, 1600–1809, etc.)
Über-------Beschreibung der App und Quellen#

# Quiz-Logik (JavaScript)
1. showPanel() → Wechsel zwischen Quiz/Epochen/Über
2. selectEpoch() → Benutzer wählt Epoche oder "alle"
3. startQuiz() → 10 Fragen aus Pool auswählen & mischen
4. showQuestion() → Frage anzeigen + Antwortmöglichkeiten (gemischt)
5. answer() → Antwort prüfen → Richtig/Falsch markieren + Fakt zeigen
6. nextQuestion() → Nächste Frage laden
7. showResult() → Ergebnis mit Titel & Bewertung (0-100%)

# Daten: FRAGEN-Array
- 40 Fragen mit: epoche, frage, richtig, optionen, fakt
- 8 Fragen pro Epoche

#offline funktion PWA 
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}

# CSS-Highlights
CSS-Variablen für einfache Farbverwaltung
Responsive Design (Mobile-angepasst)
Fade-In-Animationen
Farbcodierung: Grün = richtig, Rot = falsch, Lila = Hauptakzent
Kurz: Ein interaktives Museum-Quiz über Graz' Geschichte mit modernem Dark-Mode-Design! 🏛️

PWA Todo-Liste für GitHub Pages
================================

1 — Repository vorbereiten
- x GitHub-Repository erstellen
- ☐ MIT Lizenz hinzufügen
- x README.md bearbeiten (Projektbeschreibung)

2 — Grunddateien erstellen
- x index.html erstellen
- x style.css erstellen
- x app.js erstellen

3 — PWA-Dateien hinzufügen
- ☐ manifest.json erstellen (App-Name, Icons, Farben)
- ☐ service-worker.js erstellen (Offline-Funktion)
- ☐ App-Icon erstellen (min. 192x192px)

4 — GitHub Pages einrichten
- ☐ Dateien auf GitHub hochladen (commit & push)
- ☐ GitHub Pages in den Repository-Settings aktivieren
- ☐ PWA im Browser testen (auf dem Handy installieren)




Abgabe-Checkliste 
================================
Diese Liste ist für euch. Geht sie vor der Abgabe durch.

- [ ] Prototyp im Repository und lauffähig (index.html im Browser öffnen, Seite funktioniert)
- [ ] Nachvollziehbare Ordnerstruktur (siehe oben)
- [ ] README.md (Projektname, was es tut, wie man es lokal öffnet)
- [ ] docs/requirements.md
- [ ] docs/data.md
- [ ] docs/visual-design.md
- [ ] docs/journal.md
- [ ] Persönliches HTML/CSS-Tutorial im Repository (Format frei wählbar)
- [ ] Mindestens 4–5 Git-Commits mit sinnvollen Messages
- [ ] Pflicht-Video geschaut
- [ ] Ihr könnt euer HTML und CSS erklären
