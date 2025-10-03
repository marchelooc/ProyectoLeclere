class TrelloCard {
    /**
     * @param {import('@playwright/test').Page} page
     * @param {string} cardTitle - El título de la card (ej: "asdfasdf")
     */
    constructor(page, cardTitle) {
        this.page = page;
        this.card = this.page.locator('[data-testid="card-name"]', { hasText: cardTitle });
        //añadir card
        this.addCardBtn = '[data-testid="list-add-card-button"]';
        this.addCardText = '[data-testid="list-card-composer-textarea"]';
        this.addCardConfirmBtn = '[data-testid="list-card-composer-add-card-button"]';



        //añadir descripción
        this.descriptionBtn = this.page.locator('[data-testid="description-button"]');
        //this.descriptionEditor = this.page.locator('div[role="textbox"][aria-label="Descripción"]');
        this.descriptionEditor = this.page.locator('#ak-editor-textarea');
        //
        this.saveDescriptionBtn = this.page.locator('[data-testid="description-save-button"]' );
        this.activitySection = this.page.locator('Comentarios y Actividad');
        this.comment = this.page.getByPlaceholder('Escribe un comentario...');
        this.cancelDescriptionBtn = this.page.getByRole('button', { name: 'Guardar' });        
    }

    async openCard() {
        await this.card.click();
    }

    async addCard(text) {
        await this.addCardBtn.click();
        await this.addCardText.fill(text);
        await this.addCardConfirmBtn.click();
    }


    async addDescription(text) {
        await this.descriptionBtn.click();  
         await this.descriptionEditor.click();  
        await this.descriptionEditor.waitFor({ state: 'visible' });
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
