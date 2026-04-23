import { test, expect, Locator } from '@playwright/test';

test.only('mukeshbooks', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  const table: Locator = page.locator('table[name="BookTable"]>tbody');
  await expect(table).toBeVisible();

  const tablerow: Locator = table.locator('tr');
  console.log('Books written by Mukesh are as follows:');

  const allrows: Locator[] = await tablerow.all();

  // skip header row
  for (let allrow of allrows.slice(1)) {
    // ✅ use allrow here, not tablerow
    const col = await allrow.locator('td').allInnerTexts();
    const bookname = col[0];   // first column is book name
    const author = col[1];     // second column is author

    if (author === 'Mukesh') {
      console.log(`${author}\t${bookname}`);
    }
  }
});
