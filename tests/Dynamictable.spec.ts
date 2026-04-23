import{test,expect,Locator} from 'playwright/test'
test('dynamictable', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    //const titleoftable=page.getByRole('heading', { name: 'Dynamic Web Table' });
    const titleoftable=page.getByText('Dynamic Web Table');
    await expect(titleoftable).toBeVisible();
    const table:Locator= page.locator('#taskTable tbody');
    const rows:Locator[]=await table.locator('tr').all();
    

    for (const row of rows)
    {
        const processname:string= await row.locator('td').nth(0).innerText();
        console.log(processname);
        if(processname==='Chrome')
        {
            const chromecpu=await row.locator('td',{hasText : '%'}).innerText();
            const yellowchrometext=await page.locator('strong.chrome-cpu').innerText();
            console.log(`${chromecpu} ${yellowchrometext}`)
             expect (chromecpu).toBe(yellowchrometext);
            break;
        }

    }
      await page.waitForTimeout(3000);
})