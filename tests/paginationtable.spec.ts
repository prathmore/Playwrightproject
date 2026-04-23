import { test, expect, Locator } from '@playwright/test';

test('Fetch rows with age < 35', async ({ page }) => {
  await page.goto('https://datatables.net/examples/basic_init/zero_configuration.html');

  const rowLocator: Locator = page.locator('#example > tbody > tr');
  const rowCount = await rowLocator.count();
  const matchingRows: string[][] = [];

  for (let i = 0; i < rowCount; i++) {
    const row = rowLocator.nth(i);

    // Target the Age cell directly (4th column, zero-based index 3)
    const ageText = (await row.locator('td').nth(3).innerText()).trim();
    const age = Number(ageText);

    // Debug logs to help diagnose mismatches
    console.log(`Row ${i} ageText: "${ageText}", parsed age:`, age);

    if (!Number.isNaN(age) && age < 35) {
      // collect full row cells if needed
      const cells = await row.locator('td').allTextContents();
      matchingRows.push(cells);
      console.log('Row with age < 35:', cells);
    }
  }

  // Optional assertion
  expect(matchingRows.length).toBeGreaterThan(0);
});

test('pagenext', async({page}) =>{

  await page.goto('https://datatables.net/examples/basic_init/zero_configuration.html');
  let nextpage=true;

  while(nextpage)
  {
    const rows:Locator[]=await page.locator('#example>tbody>tr').all();
    
    for(let row of rows)
    {
      console.log(await row.innerText());
    }
    await page.waitForTimeout(8000);
const enablenextbutton=page.locator('button[class="dt-paging-button next"]');
    const disablenextbutton=await enablenextbutton.getAttribute('class');//page.locator('button[class="dt-paging-button disabled next"]');
    if(disablenextbutton?.includes('disable')) 
    {
      nextpage=false;
    }
    else{
      await enablenextbutton.click();
    }

}})
test.only('specific row search',async({page})=>{
await page.goto('https://datatables.net/examples/basic_init/zero_configuration.html');
const searchtextbox:any=await page.locator('#dt-search-0').fill('Zorita Serrano');
 /*const enteredvalue= await searchtextbox.inputValue();
    console.log("entered value is ",enteredvalue);
    expect(enteredvalue).toBe("Zorita Serrano");*/
     const rows:Locator[]=await page.locator('#example>tbody>tr').all();

if(rows.length>=1)
  { 
    for (let row of rows)
{
  console.log(await row.innerText());
}
  }
  else 
  {
    console.log('no match found');
  }



})
test('filter and assertionon filet', async ({page}) => {

  await page.goto('https://datatables.net/examples/basic_init/zero_configuration.html');
  const filterdropdown= await page.locator('#dt-length-0').selectOption('50');
  await page.waitForTimeout(3000);
  const rows:Locator[]=await page.locator('#example>tbody>tr').all();
  for (let row of rows)
{
  console.log(await row.innerText());
   expect(rows.length).toBe(50)
}
  })
