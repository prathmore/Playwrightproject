import {test,expect,Locator} from '@playwright/test'

test('Statictable', async ({page}) =>{

await page.goto('https://testautomationpractice.blogspot.com/');
const table:Locator=page.locator('table[name="BookTable"]>tbody');
await expect(table).toBeVisible();
const tablerow:Locator=table.locator('tr');
//await expect(tablerow).toBeVisible();
await expect(tablerow).toHaveCount(7);
const header:Locator=tablerow.locator('th');
await expect(header).toHaveCount(4);
const thirdrowdata:Locator=tablerow.nth(4).locator('td');
const fifthrowtext:string[]=await thirdrowdata.allInnerTexts();
console.log(fifthrowtext);
const allrows:Locator[]= await tablerow.all()
for (let allrow of allrows.slice(1) )
{
 console.log('all row data',await allrow.allInnerTexts());
 
}
})

test('mukeshbooks', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
const table:Locator=page.locator('table[name="BookTable"]>tbody');
await expect(table).toBeVisible();
const tablerow:Locator=table.locator('tr');
    console.log('book wriiten by mukesh are as follow')
    const allrows:Locator[]= await tablerow.all()

let mukeshbooks:string[]=[];
for (let allrow of allrows.slice(1) )
{
    
const col=await allrow.locator('td').allInnerTexts();
const author=col[1];
const bookname=col[0]

if (author ==='Mukesh')
{
    console.log(`${author} \t ${bookname}`);
    mukeshbooks.push(bookname);
}
}
expect(mukeshbooks).toHaveLength(2);

})

test.only('totalbookprice', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
const table:Locator=page.locator('table[name="BookTable"]>tbody');
await expect(table).toBeVisible();
const tablerow:Locator=table.locator('tr');
    console.log('book wriiten by mukesh are as follow')
    const allrows:Locator[]= await tablerow.all()

let bookprice=0;
for (let allrow of allrows.slice(1) )
{
    
const col=await allrow.locator('td').allInnerTexts();
const price=col[3];
bookprice=bookprice+parseInt(price);


}
console.log('total price',bookprice)
expect(bookprice).toBe(7100);

})





