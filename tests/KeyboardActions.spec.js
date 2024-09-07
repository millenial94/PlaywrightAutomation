const{test, expect}=require('@playwright/test')

test('Keyboard Actions', async({page})=>{
    await page.goto('https://gotranscript.com/text-compare')

    //Action 1: Give input
    await page.locator('[name="text1"]').fill('Welcome to Automation');

    //Action 2: Press Ctrl+A to select the whole text
    await page.keyboard.press('Control+A')

    //Action 3: Press 'Ctrl+C' to copy the selected text
    await page.keyboard.press('Control+C')

    //Action 4: Press Tab key
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')

    //Action 5: Press 'Ctrl+V' to paste the text
    await page.keyboard.press('Control+V')

    await page.waitForTimeout(3000)

})