import { expect } from "@playwright/test";

export class LogoutPage {
  constructor(page) {
    this.page = page;
    this.finalLogoutButton = "button#logout-submit"; // último botón "Cerrar sesión"
  }

  async confirmLogout() {
    await this.page.click(this.finalLogoutButton);
    // Verifica que vuelve a la página principal
    await expect(this.page).toHaveURL(/trello\.com/);
  }
}
