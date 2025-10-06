import { expect } from "@playwright/test";
const { faker } = require("@faker-js/faker");

export class ToolsTableroPage {
  constructor(page) {
    this.page = page;
    this.tableros = this.page.locator("div.Dm9SyZvpL8MyK1 a[title]");
    this.btnFavorito = page
      .locator('button[aria-label="Star or unstar board"]')
      .first();
    this.btnTitulo = 'h1[data-testid="board-name-display"]';
    this.textoTitulo = 'input[data-testid="board-name-input"]';
    this.btnVisibilidad = page.locator(
      '//*[@id="trello-board-root"]/div/div/div/div[1]/div/span[2]/div[3]/span'
    );
    this.btnCompartir = 'button[data-testid="board-share-button"]';
    this.inpCompartir = 'input[data-testid="add-members-input"]';
    this.btnEnlace = 'button[data-testid="board-invite-link-create-button"]';
    this.btnPublic = page.locator("button", {
      hasText: "Yes, make board public",
    });
    this.opcionCorreo = 'button[data-testid="team-invitee-option"]';
    this.btnEnviarSolicitud = 'button[data-testid="team-invite-submit-button"]';
    this.btnOpcMiembro =
      'button[data-testid="board-permission-selector-dropdown--trigger"]';
    this.btnEliminar =
      'button[data-testid="confirm-remove-deactivated-member-button"]';
    this.btnMenu = 'button[aria-label="Show menu"]';
    this.acercaTablero = 'div[data-testid="board-menu-container"]';
    this.btnMenuAtras = 'button[aria-label="Return to previous screen"]';
    this.btnEditAcerca = 'button[data-testid="description-edit-button"]';
    this.btnCerrarCompartir = 'button[data-testid="board-invite-modal-close-button"]'
  }

  async seleccionarPrimerTablero() {
    await this.tableros.first().click();
  }

  async presionarBoton() {
    await this.btnFavorito.waitFor({ state: "visible", timeout: 10000 });
    await this.btnFavorito.click();
  }

  async verificarFavoritoMarcado() {
    const span = this.btnFavorito.locator('span[role="img"]');
    await expect(span).toHaveAttribute(
      "style",
      /color:\s*var\(--ds-background-warning-bold\)/
    );
  }

  async verificarFavoritoNoMarcado() {
    const span = this.btnFavorito.locator('span[role="img"]');
    await expect(span).toHaveAttribute("style", /color:\s*currentcolor/);
  }

  async asegurarMarcado() {
    const span = this.btnFavorito.locator('span[role="img"]');
    const color = await span.getAttribute("style");
    if (!color.includes("var(--ds-background-warning-bold)")) {
      await this.presionarBoton();
    }
  }

  async asegurarNoMarcado() {
    const span = this.btnFavorito.locator('span[role="img"]');
    const color = await span.getAttribute("style");
    if (color.includes("var(--ds-background-warning-bold)")) {
      await this.presionarBoton();
    }
  }

  async cambiarTitulo() {
    await this.page.click(this.btnTitulo);
    const nuevoTitulo = faker.lorem.words(3);
    await this.page.fill(this.textoTitulo, nuevoTitulo);
    await this.page.press(this.textoTitulo, "Enter");
    return nuevoTitulo;
  }

  async verificarTitulo(nuevoTitulo) {
    await expect(this.page.locator(this.btnTitulo)).toHaveText(nuevoTitulo);
  }

  async cambiarVisibilidad(visibilidad) {
    await this.btnVisibilidad.waitFor({ state: "visible", timeout: 10000 });
    await this.btnVisibilidad.click();
    const opcion = `button[data-testid="board-visibility-dropdown-${visibilidad}"]`;
    await this.page.click(opcion);
  }

  async aceptarPublic() {
    await this.btnPublic.waitFor({ state: "visible", timeout: 10000 });
    await this.btnPublic.click();
  }

  async verificarVisibilidad(visibilidad) {
    await expect(
      this.page.locator(
        `button[data-testid="board-visibility-option-${visibilidad}"]`
      )
    ).toBeVisible();
  }

  async compartirTablero(tipo, dato) {
    if (dato !== "Menu") {
      await this.page.click(this.btnCompartir);
    }
    if (tipo.includes("Correo")) {
      await this.page.fill(this.inpCompartir, dato);
      await this.page.click(this.btnEnviarSolicitud);
      if (tipo.includes("Correo invalido")) {
        const alertaCorreo = this.page.locator(
          "text=Enter a valid email address"
        );
        await alertaCorreo.waitFor({ state: "visible", timeout: 5000 });
        await expect(alertaCorreo).toBeVisible();
        return;
      }
      await this.page.click(this.btnEnviarSolicitud);
    }
    if (tipo === "Nombre") {
      await this.page.type(this.inpCompartir, dato, { delay: 50 });
      const opcion = this.page
        .locator('div[data-testid="team-invitee-option"]', { hasText: dato })
        .first();
      await opcion.waitFor({ state: "visible", timeout: 15000 });
      await opcion.click();
      await this.page.click(this.btnEnviarSolicitud);
    }
    if (tipo === "Enlace") {
      await this.page.click(this.btnEnlace);
      const mensaje = this.page.locator("span.p1LavKcsIXuMzJ.eR4s3J6ll2ROP6");
      await expect(mensaje).toBeVisible();
      await expect(mensaje).toHaveText("Link copied to clipboard");
      await this.eliminarLink();
    }
  }

  async verificarMiembro(nombre) {
    const miembro = this.page.locator(
      'span[data-testid="member-list-item-full-name"]',
      { hasText: nombre }
    );
    await expect(miembro).toBeVisible({ timeout: 10000 });
  }

  async eliminarLink() {
    await this.page.click('button:has-text("Delete link")');
  }

  async eliminarMiembro(nombre) {
    const miembroItem = this.page.locator('[data-testid="member-item"]', {
      has: this.page.locator('span[data-testid="member-list-item-full-name"]', {
        hasText: nombre,
      }),
    });
    const botonOpciones = miembroItem.locator(
      'button[data-testid="board-permission-selector-dropdown--trigger"]'
    );
    await botonOpciones.click();
    const opcionQuitar = this.page.getByRole("menuitem", {
      name: "Remove from board",
    });
    await opcionQuitar.click();
    await this.page.click(this.btnEliminar);
    const miembro = this.page.locator(
      'span[data-testid="member-list-item-full-name"]',
      { hasText: nombre }
    );
    await expect(miembro).toHaveCount(0);
    await this.page.click(this.btnCerrarCompartir);
  }

  async cambiarMiembroAdministrador(nombre) {
    const miembroItem = this.page.locator('[data-testid="member-item"]', {
      has: this.page.locator('span[data-testid="member-list-item-full-name"]', {
        hasText: nombre,
      }),
    });
    const botonOpciones = miembroItem.locator(
      'button[data-testid="board-permission-selector-dropdown--trigger"]'
    );
    await botonOpciones.click();
    const opcionAdmin = this.page.getByRole("menuitem", {
      name: "Admin",
    });
    await opcionAdmin.click();
  }

  async cambiarAdministradorMiembro() {
    await this.page.click(this.btnCompartir);
    const admin = this.page.locator('[data-testid="member-item"]').first();
    const botonOpciones = admin.locator(
      'button[data-testid="board-permission-selector-dropdown--trigger"]'
    );
    await botonOpciones.click();
    const opcionMiembro = this.page.getByRole("menuitem", { name: "Member" });
    const estaHabilitado = await opcionMiembro.isEnabled();
    if (estaHabilitado) {
      await opcionMiembro.click();
    }
  }
  async abrirMenu(opcion) {
    const menu = this.page.locator('div[data-testid="board-menu-container"]');
    const abierto = await menu.isVisible();
    if (!abierto) {
      await this.page.click(this.btnMenu);
      await expect(menu).toBeVisible();
    }
    //await this.page.pause()
    await menu.getByRole("button", { name: opcion }).first().click();
    if (opcion === "Close board") {
      const confirm = 'button[data-testid="popover-close-board-confirm"]';
      await this.page.click(confirm);
    }
  }

  async verificarAcercaTablero() {
    const menu = this.page.locator('div[data-testid="board-menu-container"]');
    await menu.waitFor({ state: "visible", timeout: 5000 });
    await expect(menu.locator("h3", { hasText: "Board admins" })).toBeVisible();
    await expect(menu.locator("h3", { hasText: "Description" })).toBeVisible();
  }

  async menuAtras() {
      await this.page.click(this.btnMenuAtras);
  }

  async editarAcercaTablero() {
    await this.page.click(this.btnEditAcerca);
    const editor = this.page.locator('div.ProseMirror[contenteditable="true"]');
    await editor.waitFor({ state: "visible", timeout: 5000 });
    const textoNuevo = faker.lorem.paragraphs(2);
    await editor.evaluate((el, texto) => {
      const parrafos = texto.split("\n").filter((p) => p.trim() !== "");
      parrafos.forEach((pText) => {
        const p = document.createElement("p");
        p.textContent = pText;
        el.appendChild(p);
      });
    }, textoNuevo);
  }

  async guardarDescripcion() {}
  async borrarTablero() {}
}
