import { test, expect } from "../../utils/fixtures.js";
import { screenshotPath } from "../../utils/helpers.js";
import { MainBoardPage } from "../../pages/mainBoardPage.js";
import { MyBoardsPage } from "../../pages/myBoardsPage.js";
import { MembersPage } from "../../pages/membersPage.js";
import { TemplatesPage } from "../../pages/templatesPage.js";
import { SettingsPage } from "../../pages/settingsPage.js";
import { Logger } from "../../utils/helpers.js";

test("Verificar que la ventana del Main Board es visible", async ({ loginFixture }) => {
    const page = loginFixture;
    Logger.info("Crear pagina de main");
    const mainBoardPage = new MainBoardPage(page);
    try {
    Logger.info("Verificar que la ventana del Main Board es visible");
    await mainBoardPage.isPageVisible();
    await expect(page).toHaveURL(/trello\.com/);
    await page.waitForTimeout(1000);
    } catch (err) {
    await page.screenshot({ path: screenshotPath(VentanaMainVisible)});
    throw err;
    Logger.error(err);
    }
});

test("Seleccionar la primera opción de 'Recently viewed'", async ({ loginFixture }) => {
    const page = loginFixture;
    Logger.info("Crear pagina de main");
    const mainBoardPage = new MainBoardPage(page);
    try {
    Logger.info("Verificar que la ventana del Main Board es visible");
    await mainBoardPage.isPageVisible();
    Logger.info("Hacer clic en la primera opcion de Recently viewed");
    await mainBoardPage.clickFirstWorkspace();
    Logger.info("Verificar que se redirija al tablero seleccionado");
    await expect(page).toHaveURL(/.*b/);
    } catch (err) {
    await page.screenshot({ path: screenshotPath(SeleccionarTableroDeRecentlyViewed)});
    throw err;
    Logger.error(err);
    }
});

test("Hacer clic en el botón 'Tableros' y acceder a un tablero", async ({ loginFixture }) => {
    const page = loginFixture;
    Logger.info("Crear pagina de main y pagina de tableros");
    const mainBoardPage = new MainBoardPage(page);
    const myBoardsPage = new MyBoardsPage(page);
    try {
    Logger.info("Verificar que la ventana del Main Board es visible");
    await mainBoardPage.isPageVisible();
    Logger.info("Hacer clic en el boton Tableros");
    await mainBoardPage.clickBoardsButton();
    Logger.info("Verificar que se redirija a la pagina de tableros");
    await expect(page).toHaveURL(/.*w/);
    await page.waitForTimeout(1000);
    Logger.info("Verificar que la pagina de tableros es visible");
    await myBoardsPage.isPageVisible();
    Logger.info("Hacer clic en la primera opcion de tableros");
    await myBoardsPage.clickTabLink();
    Logger.info("Verificar que se redirija al tablero seleccionado");
    await expect(page).toHaveURL(/.*b/);
    } catch (err) {
    await page.screenshot({ path: screenshotPath(IrATablerosYElegirUno)});
    throw err;
    Logger.error(err);
    }
});

test("Hacer clic en 'Ver los tableros cerrados'", async ({ loginFixture }) => {
    const page = loginFixture;
    Logger.info("Crear pagina de main y pagina de tableros");
    const mainBoardPage = new MainBoardPage(page);
    const myBoardsPage = new MyBoardsPage(page);
    try {
    Logger.info("Verificar que la ventana del Main Board es visible");
    await mainBoardPage.isPageVisible();
    Logger.info("Hacer clic en el boton Tableros");
    await mainBoardPage.clickBoardsButton();
    Logger.info("Verificar que se redirija a la pagina de tableros");
    await expect(page).toHaveURL(/.*w/);
    await page.waitForTimeout(1000);
    Logger.info("Verificar que la pagina de tableros es visible");
    await myBoardsPage.isPageVisible();
    Logger.info("Hacer clic en el boton 'Ver los tableros cerrados'");
    await myBoardsPage.clickClosedBoardsButton();
    Logger.info("Verificar que se muestren lostableros cerrados");
    await myBoardsPage.verifyClosedBoardsVisible();
    } catch (err) {
    await page.screenshot({ path: screenshotPath(BotonTablerosCerrados)});
    throw err;
    Logger.error(err);
    }
});

test("Hacer clic en la seccion de Inicio", async ({ loginFixture }) => {
    const page = loginFixture;
    Logger.info("Crear pagina de main");
    const mainBoardPage = new MainBoardPage(page);
    try {
    Logger.info("Verificar que la ventana del Main Board es visible");
    await mainBoardPage.isPageVisible();
    Logger.info("Hacer clic en el boton de Home");
    await mainBoardPage.clickHomeButton();
    Logger.info("Verificar que se redirija a la pagina de home");
    await expect(page).toHaveURL(/.trello/);
    } catch (err) {
    await page.screenshot({ path: screenshotPath(SeccionInicio)});
    throw err;
    Logger.error(err);
    }
});

test("Verificar la funcionalidad de agregar miembros al workspace", async ({ loginFixture }) => {
    const page = loginFixture;
    Logger.info("Crear pagina de main y pagina de miembros");
    const mainBoardPage = new MainBoardPage(page);
    const membersPage = new MembersPage(page);
    try {
    Logger.info("Verificar que la ventana del Main Board es visible");
    await mainBoardPage.isPageVisible();
    Logger.info("Hacer clic en el boton de Miembros");
    await mainBoardPage.clickMembersButton();
    Logger.info("Verificar que la pagina de miembros sea visible");
    await membersPage.isPageVisible();
    Logger.info("Hacer clic en el boton de agregar miembros");
    await membersPage.clickAddMembersButton();
    Logger.info("Llenar el campo de busqueda con un email");
    await membersPage.typeEmailOrName("simovaldez414@gmail.com");
    await page.keyboard.press("Enter");
    Logger.info("Enviar la solicitud de invitacion");
    await membersPage.clickSendButton();
    Logger.info("Verificar que el miembro invitado sea visible");
    await membersPage.isMemberNameVisible();
    Logger.info("Hacer clic en el boton de eliminar miembro");
    await membersPage.performTeardownActionsT15();
    } catch (err) {
    await page.screenshot({ path: screenshotPath(AgregarMiembros)});
    throw err;
    Logger.error(err);
    }
});

test("Crear un board usando el template de marketing", async ({ loginFixture }) => {
    const page = loginFixture;
    Logger.info("Crear pagina de main y pagina de templates");
    const mainBoardPage = new MainBoardPage(page);
    const templatesPage = new TemplatesPage(page);
    try {
    Logger.info("Verificar que la ventana del Main Board es visible");
    await mainBoardPage.isPageVisible();
    Logger.info("Hacer clic en el boton de Templates");
    await mainBoardPage.clickTemplateButton();
    Logger.info("Verificar que la pagina de templates sea visible");
    await templatesPage.isPageVisible();
    Logger.info("Hacer clic en el boton de Marketing");
    await templatesPage.clickMarketingLink();
    Logger.info("Hacer clic en el primer tablero de marketing");
    await templatesPage.clickTextLink();
    await page.waitForTimeout(1000);
    Logger.info("Hacer clic en el boton de usar template");
    await templatesPage.clickUseButton();
    await page.waitForTimeout(1000);
    Logger.info("Hacer clic en el espacio para poner titulo al tablero");
    await templatesPage.typeRandomTextInBoardTitle();
    await page.waitForTimeout(1000);
    Logger.info("Hacer clic en el boton de crear");
    await templatesPage.clickCreateButton();
    await page.waitForTimeout(1000);
    Logger.info("Verificar que se redirija al tablero creado");
    await expect(page).toHaveURL(/.*b/);
    await page.waitForTimeout(1000); //falta tierdown
    } catch (err) {
    await page.screenshot({ path: screenshotPath(CrearTableroUsandoTemplate)});
    throw err;
    Logger.error(err);
    }
});

test("Cambiar la visibilidad del Workspace", async ({ loginFixture }) => {
    const page = loginFixture;
    Logger.info("Crear pagina de main y pagina de settings");
    const mainBoardPage = new MainBoardPage(page);
    const settingsPage = new SettingsPage(page);
    try {
    Logger.info("Verificar que la ventana del Main Board es visible");
    await mainBoardPage.isPageVisible();
    Logger.info("Hacer clic en el boton de Settings");
    await mainBoardPage.clickSettingsButton();
    Logger.info("Verificar que la pagina de settings sea visible");
    await settingsPage.isPageVisible();
    Logger.info("Hacer clic en el boton de cambiar visibilidad");
    await settingsPage.clickChangeVisibilityButton();
    Logger.info("Hacer clic en el boton de visibilidad publica");
    await settingsPage.clickVisibilityPublicOption();
    Logger.info("Hacer clic en el boton de cerrar popover");
    await settingsPage.clickClosePopoverButton();
    await page.waitForTimeout(2000);
    Logger.info("Verificar que el texto de visibilidad de workspace sea visible");
    await settingsPage.isPrivateWorkspaceTextVisible();
    Logger.info("Hacer clic en el boton de cambiar visibilidad");
    await settingsPage.clickChangeVisibilityButton(); //tierdown
    Logger.info("Hacer clic en el boton de visibilidad privada");
    await settingsPage.clickVisibilityPrivateOption();
    Logger.info("Hacer clic en el boton de cerrar popover");
    await settingsPage.clickClosePopoverButton();
    Logger.info("Verificar que el texto de visibilidad de workspace sea visible");
    await settingsPage.isPrivateWorkspaceTextVisible();
    await page.waitForTimeout(2000);
    } catch (err) {
    await page.screenshot({ path: screenshotPath(CambiarVisibilidad)});
    throw err;
    Logger.error(err);
    }
});
