import{test,expect,Locator} from '@playwright/test'
test('keyboard actions', async ({page}) =>{

await page.goto("https://testautomationpractice.blogspot.com/");

const txtbox1= page.locator('#input1');
txtbox1.focus();
await page.keyboard.insertText('prathamesh');
await page.keyboard.press('Control+A');
await page.keyboard.press('Control+C');
await page.keyboard.press('Tab');
await page.keyboard.press('Tab');

// input2 paste
await page.keyboard.press('Control+V');
await page.keyboard.press('Tab');
await page.keyboard.press('Tab');
await page.keyboard.press('Control+V');

await page.waitForTimeout(2000);




}
)