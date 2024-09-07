const{test, expect} = require ('@playwright/test')

test.skip('Alerts with OK', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Enabling Dialog Window Handler
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('alert')    //Type of alert is 'Alert' hence we write 'alert'
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept();  //Close by clicking Ok button
    })

    await page.click("//button[normalize-space()='Alert']");
    await page.waitForTimeout(5000);
})

test.skip('Confirmation Box: Alerts with OK and Cancel', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Enabling Dialog Window Handler
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('confirm')  //Type of alert is 'Confirm' hence we write 'confirm'
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept();    //Close by clicking Ok button
        // await dialog.dismiss();     //Close by clicking Cancel button
    })

    await page.click("//button[normalize-space()='Confirm Box']");
    await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!');

    await page.waitForTimeout(5000);

})

test('Prompt Dialog Box', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Enabling Dialog Window Handler
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('prompt')  //Type of alert is 'Prompt' hence we write 'prompt'
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter')   //This will return the default value that is in Input Box

        await dialog.accept('John');    //To give a value in the Input box, pass the value in accept function
        // await dialog.dismiss();     //Close by clicking Cancel button
    })

    await page.click("//button[normalize-space()='Prompt']");
    await expect(page.locator("//p[@id='demo']")).toHaveText('Hello John! How are you today?');

    await page.waitForTimeout(5000);
})