const {test, expect}=require('@playwright/test')

test('Drag and Drop', async({page})=>{
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')

    const srcElement=await page.locator('#box6')    //Rome
    const targetElement=await page.locator('#box106')   //Italy

    //Approach 1
    /*await srcElement.hover()
    await page.mouse.down()

    await targetElement.hover()
    await page.mouse.up()*/

    //Approach2
    await srcElement.dragTo(targetElement)

    await page.waitForTimeout(3000)
})