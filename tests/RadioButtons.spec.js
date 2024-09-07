const {test, expect} = require('@playwright/test')

test('handle radio buttons', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Radio Button - Male
    //Different Approaches to locate element and check the btn
    await page.locator("//input[@id='male']").check();
    // await page.check("//input[@id='male']");

    //Assertions
    await expect(await page.locator("//input[@id='male']")).toBeChecked();
    await expect(await page.locator("//input[@id='male']").isChecked).toBeTruthy();

    //Radio Button - Female    
    //Negative Assertions
    await expect(await page.locator("//input[@id='female']").isChecked()).toBeFalsy();

    await page.waitForTimeout(5000); //pausing code

})