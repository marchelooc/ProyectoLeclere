import { expect } from "@playwright/test";

export function assertStatusCodeOk(response) {
  const status = response.status();
  expect(response.ok(), `la respuesta no fue exitosa (status: ${status})`).toBeTruthy();
  console.log(`respuesta ok (status ${status})`);
}

export function assertStatusCode(response, expectedStatus) {
  const status = response.status();
  expect(
    status,
    `status incorrecto: se esperaba ${expectedStatus} pero fue ${status}`
  ).toBe(expectedStatus);
  console.log(`respuesta con status esperado (${expectedStatus})`);
}
