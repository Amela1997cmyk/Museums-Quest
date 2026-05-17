# 📖 Das GrazQuiz – Wie funktioniert mein Code?

Dieses Projekt ist eine **Progressive Web App (PWA)** – eine Quiz-App zur Geschichte von Graz. Sie funktioniert auch offline und kann auf dem Homescreen installiert werden.

---

## 🏗️ Struktur der Seite

### 1. Der HEAD (Kopfzeile)

```html
<!DOCTYPE html>           <!-- Sagt: moderne HTML5-Seite -->
<html lang="de">          <!-- Sprache = Deutsch -->
<meta charset="UTF-8">    <!-- Erlaubt Umlaute (ä, ö, ü) -->
```

**Wichtige Meta-Tags:**
- `viewport` → macht die Seite auf Handys responsive (richtige Größe ohne Rauszoomen)
- `manifest.json` → verknüpft die PWA (Installierbar, Offline-Modus, Icon)
- `rel="icon"` → das kleine Icon im Browser-Tab

**Schriftarten:** Von Google Fonts laden wir die "Inter" Schriftart

---

### 2. CSS-Variablen (`:root`)

```css
:root {
  --black: #cbc9bd;
  --accent: #56008f;   /* Lila – deine Primärfarbe */
  --correct: #548805;  /* Grün – richtige Antwort */
  --wrong: #8f1a00;    /* Orange – falsche Antwort */
}
```

**Warum?** Statt `color: #cbc9bd` überall zu schreiben, schreiben wir `var(--black)`. 
Wenn du die Farbe ändern willst, musst du sie nur **einmal** ändern und überall wird es automatisch aktualisiert!

---

### 3. HEADER & NAV (Kopfzeile + Navigation)

```
┌─────────────────────────────────┐
│ 🏛️ Das GrazQuiz   | PWA |        │  ← Header mit Logo
├─────────────────────────────────┤
│ QUIZ   EPOCHEN   ÜBER    SAMM... │  ← Navigation (Tabs)
├─────────────────────────────────┤
```

**Wie funktioniert die Navigation?**

```html
<button onclick="showPanel('quiz', this)">QUIZ</button>
```

Wenn du auf "QUIZ" klickst:
1. `showPanel('quiz', this)` wird aufgerufen
2. **Das JavaScript versteckt alle `.panel`-Divs** (mit `display: none`)
3. **Nur das Panel mit ID `#panel-quiz` wird angezeigt** (`display: block`)
4. Der Button bekommt die Klasse `.active` → wird lila

```javascript
function showPanel(id, btn) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
  
  document.getElementById('panel-' + id).classList.add('active');  // Nur 1 Panel aktiv
  if (btn) btn.classList.add('active');                            // Button wird lila
}
```

---

### 4. Die vier PANELS (Tabs)

Die Seite hat vier Haupt-Bereiche (aber nur einer ist sichtbar):

#### **Panel 1: Quiz** (`#panel-quiz`)
Hier passiert die Aktion! Es gibt 3 Phasen:

**Phase 1️⃣ – Vorbereitung:**
```html
<div id="quiz-setup">  <!-- Versteckt, bis Quiz startet -->
  <div class="epoch-grid">  <!-- 5 Kacheln: eine für jede Epoche -->
    <div class="epoch-card" data-epoch="0" onclick="selectEpoch(this)">
      <div class="ep-years">1128–1600</div>
      <div class="ep-label">Mittelalter & Frühe Neuzeit</div>
    </div>
  </div>
  <button onclick="startQuiz()">Quiz starten</button>
</div>
```

Wenn du auf eine Epoche klickst → `selectEpoch(this)` speichert, welche Epoche (0-4) du gewählt hast.

**Phase 2️⃣ – Das Quiz läuft** (`#quiz-running`):
```html
<div id="quiz-running" style="display:none">
  <div class="score-bar">
    <span id="score-badge">Punkte: 0</span>
    <span id="q-counter">1 / 10</span>
  </div>
  <div class="question-text" id="question-text"></div>
  <div class="options" id="options"></div>  <!-- Hier kommen die 4 Antwort-Buttons -->
  <div id="feedback"></div>  <!-- Richtig/Falsch Nachricht -->
</div>
```

Das Quiz zeigt:
- Die aktuelle Frage
- 4 Antwort-Buttons
- Feedback (Richtig ✓ oder Falsch ✗)
- Fortschrittsbalken

**Phase 3️⃣ – Ergebnis** (`#quiz-result`):
```html
<div id="quiz-result" style="display:none">
  <div class="result-score" id="final-score">8 / 10</div>
  <div class="result-title" id="result-title">Gut gemacht!</div>
</div>
```

#### **Panel 2: Epochen** (`#panel-epochen`)
5 Karten mit Text zur Geschichte von Graz (1128–2003)

#### **Panel 3: Über** (`#panel-ueber`)
Info über die App und das Museum

---

## 🧠 Das JavaScript-Herz

### Die FRAGEN-Datei

```javascript
const FRAGEN = [
  { 
    epoche: 0,                    // Welche Epoche? (0-4)
    epochLabel: "1128–1600",
    frage: "In welchem Jahr wurde Graz erstmals urkundlich erwähnt?",
    richtig: "1128",              // Die korrekte Antwort
    optionen: ["1128", "1147", "1180", "1222"],  // 4 mögliche Antworten
    fakt: "Die erste Erwähnung findet sich in einer Urkunde des Markgrafen Otakar III."
  },
  // ... 39 weitere Fragen
];
```

**Wie funktioniert die Filterung?**
```javascript
function startQuiz() {
  const pool = selectedEpoch === 'alle'
    ? FRAGEN                                      // Alle 40 Fragen
    : FRAGEN.filter(f => f.epoche === parseInt(selectedEpoch));  // Nur z.B. Epoche 0
  
  // Von der Auswahl werden zufällig 10 genommen
  questions = shuffle(pool).slice(0, 10);
}
```

---

### Die Quiz-Funktionen

#### 🎬 `startQuiz()`
```javascript
function startQuiz() {
  // 1. Wähle Fragen basierend auf Epoche
  // 2. Mische sie zufällig
  // 3. Nimm maximal 10
  // 4. Verstecke Vorbereitung, zeige Quiz
  questions = shuffle(pool).slice(0, 10);
  current = 0;
  score = 0;
  showQuestion();
}
```

#### ❓ `showQuestion()`
```javascript
function showQuestion() {
  const q = questions[current];
  
  document.getElementById('question-text').innerHTML = q.frage;
  document.getElementById('q-counter').innerHTML = `${current + 1} / ${questions.length}`;
  
  // Mische die Antworten zufällig
  const shuffledOptions = shuffle(q.optionen);
  
  // Erstelle 4 Buttons für die Antworten
  document.getElementById('options').innerHTML = shuffledOptions
    .map(opt => `<button class="opt-btn" onclick="answer('${opt}', this, '${q.richtig}')">${opt}</button>`)
    .join('');
}
```

**Was passiert hier?**
1. Zeige die Frage an
2. Zeige Nummer der aktuellen Frage (z.B. "3 / 10")
3. Mische die 4 Antwort-Optionen zufällig
4. Erstelle für jede Antwort einen Button, der beim Klick `answer()` aufruft

#### ✓ `answer(chosen, btn, correct)`
```javascript
function answer(chosen, btn, correct) {
  if (answered) return;  // Verhindere Doppelklick
  answered = true;       // Sperr alle weiteren Klicks
  
  // Sperr alle Buttons
  document.querySelectorAll('.opt-btn').forEach(b => {
    b.disabled = true;
  });
  
  // Zeige welche richtig/falsch ist
  if (chosen === correct) {
    btn.classList.add('correct');  // Grün
    score++;  // Punkt hinzufügen
  } else {
    btn.classList.add('wrong');     // Orange
    document.querySelectorAll('.opt-btn').forEach(b => {
      if (b.textContent === correct) b.classList.add('correct');  // Zeige die richtige
    });
  }
  
  // Zeige Erklärung
  document.getElementById('feedback').innerHTML = 
    `<div class="feedback ${chosen === correct ? 'correct' : 'wrong'}">
      ${chosen === correct ? '✓ Richtig!' : '✗ Falsch'}
    </div>
    <div class="fact-box">${questions[current].fakt}</div>`;
  
  // Zeige "Weiter"-Button
  document.getElementById('next-btn').style.display = 'block';
  answered = false; // Zurücksetzen für nächste Frage
}
```

**Ablauf:**
1. Vergleiche `chosen` (deine Antwort) mit `correct` (richtige Antwort)
2. Wenn richtig → +1 Punkt, Button wird **grün**
3. Wenn falsch → Button wird **rot**, und die richtige Antwort wird grün
4. Zeige Erklärung (der Fakt) an
5. Zeige "Weiter"-Button

#### ➡️ `nextQuestion()`
```javascript
function nextQuestion() {
  current++;  // Nächste Frage
  answered = false;
  
  if (current >= questions.length) {
    // Quiz vorbei → Ergebnis zeigen
    showResult();
  } else {
    // Nächste Frage anzeigen
    showQuestion();
  }
}
```

#### 🏆 `showResult()`
```javascript
function showResult() {
  const percent = Math.round((score / questions.length) * 100);
  
  document.getElementById('final-score').innerHTML = `${score} / ${questions.length}`;
  
  if (percent >= 80) {
    document.getElementById('result-title').innerHTML = 'Ausgezeichnet! 🌟';
  } else if (percent >= 60) {
    document.getElementById('result-title').innerHTML = 'Gut gemacht!';
  } else {
    document.getElementById('result-title').innerHTML = 'Versuch es nochmal!';
  }
}
```

---

## 🧩 Wichtige Helfer

### `shuffle(arr)` – Zufallsmischer
```javascript
function shuffle(arr) { 
  return [...arr].sort(() => Math.random() - 0.5); 
}
```
Mischt ein Array zufällig. Das `...arr` erstellt eine Kopie, um das Original nicht zu verändern.

### `selectEpoch(el)` – Epoche auswählen
```javascript
function selectEpoch(el) {
  document.querySelectorAll('.epoch-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  selectedEpoch = el.dataset.epoch;  // Speicher Epoche (0-4)
}
```
Entfernt `selected` von allen Kacheln, fügt es der neuen hinzu.

---

## 🎨 CSS – Wie siehts aus?

### Panel-System
```css
.panel {
  display: none;  /* Versteckt */
}

.panel.active {
  display: block;  /* Sichtbar */
  animation: fadeIn 0.25s ease;  /* Sanfte Animation */
}
```

### Antwort-Buttons
```css
.opt-btn {
  background: var(--dark-card);
  border: 1px solid var(--border);
  padding: 0.75rem;
  cursor: pointer;
  transition: all 0.2s;
}

.opt-btn.correct {
  background: var(--correct-bg);  /* Grüner Hintergrund */
  border-color: var(--correct);   /* Grüner Rand */
}

.opt-btn.wrong {
  background: var(--wrong-bg);    /* Orange Hintergrund */
  border-color: var(--wrong);     /* Orange Rand */
}
```

---

## 🔄 Zusammenfassung: Wie ein Quiz-Durchlauf abläuft

```
1. User wählt Epoche oder "Alle" → selectEpoch()
                    ↓
2. User klickt "Quiz starten" → startQuiz()
   - Filter Fragen nach Epoche
   - Mische 10 Fragen zufällig
   - Zeige Quiz-Setup verstecken
                    ↓
3. showQuestion() wird aufgerufen
   - Zeige Frage & 4 Button
                    ↓
4. User klickt Antwort → answer(chosen, btn, correct)
   - Vergleiche mit korrekter Antwort
   - Färbe Button grün/orange
   - Zeige Erklärung
                    ↓
5. User klickt "Weiter" → nextQuestion()
   - current++ (nächste Frage)
   - Wenn mehr Fragen: zurück zu Schritt 3
   - Wenn keine mehr: showResult()
                    ↓
6. Zeige Ergebnis mit Bewertung
   - User kann "Nochmal spielen" klicken → startQuiz()
```

---

## 💡 Tipps zum Bearbeiten

- **Neue Fragen?** → Array `FRAGEN` bearbeiten
- **Farben ändern?** → CSS-Variablen in `:root`
- **Andere Texte?** → In den `innerHTML` Zeilen
- **Neue Epochen?** → `epoche: 5` hinzufügen (und bei Filter anpassen)
- **Mehr Fragen pro Quiz?** → `.slice(0, 10)` ändern auf z.B. `.slice(0, 20)`


                                  
## service Worker
                              javascriptif ('serviceWorker' in navigator) {
                                navigator.serviceWorker.register('service-worker.js');
                              }
Ganz am Ende, zwei Zeilen. Prüft ob der Browser Service Worker unterstützt (tun fast alle modernen Browser), 
und registriert dann die service-worker.js Datei – die macht die App offline-fähig.

---

## 🔁 Session-Wiederaufnahme mit `sessionStorage`

Kürzlich wurde im `app.js` eine einfache Session‑Wiederaufnahme ergänzt. Ziel: Ein laufendes Quiz beim Neuladen des Tabs nicht zu verlieren.

- **Was wird gespeichert:** `selectedEpoch`, `questionsIdx`, `current`, `score` (als JSON unter dem Key `mq_session`).
- **Warum `questionsIdx`:** Statt komplette Frage‑Objekte zu speichern werden Indizes in `FRAGEN` benutzt — das hält die Session‑Daten klein.
- **Neue Helferfunktionen:**
  - `saveSession()` — schreibt aktuellen Zustand in `sessionStorage`.
  - `loadSession()` — liest und validiert gespeicherte Daten, stellt `questions` aus `questionsIdx` wieder her.
  - `clearSession()` — entfernt die gespeicherte Session (wird beim Neustart verwendet).
  - `tryRestoreSession()` — prüft beim Laden der Seite, ob eine Session vorhanden ist, und setzt das Quiz fort.

- **Wann gespeichert wird:**
  - bei Epoche‑Auswahl (`selectEpoch()`),
  - beim Start des Quiz (`startQuiz()`),
  - nach jeder beantworteten Frage (`answer()`).

- **Wann gelöscht wird:**
  - bei `restartQuiz()` wird die Session entfernt, sodass ein komplett neuer Durchlauf möglich ist.

- **Hinweis:** Die Implementierung nutzt `sessionStorage` (Daten bleiben nur in diesem Tab). 
