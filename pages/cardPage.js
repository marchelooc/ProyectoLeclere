import { expect } from "@playwright/test";
import fs from "fs";
    /**
     * @param {import('@playwright/test').Page} page
     */

export class CardPage {
  constructor(page) {
    this.page = page;
    //añadir card
    this.addCardBtn = 'button[data-testid="list-add-card-button"]';
    this.addCardText = 'textarea[data-testid="list-card-composer-textarea"]';
    this.addCardConfirmBtn = 'button[data-testid="list-card-composer-add-card-button"]';
    //editar card
    this.editCardBtn = 'data-testid="quick-card-editor-button"';
    //editar Labels
    this.labelCardBtn = this.page.locator('[data-testid="quick-card-editor-edit-labels"]');
    this.newLabelBtn = this.page.getByRole('button', { name: 'Crear una etiqueta nueva' });
    this.blindModeBtn = this.page.getByText(/modo apto para daltónicos/i);
    //boton de cerrar
    this.closeDialogBtn = this.page.getByRole('button', { name: 'Cerrar ventana emergente' });
    this.closeBtnCard = this.page.locator(`[data-testid="CloseIcon"]`);
    //editar miembros
    this.membersCard = this.page.locator(`[data-testid="quick-card-editor-change-members"]`);
    //archivar cards
    this.storeCardBtn = this.page.locator(`[data-testid="quick-card-editor-archive"]`);
    //editar fechas
    this.dateCardBtn = this.page.locator(`[data-testid="quick-card-editor-edit-dates"]`);
  }

  async gotoCardPage() {
    await this.page.goto('https://trello.com/b/OByrjFgx/tablerotest');
  }

  async addCardEnpi(text) {
    await this.page.click(this.addCardBtn);
    await this.page.fill(this.addCardText, text);
    await this.page.click(this.addCardConfirmBtn);
  }
  
  async addCard(text, lista) {
  const list = this.page.getByTestId('list-wrapper').filter({ has: this.page.getByRole('heading', { name: lista }) });
  const addCardBtn = list.getByTestId('list-add-card-button');
    await addCardBtn.click();
    await this.page.fill(this.addCardText, text);
    await this.page.click(this.addCardConfirmBtn);
  }

  async cardActionEditLabels({ color = null, title = null }) {
    const dialog = this.page.getByRole('dialog', { name: 'Etiquetas' });
      if (!(await dialog.isVisible())) {
        await this.labelCardBtn.click();
        await dialog.waitFor();
      }
    let locator;
    if (color && title) {
      const escapedTitle = `“${title}”`;
      locator = dialog.locator(`span[aria-label='Color: ${color}, título: ${escapedTitle}']`);
    }else {
      locator = dialog.locator(`span[aria-label='Color: ${color}, título: ninguno']`);
    }
    await expect(locator).toBeVisible();
    await locator.click();
  }

  async cardActionAddLabel({ color = null, title = null }) {
    const dialog = this.page.getByRole('dialog', { name: 'Etiquetas' });
    if (!(await dialog.isVisible())) {
      await this.labelCardBtn.click();
      await dialog.waitFor();
    }
    //presionar el boton añadir etiqueta
    await this.newLabelBtn.click();
    //usar el dialog correcto
    const crearDialog = this.page.getByRole('dialog', { name: 'Crear etiqueta' });
    await expect(crearDialog).toBeVisible();
    //presionar el botón del color
    const colorBtn = crearDialog.locator(`[data-testid="color-tile-${color}"]`);
    await colorBtn.click();
    //añadir texto
    const colorInput = crearDialog.getByRole('textbox', { name: 'Título' });
    await colorInput.fill(title);
    //presionar guardar
    const crearInput = crearDialog.getByRole('button', { name: 'Crear' });
    await crearInput.click();
    //await expect(locator).toBeVisible();
  }

  async cardActionColorBlindMode() {
    const dialog = this.page.getByRole('dialog', { name: 'Etiquetas' });
      if (!(await dialog.isVisible())) {
        await this.labelCardBtn.click();
        await dialog.waitFor();
    }
    await this.blindModeBtn.click();
  }

 
  async cardActionEditMembers(miembro) {
    const dialog = this.page.getByRole('dialog', { name: 'Cambiar miembros' });
    if (!(await dialog.isVisible())) {
      await this.membersCard.click();
      await dialog.waitFor()
    }
    const nameMemberbtn = dialog.getByRole('button', { name: `${miembro}` });
    await nameMemberbtn.click();
  }

  async storeCard(){
    await this.storeCardBtn.click();
  }
  //---------------------------------------------------------------------
    async cardActionEditReminder(miembro) {
    const dialog = this.page.getByRole('dialog', { name: 'Fechas' });
    if (!(await dialog.isVisible())) {
      await this.dateCardBtn.click();
      await dialog.waitFor()
    }
    const nameMemberbtn = dialog.getByRole('button', { name: `${miembro}` });
    await nameMemberbtn.click();
  }
  //---------------------------------------------------------------------



  async closeDialogCard() {
    await this.closeDialogBtn.click();
  }
  async closeBtnCard() {
    await this.closeBtnCard.click();
  }

  //_____________________________________________________________
  async editCard(cardTitle, listTitle) {
    // localizar la lista por título
    const list = this.page
      .getByTestId('list-wrapper')
      .filter({ has: this.page.getByRole('heading', { name: listTitle }) });
    // localizar la tarjeta dentro de esa lista
    const card = list
      .getByRole('listitem')
      .filter({ has: this.page.getByRole('link', { name: cardTitle }) });
    //uevada del miguel
    //this.header = page.locator('[data-testid="list-header"]', { hasText: listName });
    // hover para revelar acciones
    await card.hover();
    // hacer clic en el botón de edición
    await card.getByTestId('quick-card-editor-button').click();
  }
  /*
  async cardActionEditLabels(color) {
    // abrir menú etiquetas
    await this.labelCardBtn.click();
    // espera a que aparezca el diálogo
    const dialog = this.page.getByRole('dialog', { name: 'Etiquetas' });
    await expect(dialog).toBeVisible();

    // busca el color SOLO dentro del diálogo
    const labelOption = dialog.locator(`span[data-color="${color}"]`);
    await expect(labelOption).toHaveCount(1); // asegura único
    await labelOption.click();
  }
  */
}
