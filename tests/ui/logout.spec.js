import { test, expect } from "../../utils/fixtures.js";
import { BoardPage } from "../../pages/BoardPage.js";
import { LogoutPage } from "../../pages/LogoutPage.js";

test("Verificar el cierre de sesion exitoso", async ({ loginFixture }) => {
  const page = loginFixture;
  const boardPage = new BoardPage(page);
  const logoutPage = new LogoutPage(page);

  await boardPage.openProfileMenu();
  await boardPage.clickLogout();
  await logoutPage.confirmLogout();

  await expect(page).toHaveURL(/trello\.com/);
});
