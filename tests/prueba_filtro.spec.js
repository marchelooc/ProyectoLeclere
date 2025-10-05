import { test, expect } from "../utils/fixtures.js";
import { MainBoardPage } from "../pages/MainBoardPage.js";
import { AdvancedSearchPage } from "../pages/AdvancedSearch.js";

//TEST 1
//test('Verificar que el filtro de búsqueda sea visible', async ({ loginFixture }) => {
//    const page = loginFixture;
//    const mainBoardPage = new MainBoardPage(page);
//    const searchInput = page.locator(mainBoardPage.searchInput);
//    await searchInput.waitFor({ state: 'visible', timeout: 10000 });
//    await expect(searchInput).toBeVisible();
//});

//TEST 2
//test("Verificar la búsqueda con el campo vacio", async ({ loginFixture }) => {
//    const page = loginFixture;
//    const mainBoardPage = new MainBoardPage(page);
//    const searchInput = page.locator(mainBoardPage.searchInput);
//    await searchInput.waitFor({ state: "visible", timeout: 10000 });
//    await searchInput.click(); 
//    await searchInput.fill("");
//    const urlBefore = page.url(); //Guardar URL
//    await page.keyboard.press("Enter");
//    await expect(page).toHaveURL(urlBefore); // verificar que no cambia la url
//    await expect(searchInput).toHaveValue("");
//});

//TEST 3
//test('Verificar mensaje al escribir números en el campo de búsqueda', async ({ loginFixture }) => {
//    const page = loginFixture;
//    const mainBoardPage = new MainBoardPage(page);
//    await mainBoardPage.typeInSearch("123456790");
//    await page.waitForTimeout(500);
//    const message = page.locator('text=We couldn\'t find anything matching your search.');
//    await expect(message).toBeVisible();
//    await page.waitForTimeout(1000);
//});

//TEST 4
//test('Verificar mensaje al escribir caracteres especiales en el campo de búsqueda', async ({ loginFixture }) => {
//    const page = loginFixture;
//    const mainBoardPage = new MainBoardPage(page);
//    await mainBoardPage.typeInSearch("@#$%%^!^><**@");
//    await page.waitForTimeout(500);
//    const message = page.locator('text=We couldn\'t find anything matching your search.');
//    await expect(message).toBeVisible();
//    await page.waitForTimeout(1000);
//});

//TEST 5
//test('Verificar mensaje al escribir una palabra no existente en el campo de búsqueda', async ({ loginFixture }) => {
//    const page = loginFixture;
//    const mainBoardPage = new MainBoardPage(page);
//    await mainBoardPage.typeInSearch("sergioPuto");
//    await page.waitForTimeout(500);
//    const message = page.locator('text=We couldn\'t find anything matching your search.');
//    await expect(message).toBeVisible();
//    await page.waitForTimeout(1000);
//});

//TEST 6
//test('Verificar mensaje al escribir una cadena de 100 caracteres en el campo de búsqueda', async ({ loginFixture }) => {
//    const page = loginFixture;
//    const mainBoardPage = new MainBoardPage(page);
//    const longText = 'A'.repeat(100);
//    await mainBoardPage.typeInSearch(longText);
//    await page.waitForTimeout(500);
//    const message = page.locator('text=We couldn\'t find anything matching your search.');
//    await expect(message).toBeVisible();
//    await page.waitForTimeout(1000);
//});

//TEST 7
//test("Redirigir a la página de 'Búsqueda avanzada' en Trello", async ({ loginFixture }) => {
//    const page = loginFixture;
//    const mainBoardPage = new MainBoardPage(page);
//    await mainBoardPage.typeInSearch("");
//    await page.waitForTimeout(300);
//    const advancedSearchOption = page.locator('text="Advanced search"');
//    await expect(advancedSearchOption).toBeVisible();
//    await advancedSearchOption.click();
//    await expect(page).toHaveURL(/.*search.*/);
//    await page.waitForTimeout(1000);
//});

//TEST 8
//test("Realizar una búsqueda avanzada con filtros", async ({ loginFixture }) => {
//    const page = loginFixture;
//    const mainBoardPage = new MainBoardPage(page);
//    const advancedSearchPage = new AdvancedSearchPage(page);
//    await mainBoardPage.typeInSearch("T");
//    await page.waitForTimeout(300);
//    const advancedSearchOption = page.locator('text="Advanced search"');
//    await expect(advancedSearchOption).toBeVisible();
//    await advancedSearchOption.click();
//    await expect(page).toHaveURL(/.*search.*/);
//    await page.waitForTimeout(1000);
//    await advancedSearchPage.typeInSearch("TABLERO");
//    await page.waitForTimeout(300);
//    await advancedSearchPage.clickCardResultsButton();
//    await advancedSearchPage.clickLastWeekButton();
//    await page.waitForTimeout(300);
//    await advancedSearchPage.clickTrelloBasicsLink();
//    await expect(page).toHaveURL(/.*trello/);
//    await page.waitForTimeout(2000);
//});

//ESTE ES EL BUENO PARA ABRIR TABLEROS TEST 9 **************************************
//test('Seleccionar "TABLERO DE PRUEBA" desde el dropdown', async ({ loginFixture }) => {
//    const page = loginFixture;
//    const mainBoardPage = new MainBoardPage(page);
//    await mainBoardPage.typeInSearch("TABLERO");
//    await page.waitForTimeout(500);
//    await mainBoardPage.selectSuggestionByText("TABLERO DE PRUEBA");
//    await expect(page).toHaveURL(/trello\.com\/b\//, { timeout: 15000 });
//    await expect(page.getByText("TABLERO DE PRUEBA")).toBeVisible();
//    await page.waitForTimeout(2000);
//});

