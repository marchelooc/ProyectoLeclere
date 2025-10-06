import { expect } from "@playwright/test";
import { faker } from "@faker-js/faker";

export class BoardPage {
  constructor(page) {
    this.page = page;
    this.profileButton = "button[data-testid='header-member-menu-button']";
    this.popoverMenu = "#account-menu-popover-content";
    this.logoutButton = "button[data-testid='account-menu-logout']";
    this.confirmLogoutButton = "button#logout-submit"; // Atlassian
    this.createBoardButton = 'button[data-testid="header-create-menu-button"]';
    this.createEmptyBoard = 'button[data-testid="header-create-board-button"]';
    this.boardTittle = 'input[data-testid="create-board-title-input"]';
    this.createSave = 'button[data-testid="create-board-submit-button"]';
  }

  async createBoard() {
    const titulo = faker.lorem.words(2);
    await this.page.click(this.createBoardButton);
    await this.page.click(this.createEmptyBoard);
    await this.page.fill(this.boardTittle, titulo);
    await this.page.click(this.createSave);
    return titulo;
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
}
