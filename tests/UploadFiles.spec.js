const{test, expect}=require('@playwright/test')
const exp = require('constants')

test('Single file', async({page})=>{
    await page.goto('https://formstone.it/components/upload/demo/')
    
    await page.locator("(//input[@class='fs-upload-input'])[1]").setInputFiles('tests/UploadFiles/SampleFile.pdf')

    await page.waitForTimeout(3000)
})

test.only('Multiple files', async({page})=>{
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')

    await page.locator('#filesToUpload').setInputFiles(
        [
            'tests/UploadFiles/SampleFile.pdf',
            'tests/UploadFiles/SampleFile2.pdf'
        ]
    )
    await page.waitForTimeout(3000)

    //Assertion to check after file upload
    expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('SampleFile.pdf')
    expect(await page.locator('#fileList li:nth-child(2)')).toHaveText('SampleFile2.pdf')

    await page.waitForTimeout(3000)

    //Removing Files
    await page.locator('#filesToUpload').setInputFiles([])

    //Assertion after removing files
    expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected')
    await page.waitForTimeout(3000)

})