import {test, expect} from '@playwright/test'

test('Page screenshot', async ({page})=>{
    await page.goto('https://demo.opencart.com/')
    await page.screenshot({path: 'tests/screenshots/'+Date.now()+'HomePage.png'})
})

test('Full Page screenshot', async ({page})=>{
    await page.goto('https://demo.opencart.com/')
    await page.screenshot({path: 'tests/screenshots/'+Date.now()+'FullPage.png',fullPage:true})
})

test.only('Element screenshot', async ({page})=>{
    await page.goto('https://demo.opencart.com/')
    await page.locator("(//div[@class='product-thumb'])[1]").screenshot({path: 'tests/screenshots/'+Date.now()+'MacBook.png'})
})