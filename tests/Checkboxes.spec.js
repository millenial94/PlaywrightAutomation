const {test, expect} = require('@playwright/test')

test('handle checkboxes', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Single and specific checkbox
    //Different Approaches to locate element and check the box
    await page.locator("//input[@id='monday' and @type='checkbox']").check();
    // await page.check("//input[@id='monday' and @type='checkbox']");

    //Assertion
    await expect(await page.locator("//input[@id='monday' and @type='checkbox']")).toBeChecked();
    await expect(await page.locator("//input[@id='monday' and @type='checkbox']").isChecked()).toBeTruthy();

    //Negative Assertion for an unchecked checkbox - sunday
    await expect(await page.locator("//input[@id='sunday' and @type='checkbox']").isChecked()).toBeFalsy();

    //Multiple checkboxes
    const checkboxLocators = [
        "//input[@id='sunday' and @type='checkbox']",
        "//input[@id='monday' and @type='checkbox']",
        "//input[@id='saturday' and @type='checkbox']"
    ];

    for(const locator of checkboxLocators)  //Select Multiple checkboxes
    {

        await page.locator(locator).check();

    }
    for(const locator of checkboxLocators) //Unselect multiple checkboxes which are already selected
    {

        if(await page.locator(locator).isChecked)
        {
            await page.locator(locator).uncheck();
        }

    }

    await page.waitForTimeout(5000);

})