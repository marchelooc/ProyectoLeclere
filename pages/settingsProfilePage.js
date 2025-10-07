import { expect } from "@playwright/test";
export class SettingsProfilePage {
        constructor(page) {
                this.page = page;
                this.alertMessage = 'div[role="alert"]';
                this.disableSuggestionsButton = 'button:has-text("Disable suggestions")';
                this.enableSuggestionsButton = 'button:has-text("Enable suggestions")';
                this.selectAllButton = 'button:has-text("Select all")';
                this.selectNoneButton = 'button:has-text("Select none")';

        }
                
        async isPageVisible() {
                await this.page.waitForTimeout(2000);
                await expect(this.page.locator('text=Account settings')).toBeVisible();
                await this.page.waitForTimeout(1000); 
        }

        async isAlertMessageVisible() {
                const alert = this.page.locator(this.alertMessage);
                await expect(alert).toBeVisible(); 
        }

        async clickDisableSuggestionsButton() {
            const button = this.page.locator(this.disableSuggestionsButton);
            await button.waitFor({ state: "visible", timeout: 5000 });
            await button.click();
            await expect(this.page.locator('text=Enable suggestions')).toBeVisible();
            await this.page.waitForTimeout(1000); 
        }

        async clickEnableSuggestionsButton() {
            const button = this.page.locator(this.enableSuggestionsButton);
            await button.waitFor({ state: "visible", timeout: 5000 });
            await button.click();
            await expect(this.page.locator('text=Disable suggestions')).toBeVisible();
            await this.page.waitForTimeout(1000); 
        }

        async clickSelectAllButton() {
            const button = this.page.locator(this.selectAllButton);
            await button.waitFor({ state: "visible", timeout: 5000 });
            await button.click();
            await this.page.waitForTimeout(1000);
        }
        
        async clickSelectNoneButton() {
            const button = this.page.locator(this.selectNoneButton);
            await button.waitFor({ state: "visible", timeout: 5000 });
            await button.click();
            await this.page.waitForTimeout(1000);
        }

}