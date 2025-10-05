// @ts-check
import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  //fullyParallel: true,
  reporter: 'html',
  timeout: 30000,
    expect: {
        timeout: 5000
    },
  use: {
    baseURL: process.env.BASE_URL || 'https://trello.com/',
    headless: process.env.HEADLESS !== 'true',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});