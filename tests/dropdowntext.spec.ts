import {test,expect,Locator} from '@playwright/test'

test('Dropdownactiontext', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    const alldropdownoption:Locator = page.locator('#colors>option');
    await expect(alldropdownoption).toHaveCount(7);

    // Find the option with value 'blue' and get its innerText
    const blueOptionLocator = page.locator('#colors>option[value="blue"]');
    const blueInnerText = await blueOptionLocator.innerText();
    console.log('InnerText of blue option:', blueInnerText);
    expect(blueInnerText.trim().toLowerCase()).toBe('blue');

    // Optionally, select the blue option to show selection works
    await page.locator('#colors').selectOption('blue');

})