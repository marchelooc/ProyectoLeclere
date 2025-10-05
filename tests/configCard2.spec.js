import { test, expect } from "../utils/fixtures.js";
import { CardPage } from "../pages/cardPage.js";

//helper papu
async function setupCardTest(loginFixture, cardTitle = "HOLA", cardDesc = "PARA PRUEBA") {
  const page = loginFixture;
  const cardPage = new CardPage(page);
  await page.waitForTimeout(4000); //cambiar en el fixture del kevin hija
  await cardPage.gotoCardPage();
  await cardPage.editCard(cardTitle, cardDesc);
  return { page, cardPage };
}

test("Crear Card exitosamente", async ({ loginFixture }) => {
  const page = loginFixture;
  const cardPage = new CardPage(page);
  await page.waitForTimeout(4000);
  await cardPage.gotoCardPage()
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

test("crear etiquetas para una card", async ({ loginFixture }) => {
  const { page, cardPage } = await setupCardTest(loginFixture);
  await cardPage.cardActionAddLabel({ color: "red", title: "insertnombre" });
  await cardPage.closeDialogCard();

  const appliedLabel = page
    .locator('[data-testid="compact-card-label"][aria-label="Color: rojo, título: “insertnombre”"]')
    .first();
  await expect(appliedLabel).toBeVisible();
});

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


test("añadir recordatorio a una card", async ({ loginFixture }) => {
  const { page, cardPage } = await setupCardTest(loginFixture);
  await cardPage.cardActionEditReminder("15 minutos antes");
  await cardPage.cardActionEditReminder("1 hora antes");

  const appliedLabel = page.locator('[data-testid="badge-due-date-not-completed"]').first();
  await expect(appliedLabel).toBeVisible();
});

test("editar fechas de vencimiento de una card", async ({ loginFixture }) => {
  const { page, cardPage } = await setupCardTest(loginFixture);
  await cardPage.cardActionEditDates("10/10/2025", "11/11/2025");

  const fechaSpan = page
    .locator('[data-testid="badge-due-date-not-completed"] .nGT0DJOrI676qn')
    .first();
  await expect(fechaSpan).toHaveText(/10 oct - 11 nov/, { timeout: 8000 });
});

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
test("archivar una card 1", async ({ loginFixture }) => {
  const { cardPage } = await setupCardTest(loginFixture, "Tarjeta de prueba", "2");
  await cardPage.storeCard();
});
test("archivar una card 2", async ({ loginFixture }) => {
  const { cardPage } = await setupCardTest(loginFixture, "HOLA", "2");
  await cardPage.storeCard();
});
test("archivar una card 3", async ({ loginFixture }) => {
  const { cardPage } = await setupCardTest(loginFixture, "HOLA", "PARA PRUEBA");
  await cardPage.storeCard();
});

