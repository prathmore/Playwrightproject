import{test,expect,chromium} from '@playwright/test'
test('alert', async({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/');
  page.on('dialog',(dialog) =>{

    console.log('dialog type is', dialog.type());
    expect(dialog.type()).toContain('alert');
    console.log('dialog type is', dialog.message());
    expect(dialog.message()).toContain('I am an alert box!');
    dialog.accept();
  });


    const simplealertbutton= await page.locator('#alertBtn').click();

})

test('confirmation alert', async({page}) => {
 
    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog',(dialog) =>{

        console.log('alert type is :', dialog.type());
        expect(dialog.type()).toContain('confirm');
        console.log('alert message is:',dialog.message());
        expect(dialog.message()).toContain('Press a button!')
        dialog.dismiss();
});

   await page.locator('#confirmBtn').click(); 

})

test('prompt alert', async({page}) => {
 
    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog',(dialog) =>{

        console.log('alert type is :', dialog.type());
        expect(dialog.type()).toContain('prompt');
        console.log('alert message is:',dialog.message());
        expect(dialog.message()).toContain('Please enter your name:')
         console.log('default message is:',dialog.defaultValue());
        expect(dialog.defaultValue()).toContain('Harry Potter');
        dialog.accept('prath');
});

   await page.locator('#promptBtn').click(); 
   const visibletext=await page.locator('#demo').innerText();
   console.log("visible text is:",visibletext);
   console.log("visibletext length is:",visibletext.length);
   expect(visibletext).toContain('Hello prath! How are you today?');
   await page.waitForTimeout(2000);

})