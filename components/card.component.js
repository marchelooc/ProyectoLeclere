class TrelloCard {
    /**
     * @param {import('@playwright/test').Page} page
     * @param {string} cardTitle - El título de la card (ej: "asdfasdf")
     */
    constructor(page, cardTitle) {
        this.page = page;
        this.card = this.page.getByRole('button', { name: cardTitle }); 
        this.description = this.page.locator('[data-testid="description-button"]');
        this.descriptionEditor = this.page.locator('div[role="textbox"][aria-label="Descripción"]');
        this.saveDescriptionBtn = this.page.locator('[data-testid="description-save-button"]' );
        this.activitySection = this.page.locator('Comentarios y Actividad');

        this.comment = this.page.getByPlaceholder('Escribe un comentario...');
        
        this.cancelDescriptionBtn = this.page.getByRole('button', { name: 'Guardar' });        
    }

    async open() {
        await this.card.click();
    }

    async addDescription(text) {
        await this.descriptionBtn.click();  
        await this.descriptionEditor.fill(text); 
        await this.saveDescriptionBtn.click();  
    }


    async addComment(text) {
        await this.comment.fill(text);
        await this.comment.press('Enter');
    }

    async getActivityLog() {
        return await this.activitySection.allTextContents();
    }
}

module.exports = { TrelloCard };
