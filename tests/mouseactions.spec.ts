import {test,expect,Locator} from '@playwright/test'
test('mousehover',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/');
const hoverbutton= page.locator('.dropbtn')
await hoverbutton.hover();
const laptophover=page.locator('.dropdown-content a:nth-child(2)')
await laptophover.hover();
await laptophover.click();
await page.waitForTimeout(3000);
})

test('doubleclick',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/');
const doubleclickbutton=  page.locator('button[ondblclick="myFunction1()"]');
await doubleclickbutton.dblclick();
const copiedtxtbox= page.locator('#field2')
await expect(copiedtxtbox).toHaveValue('Hello World!')
await page.waitForTimeout(3000);
})

test('rightclick',async({page})=>{

await page.goto('http://swisnl.github.io/jQuery-contextMenu/demo.html');
const rightclickbutton=  page.locator('.context-menu-one');
await rightclickbutton.click({button : 'right'});
await page.waitForTimeout(3000);
})

test.only('Drag and drop',async ({page})=>{

    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html#google_vignette');

    const rome=page.locator("#box6");
    const italy=page.locator("#box106");

    //Appraoch 1:  mouse hover and drag manually

    await rome.hover();
    await page.mouse.down();
    await italy.hover();
    await page.mouse.up();

    //Appraoch 2:  mouse hover and drag manually

    const washington=page.locator('#box3');
    const usa=page.locator('#box103');

    await washington.dragTo(usa); // this wil perform drag and drop action

    await page.waitForTimeout(5000);

})