// @ts-check
// Using 'https://restful-api.dev/' For Testing

import { test, expect } from "@playwright/test";

test("Get API ", async ({ request }) => {
  const response = await request.get("https://api.restful-api.dev/objects/1");
  const body = await response.json();
  const ResponseStatus = response.status();
  const ResponseText = await response.statusText();

  console.log(body);
  console.log(ResponseStatus);
  console.log(body.id);
  console.log(body.name);
  console.log(body.data);
  console.log(body.data.color);
  expect(body.id).toBe("1");
  expect(body.name).toBe("Google Pixel 6 Pro");
  expect(ResponseStatus).toBe(200); // Check API Reposnse
  expect(ResponseText).toBe("OK"); // Check API Reposnse Text
  expect(body).not.toBeNull(); // Check Repsone Body is NOT NULL
});
