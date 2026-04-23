import{test,expect,Locator} from '@playwright/test'
test('scrolling', async({page})=>{
 test.slow();
    await page.goto('https://www.booksbykilo.in/new-books?pricerange=201to500');

    let previousheight=0;

    while(true)
    {
        await page.evaluate(() =>{
            window.scrollTo(0,document.body.scrollHeight);
        })

        await page.waitForTimeout(2000);

        const currentheight= await page.evaluate(() =>{
          return document.body.scrollHeight;
        })


        console.log("previous height",previousheight);
        console.log("currentheight ",currentheight);
        if (currentheight===previousheight)
        {
            break;
        }
        else{
            previousheight=currentheight;
        }
    }

console.log("reached end of the page")

})