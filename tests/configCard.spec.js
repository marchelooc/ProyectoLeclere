import { test, expect } from "../utils/fixtures.js";
const { TrelloCard } = require('../components/card.component.js');
import { CardPage } from "../pages/cardPage.js";

/*
test("editar etiquetas de una card", async ({ loginFixture }) => {
  const page = loginFixture;
  const cardPage = new CardPage(page);
  await page.waitForTimeout(4000);
  await cardPage.gotoCardPage()
  await cardPage.editCard("HOLA", "PARA PRUEBA");
  await cardPage.cardActionEditLabels({ color: "verde" });
  await cardPage.cardActionEditLabels({ color: "verde", title: "PERO" });
  await cardPage.cardActionEditLabels({ color: "rojo" });
  await cardPage.cardActionEditLabels({ color: "amarillo" });
  await cardPage.closeDialogCard()
  await page.waitForTimeout(4000);
});

test("crear etiquetas para una card", async ({ loginFixture }) => {
  const page = loginFixture;
  const cardPage = new CardPage(page);
  await page.waitForTimeout(4000);
  await cardPage.gotoCardPage()
  await cardPage.editCard("HOLA", "PARA PRUEBA");
  await cardPage.cardActionAddLabel({ color: "green", title: "nombre de la etiqueta" });
  await cardPage.closeDialogCard()
});
*


test("opcion de daltonicos para etiquetas para una card", async ({ loginFixture }) => {
  const page = loginFixture;
  const cardPage = new CardPage(page);
  await page.waitForTimeout(4000);
  await cardPage.gotoCardPage()
  await cardPage.editCard("HOLA", "PARA PRUEBA");
  await cardPage.cardActionColorBlindMode()
  await cardPage.closeDialogCard()
});



test("editar miembros de una card", async ({ loginFixture }) => {
  const page = loginFixture;
  const cardPage = new CardPage(page);
  await page.waitForTimeout(4000);
  await cardPage.gotoCardPage()
  await cardPage.editCard("HOLA", "PARA PRUEBA");
  await cardPage.cardActionEditMembers("Marcelo Ortuño Carreño")
  await cardPage.closeDialogCard()
});


test("archivar una card", async ({ loginFixture }) => {
  const page = loginFixture;
  const cardPage = new CardPage(page);
  await page.waitForTimeout(4000);
  await cardPage.gotoCardPage()
  await cardPage.editCard("Tarjeta de prueba", "2");
  await cardPage.storeCard();
});

test("añadir recordatorio a una card", async ({ loginFixture }) => {
  const page = loginFixture;
  const cardPage = new CardPage(page);
  await page.waitForTimeout(4000);
  await cardPage.gotoCardPage()
  await cardPage.editCard("HOLA", "PARA PRUEBA");
  await cardPage.cardActionEditReminder('15 minutos antes')
  await cardPage.cardActionEditReminder('1 hora antes')
});

test("editar fechas de vencimiento de una card", async ({ loginFixture }) => {
  const page = loginFixture;
  const cardPage = new CardPage(page);
  await page.waitForTimeout(4000);
  await cardPage.gotoCardPage()
  await cardPage.editCard("HOLA", "PARA PRUEBA");
  await cardPage.cardActionEditDates('10/10/2025','11/11/2025');
});

test("clonar una card", async ({ loginFixture }) => {
  const page = loginFixture;
  const cardPage = new CardPage(page);
  await page.waitForTimeout(4000);
  await cardPage.gotoCardPage()
  await cardPage.editCard("HOLA", "PARA PRUEBA");
  await cardPage.cardActionClone("2")
});
*/

test("copiar link de una card", async ({ loginFixture }) => {
  const page = loginFixture;
  const cardPage = new CardPage(page);
  await page.waitForTimeout(4000);
  await cardPage.gotoCardPage()
  await cardPage.editCard("HOLA", "PARA PRUEBA");
  await cardPage.cardActionCopyLink()
  await page.waitForTimeout(4000);
});
/*
test("mover una card a otra lista", async ({ loginFixture }) => {
  const page = loginFixture;
  const cardPage = new CardPage(page);
  await page.waitForTimeout(4000);
  await cardPage.gotoCardPage()
});
*/
