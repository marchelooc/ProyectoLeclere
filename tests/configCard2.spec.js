import { test, expect } from "../utils/fixtures.js";
import { CardPage } from "../pages/cardPage.js";
/*
test.describe("CONFIGURACIÓN DE CARDS", () => {
  let page;
  let cardPage;

  test.beforeEach(async ({ loginFixture }) => {
    page = loginFixture;
    cardPage = new CardPage(page);
    await page.waitForTimeout(2000);
    await cardPage.gotoCardPage();
    await cardPage.editCard("HOLA", "PARA PRUEBA");
  });

  test("editar etiquetas de una card", async () => {
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

  test("crear etiqueta nueva en una card", async () => {
    await cardPage.cardActionAddLabel({ color: "rojo", title: "insertnombre" });
    await cardPage.closeDialogCard();

    const appliedLabel = page
      .locator('[data-testid="compact-card-label"][aria-label="Color: rojo, título: “insertnombre”"]')
      .first();
    await expect(appliedLabel).toBeVisible();
  });

  test("activar modo daltónico para etiquetas", async () => {
    await cardPage.cardActionColorBlindMode();
    await cardPage.closeDialogCard();

    const trelloRoot = page.locator("#trello-root");
    await expect(trelloRoot).toHaveClass(/body-color-blind-mode-enabled/, { timeout: 5000 });
  });

  test("editar miembros de una card", async () => {
    await cardPage.cardActionEditMembers("Lecrere Consorcio");
    await cardPage.closeDialogCard();

    const appliedMember = page
      .locator('[data-testid="card-front-member"][aria-label="Lecrere Consorcio (consorciolecrere)"]')
      .first();
    await expect(appliedMember).toBeVisible();
  });

  test("archivar una card", async () => {
    await cardPage.storeCard();
    // Aquí podrías validar que la card desaparece o que aparece un banner de confirmación
  });

  test("añadir recordatorio a una card", async () => {
    await cardPage.cardActionEditReminder("15 minutos antes");
    await cardPage.cardActionEditReminder("1 hora antes");

    const reminderBadge = page.locator('[data-testid="badge-due-date-not-completed"]').first();
    await expect(reminderBadge).toBeVisible();
  });

  test("editar fechas de vencimiento de una card", async () => {
    await cardPage.cardActionEditDates("10/10/2025", "11/11/2025");

    const fechaSpan = page.locator('[data-testid="badge-due-date-not-completed"] span.nGT0DJOrI676qn');
    await expect(fechaSpan).toHaveText(/10 oct - 11 nov/);
  });

  test("clonar una card", async () => {
    await cardPage.cardActionClone("2");
    // Podrías validar que la card clonada aparece con un sufijo o en otra lista
  });

  test("copiar link de una card", async () => {
    const copiedLink = await cardPage.cardActionCopyLink();
    expect(copiedLink).toMatch(/^https?:\/\//);
  });

  test("mover una card a otra lista", async () => {
    await cardPage.cardActionMoveList("2");
    // Validar que la card ahora está en la nueva lista
  });
});
*/