import { expect } from "@playwright/test";
export class TemplatesPage {
    constructor(page) {
        this.page = page;
        this.marketingLink = 'xpath=//*[@id="content"]/div/div/div/nav/header/div/ul/li[2]/ul/li[5]/a';
        this.textLink = 'xpath=//*[@id="content"]/div/div/div/main/div/div/div/div/div[2]/div[1]/a/div[3]/div[2]';
        this.useButton = 'button:has-text("Use template")';
        this.boardTitleInput = 'input[id="boardNewTitle"]';
        this.createButton = 'input.nch-button.nch-button--primary.js-submit[type="submit"][value="Create"]';

    }

    async isPageVisible() {
        await expect(this.page.locator('text=Featured categories')).toBeVisible(); 
    }

    async clickMarketingLink() {
        await this.page.click(this.marketingLink);
    }

    async clickTextLink() {
        await this.page.click(this.textLink);
    }

    async clickUseButton() {
        await this.page.click(this.useButton);
    }

    async typeRandomTextInBoardTitle() {
        const randomText = (Math.random().toString(36).substring(2, 7)).replace(/\d/g, '');  // Genera un texto aleatorio de 5 letras
        const inputField = this.page.locator(this.boardTitleInput);
        await inputField.fill(randomText);
        return randomText;
    }

    async clickCreateButton() {
        await this.page.click(this.createButton);
    }

}