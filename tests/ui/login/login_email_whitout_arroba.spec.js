import { test, expect } from "@playwright/test";
import { LoginPage } from "../../../pages/LoginPage.js";
import users from "../../../data/users.json" assert { type: "json" };

test("Verificar que correo incluya @", async ({ page }) => {   
    const loginPage = new LoginPage(page);

    await loginPage.gotoLogin();
    await loginPage.enterEmailWhitoutArroba(users.emailWhitoutArroba.email);

    await expect(loginPage.emailWhitoutArrobaError).toContainText(
        "Email address must contain text before and after an '@' symbol", { timeout: 29000 }
    );


});