const{test, expect}=require('@playwright/test')

test('Handle Mouse Hover', async({page})=>{

    await page.goto('https://demo.opencart.com/')

    const desktops=page.locator("//a[normalize-space()='Desktops']")
    const macbook=await page.locator("//a[normalize-space()='Mac (1)']")

    //Mouse Hover
    desktops.hover();
    macbook.hover()

    await page.waitForTimeout(3000)
})