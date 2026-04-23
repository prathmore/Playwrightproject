import{test,expect,Locator} from '@playwright/test'
test('autoscrolling', async({page})=>{

    await page.goto('https://demowebshop.tricentis.com/');
    const footer=await page.locator('.footer-disclaimer').innerText();
    console.log('footer of the page is:', footer)
    //await expect(footer).toBeVisible();

})
test('autoscrollingindropdown', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
     await page.locator('#comboBox').click();
    const lastdropdown= page.locator('#dropdown div:nth-child(100)');
    console.log('lastoptionis', await lastdropdown.innerText());
    await lastdropdown.click();
    //await expect(footer).toBeVisible();

})
test('autoscrollingintable', async({page})=>{

    await page.goto('https://datatables.net/examples/basic_init/scroll_xy.html');
   const name=await page.locator('tbody tr:nth-child(10)  td:nth-child(2)').innerText();
    console.log('name is',name)
    const email=await page.locator('tbody tr:nth-child(10)  td:nth-child(9)').innerText();
    console.log('name is',email)

})
test('Scrolling inside the table', async ({ page }) => {
  await page.goto('https://datatables.net/examples/basic_init/scroll_xy.html');

  const name=await page.locator('tbody tr:nth-child(10) td:nth-child(2)').innerText(); //Automatic scrolling - vertical
  console.log("Last Name from 10th Row & 2nd Column :", name); //Kelly

  const email=await page.locator('tbody tr:nth-child(10) td:nth-child(9)').innerText(); //Automatic scrolling - Horizantal
  console.log("Email from 10th Row & 9th Column :", email); //c.kelly@datatables.net

});