import { test, expect } from "@playwright/test";
import { LoginPage } from "../../../pages/LoginPage.js";

test("Verificar que correo sea obligatorio", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.gotoLogin();
  await loginPage.login("", "");
  await expect(loginPage.emptyEmailError).toHaveText(
    "Enter an email address"
  );
});
