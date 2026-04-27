import { test, expect } from '@playwright/test';

test.only(' @masterselect specific date from datepicker', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  const datetextbox = page.locator('#datepicker');
  await datetextbox.click();

  const targetDate = '31';
  const targetMonth = 'May';
  const targetYear = '2026';

  while (true) {
    const currentMonth = await page.locator('.ui-datepicker-month').innerText();
    const currentYear = await page.locator('.ui-datepicker-year').innerText();

    if (currentMonth === targetMonth && currentYear === targetYear) {
      // Now select the date
      const dateCells = await page.locator('.ui-datepicker-calendar td').all();
      for (const cell of dateCells) {
        const cellText = await cell.innerText();
        if (cellText === targetDate) {
          await cell.click();
          return; // exit test once date is selected
        }
      }
    } else {
      await page.locator('.ui-datepicker-next').click();
    }
  }
});
