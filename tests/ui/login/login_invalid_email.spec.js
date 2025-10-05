import { test, expect } from "@playwright/test";
import { LoginPage } from "../../../pages/LoginPage.js";
import users from "../../../data/users.json" assert { type: "json" };

test("Verificar que correo no valido sea rechazado", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.gotoLogin();
  await loginPage.enterInvalidEmail(users.invalidEmail.email);

    await expect(loginPage.invalidEmailError).toContainText(
        "Please enter a valid email address", { timeout: 29000 }
    );
});


