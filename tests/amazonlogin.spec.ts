import{test,expect,Locator} from 'playwright/test'
test('amazonlogin', async ({page}) => {
    await page.goto('https://www.amazon.com/');
    const searchbox:Locator= page.getByPlaceholder('Search Amazon')
    await searchbox.fill('laptop');
    await page.waitForTimeout(5000);
 const laptopBackpack:Locator = page.getByText('laptop backpack', { exact: true });
    await laptopBackpack.click();
    const mylaptop= page.getByText('Amazon Basics Travel Laptop Backpack with Multiple Pockets and Compartments for 17 in / 43.1 cm Laptop, Water Resistant, Spacious with Padded Shoulder Straps, Black', { exact: true });
    await mylaptop.first().click();
     await page.waitForTimeout(2000);
    await page.screenshot({path:'amazonlaptop.png'});

})