import { expect } from "@playwright/test";

export class LogoutPage {
  constructor(page) {
    this.page = page;
    this.finalLogoutButton = "button#logout-submit";
  }

  async confirmLogout() {
    await this.page.click(this.finalLogoutButton);
    await expect(this.page).toHaveURL(/trello\.com/);
  }
}
