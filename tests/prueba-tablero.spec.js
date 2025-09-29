// tests/prueba-tablero.spec.js
import { test, expect } from "../utils/fixtures.js";
import { BoardPage } from "../pages/BoardPage.js";
import { TableroPage } from "../pages/TableroPage.js";
//import { LogoutPage } from "../pages/LogoutPage.js";

test("Precondición: login + abrir tablero", async ({ loginFixture }) => {
    const page = loginFixture;
    const boardPage = new BoardPage(page);
    const tableroPage = new TableroPage(page);
    //const logoutPage = new LogoutPage(page);

    // Ya estás logueado aquí gracias al fixture
    await boardPage.clickBotonTablero();
    await expect(page).toHaveURL(/https:\/\/trello\.com\/b\/SdyRJwzq\/mi-tablero-de-trello/);
    await tableroPage.agregarLista();
        
});