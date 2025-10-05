import { test, expect } from "@playwright/test";
import { LoginPage } from "../../../pages/LoginPage.js";
import users from "../../../data/users.json" assert { type: "json" };

test("Verificar que no se pueda iniciar sesion con contraseña incorrecta", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.gotoLogin();
  await loginPage.login(process.env.TRELLO_EMAIL, users.invalidPassword.password);
  await expect(loginPage.errorMessage).toContainText(
    "Incorrect email address and / or password"
  );
});
