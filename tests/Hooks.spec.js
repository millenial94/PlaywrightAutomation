const{test, expect}=require('@playwright/test')

test.only('Home Page Test', async({page})=>{
    
    await page.goto('https://www.demoblaze.com/index.html')
    
    //Login
    await page.locator('#login2').click() //Click Login
    await page.locator('#loginusername').fill('kunalk') //username
    await page.locator('#loginpassword').fill('test@123')   //password
    await page.locator("//button[normalize-space()='Log in']").click()    //Click Login


    //Home Page
    await page.waitForSelector('.hrefch')
    const products=await page.$$('.hrefch')
    expect(products).toHaveLength(9)

    //Logout
    await page.click("#logout2")    //Click Logout
})

test('Add Product to cart test', async({page})=>{
    
    await page.goto('https://www.demoblaze.com/index.html')
    
    //Login
    await page.locator('#login2').click() //Click Login
    await page.locator('#loginusername').fill('kunalk') //username
    await page.locator('#loginpassword').fill('test@123')   //password
    await page.locator("//button[normalize-space()='Log in']").click()    //Click Login

    //Add product to cart
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
    await page.locator("//a[normalize-space()='Add to cart']").click()

    page.on('dialog', async dialog=>{
        expect(dialog.message()).toContain('Product added')
        await dialog.accept()
    })

    //Logout
    await page.click("#logout2")    //Click Logout
})