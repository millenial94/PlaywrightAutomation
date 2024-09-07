const{test, expect} = require('@playwright/test')

test('Hanlde BootstrapDropdown', async({page})=>{

    await page.goto('https://jquery-az.com/boots/demo.php?ex=63.0_2')

    await page.locator('.multiselect').click();

    //Approach 1 for assertion to check number of options in dropdown
    // const options = await page.locator('ul>li label input')
    // await expect(options).toHaveCount(11)

    // Approach 2 for assertion to check number of options in dropdown
    // const options = await page.$$('ul>li label input')
    // await expect(options.length).toBe(11)

    // Select multiple options from dropdown
    /*const options = await page.$$('ul>li label')
    for(let option of options)
    {
        const value = await option.textContent();
        // console.log('Value is:',value)
        if(value.includes('Angular') || value.includes('Java'))
        {
            await option.click()
        }
    }*/

    // Deselect options that are already selected
    const options = await page.$$('ul>li label')
    for(let option of options)
    {
        const value = await option.textContent();
        // console.log('Value is:',value)
        if(value.includes('HTML') || value.includes('CSS'))
        {
            await option.click()
        }
    }

    await page.waitForTimeout(5000)

})