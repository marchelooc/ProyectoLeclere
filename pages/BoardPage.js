import { expect } from "@playwright/test";

export class BoardPage {
  constructor(page) {
    this.page = page;
    this.profileButton = "button[data-testid='header-member-menu-button']";
    this.popoverMenu = "#account-menu-popover-content";
    this.logoutButton = "button[data-testid='account-menu-logout']";
    this.confirmLogoutButton = "button#logout-submit"; // Atlassian
  }

  async openProfileMenu() {
    // Espera a que aparezca el botón del avatar
    await this.page.waitForSelector(this.profileButton, { state: "visible" });
    await this.page.dblclick(this.profileButton);
    await this.page.click(this.profileButton);

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

  async searchForBoard(term) {
        // Esperar 2 segundos para que la página cargue
        await this.page.waitForTimeout(1000);
        // Asegurarse de que el campo de búsqueda sea visible antes de interactuar
        await this.page.waitForSelector(this.searchInput, { state: 'visible' });
        // Verificar si el campo de búsqueda está habilitado antes de escribir
        await expect(this.page.locator(this.searchInput)).toBeEnabled();
        // Escribir el término en el campo de búsqueda
        await this.page.fill(this.searchInput, term);
        // Esperar que las opciones aparezcan después de escribir
        await this.page.waitForTimeout(1000); // Esperar un segundo para ver los resultados de búsqueda
        
  }

}
