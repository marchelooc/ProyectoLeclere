import { expect } from "@playwright/test";
export class MainBoardPage {
        constructor(page) {
                this.page = page;
                this.searchInput = 'input:is([placeholder="Buscar"], [placeholder="Search"])';
                this.searchDialog = 'div[class="AwzOoLt0EyQ5H8"]';//'[data-test-id="search-dialog"], [data-testid="search-dialog"], div[role="listbox"], div[role="dialog"]'; // Dropdown de búsqueda
                this.firstWorkspace = 'xpath=//*[@id="content"]/div/div/div/main/div/div[2]/div[1]/div[2]/div[1]/a/div/div[1]/div';
                this.boardsButton = 'xpath=//*[@id="content"]/div/div/div/main/div/div[2]/div[3]/div/div[1]/div/a[1]';
                this.membersButton = 'xpath=//*[@id="content"]/div/div/div/main/div/div[2]/div[3]/div/div[1]/div/a[2]';
                this.settingsButton = 'xpath=//*[@id="content"]/div/div/div/main/div/div[2]/div[3]/div/div[1]/div/a[3]';
                this.templateButton = 'li[data-testid="templates"]'; 
                this.homeButton = 'xpath=//*[@id="content"]/div/div/div/nav/header/div/ul/li[3]/a';
                this.profileMenuButton = 'xpath=//*[@id="header"]/div[3]/div[4]/button';
                this.themeSwitcherButton = 'xpath=//*[@id="account-menu-popover-content"]/div[2]/ul/li[5]/button';
                this.darkThemeButton = 'xpath=//*[@id="account-menu-theme-switcher-popover-content"]/button[2]/label/span/div/div';
                this.matchSystemThemeButton = 'xpath=//*[@id="account-menu-theme-switcher-popover-content"]/button[3]/label/span/div/div';
                this.profileAndVisibilityButton = 'xpath=//*[@id="account-menu-popover-content"]/div[2]/ul/li[1]/a';
                this.activityButton = 'xpath=//*[@id="account-menu-popover-content"]/div[2]/ul/li[2]/a';
                this.cardsButton = 'xpath=//*[@id="account-menu-popover-content"]/div[2]/ul/li[3]/a';
                this.settingsProfileButton = 'xpath=//*[@id="account-menu-popover-content"]/div[2]/ul/li[4]/a';
                this.shortcutsButton = 'xpath=//*[@id="account-menu-popover-content"]/div[4]/div/ul/li[3]/button';
        }
        
        async isPageVisible() {
                await this.page.waitForTimeout(2000);
                await expect(this.page.locator('text=YOUR WORKSPACES')).toBeVisible(); 
        }

        async typeInSearch(term) {
                const search = this.page.locator(this.searchInput);
                await search.waitFor({ state: "visible" }); 
                await search.click();  
                await search.fill("");
                await search.type(term, { delay: 20 });
                await this.page.waitForTimeout(500);
        }

        async selectSuggestionByText(text) {
                const asOption = this.page.getByRole("option", { name: text, exact: true }).first();
                if (await asOption.count()) { // intenta por rol accesible "option"
                await asOption.waitFor({ state: "visible", timeout: 15000 });
                await asOption.click();
                return;
                }
                const byText = this.page.getByText(text, { exact: true }).first(); //fallback: cualquier nodo clickable con ese texto
                await byText.waitFor({ state: "visible", timeout: 15000 });
                await byText.click();
        }

        async clickFirstWorkspace() {
                await this.page.click(this.firstWorkspace);
        }

        async clickBoardsButton() {
                await this.page.click(this.boardsButton);
        }

        async clickMembersButton() {
                await this.page.click(this.membersButton);
        }

        async clickSettingsButton() {
                await this.page.click(this.settingsButton);
        }

        async clickTemplateButton() {
                await this.page.click(this.templateButton);
        }

        async clickHomeButton() {
                await this.page.click(this.homeButton);
        }

        async clickProfileMenuButton() {
                await this.page.click(this.profileMenuButton);
        }

        async clickThemeSwitcherButton() {
                await this.page.click(this.themeSwitcherButton);
        }

        async clickDarkThemeButton() {
                await this.page.click(this.darkThemeButton);
        }

        async clickMatchSystemThemeButton() {
                await this.page.click(this.matchSystemThemeButton);
        }

        async clickProfileAndVisibilityButton() {
                await this.page.click(this.profileAndVisibilityButton);
        }

        async clickActivityButton() {
                const button = this.page.locator(this.activityButton);
                await button.waitFor({ state: "visible", timeout: 5000 });
                await button.click();
                await expect(this.page.locator('text=Activity')).toBeVisible();
                await this.page.waitForTimeout(500);
        }

        async clickCardsButton() {
                const button = this.page.locator(this.cardsButton);
                await button.waitFor({ state: "visible", timeout: 5000 });
                await button.click();
                await expect(this.page.locator('text=Cards')).toBeVisible();
                await this.page.waitForTimeout(500);
        }

        async clickSettingsProfileButton() {
                await this.page.click(this.settingsProfileButton);
        }

        async clickShortcutsButton() {
                const button = this.page.locator(this.shortcutsButton);
                await button.click();
                await expect(this.page.locator('text=Keyboard shortcuts')).toBeVisible();
                await this.page.waitForTimeout(500);
        }

}
