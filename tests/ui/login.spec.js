import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage.js";
import users from "../../data/users.json" assert { type: "json" };

test("Verificar que correo incluya @", async ({ page }) => {   
    const loginPage = new LoginPage(page);

    await loginPage.gotoLogin();
    await loginPage.enterEmailWhitoutArroba(users.emailWhitoutArroba.email);
    await expect(loginPage.emailWhitoutArrobaError).toContainText(
        "Email address must contain text before and after an '@' symbol", { timeout: 29000 }
    );
});

test("Verificar que el campo correo no permita caracteres especiales", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.gotoLogin();
  await loginPage.enterCharactesSpecial(users.characterEmail.email);
  await expect(loginPage.emailWhitoutArrobaError).toContainText(
        "Email address must contain text before and after an '@' symbol", { timeout: 29000 }
    );
});

test("Verificar que el campo correo no permita espacios vacios", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.gotoLogin();
  await loginPage.enterEmptySpaces(users.emptyEmail.email);
  await expect(loginPage.emptyEmailError).toContainText(
    "Enter an email address", { timeout: 29000 }
  );
});

test("Verificar que correo sea obligatorio", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.gotoLogin();
  await loginPage.login("", "");
  await expect(loginPage.emptyEmailError).toHaveText(
    "Enter an email address"
  );
});

test("Verificar que el campo contraseña sea obligatorio", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.gotoLogin();
  await loginPage.login(process.env.TRELLO_EMAIL, ""); 
  await expect(loginPage.emptyPasswordError).toHaveText("Enter your password");
});

test("Verificar que correo no valido sea rechazado", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.gotoLogin();
  await loginPage.enterInvalidEmail(users.invalidEmail.email);

    await expect(loginPage.invalidEmailError).toContainText(
        "Please enter a valid email address", { timeout: 29000 }
    );
});

test("Verificar que no se pueda iniciar sesion con contraseña incorrecta", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.gotoLogin();
  await loginPage.login(process.env.TRELLO_EMAIL, users.invalidPassword.password);
  await expect(loginPage.errorMessage).toContainText(
    "Incorrect email address and / or password"
  );
});
