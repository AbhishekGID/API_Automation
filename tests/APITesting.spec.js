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

test.skip("POST and GET CHAINING ", async ({ request }) => {
  const payload = {
    name: "Apple MacBook Pro 16(New)",
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
  const NewID = Reqbody.id;

  const GETResponse = await request.get(
    `https://api.restful-api.dev/objects/${NewID}`
  );
  const Getbody = await GETResponse.json();
  console.log(Getbody);
});

test.skip("POST and PUT CHAINING ", async ({ request }) => {
  const payload = {
    name: "Apple MacBook Pro 16(New)",
    data: {
      year: 2019,
      price: 1849.99,
      "CPU model": "Intel Core i9",
      "Hard disk size": "1 TB",
    },
  };

  const Newpayload = {
    name: "Apple MacBook Pro 16(Updated)",
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
  console.log("------------------");
  console.log(Reqbody);
  console.log("------------------");

  const NewID = Reqbody.id;

  const PUTendpoint = `https://api.restful-api.dev/objects/${NewID}`;
  const PUTresponse = await request.put(PUTendpoint, {
    headers: { "Content-Type": "application/json" },
    data: Newpayload,
  });

  const PUTbody = await PUTresponse.json();
  console.log("------------------");
  console.log(PUTbody);
  console.log("------------------");
});

test.skip("POST, DELETE CHAINING", async ({ request }) => {
  const payload = {
    name: "Apple MacBook Pro 16(New)",
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
  console.log("------------------");
  console.log(Reqbody);
  console.log("------------------");
  const NewID = Reqbody.id;


  const Deleteendpoint = `https://api.restful-api.dev/objects/${NewID}`;
  const DeleteResponse = await request.delete(Deleteendpoint);

  const Deletebody = await DeleteResponse.json();
  console.log("------------------");
  console.log(Deletebody);
  console.log("------------------");



});

test.skip("POST, PATCH CHAINING ", async ({ request }) => {
  const payload = {
    name: "Apple MacBook Pro 16(New)",
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
  console.log("------------------");
  console.log(Reqbody);
  const NewID = Reqbody.id;
  console.log(NewID)
  console.log("------------------");


  const PatchEndPoint = `https://api.restful-api.dev/objects/${NewID}`;
  const PatchResponse = await request.patch(PatchEndPoint, {
    headers: { "Content-Type": "application/json" },
    data: {
      "name": "Apple MacBook Pro 16 (Updated Name)"
    },
  });

  const Patchbody = await PatchResponse.json();
  console.log("------------------");
  console.log(Patchbody);
  console.log("------------------");



});