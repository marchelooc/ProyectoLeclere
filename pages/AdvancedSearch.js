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
        const button = this.page.locator(this.cardResultsButton);
        await button.click(); 
    }

    async clickLastWeekButton() {
        const button = this.page.locator(this.lastWeekButton);
        await button.click();
    }

    async clickCloseBoardsButton() {
        const button = this.page.locator(this.closeBoardsButton);
        await button.click(); 
    }

    async clickStarredBoardsButton() {
        const button = this.page.locator(this.starredBoardsButton);
        await button.click(); 
    }

    async clickCardDescriptionsButton() {
        const button = this.page.locator(this.cardDescriptionsButton);
        await button.click(); 
    }

    async clickTrelloBasicsLink() {
        const link = this.page.locator(this.trelloBasicsLink);
        await link.click();
    }
}
