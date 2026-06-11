// @ts-check
// Using 'https://restful-api.dev/' For Testing

import { test, expect } from "@playwright/test";

test.skip("Get API ", async ({ request }) => {
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
  expect(body).not.toBeNull(); // Check Repsone Body is NOT
});

test("POST API ", async ({ request }) => {
  const payload = {
    name: "Apple MacBook Pro 16",
    data: {
      year: 2019,
      price: 1849.99,
      "CPU model": "Intel Core i9",
      "Hard disk size": "1 TB",
    },
  };

  const endpoint = "https://api.restful-api.dev/objects";
  const response = await request.post(endpoint, {
    headers: { "Content-Type": "application/json" },
    data: payload,
  });

  const Reqbody = await response.json();
  console.log(Reqbody);

  const GETResponse = request.get(
    "https://api.restful-api.dev/objects/ff8081819d82fab6019eb6da5b887255"
  );
});
