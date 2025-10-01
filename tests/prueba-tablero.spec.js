// tests/prueba-tablero.spec.js
import { test, expect } from "../utils/fixtures.js";
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
    const confListaPage = new ListPage(page, "Lista de Prueba");
    await boardPage.clickBotonTablero();
    await tableroPage.agregarLista();
    await confListaPage.changeColor();
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
    
});*/

test("Contraer una Lista", async ({ loginFixture }) => {
    const page = loginFixture;
    const boardPage = new BoardPage(page);
    const tableroPage = new TableroPage(page);
    const confListaPage = new ListPage(page, "Lista de Prueba");
    await boardPage.clickBotonTablero();
    await confListaPage.contraerLista();
    

    
});