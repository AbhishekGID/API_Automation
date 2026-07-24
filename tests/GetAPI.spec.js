// @ts-check
// Using 'https://restful-booker.herokuapp.com/apidoc/index.html' For Testing

import { test, expect } from "@playwright/test";
import { request } from "node:http";

test("Get Request", async ({ request }) => {
  const GETReq = await request.get(
    "https://restful-booker.herokuapp.com/booking"
  );

  const GETReqJSON = await GETReq.json();
  console.log(GETReqJSON);
});

// Get Specific Booking ID
test.skip("Get Booking Deatils with ID GET Request", async ({ request }) => {
  const GetresponseBody = await request.get(
    "https://restful-booker.herokuapp.com/booking/10"
  );
  const ReponseData = await GetresponseBody.json();
  console.log(ReponseData);
  console.log("---------------");
  console.log(GetresponseBody.status());
  // Check StatusText
  expect(GetresponseBody.status()).toBe(200);
  console.log("--------------");
  console.log(GetresponseBody.statusText());
  // Check StatusText
  expect(GetresponseBody.statusText()).toBe("OK");
});
