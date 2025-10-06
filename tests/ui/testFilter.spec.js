import { test, expect } from "../../utils/fixtures.js";
import { screenshotPath } from "../../utils/helpers.js";
import { MainBoardPage } from "../../pages/mainBoardPage.js";
import { AdvancedSearchPage } from "../../pages/advancedSearchPage.js";
import { Logger } from "../../utils/helpers.js";

test('Verificar que el filtro de busqueda sea visible', async ({ loginFixture }) => {
    const page = loginFixture;
    Logger.info("Crear pagina de main");
    const mainBoardPage = new MainBoardPage(page);
    Logger.info("Crea el filtro de busqueda");
    const searchInput = page.locator(mainBoardPage.searchInput);
    try {
    Logger.info("Verificar que el filtro de busqueda sea visible");    
    await searchInput.waitFor({ state: 'visible', timeout: 10000 });
    await expect(searchInput).toBeVisible();
    } catch (err) {
    await page.screenshot({ path: screenshotPath(FiltroEsVisible)});
    throw err;
    Logger.error(err);
    }
});

test("Verificar la busqueda con el campo vacio", async ({ loginFixture }) => {
    const page = loginFixture;
    Logger.info("Crear pagina de main");
    const mainBoardPage = new MainBoardPage(page);
    Logger.info("Crea el filtro de busqueda");
    const searchInput = page.locator(mainBoardPage.searchInput);
    try {
    Logger.info("Verificar que el filtro de busqueda sea visible");    
    await searchInput.waitFor({ state: "visible", timeout: 10000 });
    Logger.info("Hacer clic en el filto de busqueda");
    await searchInput.click(); 
    await searchInput.fill("");
    await page.keyboard.press("Enter");
    Logger.info("Verificar que el filtro de busqueda no tenga texto");
    await expect(searchInput).toHaveValue("");
    } catch (err) {
    await page.screenshot({ path: screenshotPath(BusquedaVacia)});
    throw err;
    Logger.error(err);
    }
});

test('Verificar mensaje al escribir numeros en el campo de busqueda', async ({ loginFixture }) => {
    const page = loginFixture;
    Logger.info("Crear pagina de main");
    const mainBoardPage = new MainBoardPage(page);
    try {
    Logger.info("LLenar con numeros el filtro de busqueda");    
    await mainBoardPage.typeInSearch("123456790");
    await page.waitForTimeout(2000);
    Logger.info("Verificar que el mensaje resultante de la busqueda sea visible");
    const message = page.locator('text=We couldn\'t find anything matching your search.');
    await expect(message).toBeVisible();
    } catch (err) {
    await page.screenshot({ path: screenshotPath(BusquedaDeNumeros)});
    throw err;
    Logger.error(err);
    }
});

test('Verificar mensaje al escribir caracteres especiales en el campo de búsqueda', async ({ loginFixture }) => {
    const page = loginFixture;
    Logger.info("Crear pagina de main");
    const mainBoardPage = new MainBoardPage(page);
    try {
    Logger.info("LLenar el filtro de busqueda con caracteres especiales"); 
    await mainBoardPage.typeInSearch("@#$%%^!^><**@");
    await page.waitForTimeout(2000);
    Logger.info("Verificar que el mensaje resultante de la busqueda sea visible");
    const message = page.locator('text=We couldn\'t find anything matching your search.');
    await expect(message).toBeVisible();
    } catch (err) {
    await page.screenshot({ path: screenshotPath(BusquedaDeCaracteresEspeciales)});
    throw err;
    Logger.error(err);
    }
});

test('Verificar mensaje al escribir una palabra no existente en el campo de búsqueda', async ({ loginFixture }) => {
    const page = loginFixture;
    Logger.info("Crear pagina de main");
    const mainBoardPage = new MainBoardPage(page);
    try {
    Logger.info("Escribir en el filtro de busqueda una palabra no existente");
    await mainBoardPage.typeInSearch("Otorrinolaringologo");
    await page.waitForTimeout(2000);
    Logger.info("Verificar que el mensaje resultante de la busqueda sea visible");
    const message = page.locator('text=We couldn\'t find anything matching your search.');
    await expect(message).toBeVisible();
    } catch (err) {
    await page.screenshot({ path: screenshotPath(BusquedaDePalabraNoExistente)});
    throw err;
    Logger.error(err);
    }
});

test('Verificar mensaje al escribir una cadena de 100 caracteres en el campo de búsqueda', async ({ loginFixture }) => {
    const page = loginFixture;
    Logger.info("Crear pagina de main");
    const mainBoardPage = new MainBoardPage(page);
    try {
    Logger.info("Escribir en el filtro de busqueda una cadena de 100 caracteres");
    const longText = 'A'.repeat(100);
    await mainBoardPage.typeInSearch(longText);
    await page.waitForTimeout(2000);
    Logger.info("Verificar que el mensaje resultante de la busqueda sea visible");
    const message = page.locator('text=We couldn\'t find anything matching your search.');
    await expect(message).toBeVisible();
    } catch (err) {
    await page.screenshot({ path: screenshotPath(BusquedaDeCadenaDe100Caracteres)});
    throw err;
    Logger.error(err);
    }
});

test("Redirigir a la página de 'Búsqueda avanzada' en Trello", async ({ loginFixture }) => {
    const page = loginFixture;
    Logger.info("Crear pagina de main");
    const mainBoardPage = new MainBoardPage(page);
    try {
    Logger.info("Dejar el filtro de busqueda en blanco");   
    await mainBoardPage.typeInSearch("");
    await page.waitForTimeout(300);
    Logger.info("Ver que se muestre en la pantalla el texto de busqueda avanzada");
    const advancedSearchOption = page.locator('text="Advanced search"');
    await expect(advancedSearchOption).toBeVisible();
    Logger.info("Hacer clic en el texto de busqueda avanzada");
    await advancedSearchOption.click();
    Logger.info("Verificar que se redirija a la pagina de busqueda avanzada");
    await expect(page).toHaveURL(/.*search/);
    } catch (err) {
    await page.screenshot({ path: screenshotPath(IrABusquedaAvanzada)});
    throw err;
    Logger.error(err);
    }
});

test("Realizar una búsqueda avanzada con filtros", async ({ loginFixture }) => {
    const page = loginFixture;
    Logger.info("Crear pagina de main y pagina de busqueda avanzada");
    const mainBoardPage = new MainBoardPage(page);
    const advancedSearchPage = new AdvancedSearchPage(page);
    try {
    Logger.info("Escribir en el filtro de busqueda");   
    await mainBoardPage.typeInSearch("TAB");
    await page.waitForTimeout(300);
    Logger.info("Ver que se muestre en la pantalla el texto de busqueda avanzada");
    const advancedSearchOption = page.locator('text="Advanced search"');
    await expect(advancedSearchOption).toBeVisible();
    Logger.info("Hacer clic en el texto de busqueda avanzada");
    await advancedSearchOption.click();
    Logger.info("Verificar que se redirija a la pagina de busqueda avanzada");
    await expect(page).toHaveURL(/.*search/);
    await page.waitForTimeout(500);
    Logger.info("Escribir en el filtro de busqueda avanzada");
    await advancedSearchPage.typeInSearch("TABLERO");
    await page.waitForTimeout(300);
    Logger.info("Seleccionar el filtro de ultima actualizacion");
    await advancedSearchPage.clickCardResultsButton();
    Logger.info("Seleccionar el filtro de ultima semana");
    await advancedSearchPage.clickLastWeekButton();
    await page.waitForTimeout(300);
    Logger.info("Seleccionar la primera opcion de los resultados de busqueda");
    await advancedSearchPage.clickTrelloBasicsLink();
    Logger.info("Verificar que se redirija al tablero seleccionado");
    await expect(page).toHaveURL(/.*trello/);
    } catch (err) {
    await page.screenshot({ path: screenshotPath(BusquedaAvanzadaConFiltros)});
    throw err;
    Logger.error(err);
    }
});

test('Seleccionar "TABLERO DE PRUEBA" desde el dropdown', async ({ loginFixture }) => {
    const page = loginFixture;
    Logger.info("Crear pagina de main");
    const mainBoardPage = new MainBoardPage(page);
    try {
    Logger.info("Escribir en el filtro de busqueda"); 
    await mainBoardPage.typeInSearch("TABLERO");
    await page.waitForTimeout(500);
    Logger.info("Seleccionar la opcion de TABLERO DE PRUEBA");
    await mainBoardPage.selectSuggestionByText("TABLERO DE PRUEBA");
    Logger.info("Verificar que se redirija al tablero seleccionado");
    await expect(page).toHaveURL(/trello\.com\/b\//, { timeout: 15000 });
    await expect(page.getByText("TABLERO DE PRUEBA")).toBeVisible();
    } catch (err) {
    await page.screenshot({ path: screenshotPath(SeleccionarTablero)});
    throw err;
    Logger.error(err);
    }
});