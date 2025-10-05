import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import dotenv from "dotenv";

dotenv.config();

export const test = base.extend({
  loginFixture: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await loginPage.gotoLogin();
    await loginPage.login(process.env.TRELLO_EMAIL, process.env.TRELLO_PASSWORD);
    await use(page);
  },
});

export const expect = base.expect;