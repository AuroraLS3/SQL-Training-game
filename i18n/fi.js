const i18n = {
    "empty-table": "Taulu on tyhjä",
    "ok": "Selvä!",
    "close": "Sulje",
    "back": "Takaisin",
    "books-text": "Kirjat",
    "found-books-text": "Kirjat",
    "suspects-text": "Epäillyt",
    "next-level-in": 'Seuraavalle tasolle: <span class="xp-required"></span>xp',
    "level-unlocked": 'Saavutit tason <span class="level-count"></span>!',
    "skill-tree": 'Käytä taitopisteitä',
    "skill-point-count": 'Sinulla on <span class="skill-point-count">{}</span> taitopistettä käytettävissä',
    "skill-point-unlock-many": '+{} taitopistettä',
    "skill-point-unlock": '+1 taitopiste',
    "unlocked": "Avattu",
    "skill-points-needed": "1 taitopiste",
    "skill-points-needed-many": "{} taitopistettä",
    "level": "Taso {}",
    "book-discover": "Sait kirjan!",
    "book-discover-info": "Löysit Ohjekortin:",
    "item-00-name": 'Tervetulokirje',
    "item-00-hint": 'Tervetuloa opiskelemaan SQL loitsuja. Teille on jaettu säkki, joka sisältää ensimmäisen oppitunnin materiaalin. Olkaa hyvä ja tutustukaa materiaaliin.\n\nJa vielä kerran, tervetuloa.\nTerveisin, Rehtori P. Kyselyx',
    "item-000-name": 'Säkki',
    "item-0000-name": 'Tehtävärullat',
    "item-0000-hint": 'Säkistä löytyi myös kasa tehtävärullia.',
    "item-unlock-tasks-hint": 'Pöydällesi ilmestyi lisää tehtävärullia kuin tyhjästä',
    "book-001": 'Book of Selection',
    "book-001-name": 'Book of the Selection Spell',
    "book-001-author": 'Maestro SQLivitrius',
    "book-001-hint": '"Tämä kirja tutustuu valintojen loitsun perusteisiin. Kirja on aivan oleellinen jos haluaa ettei loitsiessa lohikäärmen sijasta taio esiin vain lohta syövää sisiliskoa."',
    "book-001-page-1": 'Valinnan tekeminen on joskus vaikeaa, mutta tällä loitsulla saa aina valittua ainakin jotain, vaikka se sitten ei olisikaan sitä mitä alunperin halusi!\n\nSELECT valitsee sarakkeita Taulusta, ja vain ne jotka valitset näkyvät lopullisessa tuloksessa.',
    "book-001-page-2": 'Loitsu:\nSELECT sarake FROM Taulu;\n\nEsimerkkejä:\nSELECT nimi FROM Lohikaarmeet;\nSELECT nimi, ruokavalio FROM Elaimet;\nSELECT * FROM Elaimet;<ul><li><a href="#">Lisää SELECT-loitsusta</a></li></ul>',
    "book-002": 'Book of Search',
    "book-002-name": 'Lookup Spells, Magic Demystified',
    "book-002-author": 'Maestro SQLivitrius',
    "book-002-hint": '"Valintaloitsua käyttäessä tulee joskus otettua mukaan liikaa tavaraa, joten tämä kirja tutustuu pieneen parannukseen. Enää ei tarvitse ihmetellä miksi talvivaatteet tulivat mukaan Mallorcalle."',
    "book-002-page-1": 'Olet varmaan jo huomannut että pelkkä SELECT-loitsu loitsii esiin kaikki rivit valituille sarakkeille. Tällä loitsulla riveistä voi rajata vain ne jotka haluaa esiin.\n\nWHERE rajoittaa rivejä ehdon mukaan.\nAND lisää toisen ehdon\nOR lisää vaihtoehtoisen ehdon.\nNOT kääntää ehdon\n\nEhdoissa voi käyttää =, <, >, <=, >= ja != merkkejä.',
    "book-002-page-2": 'Loitsu:\nSELECT sarake FROM Taulu WHERE {ehto};\n\nEsimerkkejä:\n.. FROM Lemmikit WHERE tunne=\'vihainen\';\n.. FROM Paidat WHERE 5&lt;hihat \nAND hihat&lt;=10;\n.. FROM Elokuvat WHERE vuosi&lt;=1940 \nOR 1950&lt;vuosi;<ul><li><a href="#">Lisää WHERE, AND, OR ja NOT-loitsuista</a></li></ul>',
    "book-003": 'Book of Order',
    "book-003-name": 'Tidying up Magic with Order',
    "book-003-author": 'Ramsey F.ql',
    "book-003-hint": '""',
    "book-003-page-1": '',
    "book-003-page-2": '',
    "book-004": 'Book of Distinction',
    "book-004-name": 'Crowd control in Magic, a Distinction',
    "book-004-author": 'Mike Crow',
    "book-004-hint": '""',
    "book-004-page-1": '',
    "book-004-page-2": '',
    "book-005": 'Book of Strings',
    "book-005-name": 'The Slight Difference between \'Banana\' and \'Burana\'',
    "book-005-author": 'Ms. ABC Brailsford',
    "book-005-hint": '""',
    "book-005-page-1": '',
    "book-005-page-2": '',
    "book-006": 'Book of Limits',
    "book-006-name": 'Tidying up Magic with Limits',
    "book-006-author": 'Ramsey F.ql',
    "book-006-hint": '',
    "book-006-page-1": '',
    "book-006-page-2": '',
    "book-007": 'Book of Aggregation',
    "book-007-name": 'Grouping Things in Boxes, the Book',
    "book-007-author": '',
    "book-007-hint": '',
    "book-007-page-1": '',
    "book-007-page-2": '',
    "book-008": 'Book of Mathematics',
    "book-008-name": 'The Cool World of Mathematic Spells',
    "book-008-author": '',
    "book-008-hint": '',
    "book-008-page-1": '',
    "book-008-page-2": '',
    "book-009": 'Book of Joining',
    "book-009-name": 'Fusion Magic, a Practical Guide',
    "book-009-author": 'Go-Ku Jon',
    "book-009-hint": '',
    "book-009-page-1": '',
    "book-009-page-2": '',
    "book-010": 'Book of Left Joining',
    "book-010-name": 'Fusion Magic for Unbalanced Tables',
    "book-010-author": '',
    "book-010-hint": '',
    "book-010-page-1": '',
    "book-010-page-2": '',
    "book-011": 'Book of Normalization',
    "book-011-name": 'Multiple Spell-Wells Normalized',
    "book-011-author": '',
    "book-011-hint": '',
    "book-011-page-1": '',
    "book-011-page-2": '',
    "book-012": 'Book of Unions',
    "book-012-name": 'Unification 101',
    "book-012-author": 'B0rq L.1275',
    "book-012-hint": '',
    "book-012-page-1": '',
    "book-012-page-2": '',
    "query-placeholder": "Kirjoita SQL loitsu...",
    "query-test": "Kokeile loitsua",
    "group-001-name": "Valintojen-tehtävät",
    "group-002-name": "Etsintöjen-tehtävät",
    "task-001-name": "Valitse Kaikki",
    "task-001-description": "SQL-mestarin tie alkaa tästä.\n\nTehtävä: Loihdi kaikki taulun 'Runes' riimut esiin.",
    "task-002-name": "Tarkkuusvalintaa",
    "task-002-description": "Nyt meillä on lista kaikista riimuista, loitsi esiin ainoastaan riimujen symbolit taulusta.",
    "task-003-name": "Lohi-käärme",
    "task-003-description": "On aika luoda lohi-käärme. Valitse olion pää ja häntä sen luomiseksi.",
    "task-004-name": "Kadonnut lemmikki",
    "task-004-description": "Lemmikki-kissa ᛒᛖᛞ (yleinen lemmikkien nimi) karkasi kotoa. Hän on 75cm korkea eikä vastaa nimeen eikä mihinkään. Voisitko loihtia hänet tänne nimen kera että varmasti on oikea kissa.",
    get: function (key) {
        if (!key) return key;
        const value = this[key.substr(5)];
        return value ? value : key;
    },
    getWith: function (key, replacements) {
        let returnValue = this.get(key);
        for (let replacement of replacements) {
            if (replacement || replacement === 0) {
                returnValue = returnValue.replace('{}', ('' + replacement).includes("i18n-") ? this.get(replacement) : replacement);
            }
        }
        return returnValue;
    }
}

replaceI18nContent = () => {
    for (let key of Object.keys(i18n)) {
        const newContent = i18n[key];
        if (!(newContent instanceof Function)) {
            for (let element of document.getElementsByClassName("i18n-" + key)) {
                element.innerHTML = newContent.split('\n').join("<br>");
            }
        }
    }
}
replaceI18nContent();