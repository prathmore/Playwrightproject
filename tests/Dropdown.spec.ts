import {test,expect,Locator} from '@playwright/test'

test('Dropdownaction', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    const alldropdownoption:Locator=  page.locator('#colors>option');
    await expect(alldropdownoption).toHaveCount(7);
       //const trimdropdown:string[]=(await alldropdownoption.allInnerTexts());;
    const trimdropdown:string[]=(await alldropdownoption.allTextContents()).map(text => text.trim());
    for(const alltext of trimdropdown)
    {
        console.log('all text are',alltext);
        
    }
    
 const originallist:string[]=[...trimdropdown];
 const sortlist:string[]=[...trimdropdown.sort()];
 console.log('original array',originallist);
 console.log('Sorted list',sortlist);
// select different colour with different ways
await page.locator('#colors').selectOption('blue');
await page.locator('#colors').selectOption({value:'red'});
const indexcolour:any=await page.locator('#colors').selectOption({index:5});
console.log('selected by index',indexcolour);
await page.locator('#colors').selectOption({label:'Green'});
await page.waitForTimeout(6000);

})