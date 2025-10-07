import dotenv from "dotenv";
dotenv.config();

const BASE_URL = process.env.BASE_URL_API;
const KEY = process.env.TRELLO_API_KEY;
const TOKEN = process.env.TRELLO_TOKEN;

export function buildUrl(endpoint, params = {}) {
  const url = new URL(`${BASE_URL}${endpoint}`);
  url.searchParams.append("key", KEY);
  url.searchParams.append("token", TOKEN);

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      url.searchParams.append(key, value);
    }
  });
  return url.toString();
}
