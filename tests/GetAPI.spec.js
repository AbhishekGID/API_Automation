// @ts-check
// Using 'https://restful-booker.herokuapp.com/apidoc/index.html' For Testing

import { test, expect } from "@playwright/test";
import { request } from "node:http";


// Get all Booking Ids
test("Get Booking ID - GET Request", async ({ request }) => {
  const GetRequest = await request.get(
    "https://restful-booker.herokuapp.com/booking"
  );

  const GETResponse = await GetRequest.json();
  console.log(GETResponse);
});

// Get Specific Booking ID
test("Get Booking Deatils with ID GET Request", async ({ request }) => {
  const GetresponseBody = await request.get("https://restful-booker.herokuapp.com/booking/1");
  const ReponseData = await GetresponseBody.json()
  console.log(ReponseData)
  console.log("--------------")
  console.log(GetresponseBody.statusText())
  // Check StatusText 
  expect(GetresponseBody.statusText()).toBe('OK')


});
