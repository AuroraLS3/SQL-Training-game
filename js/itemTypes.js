class ItemType {
    constructor(options) {
        for (let key of Object.keys(options)) {
            this[key] = options[key];
        }
    }

    render() {
        return '<p>Missing item render() function!</p>'
    }

    renderShowItem() {
        return '<p>Missing item renderShowItem() function!'
    }

    remove() {
    }

    onShow() {
    }

    async onUnlock() {
        inventory.addItem(this.id);
    }
}

class ImageItem extends ItemType {

    /**
     * @param options {id, name, url, onclick, discoverTitle, discoverText, unlocks}
     */
    constructor(options) {
        super({
            name: `i18n-${options.id}-name`,
            onclick: `showItem('${options.id}')`,
            discoverTitle: "",
            discoverText: `i18n-${options.id}-hint`,
            unlocks: [],
            margins: '',
            newItem: true,
            ...options
        })
    }

    render() {
        return `<div class="item" id="${this.id}" onclick="${this.onclick}">
                <img class="item-icon ${this.margins}" alt="${i18n.get(this.name)}" src="${this.url}" draggable="false">
                ${this.newItem ? `<div class="new-item-highlight"><div class="burst-12"> </div></div>` : ''}
                <p>${i18n.get(this.name)}</p>
            </div>`
    }

    renderShowItem() {
        return `<img class="item-icon ${this.margins}" alt="${i18n.get(this.name)}" src="${this.url}" draggable="false">`
    }

    remove() {
        inventory.removeItem(this.id);
    }
}

class BookItem extends ItemType {

    /**
     * @param options {parsed}
     */
    constructor(options) {
        super({
            newItem: true,
            ...options
        });
        const parsed = options.parsed;
        if (parsed) {
            this.id = parsed.metadata.id;
            this.onclick = `showBook('${this.id}')`;
            this.shortName = parsed.metadata.name;
            this.name = parsed.metadata.title;
            this.author = parsed.metadata.author;
            this.color = parsed.metadata.color;
            this.pages = parsed.pages.length;
            this.discoverText = parsed.cover;
        }
    }

    async onUnlock() {
        this.remove();
        await showItem(this.id);
        await unlockSkillMenu();
    }

    renderShowItem() {
        return `<div class="book ${this.color}-book">
                    <p class="book-title">${i18n.get(this.name)}</p>
                    <p class="book-author">${i18n.get(this.author)}</p>
                </div>`
    }

    render() {
        return `<div class="item" id="${this.id}" onclick="${this.onclick}">
                <div class="item-icon book ${this.color}-book">
                <p class="book-title">${i18n.get(this.name)}</p>
                <p class="book-author">${i18n.get(this.author)}</p>
                </div>
                ${this.newItem ? `<div class="new-item-highlight"><div class="burst-12"> </div></div>` : ''}
                <p><i class="fa fa-fw fa-bookmark col-book-${this.color}"></i> ${i18n.get(this.shortName)}</p>
            </div>`;
    }

    renderJustItem() {
        return `<div class="book ${this.color}-book">
                <p class="book-title">${i18n.get(this.name)}</p>
                <p class="book-author">${i18n.get(this.author)}</p>
                </div>`;
    }

    renderBook(pageNumber) {
        if (pageNumber === 0) {
            return `<div class="col-md-8"><div class="rotate-2deg">${this.renderShowItem()}</div>
                <p class="col-white center"><i>${i18n.get(this.discoverText)}</i></p></div>`
        } else {
            const leftPageI18nTag = `i18n-book-${this.id.substr(5)}-page-${pageNumber}`;
            const rightPageI18nTag = `i18n-book-${this.id.substr(5)}-page-${pageNumber + 1}`;
            const leftPage = this.parsed ? this.parsed.pages[pageNumber - 1] : i18n.get(leftPageI18nTag).split('\n').join('<br>');
            const rightPage = this.pages >= pageNumber + 1 ? (this.parsed ? this.parsed.pages[pageNumber] : i18n.get(rightPageI18nTag).split('\n').join('<br>')) : `<p> </p>`;
            return `<div class="book-open left ${this.color}-book">
                <div class="row">
                    <div class="col page"><p>${leftPage}</p></div>
                    <div class="col page"><p>${rightPage}</p></div>
                </div>
            </div>`
        }
    }

    remove() {
        inventory.removeItem(this.id);
    }
}