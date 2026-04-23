import {test,expect,Locator} from '@playwright/test'
test ('dynamic dropdown', async ({page})=>{

    await page.goto("https://www.flipkart.com/");
   await page.locator("input[name='q']").fill("mobile");
    await page.waitForTimeout(5000);
    const option:Locator= page.locator('ul>li');
    const count=await option.count();
    console.log("visible option in dropdown",count)
    const fifthelement=(await option.nth(4).textContent());
    await option.nth(4).click();
   
    console.log('fifth element is:',fifthelement)
    for (let i=0;i<count;i++)
    {
        const text=await option.nth(i).textContent()
         console.log('all elements printed are as follow:',text);
         if(text==='mobile gimbal')
         {
            option.nth(i).click();
            await page.waitForTimeout(3000);
         }
    }

    //

})

