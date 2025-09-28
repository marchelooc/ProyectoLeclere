const { test, expect } = require('@playwright/test');
const { TrelloCard } = require('../components/card.component');

test('Agregar descripción y comentario a una card', async ({ page }) => {
    await page.goto('https://trello.com/b/yWvvlkCD/iloveyou-nombre-de-la-app'); // tu board

    const card = new TrelloCard(page, 'asdfasdf');
    await card.open();
    await card.addDescription('Nueva descripción de prueba');
    
    //await card.addComment('Este es un comentario automático');
    //const log = await card.getActivityLog();
    //expect(log.some(entry => entry.includes('comentario automático'))).toBeTruthy();
});
