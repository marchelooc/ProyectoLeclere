import { expect } from "@playwright/test";

export class BoardPage {
  constructor(page) {
    this.page = page;
    this.profileButton = "button[data-testid='header-member-menu-button']";
    this.popoverMenu = "#account-menu-popover-content";
    this.logoutButton = "button[data-testid='account-menu-logout']";
    this.confirmLogoutButton = "button#logout-submit"; // Atlassian
    this.botonTablero = '//*[@id="content"]/div/div/div/main/div/div[3]/div[1]/div[2]/div/a/div/div[2]' // boton tablero
  }

  async openProfileMenu() {
    // Espera a que aparezca el botón del avatar
    await this.page.waitForSelector(this.profileButton, { state: "visible" });
    await this.page.dblclick(this.profileButton);
    await this.page.click(this.profileButton);

  }
  //abrir el tablero
  async clickBotonTablero() {
    await this.page.waitForSelector(this.botonTablero, { state: "visible" });
    await this.page.click(this.botonTablero);
  }

  async clickLogout() {
    await this.page.waitForSelector(this.logoutButton, { state: "visible" });
    await this.page.click(this.logoutButton);
  }

  async logout() {
    // abrir menú
    await this.openProfileMenu();

    // clic en "Cerrar sesión"
    await this.clickLogout();

    // confirmar que redirige a Atlassian
    await expect(this.page).toHaveURL(/id\.atlassian\.com\/logout/);

    // clic en botón de confirmación final
    await this.page.click(this.confirmLogoutButton);

    // validar que vuelves al home de Trello
    await expect(this.page).toHaveURL("https://trello.com/");
  }
}
