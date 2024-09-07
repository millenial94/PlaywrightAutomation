const {test, expect} = require('@playwright/test')

test('Handle Frames', async ({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')
    
    //Total Frames
    const allFrames = await page.frames();
    console.log("Number of Frames:",allFrames.length)

    //Approach 1: Using Name or URL of the Frame
    // const frameName=await page.frame('name') //Use this method if Name is present
    // const frame1=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"})
    // await frame1.fill("//input[@name='mytext1']", "Hello"); //Interact with the Element

    //Approach 2: Using Frame Locator
    const frameElement=await page.frameLocator("frame[src='frame_1.html']");
    const inputBox=frameElement.locator("[name='mytext1']")
    inputBox.fill("Hello")

    await page.waitForTimeout(5000)
})