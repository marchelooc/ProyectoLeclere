import { expect } from "@playwright/test";

export class TableroPage {
    constructor(page) {
    this.page = page;
    this.crearLista= "button[data-testid='list-composer-button']"; 
    //this.agregarNombreLista='//*[@id="board"]/div/div[2]/form/textarea';
    this.agregarNombreLista='textarea[data-testid="list-name-textarea"]';
    //this.botonAceptar='//*[@id="board"]/div/div[2]/form/div/button[1]';
    this.botonAceptar='button[data-testid="list-composer-add-list-button"]';
    }
    
    async agregarLista(nombre){
        await this.page.click(this.crearLista);
        await this.page.waitForSelector(this.agregarNombreLista);
        await this.page.fill(this.agregarNombreLista, nombre);
        await this.page.click(this.botonAceptar);
        const lista = this.page.locator('[data-testid="list-header"]', { hasText: nombre });
        await expect(lista).toContainText(nombre);
    }
    async renombrarLista(page, nombreActual, nombreNuevo) {
        const listaHeader = page.locator('[data-testid="list-header"]', { hasText: nombreActual });
        await listaHeader.waitFor({ state: 'visible' });
        await listaHeader.click();
        const textarea = page.locator('textarea[data-testid="list-name-textarea"]', { hasText: nombreActual });
        await textarea.waitFor({ state: 'visible' });
        await textarea.fill(nombreNuevo);
        await page.keyboard.press('Enter');

}

}