import{test,expect,chromium} from '@playwright/test'
test('authenticatepopup', async({})=>{

const browser= await chromium.launch();
const context= await browser.newContext({httpCredentials:{username:'admin', password:'admin'}});
const page= await context.newPage();

await page.goto('https://the-internet.herokuapp.com/basic_auth');
await page.waitForLoadState();
const message= page.getByText('Congratulations! You must have the proper credentials.')
await expect(message).toBeVisible();

})

test('approach2', async ({page}) =>{
//await page.goto('https://the-internet.herokuapp.com/basic_auth');
    await page.goto('http://admin:admin@the-internet.herokuapp.com/basic_auth');

    await page.waitForLoadState(); // wait ofr page loaded completely
    
    await expect(page.locator('text=Congratulations')).toBeVisible();

    await page.waitForTimeout(5000);

})
