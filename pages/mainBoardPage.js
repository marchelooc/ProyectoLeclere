import { expect } from "@playwright/test";
export class MainBoardPage {
        constructor(page) {
                this.page = page;
                this.searchInput = 'input:is([placeholder="Buscar"], [placeholder="Search"])';
                this.searchDialog = '[data-test-id="search-dialog"], [data-testid="search-dialog"], div[role="listbox"], div[role="dialog"]'; // Dropdown de búsqueda
                this.firstWorkspace = 'xpath=//*[@id="content"]/div/div/div/main/div/div[2]/div[1]/div[2]/div[1]/a/div/div[1]/div';
                this.boardsButton = 'xpath=//*[@id="content"]/div/div/div/main/div/div[2]/div[2]/div/div[1]/div/a[1]';
                this.membersButton = 'xpath=//*[@id="content"]/div/div/div/main/div/div[2]/div[2]/div/div[1]/div/a[2]';
                this.settingsButton = 'xpath=//*[@id="content"]/div/div/div/main/div/div[2]/div[2]/div/div[1]/div/a[3]';
                this.templateButton = 'xpath=//*[@id="content"]/div/div/div/nav/header/div/ul/li[2]/a';
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
                await this.page.waitForTimeout(8000);
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
                const firstWorkspace = this.page.locator(this.firstWorkspace);
                await firstWorkspace.waitFor({ state: "visible", timeout: 5000 }); 
                await firstWorkspace.click(); 
        }

        async clickBoardsButton() {
                const button = this.page.locator(this.boardsButton);
                await button.waitFor({ state: "visible", timeout: 5000 }); 
                await button.click();
        }

        async clickMembersButton() {
                const button = this.page.locator(this.membersButton);
                await button.waitFor({ state: "visible", timeout: 5000 });
                await button.click();
        }

        async clickSettingsButton() {
                const button = this.page.locator(this.settingsButton);
                await button.waitFor({ state: "visible", timeout: 5000 });
                await button.click();
        }

        async clickTemplateButton() {
                const button = this.page.locator(this.templateButton);
                await button.waitFor({ state: "visible", timeout: 5000 });
                await button.click();
        }

        async clickHomeButton() {
                const button = this.page.locator(this.homeButton);
                await button.waitFor({ state: "visible", timeout: 5000 });
                await button.click();
        }

        async clickProfileMenuButton() {
                const button = this.page.locator(this.profileMenuButton);
                await button.waitFor({ state: "visible", timeout: 5000 });
                await button.click();
        }

        async clickThemeSwitcherButton() {
                const button = this.page.locator(this.themeSwitcherButton);
                await button.waitFor({ state: "visible", timeout: 5000 });
                await button.click();
        }

        async clickDarkThemeButton() {
                const button = this.page.locator(this.darkThemeButton);
                await button.waitFor({ state: "visible", timeout: 5000 });
                await button.click();
        }

        async clickMatchSystemThemeButton() {
                const button = this.page.locator(this.matchSystemThemeButton);
                await button.waitFor({ state: "visible", timeout: 5000 });
                await button.click();
        }

        async clickProfileAndVisibilityButton() {
                const button = this.page.locator(this.profileAndVisibilityButton);
                await button.waitFor({ state: "visible", timeout: 5000 });
                await button.click();
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
                const button = this.page.locator(this.settingsProfileButton);
                await button.waitFor({ state: "visible", timeout: 5000 });
                await button.click();
        }

        async clickShortcutsButton() {
                const button = this.page.locator(this.shortcutsButton);
                await button.click();
                await expect(this.page.locator('text=Keyboard shortcuts')).toBeVisible();
                await this.page.waitForTimeout(500);
        }

}
