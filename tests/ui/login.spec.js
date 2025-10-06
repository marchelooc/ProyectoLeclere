// // tests/login.spec.js
// import { test } from "@playwright/test";
// import { LoginPage } from "../pages/LoginPage.js";
// import { BoardPage } from "../pages/BoardPage.js";
// import { LogoutPage } from "../pages/LogoutPage.js";
// import dotenv from "dotenv";

// dotenv.config();

// test("Login y logout en Trello", async ({ page }) => {
//   const loginPage = new LoginPage(page);
//   const boardPage = new BoardPage(page);
//   const logoutPage = new LogoutPage(page);

//   // Login
//   await loginPage.gotoLogin();
//   await loginPage.login(process.env.TRELLO_EMAIL, process.env.TRELLO_PASSWORD);

//   // Logout
//   await boardPage.openProfileMenu();
//   await boardPage.clickLogout();

//   // Confirmar logout en Atlassian
//   await logoutPage.confirmLogout();
// });
