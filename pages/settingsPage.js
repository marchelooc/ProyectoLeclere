import { expect } from "@playwright/test";
export class SettingsPage {
    constructor(page) {
        this.page = page;
        this.changeVisibilityButton = 'button[data-testid="workspace-settings-visibility-button"][aria-label="Change workspace visibility"]';
        this.visibilityPublicOption = 'span[data-testid="visibility-name-public"]';
        this.visibilityPrivateOption = 'span[data-testid="visibility-name-private"]';
        this.privateWorkspaceText = 'xpath=//*[@id="content"]/div/div/main/main/div[3]/div[2]/div[1]/p';
        this.closePopoverButton = 'button[aria-label="Close popover"]';

    }

    async isPageVisible() {
        await expect(this.page.locator('text=Workspace settings')).toBeVisible(); 
    }

    async clickChangeVisibilityButton() {
        await this.page.click(this.changeVisibilityButton);
    }

    async clickVisibilityPublicOption() {
        await this.page.click(this.visibilityPublicOption);
    }

    async clickVisibilityPrivateOption() {
        await this.page.click(this.visibilityPrivateOption);
    }

    async isPrivateWorkspaceTextVisible() {
        const privateWorkspaceText = this.page.locator(this.privateWorkspaceText);
        await expect(privateWorkspaceText).toBeVisible(); 
    }

    async clickClosePopoverButton() {
        await this.page.click(this.closePopoverButton);
    }
        
}