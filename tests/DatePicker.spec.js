const{test, ecpect}=require('@playwright/test')

test('Handle Date Picker', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.fill('#datepicker', '03/15/2024')

    //Date Picker
    const year="2024"
    const month='September'
    const date='23'

    await page.click('#datepicker') //Opens calendar

    while(true)
    {
        const currentYear=await page.locator('.ui-datepicker-year').textContent();
        const currentMonth=await page.locator('.ui-datepicker-month').textContent();

        if(currentYear == year && currentMonth == month)
        {
            break;
        }
        await page.locator('[title="Next"]').click();   //Next
        // await page.locator('[title="Prev"]').click();   //Previous        
    }

    /*const dates=await page.$$('//a[@class="ui-state-default"]')
    for(const dt of dates)
    {
        if(await dt.textContent()==date)
        {
            await dt.click()
            break;
        }
    }*/

    //Specific date
    // await page.click("//a[@class='ui-state-default'][text()='10']")
    await page.click(`//a[@class='ui-state-default'][text()='${date}']`)

    await page.waitForTimeout(3000);
});