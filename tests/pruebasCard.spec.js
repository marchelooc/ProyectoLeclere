import { test, expect } from "../utils/fixtures.js";
const { TrelloCard } = require('../components/card.component.js');
import { CardPage } from "../pages/cardPage.js";

/*
test("añadir nuevas tarjetas", async ({ loginFixture }) => {
  const page = loginFixture;
  const cardPage = new CardPage(page);
  await page.waitForTimeout(4000);
  await cardPage.gotoCardPage()
  await cardPage.addCard("Mi primera tarjeta", "2");
  await cardPage.addCard("Mi segunda tarjeta", "PARA PRUEBA");
});
*/
/*
test("editar una tarjeta", async ({ loginFixture }) => {
  const page = loginFixture;
  const cardPage = new CardPage(page);
  await page.waitForTimeout(4000);
  await cardPage.gotoCardPage()
  await cardPage.editCard("HOLA", "PARA PRUEBA");

  //await cardPage.clickQuickCardAction("quick-card-editor-open-card");   // Abrir tarjeta
  //await cardPage.editCard("HOLA", "PARA PRUEBA");
  //await cardPage.clickQuickCardAction("quick-card-editor-edit-labels"); // Editar etiquetas
  //await cardPage.clickQuickCardAction("quick-card-editor-change-members"); // Cambiar miembros

  //await cardPage.cardActionEditLabels("green")
  await cardPage.cardActionEditLabels({ color: "verde" });
  await cardPage.cardActionEditLabels({ color: "verde", title: "PERO" });
  await cardPage.cardActionEditLabels({ color: "rojo" });
  await cardPage.cardActionEditLabels({ color: "amarillo" });
  await page.waitForTimeout(4000);
});
*/

/*
test("Comentar en una tarjeta", async ({ loginFixture }) => {
    const page = loginFixture;
    const boardPage = new BoardPage(page);
    const logoutPage = new LogoutPage(page);
    await page.waitForTimeout(4000);
    await page.goto('https://trello.com/b/OByrjFgx/tablerotest');
    await page.waitForTimeout(4000);
  // Ya estás logueado aquí gracias al fixture
    const card = new TrelloCard(page, 'HOLA');
    await card.card.waitFor({ state: 'visible' });
    await card.openCard();
    await card.descriptionEditor.waitFor({ state: 'visible' });
    await card.addDescription('Nueva descripción de prueba');
});
*/