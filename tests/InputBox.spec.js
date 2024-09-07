const {test, expect} = require('@playwright/test')

test('handle input box', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //InputBox - Name
    //Different type of assertions we can use on an Input Box
    await expect(page.locator("//input[@id='name']")).toBeVisible();
    await expect(page.locator("//input[@id='name']")).toBeEmpty();
    await expect(page.locator("//input[@id='name']")).toBeEditable();
    await expect(page.locator("//input[@id='name']")).toBeEnabled();

    //Different Approaches to locate element and give input
    await page.locator("//input[@id='name']").fill("John");
    // await page.fill("//input[@id='name']", "John")

    await page.waitForTimeout(5000); //pausing code

})