const{test, expect} = require('@playwright/test')

test('Handle dropdowns', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Multiple ways to select the dropdown
    // await page.locator('#country').selectOption({label:'India'});   //Using label:visible text
    // await page.locator('#country').selectOption('India');   //Visible text
    // await page.locator('#country').selectOption({value:'uk'});   //Using value attribute
    // await page.locator('#country').selectOption({index: 1});    //Using Index
    // await page.selectOption("#country", 'India');   //Calling selectOption from the page fixture instead of a locator and directly passing the text of the element
    //Select option from dropdown using loop
    const options = await page.$$('#country option');
    for(const option of options)
    {
        let value=await option.textContent()
        if(value.includes('France'))
        {
            await page.selectOption('#country', value);
            break;
        }
    }

    //Assertions
    //1. Check total number of options in dropdown - approach 1
    // const options = await page.locator('#country option')
    // await expect(options).toHaveCount(10);

    //2. Check number of options in dropdown - approach 2
    // const options = await page.$$('#country option')
    // console.log("Number of options:", options.length)
    // await expect(options.length).toBe(10);

    //3. Check presence of a specific value in the dropdown - Approach 1
    // const content = await page.locator('#country').textContent()
    // await expect(content.includes('India')).toBeTruthy();

    //4. Check presence of value in the drodpown using loop statement - Approach 2
    /*const options = await page.$$('#country option');
    let status=false;

    for(const option of options)
    {
        // console.log(await option.textContent())
        let value=await option.textContent()
        if(value.includes('France'))
        {
            status=true;
            break;
        }
    }
    expect(status).toBeTruthy();*/

    await page.waitForTimeout(5000)

})