// @ts-check
import { test, expect } from "@playwright/test";

test("Get API ", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/users/1"
  );

  const body = await response.json();

  console.log(body);
});
