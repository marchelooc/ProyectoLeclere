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
        await this.page.click(this.tabLink);
    }

    async clickClosedBoardsButton() {
        await this.page.click(this.closedBoardsButton);
    }

    async verifyClosedBoardsVisible() {
        const header = this.page.locator(this.closedBoardsHeader);
        await expect(header).toBeVisible();  // Verifica que el texto "Closed boards" esté visible
    }

}
