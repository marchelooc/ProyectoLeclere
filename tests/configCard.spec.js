import { test, expect } from "../utils/fixtures.js";
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
  await cardPage.closeDialogCard()
  //confirmación del test
  const titleField = page.getByTestId('quick-card-editor-card-title');
  await expect(titleField).toHaveValue('HOLA');
  const appliedLabel = page.locator('[data-testid="compact-card-label"][aria-label="Color: verde, título: “PERO”"]').first();
  await expect(appliedLabel).toBeVisible();
});


test("crear etiquetas para una card", async ({ loginFixture }) => {
  const page = loginFixture;
  const cardPage = new CardPage(page);
  await page.waitForTimeout(4000);
  await cardPage.gotoCardPage()
  await cardPage.editCard("HOLA", "PARA PRUEBA");
  await cardPage.cardActionAddLabel({ color: "red", title: "insertnombre" });
  await cardPage.closeDialogCard()
  const appliedLabel = page.locator('[data-testid="compact-card-label"][aria-label="Color: rojo, título: “insertnombre”"]').first();
  await expect(appliedLabel).toBeVisible()
});


//crear etiqueta vacia y sin color (no deberia dejar)
//crear una etiqueta ya existente (mismo texto mismo color)
//crear una etiqueta sin color 

test("opcion de daltonicos para etiquetas para una card", async ({ loginFixture }) => {
  const page = loginFixture;
  const cardPage = new CardPage(page);
  await page.waitForTimeout(4000);
  await cardPage.gotoCardPage()
  await cardPage.editCard("HOLA", "PARA PRUEBA");
  await cardPage.cardActionColorBlindMode()
  await cardPage.closeDialogCard()
  const trelloRoot = page.locator('#trello-root');
  await expect(trelloRoot).toHaveClass(/body-color-blind-mode-enabled/, { timeout: 5000 });
});

test("editar miembros de una card", async ({ loginFixture }) => {
  const page = loginFixture;
  const cardPage = new CardPage(page);
  await page.waitForTimeout(4000);
  await cardPage.gotoCardPage()
  await cardPage.editCard("HOLA", "PARA PRUEBA");
  await cardPage.cardActionEditMembers("Lecrere Consorcio")
  await cardPage.closeDialogCard()
  const appliedLabel = page.locator('[role="img"][aria-label="Lecrere Consorcio (consorciolecrere)"]').first();
  await expect(appliedLabel).toBeVisible({ timeout: 8000 });
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
  
  const appliedLabel = page.locator('[data-testid="badge-due-date-not-completed"]').first();
  //data-testid="badge-due-date-not-completed"
  await expect(appliedLabel).toBeVisible()

});
//añadir recordatorio a una card vencida
//añadir recordatorio a una card sin fehca de vencimineto

test("editar fechas de vencimiento de una card", async ({ loginFixture }) => {
  const page = loginFixture;
  const cardPage = new CardPage(page);
  await page.waitForTimeout(4000);
  await cardPage.gotoCardPage()
  await cardPage.editCard("HOLA", "PARA PRUEBA");
  await cardPage.cardActionEditDates('10/10/2025','11/11/2025');
  const fechaSpan = page.locator('[data-testid="badge-due-date-not-completed"] .nGT0DJOrI676qn').first();
  await expect(fechaSpan).toHaveText(/10 oct - 11 nov/, { timeout: 8000 });
});

//añadir fecha inicio mayor a fecha final
//añadir fecha final anterior
//añadir fecha inicio muy en el futuro
//añadir fecha de formato no establecido 1-1-2025
//añadir fecha sin numeros 1 de marzo 2025
//añadir fecha de vencimineto pero quitar la fecha final
//añadir fecha inexistente ejemplo un 31 de un mes q solo tiene 28dias

test("clonar una card", async ({ loginFixture }) => {
  const page = loginFixture;
  const cardPage = new CardPage(page);
  await page.waitForTimeout(4000);
  await cardPage.gotoCardPage()
  await cardPage.editCard("HOLA", "PARA PRUEBA");
  await cardPage.cardActionClone("2")
});


test("copiar link de una card", async ({ loginFixture }) => {
  const page = loginFixture;
  const cardPage = new CardPage(page);
  await page.waitForTimeout(4000);
  await cardPage.gotoCardPage()
  await cardPage.editCard("HOLA", "PARA PRUEBA");
  await cardPage.cardActionCopyLink()
});
//acceder a una card con el link despues de desloguearse

test("mover una card a otra lista", async ({ loginFixture }) => {
  const page = loginFixture;
  const cardPage = new CardPage(page);
  await page.waitForTimeout(4000);
  await cardPage.gotoCardPage()
  await cardPage.editCard("Tarjeta de prueba", "PARA PRUEBA");
  await cardPage.cardActionMoveList("2")
});
//mover una card a una lista que ya no existe 2cuentas?
*/