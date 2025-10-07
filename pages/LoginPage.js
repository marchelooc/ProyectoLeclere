import { expect } from "@playwright/test";

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = "input#username-uid1, input[name='username']";
    this.continueButton = "button#login-submit";
    this.passwordInput = "input#password";
    this.loginButton = "button#login-submit";
    this.errorMessage = page.locator('[data-testid="form-error--content"]');
    this.spanSingUp = page.locator('button#signup-submit span');
    this.emptyEmailError = page.locator('#username-uid1-error');
    this.emptyPasswordError = page.locator('[data-testid="password-error-idf-testid"]');
    this.invalidEmailError = page.locator('#username-uid1-error, [data-testid="message-wrapper"]');
    this.emailWhitoutArrobaError = page.locator('#username-uid1-error');
    this.googleButton = page.locator('#google-auth-button');
    this.registerButton = "button#signup-submit";
  }

  async gotoLogin() {
    await this.page.goto(process.env.BASE_URL);
    await this.page.click("text=Log in");
    await expect(this.page).toHaveURL(/id\.atlassian\.com\/login/);
  }

  async login(email, password) {
    if (email) {
      await this.page.fill(this.emailInput, email);
      await this.page.click(this.continueButton);
    } else {
      await this.page.click(this.continueButton);
      return;
    }

    await expect(this.page.locator(this.passwordInput)).toBeVisible({ timeout: 10000 });

    if (password) {
      await this.page.fill(this.passwordInput, password);
    }

    await this.page.click(this.loginButton);

    if (password) {
      await expect(this.page).toHaveURL(/trello\.com/);
    }
  }

  async enterInvalidEmail(email) {
    await this.page.fill(this.emailInput, email);
    await this.page.click(this.continueButton);
    await this.page.click(this.registerButton);
  }

  async enterEmailWhitoutArroba(email) {
    await this.page.fill(this.emailInput, email);
    await this.page.click(this.continueButton);
  }

  async enterEmptySpaces(email) {
    await this.page.fill(this.emailInput, email);
    await this.page.click(this.continueButton);
  }

  async enterCharactesSpecial(email) {
    await this.page.fill(this.emailInput, email);
    await this.page.click(this.continueButton);
  }

  async loginWithGoogle() {
    await expect(this.googleButton).toBeVisible({ timeout: 10000 });
    await this.googleButton.click();
  }

  async getErrorMessage() {
    return this.errorMessage;
  }
}
