// tests/prueba-tablero.spec.js
import { test, expect } from "../utils/fixtures.js";
import colorsData from '../data/colores.json';
import { BoardPage } from "../pages/BoardPage.js";
import { TableroPage } from "../pages/TableroPage.js";
import { ListPage} from "../pages/ConfListaPage.js";

//import { LogoutPage } from "../pages/LogoutPage.js";
/** 
test("Crear una lista en un tablero", async ({ loginFixture }) => {
    const page = loginFixture;
    const boardPage = new BoardPage(page);
    const tableroPage = new TableroPage(page);
    
    //const logoutPage = new LogoutPage(page);

    //await tableroPage.goTablero();
    // Ya estás logueado aquí gracias al fixture
    await boardPage.clickBotonTablero();
    await expect(page).toHaveURL(/https:\/\/trello\.com\/b\/SdyRJwzq\/mi-tablero-de-trello/);
    await tableroPage.agregarLista();
        
});*/
/** 
test("Agregar color a una Lista", async ({ loginFixture }) => {
    const page = loginFixture;
    const boardPage = new BoardPage(page);
    const tableroPage = new TableroPage(page);
    const confListaPage = new ListPage(page, "Renombrado");
    await boardPage.clickBotonTablero();
    await tableroPage.agregarLista();
    await confListaPage.changeColor();
    const lista = page.locator('[data-testid="list"]', { hasText: 'Renombrado' });
    const styleValue = await lista.getAttribute('style');
    expect(styleValue).toContain('--ds-background-accent-red-subtler');
    //await confListaPage.cerrarPageOconf();
    //await confListaPage.archive();

});*/
/** 
test("Archivar una Lista", async ({ loginFixture }) => {
    const page = loginFixture;
    const boardPage = new BoardPage(page);
    const tableroPage = new TableroPage(page);
    const confListaPage = new ListPage(page, "Lista de Prueba");
    await boardPage.clickBotonTablero();
    await tableroPage.agregarLista();
    //await confListaPage.changeColor();
    //await confListaPage.cerrarPageOconf();
    await confListaPage.archive();
    
});

test("Contraer una Lista", async ({ loginFixture }) => {
    const page = loginFixture;
    const boardPage = new BoardPage(page);
    const tableroPage = new TableroPage(page);
    const confListaPage = new ListPage(page, "Lista de Prueba");
    await boardPage.clickBotonTablero();
    await confListaPage.contraerLista();
            
});


test("Editar Nombre de una Lista", async ({ loginFixture }) => {
    const page = loginFixture;
    const boardPage = new BoardPage(page);
    const tableroPage = new TableroPage(page);
    //const confListaPage = new ListPage(page, "Lista de Prueba");
    //await boardPage.clickBotonTablero();
    //await confListaPage.contraerLista();
    await boardPage.clickBotonTablero();
    await tableroPage.renombrarLista(page,'Lista de Prueba','Renombrado');
    await expect(page.locator('[data-testid="list-header"]', { hasText: 'Renombrado' })).toBeVisible();
            
});

test("Seguir una Lista", async ({ loginFixture }) => {
    const page = loginFixture;
    const boardPage = new BoardPage(page);
    const tableroPage = new TableroPage(page);
    const confListaPage = new ListPage(page, "Renombrado");
    await boardPage.clickBotonTablero();
    await confListaPage.seguirLista();
    const iconoOjo = page.locator('[data-testid="SubscribeIcon"]');
    await expect(iconoOjo).toBeVisible();

});*/
/** 
test("Dejar de Seguir una Lista", async ({ loginFixture }) => {
    const page = loginFixture;
    const boardPage = new BoardPage(page);
    const tableroPage = new TableroPage(page);
    const confListaPage = new ListPage(page, "Renombrado");
    await boardPage.clickBotonTablero();
    await confListaPage.dejarSeguirLista();
    const iconoOjo = page.locator('[data-testid="SubscribeIcon"]');
    await expect(iconoOjo).not.toBeVisible();
});*/
/** 
test("Quitar Color de una Lista", async ({ loginFixture }) => {
    const page = loginFixture;
    const boardPage = new BoardPage(page);
    const tableroPage = new TableroPage(page);
    const confListaPage = new ListPage(page, "Renombrado");
    await boardPage.clickBotonTablero();
    await confListaPage.quitarColorLista();
}); */
/** 
test("Mover una Lista", async ({ loginFixture }) => {
    const page = loginFixture;
    const boardPage = new BoardPage(page);
    const tableroPage = new TableroPage(page);
    const confListaPage = new ListPage(page, "Renombrado");
    await boardPage.clickBotonTablero();
    await confListaPage.moverLista();
    const listas = page.locator('[data-testid="list-header"]');

    // Verifica que la lista "Renombrado" ahora esté en la posición 0 (o la que corresponde)
    await expect(listas.nth(0)).toContainText('Renombrado');
});*/
/** 
test("Expandir una Lista", async ({ loginFixture }) => {
    const page = loginFixture;
    const boardPage = new BoardPage(page);
    const tableroPage = new TableroPage(page);
    const confListaPage = new ListPage(page, "Renombrado");
    await boardPage.clickBotonTablero();
    await confListaPage.contraerLista();
    await confListaPage.expandirLista();
});*/

test.describe("Agregar color a una Lista", () => {
  for (const color of colorsData.colors) {
    test(`Color: ${color}`, async ({ loginFixture }) => {
      const page = loginFixture;
      const boardPage = new BoardPage(page);
      const tableroPage = new TableroPage(page);
      const confListaPage = new ListPage(page, "Renombrado");

      await boardPage.clickBotonTablero();
      //await tableroPage.agregarLista();
      await confListaPage.changeColor(color); // <-- ahora tu método recibe el color

      const lista = page.locator('[data-testid="list"]', { hasText: 'Renombrado' });
      const styleValue = await lista.getAttribute('style');
      expect(styleValue).toContain(`--ds-background-accent-${color}-subtler`);
    });
  }
});
