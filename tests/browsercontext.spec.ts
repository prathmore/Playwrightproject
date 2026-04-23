import {test,expect,chromium} from '@playwright/test'
test('browsercontext', async({})=>{

    const browser= await chromium.launch();
    const context= await browser.newContext();
    const page1= await context.newPage();
    const page2= await context.newPage();
    console.log("no of pages are :-",context.pages.length);

    
    const playwright=await page1.goto('https://playwright.dev/');
    await expect(page1).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright');
    const selenium =await page2.goto('https://www.selenium.dev/');
 await expect(page2).toHaveTitle('Selenium');
  //await browser.close();
    

})