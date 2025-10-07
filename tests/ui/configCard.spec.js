import { test, expect } from "../../utils/fixtures.js";
import { CardPage } from "../../pages/cardPage.js";
import { BoardPage } from "../../pages/boardPage.js";
import { Logger } from "../../utils/helpers.js";

import CARDS from "../../data/cardsInfo.json";
import LABELS from "../../data/cardsLabel.json";
import DATES from "../../data/cardsDates.json";


//helper papu
async function setupCardTest(loginFixture, cardTitle = "HOLA", cardList = "PARA PRUEBA") {
  const page = loginFixture;
  Logger.info("Crear pagina de main");
  const boardPage = new BoardPage(page);
  Logger.info("Ingresando al Tablero CHELOPRUEBAS");
  await boardPage.clickBotonTableroName('CHELOPRUEBAS');
  const cardPage = new CardPage(page);
  Logger.info(`Abriendo las configuraciones de la card con titulo ${cardTitle} de la lista ${cardList}`);
  await cardPage.editCard(cardTitle, cardList);
  Logger.info("Exportando la pagina con la card");
  return { page, cardPage };
}

test("@ui @smoke Crear Card exitosamente", async ({ loginFixture }) => {
  const page = loginFixture;
  Logger.info("Crear pagina de main");
  const boardPage = new BoardPage(page);
  Logger.info("Ingresando al Tablero CHELOPRUEBAS");
  await boardPage.clickBotonTableroName('CHELOPRUEBAS');
  const cardPage = new CardPage(page);
  Logger.info("Creando las tarjetas para las pruebas");
  try{
  Logger.info("Creando la tarjeta de prueba para la lista PARA PRUEBA");
  await cardPage.addCard("Tarjeta de prueba", "PARA PRUEBA");
  Logger.info("Creando la tarjeta HOLA la lista PARA PRUEBA");
  await cardPage.addCard("HOLA", "PARA PRUEBA");
  } catch (err) {
      await page.screenshot({ path: screenshotPath(`ERROR AL Crear Card exitosamente`) });
      throw err;
      Logger.error(err);
    }
});

test("@ui @positive Editar etiquetas de una card", async ({ loginFixture }) => {
  const { page, cardPage } = await setupCardTest(loginFixture);
  Logger.info("Añadiendo etiquetas a la tarjeta");
  await cardPage.cardActionEditLabels({ color: "verde" });
  await cardPage.cardActionEditLabels({ color: "verde", title: "PERO" });
  await cardPage.closeDialogCard();
  try{
  Logger.info("Obteniendo el titulo de la tarjeta");
  const titleField = page.getByTestId("quick-card-editor-card-title");
  await expect(titleField).toHaveValue("HOLA");
  Logger.info("Verificando la etiqueta la tarjeta");
  const appliedLabel = page
    .locator('[data-testid="compact-card-label"][aria-label="Color: verde, título: “PERO”"]')
    .first();
  await expect(appliedLabel).toBeVisible();
  } catch (err) {
      await loginFixture.screenshot({ path: screenshotPath(`ERROR AL editar las etiquetas de una Card`) });
      throw err;
      Logger.error(err);
    }
});

for (const label of LABELS) {
  test(`@ui @positive Crear etiqueta de tipo: "${label.tipeLabel}"`, async ({ loginFixture }) => {
    const { page, cardPage } = await setupCardTest(loginFixture);
    try{
    Logger.info(`añadiendo la etiqueta de color ${label.colorLabel} y nombre ${label.nameLabel}`);
    await cardPage.cardActionAddLabel({ color: label.colorLabel, title: label.nameLabel });
    Logger.info("Cerrando el dialogo de etiquetas");
    await cardPage.closeDialogCard();
    Logger.info("Verificando la etiqueta la tarjeta");
    const appliedLabel = page
    .locator(`[data-testid="compact-card-label"][aria-label="Color: ${label.confirmColorLabel}, título: ${label.confirmNameLabel}"]`)
    .first();
    await expect(appliedLabel).toBeVisible();
    } catch (err) {
        await loginFixture.screenshot({ path: screenshotPath(`ERROR AL crear las etiquetas de una Card`) });
        throw err;
        Logger.error(err);
      }
  });
}

test("@ui @positive opcion de daltonicos para etiquetas para una card", async ({ loginFixture }) => {
  const { page, cardPage } = await setupCardTest(loginFixture);
  Logger.info("Cambiando al modo daltonico");
  await cardPage.cardActionColorBlindMode();
  Logger.info("Cerrando el dialogo de etiquetas");
  await cardPage.closeDialogCard();
  try{
  Logger.info("Verificando que este en modo daltonico");
  const trelloRoot = page.locator("#trello-root");
  await expect(trelloRoot).toHaveClass(/body-color-blind-mode-enabled/, { timeout: 5000 });
  } catch (err) {
      await loginFixture.screenshot({ path: screenshotPath(`ERROR AL activar la opción de daltonicos`) });
      throw err;
      Logger.error(err);
    }
});

test("@ui @positive editar miembros de una card", async ({ loginFixture }) => {
  const { page, cardPage } = await setupCardTest(loginFixture);
  Logger.info("Añadiendo miembro a la tarjeta");
  await cardPage.cardActionEditMembers("Lecrere Consorcio");
  Logger.info("Cerrando el dialogo de etiquetas");
  await cardPage.closeDialogCard();
  Logger.info("Verificando que este el miembro en la tarjeta");
  try{
  const appliedLabel = page
    .locator('[role="img"][aria-label="Lecrere Consorcio (consorciolecrere)"]')
    .first();
  await expect(appliedLabel).toBeVisible({ timeout: 8000 });
  } catch (err) {
      await loginFixture.screenshot({ path: screenshotPath(`ERROR AL editar los miembros de una Card`) });
      throw err;
      Logger.error(err);
    }
});

test("@ui @positive añadir recordatorio a una card", async ({ loginFixture }) => {
  const { page, cardPage } = await setupCardTest(loginFixture);
  Logger.info("Añadiendo recordatorio a la tarjeta");
  await cardPage.cardActionEditReminder("15 minutos antes");
  await cardPage.cardActionEditReminder("1 hora antes");
  Logger.info("verificando que se añadio el recordatorio");
  try{
  const appliedLabel = page.locator('[data-testid="badge-due-date-not-completed"]').first();
  await expect(appliedLabel).toBeVisible();
  } catch (err) {
      await loginFixture.screenshot({ path: screenshotPath(`ERROR AL añadir recordatorio Card`) });
      throw err;
      Logger.error(err);
    }
});

for (const date of DATES) {
  test(`@ui @positive Fecha card con: "${date.tipeDate}"`, async ({ loginFixture }) => {
    const { page, cardPage } = await setupCardTest(loginFixture);
    Logger.info("Añadiendo fecha a la tarjeta");
    await cardPage.cardActionEditDates(date.dateIni, date.dateFin);

    const fechaSpan = page
    .locator('[data-testid="badge-due-date-not-completed"] .nGT0DJOrI676qn').first();
    try{
    Logger.info("Verificando que se añadio la fecha");
    await expect(fechaSpan).toHaveText(new RegExp(date.dateConfirm), { timeout: 8000 });
    } catch (err) {
      await loginFixture.screenshot({ path: screenshotPath(`ERROR AL editar las fechas de una Card`) });
      throw err;
      Logger.error(err);
    }
  });
}

test("@ui @smoke clonar una card", async ({ loginFixture }) => {
  const { cardPage } = await setupCardTest(loginFixture);
  try{
  Logger.info("Clonando la card");
  await cardPage.cardActionClone("2");
  Logger.info("Verificando la card clonada");
  } catch (err) {
      await loginFixture.screenshot({ path: screenshotPath(`ERROR AL clonar Card`) });
      throw err;
      Logger.error(err);
    }
});

test("@ui @positive copiar link de una card", async ({ loginFixture }) => {
  const { cardPage } = await setupCardTest(loginFixture);
  try{
  Logger.info("copiando y abriendo el link de la card");
  await cardPage.cardActionCopyLink();
  } catch (err) {
      await loginFixture.screenshot({ path: screenshotPath(`ERROR el link de una Card`) });
      throw err;
      Logger.error(err);
    }
});

test("@ui @smoke mover una card a otra lista", async ({ loginFixture }) => {
  const { cardPage } = await setupCardTest(loginFixture, "Tarjeta de prueba", "PARA PRUEBA");
  try{
  Logger.info("moviendo la card a otra lista");
  await cardPage.cardActionMoveList("2");
  } catch (err) {
      await loginFixture.screenshot({ path: screenshotPath(`ERROR AL mover una Card`) });
      throw err;
      Logger.error(err);
    }
});

for (const card of CARDS) {
  test(`@ui @smoke Archivar card: "${card.nameCard}" en lista "${card.nameList}"`, async ({ loginFixture }) => {
    const { cardPage } = await setupCardTest(loginFixture, card.nameCard, card.nameList);
    try{
    Logger.info("eliminando card de la lista");
    Logger.info(`eliminando la card: ${card.nameCard}`);
    await cardPage.storeCard();
    } catch (err) {
        await loginFixture.screenshot({ path: screenshotPath(`ERROR AL archivar una Card`) });
        throw err;
        Logger.error(err);
      }
  });
}
