const{test, expect} = require('@playwright/test')

test('Handle Multi Select Dropdown', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Select Multiple options from multi select dropdowns
    // await page.selectOption('#colors', ['Blue','Red','Yellow'])

    //Assertions
    //1. Check number of options in dropdown
    // const options = await page.locator('#colors option')
    // await expect(options).toHaveCount(5);
    
    //2. Check number of options in dropdown using JS Array
    // const options = await page.$$('#colors option')
    // console.log("Number of options:",options.length);
    // await expect(options.length).toBe(5);

    //3. Check presence of value in the dropdown
    const content = await page.locator('#colors').textContent()
    // await expect(content.includes('Blue')).toBeTruthy();
    await expect(content.includes('Black')).toBeFalsy();

    await page.waitForTimeout(5000)

})