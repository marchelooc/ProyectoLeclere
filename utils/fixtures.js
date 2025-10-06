// fixtures/fixtures.js
import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/loginPage.js";
import { BoardPage } from "../pages/boardPage.js";
import dotenv from "dotenv";

dotenv.config();

export const test = base.extend({
  loginFixture: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotoLogin();
    await loginPage.login(
      process.env.TRELLO_EMAIL,
      process.env.TRELLO_PASSWORD
    );
    await page.waitForURL('https://trello.com/u/consorciolecrere/boards', { timeout: 15000 });
    await page.waitForSelector('[data-testid="create-board-tile"]', { timeout: 10000 });
    await use(page);
  },
  createFixture: async ({ loginFixture }, use, testInfo) => {
    testInfo.setTimeout(60000);
    const boardPage = new BoardPage(loginFixture);
    const tituloTablero = await boardPage.createBoard();
    await use(loginFixture);
    //await boardPage.delete(tituloTablero)
  },

});

export const expect = base.expect;
