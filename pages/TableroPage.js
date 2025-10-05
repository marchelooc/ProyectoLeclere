import { expect } from "@playwright/test";



export class TableroPage {
    constructor(page) {
    this.page = page;
    this.crearLista= "button[data-testid='list-composer-button']"; 
    this.agregarNombreLista='//*[@id="board"]/div/div[2]/form/textarea';
    this.botonAceptar='//*[@id="board"]/div/div[2]/form/div/button[1]';
    }
    //ir a tablero
    /**async goTablero() {
        await this.page.goto(process.env.TRELLO_BOARD_URL);
    }*/
    async agregarLista(){
        await this.page.click(this.crearLista)
        await this.page.waitForSelector(this.agregarNombreLista)
        await this.page.fill(this.agregarNombreLista, "Lista de Prueba")
        await this.page.click(this.botonAceptar)
        
        const lista = this.page.locator('[data-testid="list-header"]', { hasText: 'Lista de Prueba' });
        await expect(lista).toContainText('Lista de Prueba');
    }

    async renombrarLista(page, nombreActual, nombreNuevo) {
  // 1. Localizar la lista por su nombre actual
    const lista = page.locator('[data-testid="list-header"]', { hasText: nombreActual });
  // 2. Hacer clic para activar el campo de edición
    await lista.click();
  // 3. Rellenar el input con el nuevo nombre
    await page.locator('//*[@id="board"]/li[6]/div/div[1]/div[1]/textarea').fill(nombreNuevo);    
  // 4. Confirmar con Enter
    await page.keyboard.press('Enter');
  // 5. Validar que cambió el nombre
    await expect(page.locator('[data-testid="list-header"]', { hasText: nombreNuevo })).toBeVisible();
}

}