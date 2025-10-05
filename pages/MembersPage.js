import { expect } from "@playwright/test";

export class MembersPage {
    constructor(page) {
        this.page = page;
        this.addMembersButton = 'button:has-text("Invite Workspace members")';
        this.emailInput = 'input[data-testid="add-members-input"]';
        this.sendButton = 'button:has-text("Send invite")';
        this.workspaceName = 'div:has-text("Simon Pedro Valdez Mamani")';
        this.memberName = 'strong:has-text("Simon Pedro Valdez Mamani")';

    }

    async isPageVisible() {
        await expect(this.page.locator('text=Search')).toBeVisible(); 
    }

    // Método para hacer clic en el botón "Add Members"
    async clickAddMembersButton() {
        const button = this.page.locator(this.addMembersButton);
        await button.waitFor({ state: "visible", timeout: 5000 });
        await button.click();
    }

    // Método para ingresar un email o nombre en el campo de texto
    async typeEmailOrName(email) {
        const input = this.page.locator(this.emailInput);
        await input.waitFor({ state: "visible", timeout: 5000 });
        await input.fill(email);  // Ingresa el email o nombre proporcionado
    }

    // Método para hacer clic en el botón "Send"
    async clickSendButton() {
        const button = this.page.locator(this.sendButtonButton);
        await button.waitFor({ state: "visible", timeout: 5000 });
        await button.click();
    }

    async isWorkspaceNameVisible() {
        const workspace = this.page.locator(this.workspaceName);
        await expect(workspace).toBeVisible();
        await workspace.click();
    }

    async isMemberNameVisible() {
        const member = this.page.locator(this.memberName);
        await expect(member).toBeVisible(); 
    }

}