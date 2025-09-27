// tests/prueba_login.spec.js
import { test, expect } from "../utils/fixtures.js";
import { BoardPage } from "../pages/BoardPage.js";
import { LogoutPage } from "../pages/LogoutPage.js";

test("Precondición: login exitoso", async ({ loginFixture }) => {
  const page = loginFixture;
  const boardPage = new BoardPage(page);
  const logoutPage = new LogoutPage(page);

  // Ya estás logueado aquí gracias al fixture
  await boardPage.openProfileMenu();
  await boardPage.clickLogout();
  await logoutPage.confirmLogout();

  await expect(page).toHaveURL(/trello\.com/);
});
