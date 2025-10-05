import { test, expect } from "@playwright/test";
import { LoginPage } from "../../../pages/LoginPage.js";

test("Verificar que el campo de contraseña sea obligatorio y no permita espacios vacios", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.gotoLogin();
  await loginPage.login(process.env.TRELLO_EMAIL, ""); 
  await expect(loginPage.emptyPasswordError).toHaveText("Enter your password");
});

