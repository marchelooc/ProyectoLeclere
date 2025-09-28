// card.component.js
class TrelloCard {
    /**
     * @param {import('@playwright/test').Page} page
     * @param {string} cardTitle - El título de la card (ej: "asdfasdf")
     */
    constructor(page, cardTitle) {
        this.page = page;
        this.card = this.page.getByRole('button', { name: cardTitle }); 
        this.descriptionField = this.page.getByRole('textbox', { name: 'Descripción' });
        this.commentBox = this.page.getByPlaceholder('Escribe un comentario...');
        this.activitySection = this.page.getByText('Comentarios y Actividad');
        this.saveDescriptionBtn = this.page.getByRole('button', { name: 'Guardar' });
    }

    async open() {
        await this.card.click();
    }

    async addDescription(text) {
        await this.descriptionField.fill(text);
        await this.saveDescriptionBtn.click();
    }

    async addComment(text) {
        await this.commentBox.fill(text);
        await this.commentBox.press('Enter');
    }

    async getActivityLog() {
        return await this.activitySection.allTextContents();
    }
}

module.exports = { TrelloCard };
