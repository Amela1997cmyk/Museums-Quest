
const FRAGEN = [
    /* ── 1128–1600 ── */
    { epoche: 0, epochLabel: "1128–1600", frage: "In welchem Jahr wurde Graz erstmals urkundlich erwähnt?", richtig: "1128", optionen: ["1128", "1147", "1180", "1222"], fakt: "Die erste Erwähnung findet sich in einer Urkunde des Markgrafen Otakar III." },
    { epoche: 0, epochLabel: "1128–1600", frage: "Welches Bauwerk ist das bekannteste Wahrzeichen von Graz auf dem Schlossberg?", richtig: "Der Uhrturm", optionen: ["Der Uhrturm", "Der Domturm", "Der Franziskanerturm", "Der Habsburgturm"], fakt: "Der Uhrturm aus dem 16. Jahrhundert ist das Wahrzeichen von Graz – die Bürger kauften ihn frei." },
    { epoche: 0, epochLabel: "1128–1600", frage: "Welche Herrscherdynastie machte Graz zur Residenzstadt?", richtig: "Die Habsburger", optionen: ["Die Habsburger", "Die Wittelsbacher", "Die Babenberger", "Die Zähringer"], fakt: "Kaiser Friedrich III. wählte Graz im 15. Jahrhundert als seine Residenz." },
    { epoche: 0, epochLabel: "1128–1600", frage: "Welcher Fluss prägt die Lage der Stadt Graz?", richtig: "Die Mur", optionen: ["Die Mur", "Die Raab", "Die Drau", "Die Salzach"], fakt: "Die Mur teilt Graz und war seit jeher wichtig für Handel und Versorgung." },
    { epoche: 0, epochLabel: "1128–1600", frage: "Wann erhielt Graz das Stadtrecht?", richtig: "1281", optionen: ["1281", "1150", "1320", "1389"], fakt: "König Rudolf I. von Habsburg verlieh Graz 1281 das Stadtrecht." },
    { epoche: 0, epochLabel: "1128–1600", frage: "Welche Gefahr bedrohte Graz im 16. Jahrhundert am stärksten?", richtig: "Die Türkengefahr", optionen: ["Die Türkengefahr", "Große Überschwemmungen", "Hungersnöte", "Bürgerkriege"], fakt: "Graz war als Vorposten gegen die osmanische Expansion eine wichtige Festung." },
    { epoche: 0, epochLabel: "1128–1600", frage: "Wie wurde Graz im Mittelalter militärisch gesichert?", richtig: "Durch Stadtmauer und befestigten Schlossberg", optionen: ["Durch Stadtmauer und befestigten Schlossberg", "Durch einen breiten Stadtgraben", "Durch ein Netz aus Wachtürmen", "Durch die natürliche Lage am Meer"], fakt: "Der Schlossberg war eine nahezu uneinnehmbare Festung zum Schutz der Stadt." },
    { epoche: 0, epochLabel: "1128–1600", frage: "Welche Universität ist die älteste der Steiermark?", richtig: "Universität Graz (gegründet 1585)", optionen: ["Universität Graz (gegründet 1585)", "TU Graz", "Montanuniversität Leoben", "Universität Klagenfurt"], fakt: "Erzherzog Karl II. gründete die Universität Graz 1585, geführt von den Jesuiten." },

    /* ── 1600–1809 ── */
    { epoche: 1, epochLabel: "1600–1809", frage: "Welcher Orden prägte das kulturelle Leben in Graz ab dem frühen 17. Jahrhundert?", richtig: "Die Jesuiten", optionen: ["Die Jesuiten", "Die Franziskaner", "Die Dominikaner", "Die Augustiner"], fakt: "Die Jesuiten gründeten 1585 die Universität Graz und prägten Bildung und Kultur." },
    { epoche: 1, epochLabel: "1600–1809", frage: "Welcher Baustil prägte Graz im 17. und 18. Jahrhundert?", richtig: "Der Barock", optionen: ["Der Barock", "Die Gotik", "Der Jugendstil", "Der Klassizismus"], fakt: "Zahlreiche Kirchen und Paläste wurden im Barockstil umgestaltet oder neu errichtet." },
    { epoche: 1, epochLabel: "1600–1809", frage: "Wann verlor Graz seinen Status als Residenzstadt der Habsburger?", richtig: "1619", optionen: ["1619", "1683", "1740", "1780"], fakt: "Kaiser Ferdinand II. verlegte den Hof 1619 nach Wien." },
    { epoche: 1, epochLabel: "1600–1809", frage: "Welche Kaiserin reformierte im 18. Jahrhundert Verwaltung und Bildungswesen?", richtig: "Maria Theresia", optionen: ["Maria Theresia", "Maria Antonia", "Eleonore Magdalene", "Elisabeth I."], fakt: "Maria Theresia (1740–1780) modernisierte Verwaltung, Militär und Bildungswesen grundlegend." },
    { epoche: 1, epochLabel: "1600–1809", frage: "Was geschah im Jahr 1809 in Graz militärisch?", richtig: "Napoleonische Truppen besetzten die Stadt", optionen: ["Napoleonische Truppen besetzten die Stadt", "Österreich gewann eine große Seeschlacht", "Graz wurde Bundeshauptstadt", "Russische Truppen marschierten ein"], fakt: "Im Frieden von Schönbrunn 1809 musste Österreich viele Gebiete an Napoleon abtreten." },
    { epoche: 1, epochLabel: "1600–1809", frage: "Was musste Österreich nach Napoleons Sieg 1809 schleifen?", richtig: "Die Festung auf dem Schlossberg", optionen: ["Die Festung auf dem Schlossberg", "Die Stadtmauer von Wien", "Das Landhaus in Graz", "Die alte Universität"], fakt: "Uhrturm und Glockenturm wurden von den Bürgern freigekauft – deshalb stehen sie noch." },
    { epoche: 1, epochLabel: "1600–1809", frage: "Welches Gebäude gilt als eines der schönsten Renaissancebauwerke Österreichs in Graz?", richtig: "Das Landhaus", optionen: ["Das Landhaus", "Die Burg", "Das Rathaus", "Der Dom"], fakt: "Das Landhaus mit seinem Arkadenhof ist ein Meisterwerk der Renaissance-Architektur." },
    { epoche: 1, epochLabel: "1600–1809", frage: "Welches Ereignis erschütterte Europa 1683 und bedrohte auch Graz?", richtig: "Die zweite Türkenbelagerung Wiens", optionen: ["Die zweite Türkenbelagerung Wiens", "Der Dreißigjährige Krieg", "Die Pest", "Ein großes Erdbeben"], fakt: "1683 erreichte die osmanische Bedrohung ihren Höhepunkt vor Wien." },

    /* ── 1809–1914 ── */
    { epoche: 2, epochLabel: "1809–1914", frage: "Wann erreichte die Eisenbahn erstmals Graz?", richtig: "1844", optionen: ["1844", "1860", "1832", "1878"], fakt: "Die Südbahn verband Graz 1844 mit Wien und revolutionierte Handel und Mobilität." },
    { epoche: 2, epochLabel: "1809–1914", frage: "Wann wurde der Grazer Stadtpark eröffnet?", richtig: "1869", optionen: ["1869", "1850", "1882", "1900"], fakt: "Der Stadtpark wurde 1869 eröffnet und ist heute eine der beliebtesten Grünanlagen." },
    { epoche: 2, epochLabel: "1809–1914", frage: "Was bedeutete die Industrialisierung demografisch für Graz?", richtig: "Starkes Bevölkerungswachstum durch Zuzug", optionen: ["Starkes Bevölkerungswachstum durch Zuzug", "Massenflucht aus der Stadt", "Rückgang der Geburtenrate", "Kaum Veränderungen"], fakt: "Graz wuchs von rund 30.000 Einwohnern 1800 auf über 150.000 um 1900." },
    { epoche: 2, epochLabel: "1809–1914", frage: "Wofür ist Nikola Tesla bekannt, der in Graz studierte?", richtig: "Erfindungen im Bereich Elektrizität und Wechselstrom", optionen: ["Erfindungen im Bereich Elektrizität und Wechselstrom", "Die Erfindung der Dampfmaschine", "Entdeckungen in der Chemie", "Entwicklung der Eisenbahn"], fakt: "Tesla studierte 1875–1878 am Joanneum in Graz und entwickelte frühe Ideen zum Wechselstrom." },
    { epoche: 2, epochLabel: "1809–1914", frage: "Wann wurde die Straßenbahn in Graz eingeführt?", richtig: "1878", optionen: ["1878", "1900", "1865", "1912"], fakt: "Zunächst als Pferdebahn, ab 1899 fuhr die Grazer Straßenbahn elektrisch." },
    { epoche: 2, epochLabel: "1809–1914", frage: "Welcher Baustil prägte neue Grazer Stadtviertel im 19. Jahrhundert?", richtig: "Historismus (Gründerzeit)", optionen: ["Historismus (Gründerzeit)", "Jugendstil", "Expressionismus", "Bauhaus"], fakt: "Prächtige Gründerzeit-Bauten entstanden entlang des Rings und der neuen Prachtstraßen." },
    { epoche: 2, epochLabel: "1809–1914", frage: "Was prägte Graz im Revolutionsjahr 1848?", richtig: "Aufstände und Forderungen nach Demokratie", optionen: ["Aufstände und Forderungen nach Demokratie", "Eine große Überschwemmung", "Die Gründung der Universität", "Ein großer Stadtbrand"], fakt: "Auch in Graz forderten Bürger und Studenten Pressefreiheit und eine Verfassung." },
    { epoche: 2, epochLabel: "1809–1914", frage: "Welches Forschungsinstitut wurde 1811 in Graz gegründet?", richtig: "Das Joanneum", optionen: ["Das Joanneum", "Die TU Graz", "Das Kunsthaus", "Die Akademie der Wissenschaften"], fakt: "Erzherzog Johann gründete das Joanneum 1811 als universales Bildungs- und Forschungsinstitut." },

    /* ── 1914–1945 ── */
    { epoche: 3, epochLabel: "1914–1945", frage: "Welchen Beinamen erhielt Graz in der NS-Zeit?", richtig: "Stadt der Volkserhebung", optionen: ["Stadt der Volkserhebung", "Stadt des Führers", "Perle der Steiermark", "Tor zum Süden"], fakt: "Der Titel bezog sich auf den frühen und starken Zulauf zum Nationalsozialismus in Graz." },
    { epoche: 3, epochLabel: "1914–1945", frage: "Was geschah in Graz in der Nacht vom 9. auf den 10. November 1938?", richtig: "Die Synagoge wurde zerstört", optionen: ["Die Synagoge wurde zerstört", "Graz wurde bombardiert", "Der Bürgermeister wurde abgesetzt", "Eine Friedenskundgebung fand statt"], fakt: "In der Reichspogromnacht wurde die Grazer Synagoge in der Griesgasse verwüstet." },
    { epoche: 3, epochLabel: "1914–1945", frage: "Wann endete der Erste Weltkrieg?", richtig: "1918", optionen: ["1918", "1916", "1920", "1919"], fakt: "Mit dem Waffenstillstand vom 11. November 1918 endete der Erste Weltkrieg." },
    { epoche: 3, epochLabel: "1914–1945", frage: "Was bedeutete das Ende des Ersten Weltkriegs für Österreich?", richtig: "Ende der Monarchie und Gründung der Republik", optionen: ["Ende der Monarchie und Gründung der Republik", "Anschluss an Deutschland", "Gründung des Königreichs Österreich", "Keine wesentlichen Änderungen"], fakt: "Die Republik Österreich wurde am 12. November 1918 ausgerufen." },
    { epoche: 3, epochLabel: "1914–1945", frage: "Wann erfolgte der Anschluss Österreichs an das Deutsche Reich?", richtig: "1938", optionen: ["1938", "1933", "1939", "1936"], fakt: "Am 12. März 1938 marschierten deutsche Truppen in Österreich ein." },
    { epoche: 3, epochLabel: "1914–1945", frage: "Wer besetzte Graz am 5. Mai 1945?", richtig: "Sowjetische Truppen", optionen: ["Sowjetische Truppen", "Amerikanische Truppen", "Britische Truppen", "Österreichische Partisanen"], fakt: "Die Sowjetarmee besetzte Graz, übergab es aber bald der britischen Besatzungszone." },
    { epoche: 3, epochLabel: "1914–1945", frage: "Was richteten alliierte Bombenangriffe 1944/45 in Graz an?", richtig: "Schwere Zerstörungen in Stadt und Industrie", optionen: ["Schwere Zerstörungen in Stadt und Industrie", "Kaum Schäden", "Nur der Bahnhof wurde getroffen", "Die Altstadt wurde vollständig zerstört"], fakt: "Über 70 Luftangriffe trafen Graz; rund 14 % der Gebäude wurden stark beschädigt." },
    { epoche: 3, epochLabel: "1914–1945", frage: "Welche Wirtschaftskrise erschütterte Graz und Europa in den 1930er Jahren?", richtig: "Die Weltwirtschaftskrise", optionen: ["Die Weltwirtschaftskrise", "Der Börsenboom", "Die Hyperinflation", "Der Ölschock"], fakt: "Die Krise ab 1929 führte zu Massenarbeitslosigkeit und politischer Radikalisierung." },

    /* ── 1945–2003 ── */
    { epoche: 4, epochLabel: "1945–2003", frage: "Wann wurde die Grazer Altstadt zum UNESCO-Weltkulturerbe erklärt?", richtig: "1999", optionen: ["1999", "1985", "2003", "1992"], fakt: "Das historische Zentrum von Graz wurde 1999 in die UNESCO-Welterbeliste aufgenommen." },
    { epoche: 4, epochLabel: "1945–2003", frage: "In welchem Jahr war Graz Kulturhauptstadt Europas?", richtig: "2003", optionen: ["2003", "1995", "1998", "2000"], fakt: "Unter dem Motto 'Graz 2003' war die Stadt Treffpunkt für europäische Kunst und Kultur." },
    { epoche: 4, epochLabel: "1945–2003", frage: "Welches moderne Kunstgebäude wurde 2003 am Grazer Murufer eröffnet?", richtig: "Das Kunsthaus Graz", optionen: ["Das Kunsthaus Graz", "Das neue Rathaus", "Das Joanneumsviertel", "Die Stadthalle"], fakt: "Das 'Friendly Alien' von Cook & Fournier ist ein ikonisches Zeichen der Moderne." },
    { epoche: 4, epochLabel: "1945–2003", frage: "Welche schwimmende Konstruktion wurde 2003 in der Mur errichtet?", richtig: "Die Murinsel", optionen: ["Die Murinsel", "Die Schlossinsel", "Die Andritzinsel", "Die Murpromenade"], fakt: "Die Murinsel ist eine Stahl-Glas-Konstruktion des Künstlers Vito Acconci." },
    { epoche: 4, epochLabel: "1945–2003", frage: "In welcher Besatzungszone lag Graz nach 1945?", richtig: "Britische Besatzungszone", optionen: ["Britische Besatzungszone", "Amerikanische Zone", "Französische Zone", "Sowjetische Zone"], fakt: "Graz lag in der britischen Zone, obwohl zunächst von der Sowjetunion besetzt." },
    { epoche: 4, epochLabel: "1945–2003", frage: "Wofür ist das Forum Stadtpark bekannt, gegründet 1960?", richtig: "Zentrum der österreichischen Avantgarde-Kunst", optionen: ["Zentrum der österreichischen Avantgarde-Kunst", "Ein Sportzentrum", "Ein Einkaufszentrum", "Ein Parteizentrum"], fakt: "Das Forum Stadtpark war Heimat der Grazer Gruppe und der österreichischen Avantgarde." },
    { epoche: 4, epochLabel: "1945–2003", frage: "Wann trat Österreich der Europäischen Union bei?", richtig: "1995", optionen: ["1995", "1989", "2000", "1986"], fakt: "Nach einem Volksbegehren trat Österreich am 1. Jänner 1995 der EU bei." },
    { epoche: 4, epochLabel: "1945–2003", frage: "Welches Festival wurde 1968 in Graz als eines der ältesten Avantgarde-Festivals gegründet?", richtig: "Der Steirische Herbst", optionen: ["Der Steirische Herbst", "Das Grazer Filmfestival", "Der Styriarte", "Das Literaturfestival"], fakt: "Der Steirische Herbst ist eines der bedeutendsten Avantgarde-Festivals Europas." },
];

const EPOCH_NAMES = {
    0: 'Mittelalter',
    1: 'Barock & Aufklärung',
    2: 'Industrialisierung & Moderne',
    3: 'Weltkriege & Zwischenkriegszeit',
    4: 'Wiederaufbau & Kulturhauptstadt'
};

let selectedEpoch = 'alle';
let questions = [], current = 0, score = 0, answered = false;
let questionsIdx = [];
const STORAGE_KEY = 'mq_session';

function saveSession() {
    try {
        const data = {
            selectedEpoch,
            questionsIdx,
            current,
            score
        };
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) { /* ignore storage errors */ }
}

function loadSession() {
    try {
        const raw = sessionStorage.getItem(STORAGE_KEY);
        if (!raw) return false;
        const data = JSON.parse(raw);
        if (!data || !Array.isArray(data.questionsIdx)) return false;
        // Validate indices
        const valid = data.questionsIdx.every(i => Number.isInteger(i) && i >= 0 && i < FRAGEN.length);
        if (!valid) return false;
        selectedEpoch = data.selectedEpoch || 'alle';
        questionsIdx = data.questionsIdx;
        questions = questionsIdx.map(i => FRAGEN[i]);
        current = Number.isInteger(data.current) ? data.current : 0;
        score = Number.isInteger(data.score) ? data.score : 0;
        return true;
    } catch (e) { return false; }
}

function clearSession() { sessionStorage.removeItem(STORAGE_KEY); questionsIdx = []; }

function showPanel(id, btn) {
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
    document.getElementById('panel-' + id).classList.add('active');
    if (btn) btn.classList.add('active');
}

function selectEpoch(el) {
    document.querySelectorAll('.epoch-card').forEach(c => c.classList.remove('selected'));
    el.classList.add('selected');
    selectedEpoch = el.dataset.epoch;
    saveSession();
}

function shuffle(arr) { return [...arr].sort(() => Math.random() - 0.5); }

function startQuiz() {
    const pool = selectedEpoch === 'alle' /* Wenn alle Epochen ausgewählt sind, nimm den gesamten Fragenpool*/
        ? FRAGEN
        : FRAGEN.filter(f => f.epoche === parseInt(selectedEpoch)); /* Ansonsten filtere nach der ausgewählten Epoche */
    if (pool.length < 4) { document.getElementById('quiz-hint').textContent = 'Nicht genug Fragen.'; return; }
    // Build an index list to store lightweight references in sessionStorage
    const poolIdx = pool.map(q => FRAGEN.indexOf(q));
    const chosenIdx = shuffle(poolIdx).slice(0, Math.min(10, poolIdx.length));
    questionsIdx = chosenIdx;
    questions = questionsIdx.map(i => FRAGEN[i]);
    current = 0; score = 0; /* Alle Quiz-bezogenen Variablen zurücksetzen */
    saveSession();
    document.getElementById('quiz-start').style.display = 'none';
    document.getElementById('quiz-result').style.display = 'none';
    document.getElementById('quiz-running').style.display = 'block';
    showQuestion();
}
/* UI aktualisieren*/
function showQuestion() {
    if (current >= questions.length) { showResult(); return; }
    answered = false; /* Antwortstatus zurücksetzen */
    const q = questions[current];
    document.getElementById('q-epoch-tag').textContent = 'Epoche ' + (EPOCH_NAMES[q.epoche] || q.epochLabel);
    document.getElementById('question-text').textContent = q.frage;
    document.getElementById('q-counter').textContent = `${current + 1} / ${questions.length}`;
    document.getElementById('score-badge').textContent = `Punkte: ${score}`;
    document.getElementById('progress-fill').style.width = `${(current / questions.length) * 100}%`;
    document.getElementById('feedback').textContent = '';
    document.getElementById('next-btn').style.display = 'none';
    const fb = document.getElementById('fact-box');
    fb.classList.remove('show'); fb.textContent = '';

    const optDiv = document.getElementById('options');
    optDiv.innerHTML = '';
    shuffle(q.optionen).forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'opt-btn';
        btn.textContent = opt;
        btn.onclick = () => answer(opt, btn, q.richtig, q.fakt);
        optDiv.appendChild(btn);
    });
}

function answer(chosen, btn, richtig, fakt) {
    if (answered) return;
    answered = true;
    document.querySelectorAll('.opt-btn').forEach(b => {
        b.disabled = true;
        if (b.textContent === richtig) b.classList.add('correct');
    });
    if (chosen === richtig) {
        score++;
        document.getElementById('feedback').textContent = '✓ Richtig!';
    } else {
        btn.classList.add('wrong');
        document.getElementById('feedback').textContent = `Falsch. Richtig: ${richtig}`;
    }
    saveSession();
    if (fakt) {
        const fb = document.getElementById('fact-box');
        fb.textContent = '💡 ' + fakt;
        fb.classList.add('show');
    }
    document.getElementById('next-btn').style.display = 'inline-block';
}

function nextQuestion() { current++; showQuestion(); }

function showResult() {
    document.getElementById('quiz-running').style.display = 'none';
    document.getElementById('quiz-result').style.display = 'block';

    const pct = Math.round((score / questions.length) * 100);

    const emoji =
        pct === 100 ? '🏛️' : /*Stadthistoriker·in*/
            pct >= 80 ? '🗝️' : /*Graz-Kenner·in*/
                pct >= 60 ? '🏘️' : /*Stadtbewohner·in*/
                    pct >= 40 ? '🧳' : '🚂'; /*Touristin / Tourist ; Neuankömmling*/


    document.getElementById('result-animation').textContent = emoji;
    document.getElementById('final-score').textContent = `${score} / ${questions.length}`;
    document.getElementById('result-title').textContent =
        pct === 100 ? 'Stadthistoriker·in!' :
            pct >= 80 ? 'Graz-Kenner·in' :
                pct >= 60 ? 'Stadtbewohner·in' :
                    pct >= 40 ? 'Touristin / Tourist' : 'Neuankömmling';
    document.getElementById('result-label').textContent =
        pct === 100 ? 'Perfekt – du kennst Graz wie deine Westentasche.' :
            pct >= 80 ? 'Beeindruckend! Nur wenige Details fehlen noch.' :
                pct >= 60 ? 'Solide Grundkenntnisse – weitermachen!' :
                    pct >= 40 ? 'Du lernst die Stadt kennen.' :
                        'Graz wartet darauf, entdeckt zu werden.';
}

function restartQuiz() {
    document.getElementById('quiz-result').style.display = 'none';
    document.getElementById('quiz-start').style.display = 'block';
    clearSession();
}

function tryRestoreSession() {
    if (loadSession()) {
        // reflect selected epoch in UI if possible
        document.querySelectorAll('.epoch-card').forEach(c => c.classList.remove('selected'));
        const sel = document.querySelector(`.epoch-card[data-epoch="${selectedEpoch}"]`);
        if (sel) sel.classList.add('selected');
        document.getElementById('quiz-start').style.display = 'none';
        document.getElementById('quiz-result').style.display = 'none';
        document.getElementById('quiz-running').style.display = 'block';
        showQuestion();
    }
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js');
}

// try to restore an in-progress session (uses sessionStorage)
tryRestoreSession();
