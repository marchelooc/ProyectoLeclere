import { expect } from '@playwright/test';

export class ListPage {
  constructor(page, listName) {
    this.page = page;
    this.listName = listName;

    // Header de la lista (para validaciones)
    this.header = page.locator('[data-testid="list-header"]', { hasText: listName });
    this.contraerButton=this.header.locator('button[data-testid="list-collapse-button"]')
    this.expandirButton=this.header.locator('button[data-testid="list-collapse-button"]')
    // Botón de menú de la lista (los tres puntitos)
    this.menuButton = this.header.locator('button[data-testid="list-edit-menu-button"]');
    this.CerrarMenu = this.page.locator('//html/body/div[4]/div[1]/section/div[2]/div/header/button');
    //this.CerrarMenu = "//html/body/div[4]/div[1]/section/div[2]/div/header/button"
    //this.botonColor= '/html/body/div[4]/div[1]/section/div[2]/div/div/section[1]/div/div/div[2]/ul/li[4]/button'; 
    this.botonColor = this.page.locator('button[data-testid="color-tile-red"]');
    this.archiveButton=this.page.locator('button[data-testid="list-actions-archive-list-button"]')
    this.seguirButton=this.page.locator('button[data-testid="list-actions-watch-list-button"]')
    this.quitarColorButtton=this.page.locator('button:has([data-testid="CloseIcon"])')
    this.moverListaButton=this.page.locator('button[data-testid="list-actions-move-list-button"]')
    this.moverButton=this.page.locator('button[type="submit"]')
  }

  // ✅ Validar que la lista existe
  async shouldBeVisible() {
    await expect(this.header).toBeVisible();
  }

  async archive() {
    
    await this.menuButton.dblclick();
    await this.menuButton.click();
    await this.archiveButton.click();
    await expect(this.header).toHaveCount(0);
  }

  async changeColor(color) {
    // Abrir el menú de la lista
    await this.menuButton.dblclick();
    await this.menuButton.click();

    // Construir selector dinámico según el color
    const botonColor = this.page.locator(`button[data-testid="color-tile-${color}"]`);
    
    // Hacer click en el color seleccionado
    await botonColor.click();
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
  
  async contraerLista(){
    await this.contraerButton.click();
  }

  async seguirLista(){
    await this.menuButton.dblclick();
    await this.menuButton.click();
    await this.seguirButton.click();
    await this.CerrarMenu.click();
  }

  async dejarSeguirLista(){
    await this.menuButton.dblclick();
    await this.menuButton.click();
    await this.seguirButton.click();
    await this.CerrarMenu.click();
  }
  async quitarColorLista(){
    await this.menuButton.dblclick();
    await this.menuButton.click();
    await this.quitarColorButtton.click();
  }

  async moverLista(){
    await this.menuButton.dblclick();
    await this.menuButton.click();
    await this.moverListaButton.click();
    await this.page.locator('input[id="move-list-screen-position-select"]').fill('1');
    await this.page.keyboard.press('Enter');
    await this.moverButton.click();
    
  }
  async expandirLista(){
    await this.expandirButton.click();
  }
}
  
