import {test,expect,Locator} from '@playwright/test'
test('uploadsinglefile', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('#singleFileInput').setInputFiles('upload/Prathamesh__More_CV.docx')
    await page.locator('button:has-text("Upload Single File")').click();
const msg = await page.locator('#singleFileStatus').innerText();
    expect(msg).toContain('Prathamesh__More_CV.docx');

    console.log('Single file upload is successful...');

    await page.waitForTimeout(3000);

})

test('uploadmultiplefile', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('#multipleFilesInput').setInputFiles(['upload/Prathamesh__More_CV.docx','upload/Prathamesh__More_CV - Copy.docx'])
    await page.locator('button:has-text("Upload Multiple Files")').click();
    const msg = await page.locator('#multipleFilesStatus').innerText();
    expect(msg).toContain('Prathamesh__More_CV.docx');
    expect(msg).toContain('Prathamesh__More_CV - Copy.docx');

    console.log('Single file upload is successful...');

    await page.waitForTimeout(3000);

})