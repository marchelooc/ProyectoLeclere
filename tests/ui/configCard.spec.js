import { test, expect } from "../../utils/fixtures.js";
import { CardPage } from "../../pages/cardPage.js";
import CARDS from "../../data/cardsInfo.json";
import LABELS from "../../data/cardsLabel.json";
import DATES from "../../data/cardsDates.json";

//helper papu
async function setupCardTest(loginFixture, cardTitle = "HOLA", cardDesc = "PARA PRUEBA") {
  const page = loginFixture;
  const cardPage = new CardPage(page);
  await page.waitForTimeout(6000); //cambiar en el fixture del kevin hija
  await cardPage.gotoCardPage();
  await cardPage.editCard(cardTitle, cardDesc);
  return { page, cardPage };
}
/*
test("Crear Card exitosamente", async ({ loginFixture }) => {
  const page = loginFixture;
  const cardPage = new CardPage(page);
  await page.waitForTimeout(6000);
  await cardPage.gotoCardPage()
  console.log('Current URL:', await page.url());
  console.log('🌍 Browser locale:', await page.evaluate(() => navigator.language));
  await page.screenshot({ path: 'debug.png', fullPage: true });
  await cardPage.addCard("Tarjeta de prueba", "PARA PRUEBA");
  await cardPage.addCard("HOLA", "PARA PRUEBA");
});

test("editar etiquetas de una card", async ({ loginFixture }) => {
  const { page, cardPage } = await setupCardTest(loginFixture);
  await cardPage.cardActionEditLabels({ color: "verde" });
  await cardPage.cardActionEditLabels({ color: "verde", title: "PERO" });
  await cardPage.closeDialogCard();

  const titleField = page.getByTestId("quick-card-editor-card-title");
  await expect(titleField).toHaveValue("HOLA");

  const appliedLabel = page
    .locator('[data-testid="compact-card-label"][aria-label="Color: verde, título: “PERO”"]')
    .first();
  await expect(appliedLabel).toBeVisible();
});

for (const label of LABELS) {
  test(`Crear etiqueta de tipo: "${label.tipeLabel}"`, async ({ loginFixture }) => {
    const { page, cardPage } = await setupCardTest(loginFixture);
    await cardPage.cardActionAddLabel({ color: label.colorLabel, title: label.nameLabel });
    await cardPage.closeDialogCard();

    const appliedLabel = page
    .locator(`[data-testid="compact-card-label"][aria-label="Color: ${label.confirmColorLabel}, título: “${label.nameLabel}”"]`)
    .first();
  await expect(appliedLabel).toBeVisible();
  });
}

test("opcion de daltonicos para etiquetas para una card", async ({ loginFixture }) => {
  const { page, cardPage } = await setupCardTest(loginFixture);
  await cardPage.cardActionColorBlindMode();
  await cardPage.closeDialogCard();

  const trelloRoot = page.locator("#trello-root");
  await expect(trelloRoot).toHaveClass(/body-color-blind-mode-enabled/, { timeout: 5000 });
});

test("editar miembros de una card", async ({ loginFixture }) => {
  const { page, cardPage } = await setupCardTest(loginFixture);
  await cardPage.cardActionEditMembers("Lecrere Consorcio");
  await cardPage.closeDialogCard();

  const appliedLabel = page
    .locator('[role="img"][aria-label="Lecrere Consorcio (consorciolecrere)"]')
    .first();
  await expect(appliedLabel).toBeVisible({ timeout: 8000 });
});

//añadir recordatorio a una card vencida
//añadir recordatorio a una card sin fehca de vencimineto
test("añadir recordatorio a una card", async ({ loginFixture }) => {
  const { page, cardPage } = await setupCardTest(loginFixture);
  await cardPage.cardActionEditReminder("15 minutos antes");
  await cardPage.cardActionEditReminder("1 hora antes");

  const appliedLabel = page.locator('[data-testid="badge-due-date-not-completed"]').first();
  await expect(appliedLabel).toBeVisible();
});

test("editar fechas de una card", async ({ loginFixture }) => {
  const { page, cardPage } = await setupCardTest(loginFixture);
  await cardPage.cardActionEditDates("10/10/2025", "11/11/2025");

  const fechaSpan = page
    .locator('[data-testid="badge-due-date-not-completed"] .nGT0DJOrI676qn').first();
  await expect(fechaSpan).toHaveText(/10 oct - 11 nov/, { timeout: 8000 });
});
*/
//----------------------------------------------------------------------
for (const date of DATES) {
  test(`Fecha card con: "${date.tipeDate}"`, async ({ loginFixture }) => {
    const { page, cardPage } = await setupCardTest(loginFixture);
    await cardPage.cardActionEditDates(date.dateIni, date.dateFin);

    const fechaSpan = page
    .locator('[data-testid="badge-due-date-not-completed"] .nGT0DJOrI676qn').first();
    await expect(fechaSpan).toHaveText(new RegExp(date.dateConfirm), { timeout: 8000 });
  });
}

//----------------------------------------------------------------------
/*
test("clonar una card", async ({ loginFixture }) => {
  const { cardPage } = await setupCardTest(loginFixture);
  await cardPage.cardActionClone("2");
});

test("copiar link de una card", async ({ loginFixture }) => {
  const { cardPage } = await setupCardTest(loginFixture);
  await cardPage.cardActionCopyLink();
});

test("mover una card a otra lista", async ({ loginFixture }) => {
  const { cardPage } = await setupCardTest(loginFixture, "Tarjeta de prueba", "PARA PRUEBA");
  await cardPage.cardActionMoveList("2");
});

//TEST PARA ELIMINAR
// test("archivar una card 1", async ({ loginFixture }) => {
//   const { cardPage } = await setupCardTest(loginFixture, "Tarjeta de prueba", "2");
//   await cardPage.storeCard();
// });
for (const card of CARDS) {
  test(`Archivar card: "${card.nameCard}" en lista "${card.nameList}"`, async ({ loginFixture }) => {
    const { cardPage } = await setupCardTest(loginFixture, card.nameCard, card.nameList);
    await cardPage.storeCard();
  });
}
*/