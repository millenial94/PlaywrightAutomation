const{test, expect} = require('@playwright/test')

test('Handle Hidden Dropdown', async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.locator("[name='username']").fill('Admin')
    await page.locator("[name='password']").fill(('admin123'))
    await page.locator("[type='submit']").click()

    await page.locator("//span[normalize-space()='PIM']").click()

    await page.locator("//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[7]/div[1]/div[2]/div[1]/div[1]/div[2]").click();
    //Waiting for Options
    await page.waitForTimeout(3000)

    const options = await page.$$("//div[@role='option']/span")
    for(let option of options)
    {
        const subUnit = await option.textContent();
        // console.log(subUnit)
        if(subUnit.includes('Finance'))
        {
            await option.click()
            break;
        }
    }

    await page.waitForTimeout(2000)

})