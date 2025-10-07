// tests/prueba_login.spec.js
import { test, expect } from "../../utils/fixtures.js";
import { BoardPage } from "../../pages/boardPage.js";
import { ToolsTableroPage } from "../../pages/toolsTablero.js";
/*
test("Precondición: login exitoso", async ({ loginFixture }) => {
  const page = loginFixture;
  const boardPage = new BoardPage(page);
  const tittle = await boardPage.createBoard()
  await boardPage.verifyCreateBoard(tittle);
  const tablero = new ToolsTableroPage(page);
  await tablero.abrirMenu("Close board");
  await boardPage.gotoHome()
  await boardPage.delete(tittle)
});

test("Crear tablero con titulo valido y fondo por defecto", async ({ loginFixture }) => {
  const page = loginFixture;
  const boardPage = new BoardPage(page);
  const tittle = await boardPage.createBoardWithValidTitleAndDefaultBackground()
  await boardPage.verifyCreateBoard(tittle);
  const tablero = new ToolsTableroPage(page);
  await tablero.abrirMenu("Close board");
  await boardPage.gotoHome()
  await boardPage.delete(tittle)
});

test("Crear tablero seleccionando fondo de color solido", async ({ loginFixture }) => {
  const page = loginFixture;
  const boardPage = new BoardPage(page);
  const tittle = await boardPage.createBoardWithSolidColorBackground();
  await boardPage.verifyCreateBoard(tittle);
  const tablero = new ToolsTableroPage(page);
  await tablero.abrirMenu("Close board");
  await boardPage.gotoHome()
  await boardPage.delete(tittle)
});

test("Crear tablero seleccionando una imagen de fondo", async ({ loginFixture }) => {
  const page = loginFixture;
  const boardPage = new BoardPage(page);
  const tittle = await boardPage.createBoardWithImageBackground();
  await boardPage.verifyCreateBoard(tittle);
  const tablero = new ToolsTableroPage(page);
  await tablero.abrirMenu("Close board");
  await boardPage.gotoHome()
  await boardPage.delete(tittle)
});

test("Crear tablero con el campo Visibilidad por defecto", async ({ loginFixture }) => {
  const page = loginFixture;
  const boardPage = new BoardPage(page);
  const tittle = await boardPage.createBoardWithDefaultVisibility();
  await boardPage.verifyCreateBoard(tittle);
  const tablero = new ToolsTableroPage(page);
  await tablero.abrirMenu("Close board");
  await boardPage.gotoHome()
  await boardPage.delete(tittle)
});

test("Redirigir a la galería de plantillas desde el boton de plantillas", async ({ loginFixture }) => {
  const page = loginFixture;
  const boardPage = new BoardPage(page);
  await boardPage.redirectToTemplateGallery();
  const tablero = new ToolsTableroPage(page);
  await tablero.abrirMenu("Close board");
  await boardPage.gotoHome()
  await boardPage.delete(tittle)
});

test("Cerrar formulario sin crear tablero", async ({ loginFixture }) => {
  const page = loginFixture;
  const boardPage = new BoardPage(page);
  await boardPage.closeModalWithoutCreatingBoard();
  const tablero = new ToolsTableroPage(page);
  await tablero.abrirMenu("Close board");
  await boardPage.gotoHome()
  await boardPage.delete(tittle)
});

test("Crear varios tableros con el mismo nombre", async ({ loginFixture }) => {
  const page = loginFixture;
  const boardPage = new BoardPage(page);
  await boardPage.createMultipleBoardsWithSameName();
});

test("Crear tablero con nombre alfanumerico", async ({ loginFixture }) => {
  const page = loginFixture;
  const boardPage = new BoardPage(page);
  const tittle = await boardPage.createBoardWithAlphanumericName();
  await boardPage.verifyCreateBoard(tittle);
  const tablero = new ToolsTableroPage(page);
  await tablero.abrirMenu("Close board");
  await boardPage.gotoHome()
  await boardPage.delete(tittle)
});

test("Crear tablero con nombre numerico", async ({ loginFixture }) => {
  const page = loginFixture;
  const boardPage = new BoardPage(page);
  const tittle = await boardPage.createBoardWithNumericName();
  await boardPage.verifyCreateBoard(tittle);
  const tablero = new ToolsTableroPage(page);
  await tablero.abrirMenu("Close board");
  await boardPage.gotoHome()
  await boardPage.delete(tittle)
}
);

test("Crear tablero con nombres con caracteres especiales", async ({ loginFixture }) => {
  const page = loginFixture;
  const boardPage = new BoardPage(page);
  const tittle = await boardPage.createBoardWithSpecialCharacters();
  await boardPage.verifyCreateBoard(tittle);
  const tablero = new ToolsTableroPage(page);
  await tablero.abrirMenu("Close board");
  await boardPage.gotoHome()
  await boardPage.delete(tittle)
});

test("Crear tablero con caracteres especiales", async ({ loginFixture }) => {
  const page = loginFixture;
  const boardPage = new BoardPage(page);
  const tittle = await boardPage.createBoardWithOnlySpecialCharacters();
  await boardPage.verifyCreateBoard(tittle);
  const tablero = new ToolsTableroPage(page);
  await tablero.abrirMenu("Close board");
  await boardPage.gotoHome()
  await boardPage.delete(tittle)
});

test("Crear tablero con el limite maximo permitido de caracteres", async ({ loginFixture }) => {
  const page = loginFixture;
  const boardPage = new BoardPage(page);
  const tittle = await boardPage.createBoardWithLimitedCharacteres();
  await boardPage.verifyCreateBoard(tittle);
  const tablero = new ToolsTableroPage(page);
  await tablero.abrirMenu("Close board");
  await boardPage.gotoHome()
  await boardPage.delete(tittle)
});

test("Verificar que no permita crear tablero con el limite maximo no permitido de caracteres", async ({ loginFixture }) => {
  const page = loginFixture;
  const boardPage = new BoardPage(page);
  const tittle = await boardPage.createBoardWithNoLimitedCharacteres();
  await boardPage.verifyCreateBoard(tittle);
  const tablero = new ToolsTableroPage(page);
  await tablero.abrirMenu("Close board");
  await boardPage.gotoHome()
  await boardPage.delete(tittle)
});

test("Crear tablero desde una plantilla", async ({ loginFixture }) => {
  const page = loginFixture;
  const boardPage = new BoardPage(page);
  const tittle = await boardPage.createBoardWithTemple();
  await boardPage.verifyCreateBoard(tittle);
  const tablero = new ToolsTableroPage(page);
  await tablero.abrirMenu("Close board");
  await boardPage.gotoHome()
  await boardPage.delete(tittle)
});

test("Cambiar título de tablero desde plantilla", async ({ loginFixture }) => {
  const page = loginFixture;
  const boardPage = new BoardPage(page);
  const tittle = await boardPage.createBoardChangingName();
  await boardPage.verifyCreateBoard(tittle);
  const tablero = new ToolsTableroPage(page);
  await tablero.abrirMenu("Close board");
  await boardPage.gotoHome()
  await boardPage.delete(tittle)
});


test("Crear tablero desde plantilla desmarcando 'Conservar tarjetas'", async ({ loginFixture }) => {
  const page = loginFixture;
  const boardPage = new BoardPage(page);
  const title = await boardPage.createBoardConserveCard();
  await boardPage.verifyCreateBoard(title);
  const tablero = new ToolsTableroPage(page);
  await tablero.abrirMenu("Close board");
  await boardPage.gotoHome()
  await boardPage.delete(tittle)
});

test("Veridicar que explorar plantillas redirige a otra página", async ({ loginFixture }) => {
  const page = loginFixture;
  const boardPage = new BoardPage(page);
  await boardPage.exploreTemplates();
});

test("Cambiar título de tablero(alfanumerico) desde plantilla", async ({ loginFixture }) => {
  const page = loginFixture;
  const boardPage = new BoardPage(page);
  const tittle = await boardPage.changeAlphanumericNameFromTemplate();
  await boardPage.verifyCreateBoard(tittle);
  const tablero = new ToolsTableroPage(page);
  await tablero.abrirMenu("Close board");
  await boardPage.gotoHome()
  await boardPage.delete(tittle)
});

test("Cambiar título de tablero(numerico) desde plantilla", async ({ loginFixture }) => {
  const page = loginFixture;
  const boardPage = new BoardPage(page);
  const tittle = await boardPage.changeNumericNameFromTemplate();
  await boardPage.verifyCreateBoard(tittle);
  const tablero = new ToolsTableroPage(page);
  await tablero.abrirMenu("Close board");
  await boardPage.gotoHome()
  await boardPage.delete(tittle)
});

test("Cambiar título de tablero(caracteres especiales) desde plantilla", async ({ loginFixture }) => {
  const page = loginFixture;
  const boardPage = new BoardPage(page);
  const tittle = await boardPage.changeSpecialCharacteresNameFromTemplate();
  await boardPage.verifyCreateBoard(tittle);
  const tablero = new ToolsTableroPage(page);
  await tablero.abrirMenu("Close board");
  await boardPage.gotoHome()
  await boardPage.delete(tittle)
});*/