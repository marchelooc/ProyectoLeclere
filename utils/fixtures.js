// fixtures/fixtures.js
import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import dotenv from "dotenv";

dotenv.config();

export const test = base.extend({
  loginFixture: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    // ir al login
    await loginPage.gotoLogin();

    // loguearse con credenciales de .env
    await loginPage.login(process.env.TRELLO_EMAIL, process.env.TRELLO_PASSWORD);

    // entregar la página ya logueada al test
    await page.waitForURL('https://trello.com/u/consorciolecrere/boards', { timeout: 15000 });
    await page.waitForSelector('[data-testid="create-board-tile"]', { timeout: 10000 });
    await use(page);
  },
});

export const expect = base.expect;
