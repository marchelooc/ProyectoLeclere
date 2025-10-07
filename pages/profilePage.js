import { expect } from "@playwright/test";
export class ProfilePage {
        constructor(page) {
                this.page = page;
                this.usernameInput = 'input#username';
                this.bioInput = 'textarea#bio';
                this.saveChangesButton = 'button:has-text("Save")';
                this.alertMessage = 'div[role="alert"]';

        }
                
        async isPageVisible() {
                await this.page.waitForTimeout(2000);
                await expect(this.page.locator('text=About')).toBeVisible(); 
        }

        async typeUsername(username) {
                const usernameField = this.page.locator(this.usernameInput);
                await usernameField.waitFor({ state: "visible", timeout: 5000 });
                await usernameField.click();  
                await usernameField.fill("");
                await usernameField.type(username, { delay: 20 });
                await this.page.waitForTimeout(300);
        }

        async typeBio(bio) {
                const bioField = this.page.locator(this.bioInput);
                await bioField.waitFor({ state: "visible", timeout: 5000 });
                await bioField.click();  
                await bioField.fill("");
                await bioField.type(bio, { delay: 20 });
                await this.page.waitForTimeout(300);
        }

        async clickSaveChangesButton() {
                await this.page.click(this.saveChangesButton);
        }

        async isAlertMessageVisible() {
                const alert = this.page.locator(this.alertMessage);
                await expect(alert).toBeVisible(); 
        }

}
