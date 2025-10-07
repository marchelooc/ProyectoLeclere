import { expect } from "@playwright/test";

export class ListPage {
  constructor(page, listName) {
    this.page = page;
    this.listName = listName;

    this.header = page.locator('[data-testid="list-header"]', {
      hasText: listName,
    });
    this.contraerButton = this.header.locator(
      'button[data-testid="list-collapse-button"]'
    );
    this.expandirButton = this.header.locator(
      'button[data-testid="list-collapse-button"]'
    );
    this.menuButton = this.header.locator(
      'button[data-testid="list-edit-menu-button"]'
    );
    this.botonColor = this.page.locator('button[data-testid="color-tile-red"]');
    this.archiveButton = this.page.locator(
      'button[data-testid="list-actions-archive-list-button"]'
    );
    this.seguirButton = this.page.locator(
      'button[data-testid="list-actions-watch-list-button"]'
    );
    this.dejarSeguirButton = this.page.locator(
      'button[data-testid="list-actions-unwatch-list-button"]'
    );
    this.quitarColorButtton = this.page.locator(
      'button:has([data-testid="CloseIcon"])'
    );
    this.moverListaButton = this.page.locator(
      'button[data-testid="list-actions-move-list-button"]'
    );
    this.moverButton = this.page.locator('button[type="submit"]');
  }

  async archive() {
    await this.page.waitForTimeout(1000);
    await this.menuButton.click();
    await this.archiveButton.waitFor({ state: "visible", timeout: 5000 });
    await this.archiveButton.click();
    await expect(this.header).toHaveCount(0);
  }

  async changeColor(color) {
    await this.menuButton.click();
    const botonColor = this.page.locator(`button[data-testid=color-tile-${color}"]`);
    await this.botonColor.waitFor({ state: "visible" });
    await botonColor.click();
    await this.menuButton.click();
}

  /** 
  async changeColor() {
    await this.menuButton.dblclick();
    await this.menuButton.click();
    //await this.page.waitForSelector('button[data-testid="list-edit-menu-button"]', { state: "visible" });
    //await this.menuButton.click();
    await this.botonColor.click();
    //await this.CerrarMenu.click();
}*/

  async cerrarPageOconf() {
    await this.CerrarMenu.click();
  }

  async contraerLista() {
    await this.contraerButton.waitFor({ state: "visible" });
    await this.contraerButton.click();
    await this.page.waitForTimeout(2000);
  }

  async seguirLista() {
    await this.menuButton.dblclick();
    await this.menuButton.click();
    await this.seguirButton.click();
    await this.menuButton.click();
  }

  async dejarSeguirLista() {
    await this.menuButton.click();
    await this.seguirButton.waitFor({ state: "visible" });
    await this.seguirButton.click();
    await this.menuButton.click();
  }
  async quitarColorLista() {
    await this.menuButton.click();
    await this.quitarColorButtton.click();
    await this.menuButton.click();
  }

  async moverLista() {
    await this.menuButton.click();
    await this.menuButton.click();
    await this.moverListaButton.click();
    await this.page
      .locator('input[id="move-list-screen-position-select"]')
      .fill("1");
    await this.page.keyboard.press("Enter");
    await this.moverButton.click();
  }
  async expandirLista() {
    await this.expandirButton.click();
    await this.expandirButton.click();
  }
}