// @ts-check
// Using 'https://restful-booker.herokuapp.com/apidoc/index.html' For Testing

import { test, expect } from "@playwright/test";
import { request } from "node:http";

test("Get Booking ID - GET Request", async ({ request }) => {
  const GetRequest = await request.get(
    "https://restful-booker.herokuapp.com/booking"
  );

  const GETResponse = await GetRequest.json();
  console.log(GETResponse);
});
