import { expect } from '@playwright/test';

export class ListPage {
  constructor(page, listName) {
    this.page = page;
    this.listName = listName;

    // Header de la lista (para validaciones)
    this.header = page.locator('[data-testid="list-header"]', { hasText: listName });
    this.contraerButton=this.header.locator('button[data-testid="list-collapse-button"]')
    // Botón de menú de la lista (los tres puntitos)
    this.menuButton = this.header.locator('button[data-testid="list-edit-menu-button"]');
    this.CerrarMenu = this.page.locator('//html/body/div[4]/div[1]/section/div[2]/div/header/button');
    //this.CerrarMenu = "//html/body/div[4]/div[1]/section/div[2]/div/header/button"
    //this.botonColor= '/html/body/div[4]/div[1]/section/div[2]/div/div/section[1]/div/div/div[2]/ul/li[4]/button'; 
    this.botonColor = this.page.locator('button[data-testid="color-tile-red"]');
    this.archiveButton=this.page.locator('button[data-testid="list-actions-archive-list-button"]')
    //this.archiveButton = 'button[data-testid="list-actions-archive-list-button"'
  }

  // ✅ Validar que la lista existe
  async shouldBeVisible() {
    await expect(this.header).toBeVisible();
  }

  // ✅ Archivar la lista
  async archive() {
    
    await this.menuButton.dblclick();
    await this.menuButton.click();
    await this.archiveButton.click();
    await expect(this.header).toHaveCount(0);
  }

  // ✅ Mover la lista a otra posición (por menú, no drag&drop)
  async move(position) {
    await this.menuButton.click();
    await this.page.click('text=Mover lista');
    await this.page.fill('[data-testid="move-position-input"]', String(position));
    await this.page.click('text=Mover');
  }

  // ✅ Cambiar color de fondo de la lista
  async changeColor() {
    await this.menuButton.dblclick();
    await this.menuButton.click();
    await this.page.waitForSelector('button[data-testid="list-edit-menu-button"]', { state: "visible" });
    await this.menuButton.click();
    await this.botonColor.click();
    await this.CerrarMenu.click();
}

  // ✅ Renombrar lista
  async rename(newName) {
    await this.header.click();
    await this.page.fill('[data-testid="list-name-input"]', newName);
    await this.page.keyboard.press('Enter');
    await expect(this.header).toHaveText(newName);
  }
  async cerrarPageOconf() {
    await this.CerrarMenu.click();
  }
  
  async contraerLista(){
    await this.contraerButton.click();
  }

}
  
