import { expect } from "@playwright/test";
export class TemplatesPage {
    constructor(page) {
        this.page = page;
        this.marketingLink = 'xpath=//*[@id="content"]/div/div/div/nav/header/div/ul/li[2]/ul/li[5]/a';
        this.textLink = 'xpath=//*[@id="content"]/div/div/div/main/div/div/div/div/div[2]/div[1]/a/div[3]/div[2]';
        this.useButton = 'button:has-text("Use template")';
        this.boardTitleInput = '#boardNewTitle';
        this.createButton = 'input.nch-button.nch-button--primary.js-submit[type="submit"][value="Create"]';

    }

    async isPageVisible() {
        await expect(this.page.locator('text=Featured categories')).toBeVisible(); 
    }

    async clickMarketingLink() {
        const link = this.page.locator(this.marketingLink);
        await link.waitFor({ state: "visible", timeout: 5000 });
        await link.click();
    }

    async clickTextLink() {
        const element = this.page.locator(this.textLink);
        await element.waitFor({ state: "visible", timeout: 5000 });
        await element.click();
    }

    async clickUseButton() {
        const button = this.page.locator(this.useButton);
        await button.waitFor({ state: "visible", timeout: 5000 });
        await button.click();
    }

    async typeRandomTextInBoardTitle() {
        const randomText = (Math.random().toString(36).substring(2, 7)).replace(/\d/g, '');  // Genera un texto aleatorio de 5 letras
        const inputField = this.page.locator(this.boardTitleInput);
        await inputField.fill(randomText); //ramdomText
    }

    async clickCreateButton() {
        const button = this.page.locator(this.createButton);
        await button.waitFor({ state: "visible", timeout: 5000 });
        await button.click();
    }

}