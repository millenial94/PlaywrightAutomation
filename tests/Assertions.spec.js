const {test, expect}=require('@playwright/test');
const exp = require('constants');

test('AssertionsTest',async ({page})=>{
    //Open App URL
    await page.goto('https://demo.nopcommerce.com/register')

    //1) await expect(page).toHaveURL()	Page has a URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    //2) await expect(page).toHaveTitle()	Page has a title
    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    //3) await expect(locator).toBeVisible()	Element is visible
    const logoElement = await page.locator('.header-logo')
    await expect(logoElement).toBeVisible();

    //4) await expect(locator).toBeEnabled()	Element is enabled
    const searchStoreBox = await page.locator('#small-searchterms')
    await expect(searchStoreBox).toBeEnabled();

    //5) await expect(locator).toBeChecked()	Checkbox is checked
    //radio button
    const maleRadioBtn = await page.locator('#gender-male')
    await maleRadioBtn.click()
    await expect(maleRadioBtn).toBeChecked

    //checkbox
    const newsletterCheckbox = await page.locator('#Newsletter')
    await expect(newsletterCheckbox).toBeChecked();

    //6) await expect(locator).toHaveAttribute()	Element has a DOM attribute
    const regBtn=await page.locator('#register-button')
    await expect(regBtn).toHaveAttribute('type','submit')

    //7) await expect(locator).toHaveText()	Element matches text
    await expect(await page.locator('.page-title h1')).toHaveText('Register') //full text value

    //8) await expect(locator).toContainText()	Element contains text
    await expect(await page.locator('.page-title h1')).toContainText('Reg') //partial text value

    //9) await expect(locator).toHaveValues()	Select has options selected
    const emailInput = await page.locator('#Email')
    await emailInput.fill('test@demo.com')
    await expect(emailInput).toHaveValue('test@demo.com')

    //10) await expect(locator).toHaveCount()	List has exact number of children
    const options = await page.locator("select[name='DateOfBirthMonth'] option")
    await expect(options).toHaveCount(13);
})