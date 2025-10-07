// Usa require() en lugar de import
const { chromium } = require('@playwright/test');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log('🪪 Inicia sesión manualmente en Trello...');
  await page.goto('https://trello.com/login');

  // Espera hasta que llegue al tablero
  await page.waitForURL('**/boards', { timeout: 0 });

  // Guarda el estado de la sesión
  await context.storageState({ path: 'storageState.json' });
  console.log('✅ Sesión guardada en storageState.json');

  await browser.close();
})();
