import { expect } from "@playwright/test";

export class MyBoardsPage {
    constructor(page) {
        this.page = page;
        this.searchInput = '#search, input[placeholder="Search boards"]';
        this.tabLink = 'xpath=//*[@id="content"]/div/div/main/main/section/ul/li[2]/div[1]/a/div/div[1]/div';
        this.closedBoardsButton = 'button:has-text("View closed boards")';
        this.closedBoardsHeader = 'h2:has-text("Closed boards")';

    }

    async isPageVisible() {
        await expect(this.page.locator('text=Search')).toBeVisible(); 
    }

    async clickTabLink() {
        const tab = this.page.locator(this.tabLink);
        await tab.click();
    }

    async clickClosedBoardsButton() {
        const button = this.page.locator(this.closedBoardsButton);
        await button.click();
    }

    async verifyClosedBoardsVisible() {
        const header = this.page.locator(this.closedBoardsHeader);
        await expect(header).toBeVisible();  // Verifica que el texto "Closed boards" esté visible
    }

}
