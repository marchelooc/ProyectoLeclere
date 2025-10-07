import { test, expect } from "../../utils/fixtures.js";
import colorsData from '../../data/colores.json';
import { BoardPage } from "../../pages/boardPage.js";
import { TableroPage } from "../../pages/tableListPage.js";
import { ListPage} from "../../pages/confListPage.js";
import { screenshotPath } from "../../utils/helpers.js";
import { Logger } from "../../utils/helpers.js";

test("@ui @smoke Crear una lista en un tablero con letras", async ({ loginFixture }) => {
    const page = loginFixture;
    try {  
    Logger.info("");
    const boardPage = new BoardPage(page);
    const tableroPage = new TableroPage(page);
    Logger.info("Ingresando al Tablero Mi tablero de Trello");
    await boardPage.clickBotonTablero();
    Logger.info("Agregando una lista con letras");
    await tableroPage.agregarLista('Lista de pruebas agregar');
    Logger.info("verificando que se creo en la tabla correcta");
    const confListaPage = new ListPage(page, "Lista de pruebas agregar");
    await expect(page).toHaveURL("https://trello.com/b/wWp9CEFf/mi-tablero-de-trello");
    Logger.info("Eliminando la lista");
    await confListaPage.archive();
    } catch (err) {
    await page.screenshot({ path: screenshotPath(`Crear una lista en un tablero con letras`) });
    throw err;
    Logger.error(err);  
    }
        
});

test("@ui @positive Crear una lista en un tablero con caracteres especiales", async ({ loginFixture }) => {
    const page = loginFixture;
    try {
    const boardPage = new BoardPage(page);
    const tableroPage = new TableroPage(page);
    Logger.info("Ingresando al Tablero Mi tablero de Trello");
    await boardPage.clickBotonTablero();
    Logger.info("Agregando una lista con caracteres especiales");
    await tableroPage.agregarLista('@#%$#%#^$%^$');
    const confListaPage = new ListPage(page, "@#%$#%#^$%^$");
    Logger.info("verificando que se creo en la tabla correcta");
    await expect(page).toHaveURL("https://trello.com/b/wWp9CEFf/mi-tablero-de-trello");
    Logger.info("Eliminando la lista");
    await confListaPage.archive();
    } catch (err) {
    await page.screenshot({ path: screenshotPath(`Crear una lista en un tablero con caracteres especiales`) });
    throw err;
    Logger.error(err);
    }
        
});

test("@ui @positive Crear una lista en un tablero con solo numeros", async ({ loginFixture }) => {
    const page = loginFixture;
    try {
    const boardPage = new BoardPage(page);
    const tableroPage = new TableroPage(page);
    Logger.info("Ingresando al Tablero Mi tablero de Trello");
    await boardPage.clickBotonTablero();
    Logger.info("Agregando una lista con numeros");
    await tableroPage.agregarLista('25644118489798');
    const confListaPage = new ListPage(page, "25644118489798");
    Logger.info("verificando que se creo en la tabla correcta");
    await expect(page).toHaveURL("https://trello.com/b/wWp9CEFf/mi-tablero-de-trello");
    Logger.info("Eliminando la lista")
    await confListaPage.archive();
    } catch (err) {
    await page.screenshot({ path: screenshotPath(`Crear una lista en un tablero con solo numeros`) });
    throw err;
    Logger.error(err);
    }  
        
});


test("@ui @smoke Archivar una Lista", async ({ loginFixture }) => {
    const page = loginFixture;
    try {
    const boardPage = new BoardPage(page);
    const tableroPage = new TableroPage(page);
    Logger.info("Ingresando al Tablero Mi tablero de Trello");
    await boardPage.clickBotonTablero();
    Logger.info("Agregando una lista para archivar")
    await tableroPage.agregarLista("Lista de prueba");
    const confListaPage = new ListPage(page, "Lista de Prueba");
    Logger.info("Archivando la lista");
    await confListaPage.archive();
    } catch (err) {
    await page.screenshot({ path: screenshotPath(`Archivar una Lista`) });
    throw err;
    Logger.error(err);
    }
});

test("@ui @positiva Contraer una Lista", async ({ loginFixture }) => {
    const page = loginFixture;
    try {
    const boardPage = new BoardPage(page);
    const tableroPage = new TableroPage(page);
    Logger.info("Ingresando al Tablero Mi tablero de Trello");
    await boardPage.clickBotonTablero();
    Logger.info("Agregando una lista para contraer");
    await tableroPage.agregarLista("Lista de prueba");
    const confListaPage = new ListPage(page, "Lista de Prueba");
    Logger.info("Contraiendo la lista");
    await confListaPage.contraerLista();
    await confListaPage.expandirLista();
    Logger.info("Lista archivada")
    await confListaPage.archive(); 
    } catch (err) {
    await page.screenshot({ path: screenshotPath(`Contraer una Lista`) });
    throw err;
    Logger.error(err);
    }         
});


test("@ui @positiva Editar Nombre de una Lista", async ({ loginFixture }) => {
    const page = loginFixture;
    try {
    const boardPage = new BoardPage(page);
    const tableroPage = new TableroPage(page);
    Logger.info("Ingresando al Tablero Mi tablero de Trello");
    await boardPage.clickBotonTablero();
    Logger.info("Agregando una lista para editar nombre");
    await tableroPage.agregarLista("Lista de prueba");
    Logger.info("Renombrando la lista");
    await tableroPage.renombrarLista(page,'Lista de Prueba','Renombrado');
    Logger.info("Validando que se edito el nombre")
    await expect(page.locator('[data-testid="list-header"]', { hasText: 'Renombrado' })).toBeVisible();
    const confListaPage = new ListPage(page, "Renombrado");
    Logger.info("Archivando Lista");
    await confListaPage.archive(); 
    } catch (err) {
    await page.screenshot({ path: screenshotPath(`Editar Nombre de una Lista`) });
    throw err;
    Logger.error(err);
    }           
});

test("@ui @positiva Seguir una Lista", async ({ loginFixture }) => {
    const page = loginFixture;
    try{
    const boardPage = new BoardPage(page);
    const tableroPage = new TableroPage(page);
    Logger.info("Ingresando al Tablero Mi tablero de Trello");
    await boardPage.clickBotonTablero();
    Logger.info("Agregando una lista para seguir");
    await tableroPage.agregarLista("Lista de prueba seguir");
    const confListaPage = new ListPage(page, "Lista de prueba seguir");
    Logger.info("Siguiendo la lista");
    await confListaPage.seguirLista();
    Logger.info("Verificando que se esta siguiendo la lista");
    const iconoOjo = page.locator('[data-testid="list"]', { hasText: 'Lista de prueba seguir' }) // el contenedor que sí tiene el nombre
    .locator('[data-testid="SubscribeIcon"]');
    await expect(iconoOjo).toBeVisible();
    Logger.info("Archivando Lista");
    await confListaPage.archive();
    } catch (err) {
    await page.screenshot({ path: screenshotPath(`Seguir una Lista`) });
    throw err;
    Logger.error(err);
    }
});

test("@ui @positiva Dejar de Seguir una Lista", async ({ loginFixture }) => {
    const page = loginFixture;
    try {
    const boardPage = new BoardPage(page);
    const tableroPage = new TableroPage(page);
    Logger.info("Ingresando al Tablero Mi tablero de Trello");
    await boardPage.clickBotonTablero();
    Logger.info("Agregando una lista para dejar de seguir");
    await tableroPage.agregarLista("Lista de prueba dejar seguir");
    const confListaPage = new ListPage(page, "Lista de prueba dejar seguir");
    Logger.info("Seguir la lista");
    await confListaPage.seguirLista();
    Logger.info("Dejando de seguir la lista");
    await confListaPage.dejarSeguirLista();
    Logger.info("Verificando que se esta dejando de seguir la lista");
    const iconoOjo = page.locator('[data-testid="SubscribeIcon"]');
    await expect(iconoOjo).not.toBeVisible();
    Logger.info("Archivando Lista");
    await confListaPage.archive();
    } catch (err) {
    await page.screenshot({ path: screenshotPath(`Dejar de Seguir una Lista`) });
    throw err;
    Logger.error(err);  
    }
});

test("@ui @positiva Quitar Color de una Lista", async ({ loginFixture }) => {
    const page = loginFixture;
    try {
    const boardPage = new BoardPage(page);
    const tableroPage = new TableroPage(page);
    Logger.info("Ingresando al Tablero Mi tablero de Trello");
    await boardPage.clickBotonTablero();
    Logger.info("Agregando una lista para quitar color");
    await tableroPage.agregarLista("Lista de prueba");
    const confListaPage = new ListPage(page, "Lista de prueba");
    Logger.info("Agregando color de la lista");
    await confListaPage.changeColor("orange");
    Logger.info("Cambiando el color de la lista");
    await confListaPage.quitarColorLista();
    Looger.info("Archivando la Lista");
    await confListaPage.archive();
    } catch (err) {
    await page.screenshot({ path: screenshotPath(`Quitar Color de una Lista`) });
    throw err;
    Logger.error(err);
    }
});

test("@ui @positiva Mover una Lista", async ({ loginFixture }) => {
    const page = loginFixture;
    try {
    const boardPage = new BoardPage(page);
    const tableroPage = new TableroPage(page);
    Logger.info("Ingresando al Tablero Mi tablero de Trello");
    await boardPage.clickBotonTablero();
    Logger.info("Agregando una lista para mover");
    await tableroPage.agregarLista("Lista de prueba");
    const confListaPage = new ListPage(page, "Lista de prueba");
    Logger.info("Moviendo la lista");
    await confListaPage.moverLista();
    const listas = page.locator('[data-testid="list-header"]');
    Logger.info("Verificando que se movio la lista");
    await expect(listas.nth(0)).toContainText('Lista de prueba');
    Logger.info("Archivando la lista");
    await confListaPage.archive();
    } catch (err) {
    await page.screenshot({ path: screenshotPath(`Mover una Lista`) });
    throw err;
    Logger.error(err);
    }
});

test("@ui @positiva Expandir una Lista", async ({ loginFixture }) => {
    const page = loginFixture;
    try {
    const boardPage = new BoardPage(page);
    const tableroPage = new TableroPage(page);
    Logger.info("Ingresando al Tablero Mi tablero de Trello");
    await boardPage.clickBotonTablero();
    Logger.info("Agregando una lista para expandir");
    await tableroPage.agregarLista("Lista de prueba");
    const confListaPage = new ListPage(page, "Lista de prueba");
    Logger.info("Contrayendo la lista");
    await confListaPage.contraerLista();
    Logger.info("Expandiendo la lista");
    await confListaPage.expandirLista();
    Logger.info("Archivando la lista");
    await confListaPage.archive();
    } catch (err) {
    await page.screenshot({ path: screenshotPath(`Marcar primer tablero como favorito`) });
    throw err;
    Logger.error(err);
    }
});

test.describe("Agregar color a una Lista", () => {
    for (const color of colorsData.colors) {
        test(`@ui @positiva Crea lista y aplica el Color: ${color}`, async ({ loginFixture }) => {
        const page = loginFixture;
        try {
        const boardPage = new BoardPage(page);
        const tableroPage = new TableroPage(page);
        Logger.info("Ingresando al Tablero Mi tablero de Trello");
        await boardPage.clickBotonTablero();
        Logger.info("Agregando una lista para aplicar color");
        await tableroPage.agregarLista("Lista de coloreada");
        const confListaPage = new ListPage(page, "Lista de coloreada");
        Logger.info("Agregando color a la lista");
        await confListaPage.changeColor(color); // <-- ahora tu método recibe el color
        const lista = page.locator('[data-testid="list"]', { hasText: 'Lista de coloreada' });
        Logger.info("Verificando que se aplico el color");
        const styleValue = await lista.getAttribute('style');
        expect(styleValue).toContain(`--ds-background-accent-${color}-subtler`);
        Logger.info("Archivando la lista");
        await confListaPage.archive();
        } catch (err) {
        await page.screenshot({ path: screenshotPath(`Marcar primer tablero como favorito`) });
        throw err;
        Logger.error(err);
        }
        });
    }
});
