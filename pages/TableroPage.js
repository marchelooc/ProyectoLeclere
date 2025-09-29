import { expect } from "@playwright/test";

export class TableroPage {
    constructor(page) {
    this.page = page;
    this.crearLista= "button[data-testid='list-composer-button']"; 
    this.agregarNombreLista='//*[@id="board"]/div/div[2]/form/textarea'
    this.botonAceptar='//*[@id="board"]/div/div[2]/form/div/button[1]'
    }

    async agregarLista(){
        await this.page.click(this.crearLista)
        await this.page.waitForSelector(this.agregarNombreLista)
        await this.page.fill(this.agregarNombreLista, "Lista de Prueba")
        await this.page.click(this.botonAceptar)
        
        const lista = this.page.locator('[data-testid="list-header"]', { hasText: 'Lista de Prueba' });
        await expect(lista).toContainText('Lista de Prueba');
    }

}