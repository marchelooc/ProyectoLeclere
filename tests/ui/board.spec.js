// tests/prueba_login.spec.js
import { test, expect } from "../../utils/fixtures.js";
import { BoardPage } from "../../pages/boardPage.js";
import { ToolsTableroPage } from "../../pages/toolsTablero.js";
import { screenshotPath, Logger } from "../../utils/helpers.js";

test("@ui @smoke @positive Precondición: login exitoso", async ({ loginFixture }) => {
  const page = loginFixture;
  Logger.info("Abrir pagina de tableros")
  const boardPage = new BoardPage(page);
  try {
    Logger.info("Crear tablero")
    const tittle = await boardPage.createBoard()
    Logger.info("Verificar tablero creado")
    await boardPage.verifyCreateBoard(tittle);
    const tablero = new ToolsTableroPage(page);
    Logger.info("Cerrar tablero")
    await tablero.abrirMenu("Close board");
    await boardPage.gotoHome()
    Logger.info("Eliminar tablero")
    await boardPage.delete(tittle)
  } catch (err) {
    await page.screenshot({
      path: screenshotPath(`Precondición: login exitoso`),
    }); throw err;
  }
});

test("@ui @smoke @positive Crear tablero con titulo valido y fondo por defecto", async ({ loginFixture }) => {
  const page = loginFixture;
  Logger.info("Abrir pagina de tableros")
  const boardPage = new BoardPage(page);
  try {
    Logger.info("Crear tablero con titulo valido y fondo por defecto")
    const tittle = await boardPage.createBoardWithValidTitleAndDefaultBackground()
    Logger.info("Verificar tablero creado")
    await boardPage.verifyCreateBoard(tittle);
    const tablero = new ToolsTableroPage(page);
    Logger.info("Cerrar tablero")
    await tablero.abrirMenu("Close board");
    await boardPage.gotoHome()
    Logger.info("Eliminar tablero")
    await boardPage.delete(tittle)
  } catch (err) {
    await page.screenshot({
      path: screenshotPath(`Crear tablero con titulo valido y fondo por defecto`),
    }); throw err;
  }
});

test("@ui @smoke Crear tablero seleccionando fondo de color solido", async ({ loginFixture }) => {
  const page = loginFixture;
  Logger.info("Abrir pagina de tableros")
  const boardPage = new BoardPage(page);
  try {
    Logger.info("Crear tablero seleccionando fondo de color solido")
    const tittle = await boardPage.createBoardWithSolidColorBackground();
    Logger.info("Verificar tablero creado")
    await boardPage.verifyCreateBoard(tittle);
    const tablero = new ToolsTableroPage(page);
    Logger.info("Cerrar tablero")
    await tablero.abrirMenu("Close board");
    await boardPage.gotoHome()
    Logger.info("Eliminar tablero")
    await boardPage.delete(tittle)
  } catch (err) {
    await page.screenshot({
      path: screenshotPath(`Crear tablero seleccionando fondo de color solido`),
    }); throw err;
  }
});

test("@ui @smoke @exploratory Crear tablero seleccionando una imagen de fondo", async ({ loginFixture }) => {
  const page = loginFixture;
  Logger.info("Abrir pagina de tableros")
  const boardPage = new BoardPage(page);
  try {
    Logger.info("Crear tablero con una imagen de fondo")
    const tittle = await boardPage.createBoardWithImageBackground();
    Logger.info("Verificar tablero creado")
    await boardPage.verifyCreateBoard(tittle);
    const tablero = new ToolsTableroPage(page);
    Logger.info("Cerrar tablero")
    await tablero.abrirMenu("Close board");
    await boardPage.gotoHome()
    Logger.info("Eliminar tablero")
    await boardPage.delete(tittle)
  } catch (err) {
    await page.screenshot({
      path: screenshotPath(`Crear tablero seleccionando una imagen de fondo`),
    }); throw err;
  }
});

test("@ui @positive Crear tablero con el campo Visibilidad por defecto", async ({ loginFixture }) => {
  const page = loginFixture;
  Logger.info("Abrir pagina de tableros")
  const boardPage = new BoardPage(page);
  try {
    Logger.info("Crear tablero con el campo Visibilidad por defecto")
    const tittle = await boardPage.createBoardWithDefaultVisibility();
    Logger.info("Verificar tablero creado")
    await boardPage.verifyCreateBoard(tittle);
    const tablero = new ToolsTableroPage(page);
    Logger.info("Cerrar tablero")
    await tablero.abrirMenu("Close board");
    await boardPage.gotoHome()
    Logger.info("Eliminar tablero")
    await boardPage.delete(tittle)
  } catch (err) {
    await page.screenshot({
      path: screenshotPath(`Crear tablero con el campo Visibilidad por defecto`),
    }); throw err;
  }
});

test("@ui @exploratory Redirigir a la galería de plantillas desde el boton de plantillas", async ({ loginFixture }) => {
  const page = loginFixture;
  Logger.info("Abrir pagina de tableros")
  const boardPage = new BoardPage(page);
  try {
    await boardPage.redirectToTemplateGallery();
  } catch (err) {
    await page.screenshot({
      path: screenshotPath(`Redirigir a la galería de plantillas desde el boton de plantillas`),
    }); throw err;
  }
});

test("@ui @exploratory Cerrar formulario sin crear tablero", async ({ loginFixture }) => {
  const page = loginFixture;
  Logger.info("Abrir pagina de tableros")
  const boardPage = new BoardPage(page);
  try {
    await boardPage.closeModalWithoutCreatingBoard();
  } catch (err) {
    await page.screenshot({
      path: screenshotPath(`Cerrar formulario sin crear tablero`),
    }); throw err;
  }
});

test("@ui @exploratory Crear varios tableros con el mismo nombre", async ({ loginFixture }) => {
  const page = loginFixture;
  Logger.info("Abrir pagina de tableros")
  const boardPage = new BoardPage(page);
  try {
    await boardPage.createMultipleBoardsWithSameName();
  } catch (err) {
    await page.screenshot({
      path: screenshotPath(`Crear varios tableros con el mismo nombre`),
    }); throw err;
  }
});

test("@ui @positive Crear tablero con nombre alfanumerico", async ({ loginFixture }) => {
  const page = loginFixture;
  Logger.info("Abrir pagina de tableros")
  const boardPage = new BoardPage(page);
  try {
    Logger.info("Crear tablero con nombre que contenga caracteres alfanumericos")
    const tittle = await boardPage.createBoardWithAlphanumericName();
    Logger.info("Verificar tablero creado")
    await boardPage.verifyCreateBoard(tittle);
    const tablero = new ToolsTableroPage(page);
    Logger.info("Cerrar tablero")
    await tablero.abrirMenu("Close board");
    await boardPage.gotoHome()
    Logger.info("Eliminar tablero")
    await boardPage.delete(tittle)
  } catch (err) {
    await page.screenshot({
      path: screenshotPath(`Crear tablero con nombre alfanumerico`),
    }); throw err;
  }
});

test("@ui @positive Crear tablero con nombre numerico", async ({ loginFixture }) => {
  const page = loginFixture;
  Logger.info("Abrir pagina de tableros")
  const boardPage = new BoardPage(page);
  try {
    Logger.info("Crear tablero con nombre numerico")
    const tittle = await boardPage.createBoardWithNumericName();
    Logger.info("Verificar tablero creado")
    await boardPage.verifyCreateBoard(tittle);
    const tablero = new ToolsTableroPage(page);
    Logger.info("Cerrar tablero")
    await tablero.abrirMenu("Close board");
    await boardPage.gotoHome()
    Logger.info("Eliminar tablero")
    await boardPage.delete(tittle)
  } catch (err) {
    await page.screenshot({
      path: screenshotPath(`Crear tablero con nombre numerico`),
    }); throw err;
  }
});

test("@ui @positive Crear tablero con nombres con caracteres especiales", async ({ loginFixture }) => {
  const page = loginFixture;
  Logger.info("Abrir pagina de tableros")
  const boardPage = new BoardPage(page);
  try {
    Logger.info("Crear tablero con nombre que contenga caracteres especiales")
    const tittle = await boardPage.createBoardWithSpecialCharacters();
    const tablero = new ToolsTableroPage(page);
    Logger.info("Cerrar tablero")
    await tablero.abrirMenu("Close board");
    await boardPage.gotoHome()
    Logger.info("Eliminar tablero")
    await boardPage.delete(tittle)
  } catch (err) {
    await page.screenshot({
      path: screenshotPath(`Crear tablero con nombres con caracteres especiales`),
    }); throw err;
  }
});

test("@ui @positive Crear tablero con caracteres especiales", async ({ loginFixture }) => {
  const page = loginFixture;
  Logger.info("Abrir pagina de tableros")
  const boardPage = new BoardPage(page);
  try {
    Logger.info("Crear tablero con nombre de caracteres especiales")
    const tittle = await boardPage.createBoardWithOnlySpecialCharacters();
    const tablero = new ToolsTableroPage(page);
    Logger.info("Cerrar tablero")
    await tablero.abrirMenu("Close board");
    await boardPage.gotoHome()
    Logger.info("Eliminar tablero")
    await boardPage.delete(tittle)
  } catch (err) {
    await page.screenshot({
      path: screenshotPath(`Crear tablero con caracteres especiales`),
    }); throw err;
  }
});

test("@ui @positive Crear tablero con el limite maximo permitido de caracteres", async ({ loginFixture }) => {
  const page = loginFixture;
  Logger.info("Abrir pagina de tableros")
  const boardPage = new BoardPage(page);
  try {
    Logger.info("Crear tablero con el limite maximo permitido de caracteres")
    const tittle = await boardPage.createBoardWithLimitedCharacteres();
    Logger.info("Verificar tablero creado")
    await boardPage.verifyCreateBoard(tittle);
    const tablero = new ToolsTableroPage(page);
    Logger.info("Cerrar tablero")
    await tablero.abrirMenu("Close board");
    await boardPage.gotoHome()
    Logger.info("Eliminar tablero")
    await boardPage.delete(tittle)
  } catch (err) {
    await page.screenshot({
      path: screenshotPath(`Crear tablero con el limite maximo permitido de caracteres`),
    }); throw err;
  }
});

test("@ui @negative Verificar que no permita crear tablero con el limite maximo no permitido de caracteres", async ({ loginFixture }) => {
  const page = loginFixture;
  Logger.info("Abrir pagina de tableros")
  const boardPage = new BoardPage(page);
  try {
    Logger.info("Crear tablero superando el limite maximo permitido de caracteres")
    const tittle = await boardPage.createBoardWithNoLimitedCharacteres();
    if (tittle === null) {
      console.log("Test exitoso: Trello bloqueó el tablero con título demasiado largo");
      return;
    }
  } catch (err) {
    await page.screenshot({
      path: screenshotPath(`Verificar que no permita crear tablero con el limite maximo no permitido de caracteres`),
    }); throw err;
  }
});

test("@ui @smoke Crear tablero desde una plantilla", async ({ loginFixture }) => {
  const page = loginFixture;
  Logger.info("Abrir pagina de tableros")
  const boardPage = new BoardPage(page);
  try {
    Logger.info("Crear tablero desde plantilla")
    const tittle = await boardPage.createBoardWithTemple();
    Logger.info("Verificar tablero creado")
    await boardPage.verifyCreateBoard(tittle);
    const tablero = new ToolsTableroPage(page);
    Logger.info("Cerrar tablero")
    await tablero.abrirMenu("Close board");
    await boardPage.gotoHome()
    Logger.info("Eliminar tablero")
    await boardPage.delete(tittle)
  } catch (err) {
    await page.screenshot({
      path: screenshotPath(`Crear tablero desde una plantilla`),
    }); throw err;
  }
});

test("@ui @positive Cambiar título de tablero desde plantilla", async ({ loginFixture }) => {
  const page = loginFixture;
  const boardPage = new BoardPage(page);
  try {
    Logger.info("Crear tablero cambiando el titulo desde plantilla")
    const tittle = await boardPage.createBoardChangingName();
    Logger.info("Verificar tablero creado")
    await boardPage.verifyCreateBoard(tittle);
    const tablero = new ToolsTableroPage(page);
    await tablero.abrirMenu("Close board");
    await boardPage.gotoHome()
    await boardPage.delete(tittle)
  } catch (err) {
    await page.screenshot({
      path: screenshotPath(`Cambiar el título de tablero desde plantilla`),
    }); throw err;
  }
});


test("@ui @positive @exploratory Crear tablero desde plantilla desmarcando 'Conservar tarjetas'", async ({ loginFixture }) => {
  const page = loginFixture;
  const boardPage = new BoardPage(page);
  try {
    Logger.info("Crear tablero desmarcando 'Conservar tarjetas'")
    const tittle = await boardPage.createBoardConserveCard();
    const tablero = new ToolsTableroPage(page);
    await tablero.abrirMenu("Close board");
    await boardPage.gotoHome()
    await boardPage.delete(tittle)
  } catch (err) {
    await page.screenshot({
      path: screenshotPath(`Crear tablero desde plantilla desmarcando 'Conservar tarjetas'`),
    }); throw err;
  }
});

test("@ui @positive @exploratory Verificar que explorar plantillas redirige a otra página", async ({ loginFixture }) => {
  const page = loginFixture;
  const boardPage = new BoardPage(page);
  try {
    await boardPage.exploreTemplates();
  } catch (err) {
    await page.screenshot({
      path: screenshotPath(`Verificar que explorar plantillas redirige a otra página`),
    }); throw err;
  }
});

test("@ui @positive Cambiar título de tablero(alfanumerico) desde plantilla", async ({ loginFixture }) => {
  const page = loginFixture;
  const boardPage = new BoardPage(page);
  try {
    Logger.info("Crear tablero con nombre alfanumerico desde plantilla")
    const tittle = await boardPage.changeAlphanumericNameFromTemplate();
    Logger.info("Verificar tablero creado")
    await boardPage.verifyCreateBoard(tittle);
    const tablero = new ToolsTableroPage(page);
    await tablero.abrirMenu("Close board");
    await boardPage.gotoHome()
    await boardPage.delete(tittle)
  } catch (err) {
    await page.screenshot({
      path: screenshotPath(`Cambiar el titulo de tablero(alfanumerico) desde plantilla`),
    }); throw err;
  }
});

test("@ui @positive Cambiar título de tablero(numerico) desde plantilla", async ({ loginFixture }) => {
  const page = loginFixture;
  const boardPage = new BoardPage(page);
  try {
    Logger.info("Crear tablero con nombre numerico desde plantilla")
    const tittle = await boardPage.changeNumericNameFromTemplate();
    Logger.info("Verificar tablero creado")
    await boardPage.verifyCreateBoard(tittle);
    const tablero = new ToolsTableroPage(page);
    await tablero.abrirMenu("Close board");
    await boardPage.gotoHome()
    await boardPage.delete(tittle)
  } catch (err) {
    await page.screenshot({
      path: screenshotPath(`Cambiar el titulo de tablero(numerico) desde plantilla`),
    }); throw err;
  }
});
