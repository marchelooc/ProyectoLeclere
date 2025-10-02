// tests/prueba_login.spec.js
import { test, expect } from "../utils/fixtures.js";
import { BoardPage } from "../pages/BoardPage.js";

test("Precondición: login exitoso", async ({ loginFixture }) => {
  const page = loginFixture;
  const boardPage = new BoardPage(page);
  
  await boardPage.createBoard()


});
