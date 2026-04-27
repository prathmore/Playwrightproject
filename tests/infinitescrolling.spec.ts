import { test, expect, Locator } from '@playwright/test';

test('scrolling', async ({ page }) => {
  test.slow();
  await page.goto('https://www.booksbykilo.in/new-books?pricerange=201to500');

  let previousHeight = 0;

  while (true) {
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });

    await page.waitForTimeout(2000);

    const currentHeight = await page.evaluate(() => {
      return document.body.scrollHeight;
    });

    console.log("previous height", previousHeight);
    console.log("currentheight ", currentHeight);
    if (currentHeight === previousHeight) {
      break;
    } else {
      previousHeight = currentHeight;
    }
  }

  console.log("reached end of the page");
});