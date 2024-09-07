import {test, expect} from '@playwright/test'

test.only('Record Test', async({page})=>{
    
    await page.goto('https://www.demoblaze.com/index.html')
    
    //Login
    await page.locator('#login2').click() //Click Login
    await page.locator('#loginusername').fill('kunalk') //username
    await page.locator('#loginpassword').fill('test@123')   //password
    await page.locator("//button[normalize-space()='Log in']").click()    //Click Login

    //Logout
    await expect(page.locator("#logout2")).toBeVisible()    //Click Logout
})