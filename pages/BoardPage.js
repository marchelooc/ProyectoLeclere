import { expect } from "@playwright/test";
export class BoardPage {
  constructor(page) {
    this.page = page;
    this.profileButton = "button[data-testid='header-member-menu-button']";
    this.popoverMenu = "#account-menu-popover-content";
    this.logoutButton = "button[data-testid='account-menu-logout']";
    this.confirmLogoutButton = "button#logout-submit"; 
  }

  async openProfileMenu() {
    await this.page.waitForSelector(this.profileButton, { state: "visible" });
    await this.page.dblclick(this.profileButton);
    await this.page.click(this.profileButton);
  }

  async clickLogout() {
    await this.page.click(this.logoutButton);
  }

  async logout() {
    await this.openProfileMenu();
    await this.clickLogout();
    await expect(this.page).toHaveURL(/id\.atlassian\.com\/logout/);
    await this.page.click(this.confirmLogoutButton);
    await expect(this.page).toHaveURL("https://trello.com/");
  }
}
