import{test,expect,chromium} from '@playwright/test'

test('popupwindow',async({browser,context})=>{

   const page1= await context.newPage();
   await page1.goto('https://testautomationpractice.blogspot.com/');
   const datetime=Date.now;
   page1.screenshot({path:'test-results/'+datetime+'firstpage.png',fullPage:true})

   await Promise.all([page1.waitForEvent('popup'),await page1.locator('#PopUp').click()])
   
   const allwindows=context.pages();
   console.log("Total pages are",allwindows.length);
      console.log("parent page",allwindows[0].url());
    console.log("child page", allwindows[1].url());
    //console.log("child page", allwindows[2].url());

    for (const popup of allwindows)
{
    const alltitle=await popup.title();
    if (alltitle.includes('Playwright'))
    {
        console.log("element found and clicked", await page1.locator('.getStarted_Sjon').click());
        await page1.waitForTimeout(3000);
    await popup.close();
    }
    
}  

})