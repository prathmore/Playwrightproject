import{test,expect,Locator} from '@playwright/test'
test ('innertextandtextcontent',async ({page}) => {

    await page.goto("https://demowebshop.tricentis.com/");
    const producttitle :Locator= page.locator('.product-title');
     const count:any= await producttitle.count();
    console.log("total items are:",count)
    await page.waitForTimeout(3000);
    for(let i=0;i<count;i++)
    {
        const titletextcontent=await producttitle.nth(i).textContent();
        const trimtextcontent=titletextcontent?.trim();
        //const titletext=await producttitle.nth(i).innerText();
        
        console.log('textcontent title are:',trimtextcontent)
        console.log('all title are:',trimtextcontent) 
        if (trimtextcontent==='Simple Computer')
        {
            await producttitle.nth(i).click();
            console.log('clicked successfully');
            break;
        }
        else{
            console.log('text not match checking further');
        }
        
    }
})

test('alltextcontentandallinnertext', async({page})=> {

    await page.goto('https://demowebshop.tricentis.com/');
     const producttitle :Locator= page.locator('.product-title');
     //const textproduct:string[]= await producttitle.allInnerTexts();
     //console.log('alltextproduct are :',textproduct);
     const textproduct:string[]= (await producttitle.allTextContents()).map(text=>text.trim());
     console.log('alltextproduct are :',textproduct);
     for( let allproduct of textproduct )
     {
        if(allproduct==='Build your own computer')
        {
            console.log('product found');

        }
        
     }



})

test.only('locatorarray', async({page}) =>{

    await page.goto('https://demowebshop.tricentis.com/');
    const producttitle :Locator= page.locator('.product-title');
    const alllocator:Locator[]=await producttitle.all();
    for (let productnames of alllocator)
    {
        console.log('all product names:',await productnames.innerText());

    }

})