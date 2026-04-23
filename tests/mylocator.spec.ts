import{test,expect,Locator} from "@playwright/test"

test('locatorTextboxaction', async ({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    const heading:any =page.getByRole('link', {name:'GUI Elements'});
    expect(heading).toBeVisible();
    const nametextbox:Locator= page.locator("#name");
    expect(nametextbox).toBeEnabled();
    //expect(nametextbox).toBe('15');

    //verified the maxlength in textbox
    const maxLength: string | null = await nametextbox.getAttribute("maxLength"); // Returns value of maxlength attribute of the element
    expect(maxLength).toBe('15');
    await nametextbox.fill('prathamesh');

    //verified the entered value 
    const enteredvalue:string= await nametextbox.inputValue();
    console.log("entered value is ",enteredvalue);
    expect(enteredvalue).toBe("prathamesh");
})

test('Radiobuttonaction', async({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/");
     const Radiobutton:any =page.locator('#male');
     expect(Radiobutton).toBeVisible();
     expect(Radiobutton).not.toBeChecked();
     await Radiobutton.check();
     await expect(Radiobutton).toBeChecked();
})

test('Checkboxaction', async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    const Tuesdaycheckbox=page.getByLabel("tuesday");
    expect(Tuesdaycheckbox).toBeVisible();
    expect(Tuesdaycheckbox).not.toBeChecked();
    await Tuesdaycheckbox.check();
    expect(Tuesdaycheckbox).toBeChecked();

    //select all checkboxes

})

test('select first three checkboxes', async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const days:string[]=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const checkboxes:Locator[]= days.map(index =>page.getByLabel(index));
    //await checkboxes.check();
    for (const checkbox of checkboxes.slice(0,3))
    {
        await checkbox.check();
        await page.screenshot({path:'checkbox.png', fullPage: false});
        await expect(checkbox).toBeChecked();
    }
})

test('selectallCheckboxaction', async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    const days:string[]=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const checkboxes:Locator[]= days.map(index =>page.getByLabel(index));
    //await checkboxes.check();
    

    for (const checkbox of checkboxes)
{
    await checkbox.check();
   // expect(checkboxes).toBe(7);
    await expect(checkbox).toBeChecked();
    

}
// do not check last three checkboxes
   for (const checkbox of checkboxes.slice(-3))
{
    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();
 

}


// select uncheck checkbox and uncselect checked checkboxes [Toggle] 
for (const checkbox of checkboxes)

if (await checkbox.isChecked())
{
  await checkbox.uncheck();
  expect(checkbox).not.toBeChecked();
}
else{
   await checkbox.check();
  expect(checkbox).toBeChecked(); 
}
 

 // check randomly checkbox 1,4,5

 const indexes:number[]=[1,2,3]
 for (const i of indexes)
 {
   await checkboxes[i].check();
   await expect (checkboxes[i]).toBeChecked();
 }
    await page.waitForTimeout(4000);

    // check as per label

 const weekname='Sunday'
 
 for (const label of days)
 {
    if(label===weekname)
    {
        await page.getByLabel(label).check();

    }
 }
 await page.waitForTimeout(3000)
})