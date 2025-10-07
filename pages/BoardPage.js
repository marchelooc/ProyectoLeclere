import { expect } from "@playwright/test";
import { faker } from '@faker-js/faker';

export class BoardPage {
  constructor(page) {
    this.page = page;
    this.profileButton = "button[data-testid='header-member-menu-button']";
    this.popoverMenu = "#account-menu-popover-content";
    this.logoutButton = "button[data-testid='account-menu-logout']";
    this.confirmLogoutButton = "button#logout-submit"; 
    this.createBoardButton = 'button[data-testid="header-create-menu-button"]';
    this.createEmptyBoard = 'button[data-testid="header-create-board-button"]';
    this.boardTittle = 'input[data-testid="create-board-title-input"]';
    this.createSave = 'button[data-testid="create-board-submit-button"]';
    this.colorOption = 'button[title="Dark blue gradient"]'
    this.imageOption = 'button[title="Majestic mountain silhouetted against an orange sky."]'
    this.visibilityDropDown = 'div[data-testid="create-board-select-visibility-select--control"]'
    //this.privateOption =
    //this.publicOption =
    this.closeModalButton = 'button[class="JABNldlIncwKgc zrn4tJQdoA76rj"]'
    this.templateButton = 'button[data-testid="create-from-template-button"]'
    this.templateButton = 'button[data-testid="header-create-board-from-template-button"]'
    this.template = 'div[style*="photo-1576502200916-3808e07386a5.jpg"]'
    this.UnchekCard = 'label[data-testid="clickable-checkbox"]'
    this.exploreTemplate = 'a[href="/templates"]'
    this.home = 'a[aria-label="Back to home"]'
    this.seeClosedBoard = page.locator('button', { hasText: 'View all closed boards' })
    this.boards = this.page.locator("li.d0sKN6fe14jaBa");
    this.confirmDelete = ' button[data-testid="close-board-delete-board-confirm-button"]'
  }

  async createBoard() {
    const boardName = faker.lorem.words(2);
    await this.page.click(this.createBoardButton);
    await this.page.click(this.createEmptyBoard);
    await this.page.fill(this.boardTittle, boardName);
    await this.page.click(this.createSave);
    return boardName;
  }

  async gotoHome(){
    await this.page.click(this.home)
  }

  async delete(boardName){
    await this.seeClosedBoard.click()
    const board = this.boards.filter({ hasText: boardName }).first();

    // Esperar a que el tablero esté visible
    await board.waitFor({ state: "visible" });

    // Hacer click en el botón "Eliminate" dentro de ese tablero
    const btnEliminar = board.locator('button[data-testid="close-board-delete-board-button"]');
    await btnEliminar.click();
    await this.page.click(this.confirmDelete)
  }

  async verifyCreateBoard(tittle) {
    await expect(this.page).toHaveTitle(new RegExp(tittle, 'i'));
  }

  async createBoardWithValidTitleAndDefaultBackground() {
    await this.page.click(this.createBoardButton)
    await this.page.click(this.createEmptyBoard)
    const boardName = faker.lorem.words(2)
    await this.page.fill(this.boardTittle, boardName)
    await this.page.click(this.createSave)
    return boardName
  }

  async createBoardWithSolidColorBackground() {
    await this.page.click(this.createBoardButton)
    await this.page.click(this.createEmptyBoard)
    const boardName = faker.lorem.words(2)
    await this.page.fill(this.boardTittle, boardName)
    await this.page.click(this.colorOption)
    await this.page.click(this.createSave)
    return boardName

  }

  async createBoardWithImageBackground() {
    await this.page.click(this.createBoardButton)
    await this.page.click(this.createEmptyBoard)
    const boardName = faker.lorem.words(2)
    await this.page.fill(this.boardTittle, boardName)
    await this.page.click(this.imageOption)
    await this.page.click(this.createSave)
    return boardName
  }

  async createBoardWithDefaultVisibility() {
    await this.page.click(this.createBoardButton)
    await this.page.click(this.createEmptyBoard)
    const boardName = faker.lorem.words(2)
    await this.page.fill(this.boardTittle, boardName)
    await this.page.click(this.createSave)
    return boardName
  }

  async redirectToTemplateGallery() {
    await this.page.click(this.createBoardButton)
    await this.page.click(this.createEmptyBoard)
    await this.page.click(this.templateButton)
  }

  async closeModalWithoutCreatingBoard() {
    await this.page.click(this.createBoardButton)
    await this.page.click(this.createEmptyBoard)
    await this.page.click(this.closeModalButton)
  }

  async createMultipleBoardsWithSameName() {
    for (let i = 1; i <= 3; i++) {
      await this.page.click(this.createBoardButton)
      await this.page.click(this.createEmptyBoard)
      await this.page.fill(this.boardTittle, "nombreRepetido")
      await this.page.click(this.createSave)
      await this.page.click(this.home)

    }
  }

  async createBoardWithAlphanumericName() {
    await this.page.click(this.createBoardButton)
    await this.page.click(this.createEmptyBoard)
    const boardName = faker.string.alphanumeric(10)
    await this.page.fill(this.boardTittle, boardName)
    await this.page.click(this.createSave)
    return boardName
  }

  async createBoardWithNumericName() {
    await this.page.click(this.createBoardButton)
    await this.page.click(this.createEmptyBoard)
    const boardName = faker.string.numeric(10)
    await this.page.fill(this.boardTittle, boardName)
    await this.page.click(this.createSave)
    return boardName
  }

  async createBoardWithSpecialCharacters() {
    await this.page.click(this.createBoardButton)
    await this.page.click(this.createEmptyBoard)
    const boardName = `${faker.word.words()}${faker.string.fromCharacters('@$#%&*!·?', 7)}`;
    await this.page.fill(this.boardTittle, boardName)
    await this.page.click(this.createSave)
    return boardName
  }

  async createBoardWithOnlySpecialCharacters() {
    await this.page.click(this.createBoardButton);
    await this.page.click(this.createEmptyBoard);
    const boardName = faker.string.fromCharacters('@$#%&*!·?~^<>+=-', 8);
    await this.page.fill(this.boardTittle, boardName);
    await this.page.click(this.createSave);
    return boardName
  }

  async createBoardWithLimitedCharacteres() {
    await this.page.click(this.createBoardButton);
    await this.page.click(this.createEmptyBoard);
    const boardName = faker.string.alphanumeric(16384)
    await this.page.fill(this.boardTittle, boardName);
    await this.page.click(this.createSave);
    return boardName
  }

  async createBoardWithNoLimitedCharacteres() {
    await this.page.click(this.createBoardButton);
    await this.page.pause()
    await this.page.click(this.createEmptyBoard);
    const boardName = faker.string.alphanumeric(16385)
    await this.page.fill(this.boardTittle, boardName);
    await this.page.click(this.createSave);
    return boardName
  }

  async createBoardWithTemple() {
    await this.page.click(this.createBoardButton);
    await this.page.click(this.templateButton);
    await this.page.click(this.template);
    await this.page.click(this.createSave);
  }

  async createBoardChangingName() {
    await this.page.click(this.createBoardButton);
    await this.page.click(this.templateButton);
    await this.page.click(this.template);
    const boardName = faker.lorem.words(2);
    await this.page.fill(this.boardTittle, boardName)
    await this.page.click(this.createSave);
    return boardName
  }

  async createBoardConserveCard(){
    await this.page.click(this.createBoardButton);
    await this.page.click(this.templateButton);
    await this.page.click(this.template);
    await this.page.click(this.UnchekCard);
    await this.page.click(this.createSave);
  }

  async exploreTemplates(){
    await this.page.pause()
    await this.page.click(this.createBoardButton);
    await this.page.click(this.templateButton);
    await this.page.click(this.exploreTemplate);

  }
  
  async changeAlphanumericNameFromTemplate(){
    await this.page.click(this.createBoardButton);
    await this.page.click(this.templateButton);
    await this.page.click(this.template);
    const boardName = faker.string.alphanumeric(10)
    await this.page.fill(this.boardTittle, boardName)
    await this.page.click(this.createSave);
    return boardName
  }

  async changeNumericNameFromTemplate(){
    await this.page.click(this.createBoardButton);
    await this.page.click(this.templateButton);
    await this.page.click(this.template);
    const boardName = faker.string.numeric(10)
    await this.page.fill(this.boardTittle, boardName)
    await this.page.click(this.createSave);
    return boardName
  }

  async changeSpecialCharacteresNameFromTemplate(){
    await this.page.click(this.createBoardButton);
    await this.page.click(this.templateButton);
    await this.page.click(this.template);
    const boardName = faker.string.fromCharacters('@$#%&*!·?~^<>+=-', 8);
    await this.page.fill(this.boardTittle, boardName)
    await this.page.click(this.createSave);
    return boardName
  }

  async openProfileMenu() {
    // Espera a que aparezca el botón del avatar
    await this.page.waitForSelector(this.profileButton, { state: "visible" });
    await this.page.dblclick(this.profileButton);
    await this.page.click(this.profileButton);
  }

  async clickLogout() {
    await this.page.waitForSelector(this.logoutButton, { state: "visible" });
    await this.page.click(this.logoutButton);
  }

  async logout() {
    // abrir menú
    await this.openProfileMenu();

    // clic en "Cerrar sesión"
    await this.clickLogout();

    // confirmar que redirige a Atlassian
    await expect(this.page).toHaveURL(/id\.atlassian\.com\/logout/);

    // clic en botón de confirmación final
    await this.page.click(this.confirmLogoutButton);

    // validar que vuelves al home de Trello
    await expect(this.page).toHaveURL("https://trello.com/");
  }
}
