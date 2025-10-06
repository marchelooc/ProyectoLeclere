// @ts-check
import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, ".env") });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: "./tests",
  //reporter: "html",
  reporter: [["line"], ["allure-playwright"]],
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: false,
  use: {
    baseURL: process.env.BASE_URL || "https://trello.com/",
    headless: process.env.HEADLESS !== "true",
    trace: "on-first-retry",
    permissions: ['clipboard-read', 'clipboard-write'],
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
      testIgnore: [
        "tests/ui/configCard.spec.js",
        "tests/ui/addCard.spec.js",
      ],
    },
    {
      name: "chromium-es", // español solo para los test especificados
      testMatch: [
        "tests/ui/configCard.spec.js",
        "tests/ui/addCard.spec.js",
      ],
      use: {
        ...devices["Desktop Chrome"],
        locale: "es-ES",
      },
    },
  ],
});