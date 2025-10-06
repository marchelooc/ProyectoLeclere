import { test, expect } from "../../utils/fixtures";
import { BoardPage  } from "../../pages/BoardPage";

test("verificar el acceso exitoso al board de trello", async ({ loginFixture }) => {
    const page = loginFixture;
    const boardPage = new BoardPage(page);
    
    await expect(page).toHaveURL(/trello\.com(\/u\/[^\/]+\/boards)?/);
});


  