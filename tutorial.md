## head
<!DOCTYPE html> — sagt dem Browser: "Das ist eine moderne HTML-Seite"
lang="de" — Sprache der Seite, wichtig für Screenreader und Suchmaschinen
charset="UTF-8" — erlaubt Umlaute wie ä, ö, ü
viewport — macht die Seite auf Mobilgeräten richtig groß (kein Rauszoomen)
manifest.json — verknüpft die PWA-Konfiguration (Name, Icon, Farben)
fonts.googleapis.com — lädt die Schriftarten Cormorant Garamond & EB Garamond von Google

## root- element
:root ist das oberste Element der Seite. Hier definieren wir Farb-Variablen – das sind benannte Farben die wir überall wiederverwenden. 
Statt überall #3E2C1A zu schreiben, schreiben wir einfach var(--brown). 
Ändert man die Variable einmal, ändert sich die Farbe auf der ganzen Seite.

## header
Der <header> ist der dunkle Balken oben mit dem Titel. Die <nav> enthält die drei Tabs. Jeder Button ruft beim Klick die 
JavaScript-Funktion showPanel() auf und übergibt zwei Dinge: 
den Namen des Bereichs der angezeigt werden soll, und this – also sich selbst, damit er als "aktiv" markiert werden kann.

## panels
.panel        { display: none; }   /* alle versteckt */
.panel.active { display: block; }  /* der aktive sichtbar */
Die JavaScript-Funktion showPanel() entfernt active von allen und fügt es nur dem gewählten hinzu.

## json Datei laden

Der unsichtbare <input type="file"> wartet auf eine Dateiauswahl
Sobald eine Datei gewählt wird, feuert das change-Event
FileReader liest die Datei als Text
JSON.parse() wandelt den Text in ein JavaScript-Array um
renderCollection() zeigt die Objekte dann als Karten an

## sammlung anzeigen
forEach geht durch jedes Objekt im Array
obj.titel || obj.title || '—' bedeutet: nimm titel, falls nicht vorhanden nimm title, 
falls auch nicht vorhanden zeig einen Gedankenstrich — 
das macht die App flexibler für verschiedene JSON-Strukturen
Am Ende wird der fertige HTML-String in die Seite eingefügt

## fragen generieren
Für jedes Objekt werden falsche Antworten aus den anderen Objekten gezogen. shuffle() mischt das Array zufällig. 
Am Ende werden maximal 10 Fragen zufällig ausgewählt. 
Drei Fragetypen entstehen: nach Künstler, nach Jahr, nach Titel.

## Quiz-Ablauf
                              javascriptfunction answer(chosen, btn, correct) {
                                if (answered) return;        // verhindert Doppelklick
                                answered = true;
                                document.querySelectorAll('.opt-btn').forEach(b => {
                                  b.disabled = true;         // alle Buttons sperren
                                  if (b.textContent === correct) b.classList.add('correct'); // richtige grün
                                });
                                if (chosen === correct) { score++; }
                                else { btn.classList.add('wrong'); }  // falsche rot
                              }
Nach einer Auswahl werden alle Buttons gesperrt, 
die richtige Antwort grün markiert, eine falsche Antwort rot – und der "Weiter"-Button erscheint.

                                  
## service Worker
                              javascriptif ('serviceWorker' in navigator) {
                                navigator.serviceWorker.register('service-worker.js');
                              }
Ganz am Ende, zwei Zeilen. Prüft ob der Browser Service Worker unterstützt (tun fast alle modernen Browser), 
und registriert dann die service-worker.js Datei – die macht die App offline-fähig.
