import {test,expect,Locator, Page} from '@playwright/test'

/*test('simpledatefield',async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    const datetextbox= page.locator('#datepicker');
    await datetextbox.fill('02/11/2026')
    await page.waitForTimeout(3000);
})*/
async function Selectdate (Targetyear:string,Targetmonth:string,Targetday:string,page:Page,isFuture:boolean)
{
    while(true)
 {
    const currentmonth= await page.locator('.ui-datepicker-month').textContent();
     const currentyear= await page.locator('.ui-datepicker-year').textContent();
     //console.log(`${currentmonth} ${currentyear}`)
     if (currentmonth===Targetmonth && currentyear===Targetyear)
     {
        break;
     }
     if(isFuture)
     {
        await page.locator('.ui-datepicker-next').click();
     }
     else{
        await page.locator('.ui-datepicker-prev').click();
     }
        
    }

     const datelocator= await page.locator('.ui-datepicker-calendar td').all();

     for (let dt of datelocator)
     {
        const datetext =await dt.innerText();
        if (datetext===Targetday)
        {
            await dt.click();
            break;
        }
        else{
            console.log('no date found');
        }
     
     //await page.waitForTimeout(3000);

 }

}
test.only('putting condition to select date',async({page})=>{

    

    await page.goto('https://testautomationpractice.blogspot.com/');
const datetextbox= page.locator('#datepicker');
await datetextbox.click();
const year='2025';
const month='June';
const date='15';


Selectdate(year,month,date,page,false); // futuredate-true  pastdate-false

const expectedDate='06/15/2025';   //mm//dd//yyyy
await expect(datetextbox).toHaveValue(expectedDate);

await page.waitForTimeout(5000);
 

})