import { test, expect } from "@playwright/test";
import { buildUrl } from "../../utils/apiClient.js";
import { boardPayload } from "../../payloads/boardPayload.js";
import { generateBoardData } from "../../data/boardData.js";
import { assertStatusCode } from "../../assertions/status_code_assertions.js";
import { Logger } from "../../utils/helpers.js";

test("@api @positive @smoke Verificar creación exitosa de board - status 200", async ({ request }) => {
  const boardData = generateBoardData();
  const body = boardPayload(boardData);
  const url = buildUrl("/boards/");

  Logger.info(`iniciando test creacion de board ${boardData.name}`);

  const response = await request.post(url, {
    data: body,
    headers: { "Content-Type": "application/json" },
  });

  Logger.info(`respuesta status con status ${response.status()}`);
  assertStatusCode(response, 200);

  const responseBody = await response.json();
  expect(response.ok()).toBeTruthy();
  expect(responseBody).toHaveProperty("id");
  expect(responseBody.name).toBe(boardData.name);

  Logger.info(`creación exitosa del board con ID ${responseBody.id}`);
});

test("@api @negative @auth Verificar creación de board sin Api Key ni token - status 401 Unauthorized", async ({ request }) => {
  const { name } = generateBoardData();
  const url = "https://api.trello.com/1/boards/";
  Logger.info(`Iniciando test sin API Key ni Token`);

  const response = await request.post(url, { params: { name } });
  Logger.info(`respuesta recibida con status ${response.status()}`);

  assertStatusCode(response, 401);
});

test("@api @negative @auth Verificar creación de board con Api Key inválida y token invalido - status 401 Unauthorized", async ({ request }) => {
  const { name, desc } = generateBoardData();
  const url = `${process.env.BASE_URL_API}/boards/`;
  Logger.info(`iniciando test con API Key y Token invalidos`);

  const response = await request.post(url, {
    params: {
      name,
      desc,
      key: "fakeApiKey_12345",
      token: "fakeToken_67890",
    },
  });

  Logger.info(`respuesta recibida con status ${response.status()}`);
  assertStatusCode(response, 401);

  const resp = await response.text();
  expect(resp.toLowerCase()).toContain("invalid key");
});

test("@api @negative Verificar creación de board con el campo name vacío - status 400 Bad Request", async ({ request }) => {
  const url = `${process.env.BASE_URL_API}/boards/`;
  Logger.info(`iniciando test con campo name vacío`);

  const response = await request.post(url, {
    params: {
      key: process.env.TRELLO_API_KEY,
      token: process.env.TRELLO_TOKEN,
    },
  });

  Logger.info(`respuesta recibida con status ${response.status()}`);
  assertStatusCode(response, 400);

  const resp = await response.json();
  expect(resp).toHaveProperty("message");
  expect(resp.message.toLowerCase()).toContain("invalid value for name");
  expect(resp.error).toBe("ERROR");
});

test("@api @negative Verificar creación de board con espacios en el name - status 400 Bad Request", async ({ request }) => {
  const url = `${process.env.BASE_URL_API}/boards/`;
  Logger.info(`iniciando test con campo name con espacios`);

  const response = await request.post(url, {
    params: {
      key: process.env.TRELLO_API_KEY,
      token: process.env.TRELLO_TOKEN,
    },
    data: { name: "    " },
  });

  Logger.info(`respuesta recibida con status ${response.status()}`);
  assertStatusCode(response, 400);

  const body = await response.json();
  expect(body).toHaveProperty("message");
  expect(body.message.toLowerCase()).toContain("invalid value for name");
  expect(body.error).toBe("ERROR");
});
