import { test, expect } from "../utils/fixtures.js";
const { TrelloCard } = require('../components/card.component.js');
import { CardPage } from "../pages/cardPage.js";

/*
test("Crear Card exitosamente", async ({ page, loginFixture }) => {
  //const page = loginFixture;
  const cardPage = new CardPage(page);
  await page.waitForTimeout(4000);
  await cardPage.gotoCardPage()
  await cardPage.addCard("Nombre de tarjeta numero 1", "2");
  await cardPage.addCard("Nombre de tarjeta numero 2", "PARA PRUEBA");
});

test("Crear card con numero de caracteres no permitido", async ({ loginFixture }) => {
  const page = loginFixture;
  const cardPage = new CardPage(page);
  await page.waitForTimeout(4000);
  await cardPage.gotoCardPage()
});

test("Crear card sin nombre", async ({ loginFixture }) => {
  const page = loginFixture;
  const cardPage = new CardPage(page);
  await page.waitForTimeout(4000);
  await cardPage.gotoCardPage()
});

test("Crear card con imagen.png", async ({ loginFixture }) => {
  const page = loginFixture;
  const cardPage = new CardPage(page);
  await page.waitForTimeout(4000);
  await cardPage.gotoCardPage()
  await cardPage.addCardFile('D:/umss/6TOMODULO/ProyectoLeclere/data/imgCard/logo2.png', "2");
});

test("Crear card con archivos con formatos no permitidos", async ({ loginFixture }) => {
  const page = loginFixture;
});

test("Crear card con archivos con archivos pesados", async ({ loginFixture }) => {
  const page = loginFixture;
});

*/