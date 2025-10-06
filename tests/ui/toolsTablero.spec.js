import { test, expect } from "../../utils/fixtures.js";
import { ToolsTableroPage } from "../../pages/toolsTablero.js";
const { faker } = require("@faker-js/faker");
import { screenshotPath } from "../../utils/helpers.js";
import { Logger } from "../../utils/helpers.js";

test("Marcar primer tablero como favorito", async ({ createFixture }) => {
  Logger.info("Inicio del test");
  const tablero = new ToolsTableroPage(createFixture);
  try {
    await tablero.asegurarMarcado();
    await tablero.verificarFavoritoMarcado();
    await tablero.abrirMenu("Close board");
  } catch (err) {
    await page.screenshot({ path: screenshotPath(`Marcar primer tablero como favorito`) });
    throw err;
  }
});

test("Desmarcar primer tablero como favorito", async ({ createFixture }) => {
  const page = createFixture;
  const tablero = new ToolsTableroPage(page);
  await tablero.asegurarNoMarcado();
  await tablero.verificarFavoritoNoMarcado();
  await tablero.abrirMenu("Close board");
});

test("Cambiar título de tablero", async ({ createFixture }) => {
  const page = createFixture;

  const tablero = new ToolsTableroPage(page);
  const nuevoTitulo = await tablero.cambiarTitulo();
  await tablero.verificarTitulo(nuevoTitulo);
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
      const page = createFixture;

      const tablero = new ToolsTableroPage(page);
      await tablero.cambiarVisibilidad(tipo);
      if (aceptarPublico) {
        await tablero.aceptarPublic();
      }
      await tablero.verificarVisibilidad(valorVerificacion);
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
      const page = createFixture;

      const tablero = new ToolsTableroPage(page);
      await tablero.compartirTablero(tipo, dato);

      if (nombre) {
        await tablero.verificarMiembro(nombre);
        await tablero.eliminarMiembro(nombre);
      } else {
        if (dato) {
          const usernameEsperado = "@" + dato.split("@")[0];
          await tablero.verificarMiembro(usernameEsperado);
          await tablero.eliminarMiembro(usernameEsperado);
        }
      }
      await tablero.abrirMenu("Close board");
    });
  }
});

test("Cambiar miembro a administrador", async ({ createFixture }) => {
  const page = createFixture;

  const nombre = "Sergio Brayan Soliz Nogales";
  const tablero = new ToolsTableroPage(page);
  await tablero.compartirTablero("Nombre", nombre);
  await tablero.verificarMiembro(nombre);
  await tablero.cambiarMiembroAdministrador(nombre);
  await tablero.eliminarMiembro(nombre);
  await tablero.abrirMenu("Close board");
});

test("Cambiar Administrador a miembro", async ({ createFixture }) => {
  const page = createFixture;

  const tablero = new ToolsTableroPage(page);
  await tablero.cambiarAdministradorMiembro();
  await tablero.abrirMenu("Close board");
});

test("Compartir tablero desde menu", async ({ createFixture }) => {
  const page = createFixture;

  const tablero = new ToolsTableroPage(page);
  await tablero.seleccionarPrimerTablero();
  await tablero.abrirMenu("Share");
  await tablero.compartirTablero("Enlace", "Menu");
  await tablero.abrirMenu("Close board");
});

test("Acerca del tablero", async ({ createFixture }) => {
  const page = createFixture;

  const tablero = new ToolsTableroPage(page);
  await tablero.abrirMenu("About this board");
  await tablero.verificarAcercaTablero();
  await tablero.abrirMenu("Close board");
});

test("Atras acerca del trablero", async ({ createFixture }) => {
  const page = createFixture;
  const tablero = new ToolsTableroPage(page);
  await tablero.abrirMenu("About this board");
  await tablero.verificarAcercaTablero();
  await tablero.menuAtras();
  await tablero.abrirMenu("Close board");
});

test("Atras  del trablero", async ({ createFixture }) => {
  const tablero = new ToolsTableroPage(createFixture);
  await tablero.abrirMenu("About this board");
  await tablero.verificarAcercaTablero();
  await tablero.editarAcercaTablero();
  //await tablero.guardarDescripcion("Boton")
  await tablero.abrirMenu("Close board");
});
