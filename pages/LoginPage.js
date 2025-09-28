import { expect } from "@playwright/test";

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = "input#username-uid1, input[name='username']"; // a veces cambia, por eso pongo 2
    this.continueButton = "button#login-submit";
    this.passwordInput = "input#password";
    this.loginButton = "button#login-submit";
  }

  async gotoLogin() {
    await this.page.goto(process.env.BASE_URL);
    await this.page.click("text=Log in"); // botón de la home Trello
    await expect(this.page).toHaveURL(/id\.atlassian\.com\/login/);
  }

  async login(email, password) {
    // paso 1: correo
    await this.page.fill(this.emailInput, email);
    await this.page.click(this.continueButton);

    // paso 2: password
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);

    // verificación: si aparece el dashboard Trello
    await expect(this.page).toHaveURL(/trello\.com/);
  }
}
