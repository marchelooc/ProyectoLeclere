import { test, expect } from "@playwright/test";
import { LoginPage } from "../../../pages/LoginPage.js";

test("Verificar que el campo correo no permita espacios vacios", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.gotoLogin();
  await loginPage.enterEmptySpaces("   ");
  await expect(loginPage.emptyEmailError).toHaveText(
    "Enter an email address"
  );
});
