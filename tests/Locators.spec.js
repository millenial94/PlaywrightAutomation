import {test,expect} from '@playwright/test'

test('Locators', async ({page})=>{

    await page.goto('https://www.demoblaze.com/index.html')

    //click on login button id locator
    //await page.locator('id=login2').click()
    await page.click('id=login2');

    //provide username - css locator
    //await page.locator('#loginusername').fill("kunalk")
    await page.fill('#loginusername', 'kunalk')

    //provide password - css locator
    await page.fill("input[id='loginpassword']", 'test@123')

    //Click on Login btn - xpath locator
    await page.click("//button[normalize-space()='Log in']")

    //Logout link presence - xpath locator
    const logoutLink = await page.locator("//a[normalize-space()='Log out']")

    await expect(logoutLink).toBeVisible();

    await page.close()

})