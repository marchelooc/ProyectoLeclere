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
        }
        
        async isPageVisible() {
                await this.page.waitForTimeout(1000);
                await expect(this.page.locator('text=YOUR WORKSPACES')).toBeVisible(); 
        }

        async typeInSearch(term) {
                const search = this.page.locator(this.searchInput);
                await search.waitFor({ state: "visible" }); 
                await search.click();  
                await search.fill("");
                await search.type(term, { delay: 20 }); // Escribir
                await this.page.waitForTimeout(300);
                //return search;
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


}
