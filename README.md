
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
