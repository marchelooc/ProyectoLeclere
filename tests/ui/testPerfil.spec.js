import { test, expect } from "../../utils/fixtures.js";
import { screenshotPath } from "../../utils/helpers.js";
import { MainBoardPage } from "../../pages/mainBoardPage.js";
import { ProfilePage } from "../../pages/profilePage.js";
import { SettingsProfilePage } from "../../pages/settingsProfilePage.js";
import { Logger } from "../../utils/helpers.js";

test("Cambiar el tema de Trello", async ({ loginFixture }) => {
    const page = loginFixture;
    Logger.info("Crear pagina de main");
    const mainBoardPage = new MainBoardPage(page);
    try {
    Logger.info("Verificar que la ventana del Main Board es visible");
    await mainBoardPage.isPageVisible();
    Logger.info("Hacer clic en el boton de perfil");
    await mainBoardPage.clickProfileMenuButton();
    Logger.info("Hacer clic en el boton de temas");
    await mainBoardPage.clickThemeSwitcherButton();
    Logger.info("Hacer clic en el boton de tema oscuro");
    await mainBoardPage.clickDarkThemeButton();
    Logger.info("Verificar que el tema sea oscuro");
    const backgroundColor = await page.evaluate(() => {return window.getComputedStyle(document.body).backgroundColor;});
    expect(backgroundColor).toBe('rgb(31, 31, 33)');
    Logger.info("Hacer clic en el boton de perfil");
    await mainBoardPage.clickProfileMenuButton();
    Logger.info("Hacer clic en el boton de perfil");
    await mainBoardPage.clickProfileMenuButton(); //tierdown
    Logger.info("Hacer clic en el boton de temas");
    await mainBoardPage.clickThemeSwitcherButton();
    Logger.info("Hacer clic en el boton de tema segun el sistema");
    await mainBoardPage.clickMatchSystemThemeButton();
    Logger.info("Verificar que el tema sea el del sistema");
    const backgroundColorAfterChange = await page.evaluate(() => {return window.getComputedStyle(document.body).backgroundColor;});
    expect(backgroundColorAfterChange).toBe('rgb(255, 255, 255)');
    Logger.info("Hacer clic en el boton de perfil");
    await mainBoardPage.clickProfileMenuButton();
    } catch (err) {
    await page.screenshot({ path: screenshotPath("Cambiar el tema de Trello")});
    throw err;
    Logger.error(err);
    }
});

test("Cambiar el username de Trello", async ({ loginFixture }) => {
    const page = loginFixture;
    Logger.info("Crear pagina de main y pagina de perfil");
    const mainBoardPage = new MainBoardPage(page);
    const profilePage = new ProfilePage(page);
    try {
    Logger.info("Verificar que la ventana del Main Board es visible");
    await mainBoardPage.isPageVisible();
    Logger.info("Hacer clic en el boton de perfil");
    await mainBoardPage.clickProfileMenuButton();
    Logger.info("Hacer clic en el boton de perfil y visibilidad");
    await mainBoardPage.clickProfileAndVisibilityButton();
    Logger.info("Verificar que la pagina de perfil sea visible");
    await profilePage.isPageVisible();
    Logger.info("Cambiar el username de Trello");
    await profilePage.typeUsername("consorciolecrere101");
    Logger.info("Hacer clic en el boton de guardar");
    await profilePage.clickSaveChangesButton();
    Logger.info("Verificar que el mensaje de guardado sea visible");
    await profilePage.isAlertMessageVisible();
    Logger.info("Cambiar el username de Trello");
    await profilePage.typeUsername("consorciolecrere");//tierdown
    Logger.info("Hacer clic en el boton de guardar");
    await profilePage.clickSaveChangesButton();
    Logger.info("Verificar que el mensaje de guardado sea visible");
    await profilePage.isAlertMessageVisible();
    } catch (err) {
    await page.screenshot({ path: screenshotPath("Cambiar el username de Trello")});
    throw err;
    Logger.error(err);
    }
});

test("Cambiar la biografía de Trello", async ({ loginFixture }) => {
    const page = loginFixture;
    Logger.info("Crear pagina de main y pagina de perfil");
    const mainBoardPage = new MainBoardPage(page);
    const profilePage = new ProfilePage(page);
    try {
    Logger.info("Verificar que la ventana del Main Board es visible");
    await mainBoardPage.isPageVisible();
    Logger.info("Hacer clic en el boton de perfil");
    await mainBoardPage.clickProfileMenuButton();
    Logger.info("Hacer clic en el boton de perfil y visibilidad");
    await mainBoardPage.clickProfileAndVisibilityButton();
    Logger.info("Verificar que la pagina de perfil sea visible");
    await profilePage.isPageVisible();
    Logger.info("Cambiar la biografía de Trello");
    await profilePage.typeBio("Esta es una biografia de prueba.");
    Logger.info("Hacer clic en el boton de guardar");
    await profilePage.clickSaveChangesButton();
    Logger.info("Verificar que el mensaje de guardado sea visible");
    await profilePage.isAlertMessageVisible();
    Logger.info("Cambiar la biografía de Trello");
    await profilePage.typeBio("");//tierdown
    Logger.info("Hacer clic en el boton de guardar");
    await profilePage.clickSaveChangesButton();
    Logger.info("Verificar que el mensaje de guardado sea visible");
    await profilePage.isAlertMessageVisible();
    } catch (err) {
    await page.screenshot({ path: screenshotPath("Cambiar la biografía de Trello")});
    throw err;
    Logger.error(err);
    }
});

test("Acceder a la seccion de Activity", async ({ loginFixture }) => {
    const page = loginFixture;
    Logger.info("Crear pagina de main");
    const mainBoardPage = new MainBoardPage(page);
    try {
    Logger.info("Verificar que la ventana del Main Board es visible");
    await mainBoardPage.isPageVisible();
    Logger.info("Hacer clic en el boton de perfil");
    await mainBoardPage.clickProfileMenuButton();
    Logger.info("Hacer clic en el boton de Activity y verificar la vista de Activity");
    await mainBoardPage.clickActivityButton();
    } catch (err) {
    await page.screenshot({ path: screenshotPath("Acceder a la seccion de Activity")});
    throw err;
    Logger.error(err);
    }
});

test("Acceder a la seccion de Cards", async ({ loginFixture }) => {
    const page = loginFixture;
    Logger.info("Crear pagina de main");
    const mainBoardPage = new MainBoardPage(page);
    try{
    Logger.info("Verificar que la ventana del Main Board es visible");
    await mainBoardPage.isPageVisible();
    Logger.info("Hacer clic en el boton de perfil");
    await mainBoardPage.clickProfileMenuButton();
    Logger.info("Hacer clic en el boton de Cards y verificar la vista de Cards");
    await mainBoardPage.clickCardsButton();
    } catch (err) {
    await page.screenshot({ path: screenshotPath("Acceder a la seccion de Cards")});
    throw err;
    Logger.error(err);
    }
});

test("Acceder y visualizar la seccion de Shortcuts", async ({ loginFixture }) => {
    const page = loginFixture;
    Logger.info("Crear pagina de main");
    const mainBoardPage = new MainBoardPage(page);
    try {
    Logger.info("Verificar que la ventana del Main Board es visible");
    await mainBoardPage.isPageVisible();
    Logger.info("Hacer clic en el boton de perfil");
    await mainBoardPage.clickProfileMenuButton();
    Logger.info("Hacer clic en el boton de Shortcuts y verificar la vista de Shortcuts");
    await mainBoardPage.clickShortcutsButton();
    } catch (err) {
    await page.screenshot({ path: screenshotPath("Acceder y visualizar la seccion de Shortcuts")});
    throw err;
    Logger.error(err);
    }
});

test("Acceder a configuraciones y desactivar las sugerencias", async ({ loginFixture }) => {
    const page = loginFixture;
    Logger.info("Crear pagina de main y pagina de configuraciones");
    const mainBoardPage = new MainBoardPage(page);
    const settingsProfilePage = new SettingsProfilePage(page);
    try {
    Logger.info("Verificar que la ventana del Main Board es visible");
    await mainBoardPage.isPageVisible();
    Logger.info("Hacer clic en el boton de perfil");
    await mainBoardPage.clickProfileMenuButton();
    Logger.info("Hacer clic en el boton de Configuraciones");
    await mainBoardPage.clickSettingsProfileButton();
    Logger.info("Verificar que la pagina de configuraciones sea visible");
    await settingsProfilePage.isPageVisible();
    Logger.info("Hacer clic en el boton de Desactivar sugerencias");
    await settingsProfilePage.clickDisableSuggestionsButton();
    Logger.info("Verificar que el mensaje de informacion sea visible");
    await settingsProfilePage.clickEnableSuggestionsButton();//tierdown
    } catch (err) {
    await page.screenshot({ path: screenshotPath("Acceder a configuraciones y desactivar las sugerencias")});
    throw err;
    Logger.error(err);
    }
});

test("Acceder a configuraciones y desmarcar todas las preferencias", async ({ loginFixture }) => {
    const page = loginFixture;
    Logger.info("Crear pagina de main y pagina de configuraciones");
    const mainBoardPage = new MainBoardPage(page);
    const settingsProfilePage = new SettingsProfilePage(page);
    try {
    Logger.info("Verificar que la ventana del Main Board es visible");
    await mainBoardPage.isPageVisible();
    Logger.info("Hacer clic en el boton de perfil");
    await mainBoardPage.clickProfileMenuButton();
    Logger.info("Hacer clic en el boton de Configuraciones");
    await mainBoardPage.clickSettingsProfileButton();
    Logger.info("Verificar que la pagina de configuraciones sea visible");
    await settingsProfilePage.isPageVisible();
    Logger.info("Hacer clic en el boton de Desmarcar preferencias");
    await settingsProfilePage.clickSelectNoneButton();
    Logger.info("Verificar que el mensaje de los cambios sea visible"); 
    await settingsProfilePage.isAlertMessageVisible();
    Logger.info("Hacer clic en el boton de Marcar preferencias");
    await settingsProfilePage.clickSelectAllButton();//tierdown
    Logger.info("Verificar que el mensaje de los cambios sea visible");
    await settingsProfilePage.isAlertMessageVisible();
    } catch (err) {
    await page.screenshot({ path: screenshotPath("Acceder a configuraciones y desmarcar todas las preferencias")});
    throw err;
    Logger.error(err);
    }
});
