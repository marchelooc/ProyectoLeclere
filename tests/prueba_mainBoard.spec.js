import { test, expect } from "../utils/fixtures.js";
import { MainBoardPage } from "../pages/MainBoardPage.js";
import { AdvancedSearchPage } from "../pages/AdvancedSearch.js";
import { MyBoardsPage } from "../pages/MyBoardsPage.js";

//TEST 10
//test("Verificar que la ventana del Main Board es visible", async ({ loginFixture }) => {
//    const page = loginFixture;
//    const mainBoardPage = new MainBoardPage(page);
//    await mainBoardPage.isPageVisible();
//    await expect(page).toHaveURL(/trello\.com/);
//    await page.waitForTimeout(1000);
//});

//TEST 11
//test("Seleccionar la primera opción de 'Recently viewed'", async ({ loginFixture }) => {
//    const page = loginFixture;
//    const mainBoardPage = new MainBoardPage(page);
//    await mainBoardPage.isPageVisible();
//    await mainBoardPage.clickFirstWorkspace();
//    await expect(page).toHaveURL(/.*b/);
//    await page.waitForTimeout(1000);
//});

//TEST 12
//test("Hacer clic en el botón 'Tableros' y acceder a un tablero", async ({ loginFixture }) => {
//    const page = loginFixture;
//    const mainBoardPage = new MainBoardPage(page);
//    const myBoardsPage = new MyBoardsPage(page);
//    await mainBoardPage.isPageVisible();
//    await mainBoardPage.clickBoardsButton();
//    await expect(page).toHaveURL(/.*w/);
//    await page.waitForTimeout(1000);
//    await myBoardsPage.isPageVisible();
//    await myBoardsPage.clickTabLink();
//    await expect(page).toHaveURL(/.*b/);
//    await page.waitForTimeout(2000)
//});

//TEST 13
//test("Hacer clic en 'Ver los tableros cerrados'", async ({ loginFixture }) => {
//    const page = loginFixture;
//    const mainBoardPage = new MainBoardPage(page);
//    const myBoardsPage = new MyBoardsPage(page);
//    await mainBoardPage.isPageVisible();
//    await mainBoardPage.clickBoardsButton();
//    await expect(page).toHaveURL(/.*w/);
//    await page.waitForTimeout(1000);
//    await myBoardsPage.isPageVisible();
//   await myBoardsPage.clickClosedBoardsButton();
//    await myBoardsPage.verifyClosedBoardsVisible();
//    await page.waitForTimeout(2000);
//});

//TEST 14
//test("Hacer clic en la seccion de Inicio", async ({ loginFixture }) => {
//    const page = loginFixture;
//    const mainBoardPage = new MainBoardPage(page);
//    await mainBoardPage.isPageVisible();
//    await mainBoardPage.clickHomeButton();
//    await expect(page).toHaveURL(/.trello/);
//    await page.waitForTimeout(1000);
//});

//TEST 15
