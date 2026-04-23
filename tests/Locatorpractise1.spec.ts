import {test,expect,Locator} from '@playwright/test'

test('Basic locator', async ({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");
    const title=page.getByText("Sign up for our newsletter:");
    await expect(title).toBeVisible();
    await page.locator('#newsletter-email').fill("prathamesh");
    await page.getByRole('button',{name:'Subscribe'}).click();
    const radioexcellent:any=page.getByRole('radio',{name: 'Excellent'});
    await radioexcellent.check(); 
    await expect(radioexcellent).toBeChecked();
    //
    await page.waitForTimeout(8000);

})
test.only('switchcasecheckboxselection', async ({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");
    const title=page.getByText("Sign up for our newsletter:");
    await expect(title).toBeVisible();
    await page.locator('#newsletter-email').fill("prathamesh");
    await page.getByRole('button',{name:'Subscribe'}).click();
    const radioexcellent:any=page.getByRole('radio',{name: 'Excellent'});
    await radioexcellent.check(); 
    await expect(radioexcellent).toBeChecked();
    //
    await page.waitForTimeout(8000);

})