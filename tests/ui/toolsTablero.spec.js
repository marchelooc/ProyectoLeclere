import { test, expect } from "../../utils/fixtures.js";
import { ToolsTableroPage } from "../../pages/toolsTablero.js";
const { faker } = require("@faker-js/faker");
import { screenshotPath } from "../../utils/helpers.js";
import { Logger } from "../../utils/helpers.js";

test("Marcar primer tablero como favorito", async ({ createFixture }) => {
  const tablero = new ToolsTableroPage(createFixture);
  try {
    Logger.info("Click en favorito");
    await tablero.asegurarMarcado();
    Logger.info("Verificar marcado como favorito");
    await tablero.verificarFavoritoMarcado();
    Logger.info("Marcado correctamente");
    Logger.info("Cerrar tablero");
    await tablero.abrirMenu("Close board");
  } catch (err) {
    await page.screenshot({
      path: screenshotPath(`Marcar primer tablero como favorito`),
    });
    throw err;
  }
});

test("Desmarcar primer tablero como favorito", async ({ createFixture }) => {
  const tablero = new ToolsTableroPage(createFixture);
  Logger.info("Click en favorito");
  await tablero.asegurarMarcado();
  Logger.info("Verificar marcado como favorito");
  await tablero.verificarFavoritoMarcado();
  Logger.info("Click en favorito");
  await tablero.asegurarNoMarcado();
  Logger.info("Verificar desmarcado como favorito");
  await tablero.verificarFavoritoNoMarcado();
  Logger.info("Desmarcado correctamente");
  Logger.info("Cerrar tablero");
  await tablero.abrirMenu("Close board");
});

test("Cambiar título de tablero", async ({ createFixture }) => {
  const tablero = new ToolsTableroPage(createFixture);
  Logger.info("Cambiando titulo");
  const nuevoTitulo = await tablero.cambiarTitulo();
  Logger.debug("Nuevo titulo: " + nuevoTitulo);
  Logger.info("Verificar cambio de titulo");
  await tablero.verificarTitulo(nuevoTitulo);
  Logger.info("Titulo cambiado correctamente");
  Logger.info("Cerrar tablero");
  await tablero.abrirMenu("Close board");
});

test.describe("Cambiar visibilidad de tableros", () => {
  const visibilidades = [
    { tipo: "Private", valorVerificacion: "private" },
    { tipo: "Workspace", valorVerificacion: "org" },
    { tipo: "Public", valorVerificacion: "public", aceptarPublico: true },
  ];

  for (const { tipo, valorVerificacion, aceptarPublico } of visibilidades) {
    test(`Cambiar visibilidad a ${tipo}`, async ({ createFixture }) => {
      const tablero = new ToolsTableroPage(createFixture);
      Logger.debug("Cambiar visibilidad a " + tipo);
      await tablero.cambiarVisibilidad(tipo);
      if (aceptarPublico) {
        Logger.info("Confirmacion de cambiar a publico");
        await tablero.aceptarPublic();
      }
      Logger.info("Verificar cambio de visibilidad");
      await tablero.verificarVisibilidad(valorVerificacion);
      Logger.info("Cambio de visibilidad correctamente");
      Logger.info("Cerrar tablero");
      await tablero.abrirMenu("Close board");
    });
  }
});

const correosInvalidos = [
  "usuario@",
  "usuario@gmail",
  "@gmail.com",
  "usuario@@gmail.com",
  "usuario gmail.com",
  "usuario@.com",
];

test.describe("Compartir tablero", () => {
  const tipos = [
    {
      tipo: "Correo valido",
      dato: "sergiosoliznogales@gmail.com",
      nombre: "Sergio Brayan Soliz Nogales",
    },
    { tipo: "Correo no registrado", dato: faker.internet.email() },
    { tipo: "Nombre", dato: "Ronald Paniagua", nombre: "Ronald Paniagua" },
    { tipo: "Enlace" },
    ...correosInvalidos.map((correo) => ({
      tipo: "Correo invalido",
      dato: correo,
    })),
  ];

  for (const { tipo, dato, nombre } of tipos) {
    test(`Compartir tablero por ${tipo} (${dato})`, async ({
      createFixture,
    }) => {
      const tablero = new ToolsTableroPage(createFixture);
      Logger.info("Abrir modal compartir");
      await tablero.compartirTablero(tipo, dato);
      if (nombre) {
        Logger.debug("Nombre: " + nombre);
        Logger.info("Verificar a miembro " + nombre);
        await tablero.verificarMiembro(nombre);
        Logger.info("Eliminar a miembro " + nombre);
        await tablero.eliminarMiembro(nombre);
        Logger.info("Miembro eliminado correctamente");
      } else {
        if (dato) {
          const usernameEsperado = "@" + dato.split("@")[0];
          Logger.debug("User name: " + usernameEsperado);
          Logger.info("Verificar a miembro " + usernameEsperado);
          await tablero.verificarMiembro(usernameEsperado);
          Logger.info("Eliminar a miembro " + usernameEsperado);
          await tablero.eliminarMiembro(usernameEsperado);
          Logger.info("Miembro eliminado correctamente");
        }
      }
      Logger.info("Cerrar tablero");
      await tablero.abrirMenu("Close board");
    });
  }
});

test("Cambiar miembro a administrador", async ({ createFixture }) => {
  const nombre = "Sergio Brayan Soliz Nogales";
  Logger.debug("Nombre: " + nombre);
  const tablero = new ToolsTableroPage(createFixture);
  Logger.info("Compartir tablero a : " + nombre);
  await tablero.compartirTablero("Nombre", nombre);
  Logger.info("Verificar a miembro " + nombre);
  await tablero.verificarMiembro(nombre);
  Logger.info("Cambiar a miembro a administrador");
  await tablero.cambiarMiembroAdministrador(nombre);
  Logger.info("Eliminar a miembro " + nombre);
  await tablero.eliminarMiembro(nombre);
  Logger.info("Cerrar tablero");
  await tablero.abrirMenu("Close board");
});

test("Cambiar Administrador a miembro", async ({ createFixture }) => {
  const tablero = new ToolsTableroPage(createFixture);
  Logger.info("Cambiar a administrador a miembro");
  await tablero.cambiarAdministradorMiembro();
  Logger.info("Cerrar tablero");
  await tablero.abrirMenu("Close board");
});

test("Compartir tablero desde menu", async ({ createFixture }) => {
  const tablero = new ToolsTableroPage(createFixture);
  Logger.info("Abrir menu de tablero");
  await tablero.abrirMenu("Share");
  Logger.info("Compartir tablero por enlace");
  await tablero.compartirTablero("Enlace", "Menu");
  Logger.info("Cerrar tablero");
  await tablero.abrirMenu("Close board");
});

test("Acerca del tablero", async ({ createFixture }) => {
  const tablero = new ToolsTableroPage(createFixture);
  Logger.info("Abrir menu de tablero");
  Logger.info("Seleccionar acerca del tablero");
  await tablero.abrirMenu("About this board");
  Logger.info("Verificar acerca del tablero");
  await tablero.verificarAcercaTablero();
  Logger.info("Cerrar tablero");
  await tablero.abrirMenu("Close board");
});

test("Atras acerca del trablero", async ({ createFixture }) => {
  const tablero = new ToolsTableroPage(createFixture);
  Logger.info("Abrir menu de tablero");
  Logger.info("Seleccionar acerca del tablero");
  await tablero.abrirMenu("About this board");
  Logger.info("Verificar acerca del tablero");
  await tablero.verificarAcercaTablero();
  Logger.info("Atras acerca del tablero");
  await tablero.menuAtras();
  Logger.info("Cerrar tablero");
  await tablero.abrirMenu("Close board");
});

test("Guardar descripcion de acerca del trablero", async ({
  createFixture,
}) => {
  const tablero = new ToolsTableroPage(createFixture);
  Logger.info("Abrir menu de tablero");
  Logger.info("Seleccionar acerca del tablero");
  await tablero.abrirMenu("About this board");
  Logger.info("Verificar acerca del tablero");
  await tablero.verificarAcercaTablero();
  Logger.info("Editar descripcion del tablero");
  const texto = await tablero.editarAcercaTablero();
  Logger.info("Guardar descripcion del tablero");
  await tablero.guardarDescripcion("Boton");
  Logger.info("Verificar descripcion del tablero");
  await tablero.verificarGuardado(texto);
  Logger.info("Atras acerca del tablero");
  await tablero.menuAtras();
  Logger.info("Cerrar tablero");
  await tablero.abrirMenu("Close board");
});
