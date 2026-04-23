import {test,expect} from '@playwright/test';

test('compare screenshot',async ({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    // Wait for the logo to be visible
    const logo = page.locator("img[alt='Tricentis Demo Web Shop']");
    await logo.waitFor({ state: 'visible', timeout: 10000 });
    // Optionally, wait for the page to be fully loaded
    await page.waitForLoadState('networkidle');
    expect(await logo.screenshot()).toMatchSnapshot("logo.png");
});