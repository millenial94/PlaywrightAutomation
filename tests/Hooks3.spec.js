const{test, expect}=require('@playwright/test')

let page;

test.beforeAll(async ({ browser })=>{
    page=await browser.newPage();
    await page.goto('https://www.demoblaze.com/index.html')  
    //Login
    await page.locator('#login2').click() //Click Login
    await page.locator('#loginusername').fill('kunalk') //username
    await page.locator('#loginpassword').fill('test@123')   //password
    await page.locator("//button[normalize-space()='Log in']").click()    //Click Login
});

test.afterAll(async ()=>{
    await page.click("#logout2")    //Click Logout
})

test('Home Page Test', async()=>{
    await page.waitForSelector('.hrefch')
    const products=await page.$$('.hrefch')
    expect(products).toHaveLength(9)
})

test('Add Product to cart test', async()=>{
    //Add product to cart
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
    await page.locator("//a[normalize-space()='Add to cart']").click()
    page.on('dialog', async dialog=>{
        expect(dialog.message()).toContain('Product added')
        await dialog.accept()
    })
})