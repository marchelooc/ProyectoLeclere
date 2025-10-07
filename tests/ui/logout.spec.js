import { test, expect } from "../../utils/fixtures.js";
import { BoardPage } from "../../pages/BoardPage.js";
import { LogoutPage } from "../../pages/LogoutPage.js";
import { Logger, screenshotPath } from "../../utils/helpers.js";

test("Verificar el cierre de sesión exitoso", async ({ loginFixture }) => {
  const page = loginFixture;
  const boardPage = new BoardPage(page);
  const logoutPage = new LogoutPage(page);

  try {
    Logger.info("Abrir menú de perfil");
    await boardPage.openProfileMenu();

    Logger.info("Seleccionar opción de cerrar sesión");
    await boardPage.clickLogout();

    Logger.info("Confirmar cierre de sesión");
    await logoutPage.confirmLogout();

    Logger.info("Verificar redirección a Trello");
    await expect(page).toHaveURL(/trello\.com/);

    Logger.info("Cierre de sesión correctamente");
  } catch (err) {
    Logger.error(`Error en test 'Cerrar sesión exitoso': ${err.message}`);
    await page.screenshot({ path: screenshotPath("error_logout") });
    throw err;
  }
});
