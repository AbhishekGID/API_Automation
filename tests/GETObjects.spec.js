// @ts-check
// Using 'https://restful-api.dev/' For Testing

import { test, expect } from "@playwright/test";

test("Get API ", async ({ request }) => {
  const response = await request.get("https://api.restful-api.dev/objects/1");
  const body = await response.json();
  const Responsestatus = await response.status();
  //console.log(body);
  console.log(Responsestatus);
  expect(Responsestatus).toBe(200);
});
