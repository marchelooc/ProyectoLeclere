import { expect } from "@playwright/test";

export class AdvancedSearchPage {
    constructor(page) {
        this.page = page;
        this.searchInput = 'input[data-testid="advanced-search-input"]';
        this.cardResultsButton = 'button:has-text("By last updated")';
        this.lastWeekButton = 'button:has-text("Last week")';
        this.closeBoardsButton = 'button:has-text("Do not show Closed boards and Archived cards")';
        this.starredBoardsButton = 'button:has-text("Only include results from Starred Boards")';
        this.cardDescriptionsButton = 'button:has-text("Include card descriptions in search")';
        this.trelloBasicsLink = 'a[data-testid="advanced-search-card-result-item"] >> text="Conoce los aspectos básicos de Trello"';
    }

    async isPageVisible() {
        await expect(this.page.locator('text=Search')).toBeVisible(); 
    }

    async typeInSearch(term) {
        const searchInput = this.page.locator(this.searchInput);
        await searchInput.isVisible();
        await searchInput.click(); 
        await searchInput.fill("");
        await searchInput.type(term, { delay: 100 }); // Escribir
    }

    async clickCardResultsButton() {
        await this.page.click(this.cardResultsButton); 
    }

    async clickLastWeekButton() {
        await this.page.click(this.lastWeekButton);
    }

    async clickCloseBoardsButton() {
        await this.page.click(this.closeBoardsButton);
    }

    async clickStarredBoardsButton() {
        await this.page.click(this.starredBoardsButton);
    }

    async clickCardDescriptionsButton() {
        await this.page.click(this.cardDescriptionsButton);
    }

    async clickTrelloBasicsLink() {
        await this.page.click(this.trelloBasicsLink);
    }
}
