import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage.js";
import users from "../../data/users.json" assert { type: "json" };
import { Logger, screenshotPath } from "../../utils/helpers.js"; 

test("Verificar que correo incluya @", async ({ page }) => {
  const loginPage = new LoginPage(page);
  try {
    Logger.info("Ir a la página de login");
    await loginPage.gotoLogin();

    Logger.info("Ingresar correo sin arroba");
    await loginPage.enterEmailWhitoutArroba(users.emailWhitoutArroba.email);

    Logger.info("Verificar mensaje de error por falta de '@'");
    await expect(loginPage.emailWhitoutArrobaError).toContainText(
      "Email address must contain text before and after an '@' symbol", { timeout: 29000 }
    );

    Logger.info("Prueba completada correctamente");
  } catch (err) {
    Logger.error(`Error en test 'Verificar que correo incluya @': ${err.message}`);
    await page.screenshot({ path: screenshotPath("error_correo_sin_arroba") });
    throw err;
  }
});

test("Verificar que el campo correo no permita caracteres especiales", async ({ page }) => {
  const loginPage = new LoginPage(page);
  try {
    Logger.info("Ir a la página de login");
    await loginPage.gotoLogin();

    Logger.info("Ingresar correo con caracteres especiales");
    await loginPage.enterCharactesSpecial(users.characterEmail.email);

    Logger.info("Verificar mensaje de error");
    await expect(loginPage.emailWhitoutArrobaError).toContainText(
      "Email address must contain text before and after an '@' symbol", { timeout: 29000 }
    );

    Logger.info("Prueba completada correctamente");
  } catch (err) {
    Logger.error(`Error en test 'Correo con caracteres especiales': ${err.message}`);
    await page.screenshot({ path: screenshotPath("error_caracteres_especiales") });
    throw err;
  }
});

test("Verificar que el campo correo no permita espacios vacíos", async ({ page }) => {
  const loginPage = new LoginPage(page);
  try {
    Logger.info("Ir a la página de login");
    await loginPage.gotoLogin();

    Logger.info("Ingresar correo con espacios vacíos");
    await loginPage.enterEmptySpaces(users.emptyEmail.email);

    Logger.info("Verificar mensaje de error por espacios vacíos");
    await expect(loginPage.emptyEmailError).toContainText(
      "Enter an email address", { timeout: 29000 }
    );

    Logger.info("Prueba completada correctamente");
  } catch (err) {
    Logger.error(`Error en test 'Correo con espacios vacíos': ${err.message}`);
    await page.screenshot({ path: screenshotPath("error_espacios_vacios") });
    throw err;
  }
});

test("Verificar que correo sea obligatorio", async ({ page }) => {
  const loginPage = new LoginPage(page);
  try {
    Logger.info("Ir a la página de login");
    await loginPage.gotoLogin();

    Logger.info("Intentar login sin correo");
    await loginPage.login("", "");

    Logger.info("Verificar mensaje de error de campo obligatorio");
    await expect(loginPage.emptyEmailError).toHaveText("Enter an email address");

    Logger.info("Prueba completada correctamente");
  } catch (err) {
    Logger.error(`Error en test 'Correo obligatorio': ${err.message}`);
    await page.screenshot({ path: screenshotPath("error_correo_obligatorio") });
    throw err;
  }
});

test("Verificar que el campo contraseña sea obligatorio", async ({ page }) => {
  const loginPage = new LoginPage(page);
  try {
    Logger.info("Ir a la página de login");
    await loginPage.gotoLogin();

    Logger.info("Intentar login sin contraseña");
    await loginPage.login(process.env.TRELLO_EMAIL, "");

    Logger.info("Verificar mensaje de error de contraseña obligatoria");
    await expect(loginPage.emptyPasswordError).toHaveText("Enter your password");

    Logger.info("Prueba completada correctamente");
  } catch (err) {
    Logger.error(`Error en test 'Contraseña obligatoria': ${err.message}`);
    await page.screenshot({ path: screenshotPath("error_contrasena_obligatoria") });
    throw err;
  }
});

test("Verificar que correo no válido sea rechazado", async ({ page }) => {
  const loginPage = new LoginPage(page);
  try {
    Logger.info("Ir a la página de login");
    await loginPage.gotoLogin();

    Logger.info("Ingresar correo no válido");
    await loginPage.enterInvalidEmail(users.invalidEmail.email);

    Logger.info("Verificar mensaje de error");
    await expect(loginPage.invalidEmailError).toContainText(
      "Please enter a valid email address", { timeout: 29000 }
    );

    Logger.info("Prueba completada correctamente");
  } catch (err) {
    Logger.error(`Error en test 'Correo no válido': ${err.message}`);
    await page.screenshot({ path: screenshotPath("error_correo_invalido") });
    throw err;
  }
});

test("Verificar que no se pueda iniciar sesión con contraseña incorrecta", async ({ page }) => {
  const loginPage = new LoginPage(page);
  try {
    Logger.info("Ir a la página de login");
    await loginPage.gotoLogin();

    Logger.info("Intentar login con contraseña incorrecta");
    await loginPage.login(process.env.TRELLO_EMAIL, users.invalidPassword.password);

    Logger.info("Verificar mensaje de error por credenciales incorrectas");
    await expect(loginPage.errorMessage).toContainText("Incorrect email address and / or password");

    Logger.info("Prueba completada correctamente");
  } catch (err) {
    Logger.error(`Error en test 'Contraseña incorrecta': ${err.message}`);
    await page.screenshot({ path: screenshotPath("error_contrasena_incorrecta") });
    throw err;
  }
});
