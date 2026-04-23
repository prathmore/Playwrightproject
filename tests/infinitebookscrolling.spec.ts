import{test,expect,Locator} from '@playwright/test'
test('scrollingbook', async({page})=>{
 test.slow();
    await page.goto('https://www.booksbykilo.in/new-books?pricerange=201to500');

    let previousheight=0;
    let scrollbook=false;

    while(true)
    {
        const booktitles=await page.locator('#productsDiv h3').allInnerTexts();
        if (booktitles.includes('Rishi Sunak: The Rise'))
        {
            console.log('book found')
            scrollbook=true;
         expect(booktitles).toBeTruthy();
         break;

        }
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

if(!scrollbook)
{
    console.log(' book not found');
    
}

})