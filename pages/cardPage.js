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
    //editar recordatorio / fechas
    this.dateCardBtn = this.page.locator(`[data-testid="quick-card-editor-edit-dates"]`);
    this.dateReminderCardListBtn = this.page.getByTestId('due-reminder-select-select--control')
    this.addReminderBtn = this.page.locator('button[data-testid="save-date-button"]');
    //fechas
    this.startDateLabel = this.page.locator('input[data-testid="start-date-field"]');
    this.finDateLabel = this.page.locator('input[data-testid="due-date-field"]');
    //clonar card
    this.cloneBtnCard = this.page.locator(`button[data-testid="quick-card-editor-copy"]`);
    this.cloneConfirmBtnCard = this.page.locator(`button[data-testid="move-card-popover-move-button"]`);
    //copiar link
    this.copyLinkBtnCard = this.page.locator(`button[data-testid="quick-card-editor-copy-link"]`);
    //mover card
    this.moveCardBtn = this.page.locator(`button[data-testid="quick-card-editor-move"]`);
  }

  async gotoCardPage() {
    await this.page.goto('https://trello.com/b/258PQeEc/chelopruebas');
  }

  async addCardEnpi(text) {
    await this.page.click(this.addCardBtn);
    await this.page.fill(this.addCardText, text);
    await this.page.click(this.addCardConfirmBtn);
  }
  
   async addCard(text, lista) {
     const list = this.page.getByTestId('list-wrapper').filter({ has: this.page.getByRole('heading', { name: lista }) });
     await list.waitFor({ state: 'visible', timeout: 15000 });
     const addCardBtn = list.getByTestId('list-add-card-button');
     await addCardBtn.waitFor({ state: 'visible', timeout: 10000 });
     await addCardBtn.click();
     await this.page.fill(this.addCardText, text);
     await this.page.click(this.addCardConfirmBtn);
     await this.page.click('body', { position: { x: 0, y: 0 } });
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
    if(color){
      const colorBtn = crearDialog.locator(`[data-testid="color-tile-${color}"]`);
      await colorBtn.click();
    }else{
      const colorBtn = crearDialog.locator(`[class="_1e0c1o8l _1o9zidpf _vyfuvuon _vwz4kb7n _1szv15vq _1tly15vq _rzyw1osq _17jb1osq _1ksvoz0e _3se1x1jp _re2rglyw _1veoyfq0 _1kg81r31 _jcxd1r8n _gq0g1onz _1trkwc43"]`);
      await colorBtn.click();
    }
    //añadir texto
    if(title){
      const colorInput = crearDialog.getByRole('textbox', { name: 'Título' });
      await colorInput.fill(title);
    }
    //presionar guardar
    if(color || title){
      const crearInput = crearDialog.getByRole('button', { name: 'Crear' });
      await crearInput.click();
    }else{
      this.closeDialogBtn.click();
    }
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
  async cardActionEditReminder(option) {
    const dialog = this.page.getByRole('dialog', { name: 'Fechas' });
    if (!(await dialog.isVisible())) {
      await this.dateCardBtn.click();
    }
    await this.dateReminderCardListBtn.click();
    await this.page.getByRole('option', { name: option }).click();
    await this.addReminderBtn.click();
  }

  async cardActionEditDates(iniDate , finDate) {
    const dialog = this.page.getByRole('dialog', { name: 'Fechas' });
    if (!(await dialog.isVisible())) {
      await this.dateCardBtn.click();
      //await dialog.waitFor()
      //await dialog.waitFor({ state: 'visible' });
    }
    const startDateCheckbox = this.page.locator('input[type="checkbox"][aria-labelledby="date-field-label-Fecha de inicio"]');
    const finDateCheckbox = this.page.locator('input[type="checkbox"][aria-labelledby="date-field-label-Fecha de vencimiento"]');
    if (!(await startDateCheckbox.isChecked())) {
      await startDateCheckbox.check({ force: true });
    }
    if (!(await finDateCheckbox.isChecked())) {
      await finDateCheckbox.check({ force: true });
    }
    await this.startDateLabel.fill(iniDate);
    await this.finDateLabel.fill(finDate);
    await this.addReminderBtn.click();
  }

  async cardActionClone(listName) {
    await this.cloneBtnCard.click();
    const listDropdown = this.page.getByTestId('move-card-popover-select-list-destination-select--input-container');
    await listDropdown.click();
    await this.page.getByRole('option', { name: listName }).click()
    await this.cloneConfirmBtnCard.click();
  }


  async cardActionCopyLink() {
    await this.copyLinkBtnCard.click();
    const copiedLink = await this.page.evaluate(() => navigator.clipboard.readText());
    const newPage = await this.page.context().newPage();
    await newPage.goto(copiedLink);
  }

    async cardActionMoveList(listName) {
    await this.moveCardBtn.click();
    const listDropdown = this.page.getByTestId('move-card-popover-select-list-destination-select--input');
    await listDropdown.click();
    await this.page.getByRole('option', { name: listName }).click()
    await this.cloneConfirmBtnCard.click();
  }

  async closeDialogCard() {
    await this.closeDialogBtn.click();
  }
  async closeBtnCard() {
    await this.closeBtnCard.click();
  }

  async editCard(cardTitle, listTitle) {

    const list = this.page
      .getByTestId('list-wrapper')
      .filter({ has: this.page.getByRole('heading', { name: listTitle }) });

    const card = list
      .getByRole('listitem')
      .filter({ has: this.page.getByRole('link', { name: cardTitle }) });
    // hover para revelar acciones
    await card.hover();
    await card.getByTestId('quick-card-editor-button').click();
  }
}
