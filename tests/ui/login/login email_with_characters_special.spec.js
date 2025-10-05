import { test, expect } from "@playwright/test";
import { LoginPage } from "../../../pages/LoginPage.js";

test("Verificar que el campo correo no permita caracteres especiales", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.gotoLogin();
  await loginPage.enterCharactesSpecial("#####$$$$$");
  await expect(loginPage.emailWhitoutArrobaError).toContainText(
        "Email address must contain text before and after an '@' symbol", { timeout: 29000 }
    );
});
