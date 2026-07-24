import { test, expect } from "@playwright/test";

// Using Test data from Sperate JSON File
const bookReqBody = require("../test-Data/post_request_body.json");

//  Using  https://restful-booker.herokuapp.com

test("Create POST api request using Static JSON File ", async ({ request }) => {
  const endpoint = "/booking";
  const response = await request.post(endpoint, {
    headers: { "Content-Type": "application/json" },
    data: bookReqBody,
  });

  console.log("--------------");
  console.log(response.statusText());
  // Check StatusText
  expect(response.statusText()).toBe("OK");

  console.log("--------------");
  console.log(response.status());
  // Check reponse Code
  expect(response.status()).toBe(200);

  console.log("--------------");
  const Reqbody = await response.json();
  console.log(Reqbody);
  console.log("--------------");
  console.log(Reqbody.booking.lastname);
  // Check Data in Response Body
  expect(Reqbody.booking.lastname).toBe("Tyagi");

  const BookingID = console.log(Reqbody.bookingid);
  const DeleteResponse = await request.delete(
    `https://restful-booker.herokuapp.com/booking/${BookingID}`
  );
  console.log(DeleteResponse.status());
});
