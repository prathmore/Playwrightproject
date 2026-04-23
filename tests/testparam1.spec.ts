import { test, expect, Locator } from '@playwright/test';

let searchitems = ['laptop', 'Gift card', 'smartphone', 'monitor'];

for (const [item] of searchitems) {
  test(`searchitems : ${item}`, async ({ page }) => {
    //const context = await browser.newContext({ ignoreHTTPSErrors: true });
    //const page = await context.newPage();

    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator('#small-searchterms').fill(item);   // ✅ added '#' for ID selector
    await page.locator('input[type="submit"]').click();

    await expect(page.locator('h2 a').nth(0)).toContainText(item, { ignoreCase: true }); // ✅ removed stray '.'
  });
}
