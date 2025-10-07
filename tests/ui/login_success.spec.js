import { test, expect } from "../../utils/fixtures.js";
import { BoardPage } from "../../pages/BoardPage.js";
import { Logger, screenshotPath } from "../../utils/helpers.js";

test("Verificar el acceso exitoso al board de Trello", async ({ loginFixture }) => {
  const page = loginFixture;
  const boardPage = new BoardPage(page);

  try {
    Logger.info("Verificar que la URL corresponde al board del usuario");
    await expect(page).toHaveURL(/trello\.com(\/u\/[^\/]+\/boards)?/);

    Logger.info("Acceso al board verificado correctamente");
  } catch (err) {
    Logger.error(`Error en test 'Login exitoso': ${err.message}`);
    await page.screenshot({ path: screenshotPath("error_login_success") });
    throw err;
  }
});
