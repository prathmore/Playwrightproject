import{test,expect,Locator} from '@playwright/test'

test('duplicate dropdown', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    const alldropdownoption:Locator=  page.locator('#colors>option');
    await expect(alldropdownoption).toHaveCount(7);
   
    const trimdropdown:string[]=(await alldropdownoption.allTextContents()).map(text => text.trim());
    
    const myset= new Set<string>(); // no duplicate values in set 
    const duplicate:string[]=[]; // duplicates value are present in array 

    for(const text of trimdropdown)
    {
        if(myset.has(text))
        {
            duplicate.push(text);
        }
        else 
        {
            myset.add(text);
        }
        
    }

console.log("duplicate values are ",duplicate);
expect(duplicate.length).toBe(2);
if(duplicate.length>0)
{
    console.log('duplicate found',duplicate);
}
else{
    console.log('no duplicate');
}



})