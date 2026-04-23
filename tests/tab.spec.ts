import{test,expect,chromium} from '@playwright/test'

test('tab',async({})=>{
    
    const browser= await chromium.launch();
    const context= await browser.newContext();
    const parentpage=await context.newPage();
    await parentpage.goto('https://testautomationpractice.blogspot.com/');

    const[childpage]= await Promise.all([context.waitForEvent('page'),parentpage.getByRole('button', {name :"New Tab"}).click()])
    // approach if we have multiple tab
    const pages= context.pages();
    console.log('total pages are:',pages.length);
    console.log("parent page",await pages[0].title());
    console.log("child page",await pages[1].title());

    //aaproach if we have only two tab
    console.log( parentpage.url());
    console.log( childpage.url());
})