import { expect } from "@playwright/test";
export class MembersPage {
    constructor(page) {
        this.page = page;
        this.addMembersButton = 'button:has-text("Invite Workspace members")';
        this.emailInput = 'input[data-testid="add-members-input"]';
        this.sendButton = 'button:has-text("Send invite")';
        this.workspaceName = 'xpath=//*[@id="layer-manager-overlay"]/div/div/div[2]/div/div/div[2]/div/div[2]/div/div/div/div[2]/div/div/div';
        this.memberName = 'strong:has-text("Simon Pedro Valdez Mamani")';
        this.deleteButton = 'button:has-text("Remove…")';
        this.removeButton = 'button:has-text("Remove from Workspace")';
        this.alertMessage = 'div[role="alert"]';
    }

    async isPageVisible() {
        await expect(this.page.locator('text=Collaborators')).toBeVisible(); 
    }

    async clickAddMembersButton() {
        const button = this.page.locator(this.addMembersButton);
        await button.waitFor({ state: "visible", timeout: 5000 });
        await button.click();
    }

    async typeEmailOrName(email) {
        const input = this.page.locator(this.emailInput);
        await input.waitFor({ state: "visible", timeout: 5000 });
        await input.fill(email);
    }

    async clickSendButton() {
        const button = this.page.locator(this.sendButton);
        await button.waitFor({ state: "visible", timeout: 5000 });
        await button.click();
    }

    async isMemberNameVisible() {
        const member = this.page.locator(this.memberName);
        await expect(member).toBeVisible(); 
    }

    async clickDeleteButton() {
        const button = this.page.locator(this.deleteButton);
        await button.waitFor({ state: "visible", timeout: 5000 });
        await button.click();
    }

    async clickRemoveButton() {
        const button = this.page.locator(this.removeButton);
        await button.waitFor({ state: "visible", timeout: 5000 });
        await button.click();
    }

    async isAlertMessageVisible() {
        const alert = this.page.locator(this.alertMessage);
        await expect(alert).toBeVisible(); 
    }

    async performTeardownActionsT15() {
        await this.clickDeleteButton();
        await this.clickRemoveButton();
        await this.isAlertMessageVisible();
    }

}