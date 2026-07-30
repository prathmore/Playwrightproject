import { test, expect } from "@playwright/test";

test('Get booking details by Id- path param', async ({ request }) => {

    const listResponse = await request.get('/booking');
    expect(listResponse.ok()).toBeTruthy();

    const bookings = await listResponse.json();
    expect(Array.isArray(bookings)).toBeTruthy();
    expect(bookings.length).toBeGreaterThan(0);

    const bookingId = bookings[0].bookingid;
    expect(typeof bookingId).toBe('number');

    const response = await request.get(`/booking/${bookingId}`);
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    console.log(responseBody);

    expect(responseBody).toHaveProperty('firstname');
    expect(responseBody).toHaveProperty('lastname');
    expect(responseBody).toHaveProperty('bookingdates');

})


test('Get booking details by Name- query params', async ({ request }) => {

    const firstname = "Jim";
    const lastname = "Brown";

    //sending get request along with query parameters
    const response = await request.get("/booking", {
        params:
        {
            firstname,
            lastname
        }
    });

    //parse the response and print
    const responseBody = await response.json();
    console.log(responseBody);

    //add assertions
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    //check response should not be empty
    expect(responseBody.length).toBeGreaterThan(0);

    for(const item of responseBody)
    {
        expect(item).toHaveProperty('bookingid');
        expect(typeof item.bookingid).toBe("number");
        expect(item.bookingid).toBeGreaterThan(0);
    }

})